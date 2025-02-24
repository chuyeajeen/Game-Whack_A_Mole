import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from "./index";

const meta = {
    title: 'Components/modal',
    component: Modal,
    argTypes: {
        isOpen: { control: 'boolean' },
    },
} as Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default = {
    args: {
        isOpen: true,
    },
} as Story;

export const Controlled = {
    render: (args) => {
        return (
            <Modal isOpen={args.isOpen} onClose={()=>{}} children={<div>Modal</div>}/>
        );
    },
    args: {
        isOpen:true
    },
} as Story;
