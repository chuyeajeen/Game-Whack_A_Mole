import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Wrapper } from './styles';

/**
 * NumberInput props
 *
 * @param value : input 컴포넌트의 value
 * @param onChange: input 콜백함수
 * @param min : input 에 들어올 수 있는 최소값
 * @param mix : input 에 들어올 수 있는 최댓값
 * @param onOutOfRange : min/max 를 벗어났을 때 호출될 콜백 함수
 */
interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: NumberInputType;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  onOutOfRange?: (value: NumberInputType) => void;
}

const NumberInput = ({
  value,
  onChange,
  min,
  max,
  onOutOfRange,
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState(value ?? '');

  const regex = useMemo((): RegExp => {
    const negativePart = (min ?? -1) < 0 ? '-?' : '';
    return new RegExp(`^${negativePart}\\d*$`);
  }, [min]);

  const validateValue = useCallback(
    (value: string): string => {
      if (min !== undefined && Number(value) < min) {
        onOutOfRange?.(value);
        return String(min);
      }
      if (max !== undefined && Number(value) > max) {
        onOutOfRange?.(value);
        return String(max);
      }
      return value;
    },
    [min, max, onOutOfRange],
  );

  return (
    <Wrapper
      value={inputValue}
      type={'text'}
      onChange={(e) => {
        if (e.target.value === '') {
          setInputValue(e.target.value);
          onChange?.(e.target.value);
        } else if (regex.test(e.target.value)) {
          const changeValue: string = validateValue(String(e.target.value));
          setInputValue(changeValue);
          onChange?.(e.target.value);
        }
      }}
      onBlur={() => {
        if (inputValue === '-') {
          setInputValue(String(min ?? 0));
        }
        onChange?.(Number(inputValue));
      }}
    />
  );
};

export default NumberInput;
