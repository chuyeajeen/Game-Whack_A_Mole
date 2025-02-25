import styled from 'styled-components';

export const Wrapper = styled.div<{ isVisible: boolean; speed: number }>`
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  grid-template-columns: ${({ labelWidth }) => `${labelWidth} 1fr`};
  .hole {
    width: 200px;
    height: 100px;
    position: absolute;
    bottom: -40px;
    z-index: 99999;
    overflow: hidden;
    background: transparent;
  }

  .mole {
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: ${({ isVisible }) => (isVisible ? '-20px' : '-98px')};
    left: 50%;
    transform: translateX(-50%);
    transition: ${({ speed }) => `bottom ${speed}ms ease-in-out`};
  }
`;
