import { atom } from 'recoil';

export const moleState = atom<{
  row: number;
  col: number;
  moleCount: number;
}>({
  key: 'moleState',
  default: { row: 0, col: 0, moleCount: 0 },
});

export const catchMoleIndexState = atom<number>({
  key: 'visibleMoleState',
  default: 0,
});

export const nickNameState = atom<string>({
  key: 'nickNameState',
  default: '',
});

export const moleSpeedUpState = atom<boolean>({
  key: 'moleSpeedUpState',
  default: false,
});
