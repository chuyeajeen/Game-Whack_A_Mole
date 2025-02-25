import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from './styles';
import WhackAMolePopup from '../../components/molecule/whackAMolePopup';
import { useRecoilState, useRecoilValue } from 'recoil';
import { moleState, visibleMoleState } from '../../store/moleState';

const Game = () => {
  const mole = useRecoilValue(moleState);
  const moleCount = useRef(mole.moleCount);
  const [visibleMoles, setVisibleMoles] = useState<boolean[]>(
    new Array(mole.row * mole.col).fill(false),
  );
  const [score, setScore] = useState(0);

  useEffect(() => {
    // 활성화된 두더지 인덱스 저장
    const activeMolesSet = new Set<number>();
    // 최근에 내려간 두더지를 다시 선택하지 않기 위해 저장
    const cooldownMolesSet = new Set<number>();

    const updateMolesSequentially = () => {
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

              setTimeout(() => {
                cooldownMolesSet.delete(randomIndex);
              }, 1000);

              return updatedMoles;
            });
          }, 2000);
        }

        return newVisibleMoles;
      });
    };

    updateMolesSequentially();
    const interval = setInterval(updateMolesSequentially, 300);

    return () => {
      clearInterval(interval);
      activeMolesSet.clear();
      cooldownMolesSet.clear();
    };
  }, []);

  return (
    <Wrapper rowCount={mole.row} colCount={mole.col}>
      {score}
      <div className="content">
        {visibleMoles &&
          visibleMoles.map((isVisible, index) => (
            <WhackAMolePopup
              key={index}
              visible={isVisible}
              setCount={setScore}
              index={index}
              speed={2000}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default Game;
