import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NumberInputType } from '../../../types/setupType';
import RankingRow from './index';

const meta = {
  title: 'molecule/rankingRow',
  component: RankingRow,
  argTypes: {
    name: { control: 'text' },
    score: { control: 'number' },
    date: { control: 'date' },
    ranking: { control: 'number' },
  },
} as Meta<typeof RankingRow>;

export default meta;

type Story = StoryObj<typeof RankingRow>;

export const Default = {
  args: {
    name: 'Name',
    score: 100,
    date: new Date(),
    ranking: 1,
  },
} as Story;

export const Controlled = {
  render: (args) => {
    return <RankingRow {...args} />;
  },
  args: {
    name: 'Name',
    score: 100,
    date: new Date(),
    ranking: 1,
  },
} as Story;
