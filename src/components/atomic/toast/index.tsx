import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ToastWrapper } from './styles';
import { toastState } from '../../../store/toastState';

const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  useEffect(() => {
    if (toast.open) {
      const timer = setTimeout(() => {
        setToast({ open: false, message: '' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [toast.open]);

  if (!toast.open) return null;

  return <ToastWrapper>11</ToastWrapper>;
};

export default Toast;
