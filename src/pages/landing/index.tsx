import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import NumberInput from '../../components/atomic/numberInput';
import Button from '../../components/atomic/button';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toastState } from '../../store/toastState';
import { useNavigate } from 'react-router-dom';
import { moleState, nickNameState } from '../../store/moleState';
import TextInput from '../../components/atomic/textInput';

const Landing = () => {
  const setToast = useSetRecoilState(toastState);
  const [moleInfo, setMoleInfo] = useRecoilState(moleState);

  const [row, setRow] = useState<number | ''>(
    moleInfo.row == 0 ? '' : moleInfo.row,
  );
  const [col, setCol] = useState<number | ''>(
    moleInfo.col === 0 ? '' : moleInfo.col,
  );
  const [mole, setMole] = useState<number | ''>(
    moleInfo.moleCount === 0 ? '' : moleInfo.moleCount,
  );
  const [maxMole, setMaxMole] = useState<number>(0);
  const [validateGameStart, setValidateGameStart] = useState(false);

  const [nickName, setNickName] = useRecoilState(nickNameState);
  const navigate = useNavigate();

  useEffect(() => {
    if (row && col) {
      setMaxMole(Math.floor((Number(row) * Number(col)) / 2));
    }
  }, [row, col]);

  const handleOutOfRange = (outOfRangeValue: number) => {
    setToast({ open: true, message: '2~6 사이의 값만 입력하세요 :) ' });
  };

  const handleMoleOutofRange = () => {
    setToast({
      open: true,
      message: '전체 굴 개수의 절반 미만의 값을 입력하세요 :) ',
    });
  };
  useEffect(() => {
    if (row === 0 || col === 0 || mole === 0 || nickName === '')
      setValidateGameStart(true);
    else setValidateGameStart(false);
  }, [row, col, mole]);

  return (
    <Wrapper>
      <div className={'content'}>
        <div className={'row-content'}>
          Row :{' '}
          <NumberInput
            value={row}
            min={2}
            max={6}
            onChange={(value) => setRow(Number(value))}
            onOutOfRange={handleOutOfRange}
          />
        </div>
        <div className={'row-content'}>
          Col :{' '}
          <NumberInput
            value={col}
            min={2}
            max={6}
            onChange={(value) => setCol(Number(value))}
            onOutOfRange={handleOutOfRange}
          />
        </div>
        <div className={'row-content'}>
          Mole :{' '}
          <NumberInput
            value={mole}
            min={1}
            max={maxMole}
            v
            onChange={(value) => setMole(Number(value))}
            onOutOfRange={handleMoleOutofRange}
          />
        </div>
        <div className={'row-content'}>
          Nickname :{' '}
          <TextInput
            value={nickName}
            maxLength={20}
            onChange={(e) => setNickName(e.target.value)}
          />
        </div>
        <div className={'row-button'}>
          <Button
            label={'Ranking'}
            size={'large'}
            onClick={() => navigate('/ranking')}
          />
          <Button
            label={'Start'}
            size={'large'}
            disabled={validateGameStart}
            onClick={() => {
              setMoleInfo({
                row: Number(row),
                col: Number(col),
                moleCount: Number(mole),
              });
              navigate('/game');
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
