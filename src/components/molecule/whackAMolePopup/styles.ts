import { styled } from 'styled-components';

export const Wrapper = styled.div<{ isVisible: boolean; speed: number }>`
  width: 100px;
  height: 200px;
  position: relative;
  background-color: coral;
  grid-template-columns: ${({ labelWidth }) => `${labelWidth} 1fr`};
  .hole {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    z-index: 99999;
  }

  .mole {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: ${({ isVisible }) => (isVisible ? '100px' : '10px')};
    left: 50%;
    transform: translateX(-50%);
    transition: ${({ speed }) => `bottom ${speed}ms ease-in-out`};
  }
`;
