import { atom } from 'recoil';

const activeIdState = atom({
  key: 'activeIdState',
  default: -1,
});

export default activeIdState;
