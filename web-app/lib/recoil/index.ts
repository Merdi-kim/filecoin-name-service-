import { atom } from 'recoil';

export const nameInfo = atom({
  key: 'nameInfo',
  default: {
    name: 'name',
    nameHash: '',
    price: 0.1,
  },
});
