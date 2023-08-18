import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
});

export const authSessionState = atom({
  key: 'authSessionState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});