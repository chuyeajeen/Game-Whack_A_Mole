import styled from 'styled-components';

export const Wrapper = styled.div<{ labelWidth: string }>`
  align-items: center;
  display: grid;
  grid-template-columns: ${({ labelWidth }) => `${labelWidth} 1fr`};
  gap: 10px;
  .label {
    font-size: 16px;
    text-align: end;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
