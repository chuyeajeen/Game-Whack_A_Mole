import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import NumberInput from '../../components/atomic/numberInput';
import Button from '../../components/atomic/button';
import {useSetRecoilState} from "recoil";
import {toastState} from "../../store/toastState";

const Landing = () => {
    const [row, setRow] = useState<number | ''>('');
    const [col, setCol] = useState<number | ''>('');
    const [mole, setMole] = useState<number | ''>('');
    const [maxMole, setMaxMole] = useState<number>(0);
    const [validateGameStart, setValidateGameStart] = useState(false);

    const setToast = useSetRecoilState(toastState);

    useEffect(() => {
        if (row && col) {
            setMaxMole(Math.floor((Number(row) * Number(col)) / 2));
        }
    }, [row, col]);

    const handleOutOfRange = (outOfRangeValue: number) => {
        setToast({open:true, message:'2~6 사이의 값만 입력하세요 :) '})
    };

    const handleMoleOutofRange = ()=>{
        setToast({open:true, message:'전체 굴 개수의 절반 미만의 값을 입력하세요 :) '})
    }
    useEffect(() => {
        if(row ===''|| col ===''|| mole ==='' )setValidateGameStart(true);
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
                        onChange={(e) => setRow(Number(e.target.value))}
                        onOutOfRange={handleOutOfRange}
                    />
                </div>
                <div className={'row-content'}>
                    Col :{' '}
                    <NumberInput
                        value={col}
                        min={2}
                        max={6}
                        onChange={(e) => setCol(Number(e.target.value))}
                        onOutOfRange={handleOutOfRange}
                    />
                </div>
                <div className={'row-content'}>
                    Mole :{' '}
                    <NumberInput
                        value={mole}
                        min={1}
                        max={maxMole}
                        onChange={(e) => setMole(Number(e.target.value))}
                        onOutOfRange={handleMoleOutofRange}
                    />
                </div>
                <div className={'row-button'}>
                    <Button label={'Ranking'} size={'large'} /> //TODO 랭킹페이지 연결
                    <Button label={'Start'} size={'large'} disabled={validateGameStart}/>
                </div>
            </div>
        </Wrapper>
    );
};

export default Landing;
