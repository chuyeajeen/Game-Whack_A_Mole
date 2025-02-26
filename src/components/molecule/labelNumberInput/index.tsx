import React from 'react';
import NumberInput from '../../atomic/numberInput';
import { Wrapper } from './styles';

/**
 * labelNumberInput Props
 * @param label : input 의 label
 * @param value : NumberInput 컴포넌트의 value
 * @param onChange : NumberInput 컴포넌트 콜백함수
 * @param placeHolder : NumberInput 의  placeHold
 * @param min : NumberInput 의 min 값 (min 보다 작은 값 입력 시 min 값으로 대체)
 * @param max : NumberInput 의 max 값 (max 보다 큰 값 입력 시 max 값으로 대체)
 * @param labelWidth: label width, 기본값 20%
 * */
interface LabelNumberInput {
  label?: string;
  value: NumberInputType;
  onChange: (value: NumberInputType) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  labelWidth?: string;
}

const LabelNumberInput = ({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  labelWidth,
}: LabelNumberInput) => {
  const handleChange = (number) => {
    onChange(number);
  };

  return (
    <Wrapper labelWidth={labelWidth ?? '20%'}>
      {label && <div className={'label'}>{label}</div>}
      <NumberInput
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </Wrapper>
  );
};

export default LabelNumberInput;
