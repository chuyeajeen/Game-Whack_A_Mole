import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RankingTemplate from './index';

const meta = {
  title: 'template/rankingTemplate',
  component: RankingTemplate,
  argTypes: {
    rankings: { control: 'object', description: 'List of ranking items' },
  },
} as Meta<typeof RankingTemplate>;

export default meta;

type Story = StoryObj<typeof RankingTemplate>;

export const Default = {
  args: {
    rankings: [
      {
        name: 'Player 1',
        score: 100,
        date: new Date(),
        ranking: 1,
      },
      {
        name: 'Player 2',
        score: 95,
        date: new Date(),
        ranking: 2,
      },
    ],
  },
} as Story;

export const Controlled = {
  render: (args) => {
    return <RankingTemplate {...args} />;
  },
  args: {
    rankings: [
      {
        name: 'Player 1',
        score: 100,
        date: new Date(),
        ranking: 1,
      },
      {
        name: 'Player 2',
        score: 95,
        date: new Date(),
        ranking: 2,
      },
    ],
  },
} as Story;
