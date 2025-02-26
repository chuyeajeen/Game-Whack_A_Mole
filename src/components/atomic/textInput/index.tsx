import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';

/**
 * NumberInput props
 *
 * @param value : input 컴포넌트의 value
 * @param onChange: input 콜백함수
 * @param maxLength : input 최대 길이
 */
interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (value) => void;
  maxLength?: number;
}

const TextInput = ({ value, onChange, maxLength }: NumberInputProps) => {
  const [isOverMax, setIsOverMax] = useState(false);
  return (
    <Wrapper
      isOverMax={isOverMax}
      value={value}
      type={'text'}
      onChange={(e) => {
        const inputValue = e.target.value;
        if (inputValue.length >= maxLength && !isOverMax) setIsOverMax(true);
        if (isOverMax && inputValue.length < maxLength) setIsOverMax(false);
        if (e.target.value.length <= maxLength) {
          onChange(e.target.value);
        }
      }}
    />
  );
};

export default TextInput;
