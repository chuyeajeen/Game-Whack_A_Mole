import { Wrapper } from './styles';
import React from 'react';

/**
 *Button Props
 *
 * @param label : button label
 * @param onClick : button 콜백함수
 * @param disabled : button disable 여부
 * @param size : button size, style.ts 의 sizeMap 으로 width, height, fontsize 반영
 * */
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Button = ({ label, onClick, disabled, size }: ButtonProps) => {
  return (
    <Wrapper
      size={size ?? 'medium'}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {label}
    </Wrapper>
  );
};
export default Button;
