import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta = {
  title: 'atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    size: 'medium',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    size: 'medium',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'medium',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
    disabled: false,
  },
};
