import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ToastWrapper } from './styles';
import { toastState } from '../../../store/toastState';
import { TOAST_TIME } from '../../../constants/game';

/**
 * Toast
 * toastState 의 open: true 시 message 내용 toast 노출
 * */
const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  useEffect(() => {
    if (toast.open) {
      const timer = setTimeout(() => {
        setToast({ open: false, message: '' });
      }, TOAST_TIME);
      return () => clearTimeout(timer);
    }
  }, [toast.open]);

  if (!toast.open) return null;

  return <ToastWrapper>{toast.message}</ToastWrapper>;
};

export default Toast;
