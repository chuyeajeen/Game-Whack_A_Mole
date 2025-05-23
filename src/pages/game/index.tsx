import React, { useEffect, useRef, useState } from 'react';
import { ScoreWrapper, Wrapper } from './styles';
import WhackAMolePopup from '../../components/molecule/whackAMolePopup';
import { useRecoilValue } from 'recoil';
import {
  moleSpeedUpState,
  moleState,
  nickNameState,
} from '../../store/moleState';
import Timer from '../../components/atomic/timer';
import Modal from '../../components/atomic/modal';
import Button from '../../components/atomic/button';
import { useNavigate } from 'react-router-dom';
import { updateRanking } from '../../utils/cookieUtils';
import { ADD_MOLE_TIME, TIME_INTERVAL } from '../../constants/game';

/**
 * Game score 모달 props
 * @param score : 점수
 * @param setModalOpen : 모달 상태없데이트 콜백함수
 * */
interface GameScoreProps {
  score: number;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameScore = ({ score, setModalOpen }: GameScoreProps) => {
  const navigate = useNavigate();

  return (
    <ScoreWrapper>
      <div className={'score-title'}>SCORE</div>
      <div className={'score'}>{score}점</div>
      <div className={'button'}>
        <Button
          label={'Ranking'}
          size={'small'}
          onClick={() => navigate('/ranking')}
        />
        <Button label={'Home'} size={'small'} onClick={() => navigate('/')} />
        <Button
          label={'Retry'}
          size={'small'}
          onClick={() => setModalOpen(false)}
        />
      </div>
    </ScoreWrapper>
  );
};

/**
 * pause 모달 props
 * @param : 재시작 상태 업데이트 콜백함
 * */
interface PauseProps {
  setRetry: React.Dispatch<React.SetStateAction<boolean>>;
}
const Pause = ({ setRetry }: PauseProps) => {
  return (
    <ScoreWrapper>
      <div className={'score-title'}>PAUSE</div>'
      <div className={'button'}>
        <Button label={'Restart'} onClick={() => setRetry(false)} />
      </div>
    </ScoreWrapper>
  );
};

const Game = () => {
  const mole = useRecoilValue(moleState);
  const navigate = useNavigate();

  const moleCount = useRef(mole.moleCount);
  const [visibleMoles, setVisibleMoles] = useState<boolean[]>(
    new Array(mole.row * mole.col).fill(false),
  );
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const nickName = useRecoilValue(nickNameState);
  const moleSpeedUp = useRecoilValue(moleSpeedUpState);
  const [speedUpFlag, setSpeedUpFlag] = useState(moleSpeedUp ? 2 : 1);

  useEffect(() => {
    setSpeedUpFlag(moleSpeedUp ? 2 : 1);
  }, [moleSpeedUp]);

  useEffect(() => {
    if (!isPause) setIsModalOpen(false);
  }, [isPause]);

  useEffect(() => {
    if (!isModalOpen) {
      setScore(0);
      setTimerKey((prevState) => prevState + 1);
    }
  }, [isModalOpen]);

  useEffect(() => {
    // 활성화된 두더지 인덱스 저장
    const activeMolesSet = new Set<number>();
    // 최근에 내려간 두더지를 다시 선택하지 않기 위해 저장
    const cooldownMolesSet = new Set<number>();

    const updateMolesSequentially = () => {
      if (isModalOpen) return;

      setVisibleMoles((prevMoles) => {
        let newVisibleMoles = [...prevMoles];
        let activeMoleCount = newVisibleMoles.filter((value) => value).length;

        if (activeMoleCount >= moleCount.current) return prevMoles; // 최대 활성화 개수 초과 방지

        let randomIndex;
        let attempts = 0;
        do {
          randomIndex = Math.floor(Math.random() * (mole.row * mole.col));
          attempts++;
        } while (
          (newVisibleMoles[randomIndex] || cooldownMolesSet.has(randomIndex)) &&
          attempts < 10
        );

        if (
          !newVisibleMoles[randomIndex] &&
          !cooldownMolesSet.has(randomIndex)
        ) {
          newVisibleMoles[randomIndex] = true;
          activeMolesSet.add(randomIndex);

          setTimeout(() => {
            setVisibleMoles((currentMoles) => {
              const updatedMoles = [...currentMoles];
              updatedMoles[randomIndex] = false;
              activeMolesSet.delete(randomIndex);
              cooldownMolesSet.add(randomIndex);

              setTimeout(
                () => {
                  cooldownMolesSet.delete(randomIndex);
                },
                TIME_INTERVAL / (speedUpFlag * 2),
              );

              return updatedMoles;
            });
          }, TIME_INTERVAL / speedUpFlag);
        }

        return newVisibleMoles;
      });
    };

    updateMolesSequentially();
    const interval = setInterval(updateMolesSequentially, ADD_MOLE_TIME);

    return () => {
      clearInterval(interval);
      activeMolesSet.clear();
      cooldownMolesSet.clear();
    };
  }, [isModalOpen, speedUpFlag]);

  return (
    <Wrapper rowCount={mole.row} colCount={mole.col}>
      <div className={'game-info'}>
        <div className={'title'}>Score :</div>
        <> {score}</>
      </div>
      <div className={'game-info'}>
        <div className={'title'}>Time : </div>{' '}
        <Timer
          refresh={timerKey}
          onTimerEnd={() => {
            setIsModalOpen(true);
            updateRanking(nickName, score);
          }}
          pause={isPause}
        />
      </div>
      <div className={'game-info'} style={{ paddingTop: '20px' }}>
        <Button
          label={'Pause'}
          onClick={() => {
            setIsModalOpen(true);
            setIsPause(true);
          }}
        />
        <Button label={'Home'} onClick={() => navigate('/')} />
      </div>
      <div className="content">
        {visibleMoles &&
          visibleMoles.map((isVisible, index) => (
            <WhackAMolePopup
              key={index}
              visible={isVisible}
              setCount={setScore}
              index={index}
              speed={TIME_INTERVAL / speedUpFlag}
            />
          ))}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={true}
          children={
            isPause ? (
              <Pause setRetry={setIsPause} />
            ) : (
              <GameScore score={score} setModalOpen={setIsModalOpen} />
            )
          }
        />
      )}
    </Wrapper>
  );
};

export default Game;
