import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NumberInput from "./index";
import TextInput from "./index";

const meta = {
    title: 'Components/TextInput',
    component: TextInput,
    argTypes: {
        value: { control: 'string' },
        onChange: { action: 'changed' },
        maxLength:{control:'number'}
    },
} as Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default = {
    args: {
        value: '',
        maxLength:5
    },
} as Story;

export const Controlled = {
    render: (args) => {
        const [value, setValue] = useState<string>(args.value);
        return (
            <TextInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value )
                }}
            />
        );
    },
    args: {
        value: '',
        maxLength: 5,
    },
} as Story;
