import styled, {css, keyframes} from "styled-components";
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(0); }
`
export const Wrapper = styled.input<{ isOverMax: boolean }>`

  ${({ isOverMax }) =>
          isOverMax &&
          css`
      animation: ${shakeAnimation} 0.3s ease-in-out;
    `}
`;
