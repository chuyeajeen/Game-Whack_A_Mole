import React, { useEffect, useState } from 'react';
import { ModalContainer, Overlay } from './styles';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    if (!modalOpen) return null;
  }, [modalOpen]);

  return (
    <Overlay>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
