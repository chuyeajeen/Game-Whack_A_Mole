import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LabelNumberInput from './index';

const meta = {
  title: 'molecule/labelNumberInput',
  component: LabelNumberInput,
  argTypes: {
    label: { control: 'string' },
    value: { control: 'number' },
    onChange: { action: 'changed' },
    placeholder: { control: 'string' },
    min: { control: 'number' },
    max: { control: 'number' },
    labelWidth: { control: 'string' },
  },
} as Meta<typeof LabelNumberInput>;

export default meta;

type Story = StoryObj<typeof LabelNumberInput>;

export const Default = {
  args: {
    label: 'title',
    value: 0,
    min: 0,
    max: 100,
    placeholder: 'input title',
    labelWidth: '20%',
  },
} as Story;

export const Controlled = {
  render: (args) => {
    const [value, setValue] = useState<NumberInputType>(args.value);
    return (
      <labelNumberInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'title',
    value: 656,
    min: 0,
    max: 100,
    placeholder: 'input title',
    labelWidth: '20%',
  },
} as Story;
