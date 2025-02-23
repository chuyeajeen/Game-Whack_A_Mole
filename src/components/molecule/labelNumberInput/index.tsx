import React from 'react';
import NumberInput from '../../atomic/numberInput';
import { NumberInputType } from '../../../type/setupType';
import { Wrapper } from './styles';

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
