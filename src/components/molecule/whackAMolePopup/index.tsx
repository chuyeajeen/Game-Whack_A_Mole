import React, { useEffect, useRef, useState } from 'react';
import Hole from '../../../assets/game/hole.png';
import Mole from '../../../assets/game/mole.png';
import { Wrapper } from './styles';
import { moleState } from '../../../store/moleState';

/**
 * WhackAMoleHole Props
 *
 * @param visible :두더지 visible여부
 * @param speed : 두더지 올라오는 속도
 * */
interface WhackAMoleHoleProps {
  visible: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  speed: number;
}

const WhackAMoleHole: React.FC<WhackAMoleHoleProps> = ({
  visible,
  setCount,
  index,
  speed,
}) => {
  const [moleVisible, setMoleVisible] = useState(visible);
  const [moleSpeed, setMoleSpeed] = useState(speed);
  const handleDoubleClick = useRef(false);

  useEffect(() => {
    setMoleVisible(visible);
    setMoleSpeed(speed);
  }, [visible]);

  const handleMoleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(moleVisible, handleDoubleClick, index);
    if (handleDoubleClick.current) return; // ✅ 이미 클릭한 두더지는 무시
    handleDoubleClick.current = true; // ✅ 클릭한 두더지 저장

    setMoleVisible(false);
    setMoleSpeed(moleSpeed / 2);
    setCount((prevState) => prevState + 1);
    setTimeout(() => {
      handleDoubleClick.current = false;
    }, 2000);
  };

  return (
    <Wrapper isVisible={moleVisible} speed={moleSpeed}>
      <img className={'hole'} src={Hole} alt={'hole'} />
      <img className={'mole'} src={Mole} alt="Mole" onClick={handleMoleClick} />
    </Wrapper>
  );
};

export default WhackAMoleHole;
