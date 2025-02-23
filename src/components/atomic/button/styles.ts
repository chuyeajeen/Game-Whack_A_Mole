import styled from 'styled-components';

const sizeMap = {
  small: { width: '80px', height: '40px', fontSize: '16px' },
  medium: { width: '120px', height: '40px', fontSize: '20px' },
  large: { width: '120px', height: '60px', fontSize: '20px' },
};

export const Wrapper = styled.button<{
  disabled: boolean;
  size: 'small' | 'medium' | 'large';
}>`
  padding: 10px 16px;
  font-size: ${({ size }) => sizeMap[size].fontSize};
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease-in-out;
  width: ${({ size }) => sizeMap[size].width};
  height: ${({ size }) => sizeMap[size].height};
  background-color: #1ea7fd;
  color: white;
  font-weight: bold;
  border: white;
  &:hover {
    opacity: 0.8;
  }
`;
