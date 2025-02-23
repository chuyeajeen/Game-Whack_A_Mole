import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import WhackAMolePopup from './index';

const meta = {
  title: 'molecule/WhackAMolePopup',
  component: WhackAMolePopup,
  argTypes: {
    visible: { control: 'boolean' },
    speed: { control: 'number' },
  },
} as Meta<typeof WhackAMolePopup>;

export default meta;

type Story = StoryObj<typeof WhackAMolePopup>;

export const Default = {
  args: {
    visible: true,
    speed: 400,
  },
} as Story;

export const Controlled = {
  render: (args) => {
    const [moleVisible, setMoleVisible] = useState<boolean>(
      args.visible ?? true,
    );
    const [moleSpeed, setMoleSpeed] = useState(args.speed);

    useEffect(() => {
      if (visible) {
        setMoleVisible(true);
        const timer = setTimeout(() => {
          setMoleVisible(false);
        }, speed);
      }
      return () => clearTimeout(timer);
    }, [visible, speed]);

    return (
      <WhackAMolePopup
        {...args}
        visible={moleVisible}
        speed={moleSpeed}
        onClick={() => setMoleVisible(false)}
      />
    );
  },
  args: {
    visible: true,
    speed: 400,
  },
} as Story;
