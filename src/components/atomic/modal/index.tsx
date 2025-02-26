import React, { useEffect, useState } from 'react';
import { ModalContainer, Overlay } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    if (!modalOpen) return null;
  }, [modalOpen]);

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <button
          className={'close-button'}
          onClick={() => {
            setModalOpen(false);
            onClose && onClose();
          }}
        >
          &times;
        </button>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
