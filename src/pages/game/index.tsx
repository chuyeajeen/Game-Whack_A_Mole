import React from 'react';
import { Wrapper } from './styles';
import WhackAMolePopup from '../../components/molecule/whackAMolePopup';
import { useRecoilValue } from 'recoil';
import { moleState } from '../../store/moleState';

const Game = () => {
  // const moleCount = useRecoilValue(moleState);
  return (
    <Wrapper>
      <div className={'content'}>
        {Array.from({ length: 12 }).map((_, index) => (
          <WhackAMolePopup key={index} speed={400} visible={true} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Game;
