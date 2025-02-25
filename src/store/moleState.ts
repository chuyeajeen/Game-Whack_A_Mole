import { atom } from 'recoil';

export const moleState = atom<{
  row: number;
  col: number;
  moleCount: number;
}>({
  key: 'moleState',
  default: { row: 2, col: 6, moleCount: 1 },
});

export const catchMoleIndexState = atom<number>({
  key: 'visibleMoleState',
  default: 0,
});
