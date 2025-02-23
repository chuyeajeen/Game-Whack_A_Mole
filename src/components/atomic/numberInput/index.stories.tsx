import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NumberInputType } from '../../../types/setupType';
import NumberInput from "./index";

const meta = {
    title: 'Components/NumberInput',
    component: NumberInput,
    argTypes: {
        value: { control: 'number' },
        min: { control: 'number' },
        max: { control: 'number' },
        onChange: { action: 'changed' },
    },
} as Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default = {
    args: {
        value: 0,
        min: 0,
        max: 100,
    },
} as Story;

export const Controlled = {
    render: (args) => {
        const [value, setValue] = useState<NumberInputType>(args.value);
        return (
            <NumberInput
                {...args}
                value={value}
                onChange={(e) => {
                    console.log(e.target.value)
                    setValue(e.target.value as NumberInputType)
                }}
            />
        );
    },
    args: {
        value: 10,
        min: 5,
        max: 50,
    },
} as Story;
