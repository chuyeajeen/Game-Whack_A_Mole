import styled from 'styled-components';

export const Wrapper = styled.div<{ isVisible: boolean; speed: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  grid-template-columns: ${({ labelWidth }) => `${labelWidth} 1fr`};
  display: flex;
  align-items: end;
  justify-content: center;
  .hole {
    max-height: 20%;
    position: absolute;
    z-index: 99999;
    overflow: hidden;
  }

  .mole {
    width: 70%;
    height: 100%;
    aspect-ratio: 3 / 2;
    max-width: 50vw;
    position: absolute;
    bottom: ${({ isVisible }) =>
      isVisible ? '-19%' : '-100%'}; /* 애니메이션을 위해 bottom 조절 */
    left: 50%;
    transform: translateX(-50%);
    transition: bottom ${({ speed }) => speed}ms ease-in-out;
  }
`;
