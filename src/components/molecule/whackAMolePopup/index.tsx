import React, { useEffect, useState } from 'react';
import Hole from '../../../assets/game/hole.png';
import Mole from '../../../assets/game/mole.png';
import { Wrapper } from './styles';

/**
 * WhackAMoleHole Props
 *
 * @param visible :두더지 visible여부
 * @param speed : 두더지 올라오는 속도
 * */
interface WhackAMoleHoleProps {
  visible: boolean;
  speed: number;
}

const WhackAMoleHole: React.FC<WhackAMoleHoleProps> = ({ visible, speed }) => {
  const [moleVisible, setMoleVisible] = useState(false);
  const [moleSpeed, setMoleSpeed] = useState(speed);

  useEffect(() => {
    if (visible) {
      setMoleVisible(true);
      const timer = setTimeout(() => {
        setMoleVisible(false);
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [visible, speed]);

  return (
    <Wrapper isVisible={moleVisible} speed={moleSpeed}>
      <img className={'hole'} src={Hole} alt={'hole'} />
      <img
        className={'mole'}
        src={Mole}
        alt="Mole"
        onClick={() => {
          setMoleVisible(false);
          setMoleSpeed(speed / 2);
        }}
      />
    </Wrapper>
  );
};

export default WhackAMoleHole;
