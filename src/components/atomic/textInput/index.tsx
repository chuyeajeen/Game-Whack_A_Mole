import React, {useEffect, useState} from 'react';
import {Wrapper} from "./styles";


/**
 * NumberInput props
 *
 * @param value : input 컴포넌트의 value
 * @param onChange: input 콜백함수
 * @param maxLength : input 최대 길이
 */
interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?:number;
}

const TextInput = ({ value, onChange, maxLength }: NumberInputProps) => {
    const [inputValue, setInputValue] = useState(value ?? '');
    const [isOverMax, setIsOverMax] = useState(false);
    useEffect(() => {

        if(inputValue.length>=maxLength && !isOverMax) setIsOverMax(true);
        if(isOverMax && inputValue.length<maxLength)setIsOverMax(false);
    }, [inputValue]);
    return (
        <Wrapper isOverMax={isOverMax}
            value={inputValue}
            type={'text'}
            onChange={(e) =>{
                if(e.target.value.length<=maxLength) {
                    setInputValue(e.target.value);
                    onChange?.(e);
                }
            }}
        />
    );
};

export default TextInput;
