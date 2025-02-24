import React from 'react';
import { ModalContainer, Overlay } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <button className={'close-button'} onClick={onClose}>
          &times;
        </button>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
