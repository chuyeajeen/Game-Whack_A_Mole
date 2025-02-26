import React, { useEffect, useRef, useState } from 'react';
import Hole from '../../../assets/game/hole.png';
import Mole from '../../../assets/game/mole.png';
import LightMole from '../../../assets/game/light-mole.png';
import { Wrapper } from './styles';
import { TIME_INTERVAL } from '../../../constants/game';

/**
 * WhackAMoleHole Props
 *
 * @param visible :두더지 visible여부
 * @param setCount : score 저장
 * @param speed : 두더지 올라오는 속도
 * */
interface WhackAMoleHoleProps {
  visible: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  speed: number;
}

const WhackAMoleHole: React.FC<WhackAMoleHoleProps> = ({
  visible,
  setCount,
  speed,
}) => {
  const [moleVisible, setMoleVisible] = useState(visible);
  const [moleSpeed, setMoleSpeed] = useState(speed);
  const handleDoubleClick = useRef(false);
  const [isLight, setIsLoght] = useState(false);
  useEffect(() => {
    setMoleVisible(visible);
    setMoleSpeed(speed);
    if (visible) setIsLoght(false);
  }, [visible]);

  const handleMoleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (handleDoubleClick.current) return;
    handleDoubleClick.current = true;

    setMoleVisible(false);
    setMoleSpeed(moleSpeed / 2);
    setCount((prevState) => prevState + 1);
    setIsLoght(true);
    setTimeout(() => {
      handleDoubleClick.current = false;
    }, TIME_INTERVAL);
  };

  return (
    <Wrapper isVisible={moleVisible} speed={moleSpeed}>
      <img className={'hole'} src={Hole} alt={'hole'} />
      {isLight ? (
        <img
          className={'mole'}
          src={LightMole}
          alt="Mole"
          onClick={handleMoleClick}
        />
      ) : (
        <img
          className={'mole'}
          src={Mole}
          alt="Mole"
          onClick={handleMoleClick}
        />
      )}
    </Wrapper>
  );
};

export default WhackAMoleHole;
