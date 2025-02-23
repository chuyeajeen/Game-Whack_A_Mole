import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { NumberInputType } from '../../../types/setupType';

/**
 * NumberInput props
 *
 * @param value : input 컴포넌트의 value
 * @param onChange: input 콜백함수
 * @param min : input 에 들어올 수 있는 최소값
 * @param mix : input 에 들어올 수 있는 최댓값
 */
interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: NumberInputType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

const NumberInput = ({ value, onChange, min, max }: NumberInputProps) => {
  const [inputValue, setInputValue] = useState(value ?? '');

  const regex = useMemo((): RegExp => {
    const negativePart = (min ?? -1) < 0 ? '-?' : '';
    return new RegExp(`^${negativePart}\\d*$`);
  }, [min]);

  const validateValue = useCallback(
    (value: string): string => {
      if (min !== undefined && Number(value) < min) return String(min);
      if (max !== undefined && Number(value) > max) return String(max);
      return value;
    },
    [min, max],
  );

  useEffect(() => {
    console.log(value);
    if (value === undefined || value === null) return;
    const changeValue: string = validateValue(String(value));
    setInputValue(changeValue);
  }, [value]);

  return (
    <input
      value={inputValue}
      type={'text'}
      onChange={e => {
        if (regex.test(e.target.value) || e.target.value === '') {
          setInputValue(e.target.value);
          onChange?.(e);
        }
      }}
      onBlur={() => {
        if (inputValue === '-') {
          setInputValue(String(min ?? 0));
        }
      }}
    />
  );
};

export default NumberInput;
