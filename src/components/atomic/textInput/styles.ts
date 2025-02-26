import styled, { css, keyframes } from 'styled-components';
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(0); }
`;
export const Wrapper = styled.input<{ isOverMax: boolean }>`
  width: 100%;
  max-width: 300px;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #ccc;
  outline: none;
  transition: all 0.3s ease-in-out;
  background-color: white;
  color: #333;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #1ea7fd;
    box-shadow: 0 0 10px rgba(30, 167, 253, 0.4);
  }
  &:hover {
    border-color: #1ea7fd;
  }

  ${({ isOverMax }) =>
    isOverMax &&
    css`
      animation: ${shakeAnimation} 0.3s ease-in-out;
    `}
`;
