import create  from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools(immer((set) => ({
  count: 0,
  increaseCount: (num = 1) => set((state) => { state.count += num }, false, 'increaseCount'),
  decreaseCount: (num = 1) => set((state) => { state.count -= num }, false, 'decreaseCount'),

  user: '',
  login: (user = 'klaus') => set({ user }, false, 'login'),
  logout: () => set({ user: '' }, false, 'logout')
}))));

export const useCount = () => useStore((state) => state.count);
export const useIncreaseCount = () => useStore((state) => state.increaseCount);
export const useDecreaseCount = () => useStore((state) => state.decreaseCount);

export const useUser = () => useStore((state) => state.user);
export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
