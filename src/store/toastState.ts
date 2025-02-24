import { atom } from 'recoil';

export const toastState = atom<ToastStateType>({
  key: 'toastState',
  default: {
    open: false,
    message: '',
  } as ToastStateType,
});
