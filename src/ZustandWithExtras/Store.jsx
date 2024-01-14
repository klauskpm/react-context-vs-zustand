import create  from 'zustand';
import shallow  from 'zustand/shallow';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import {useEffect} from "react";

const initialState = {
  count: 0,
  user: '',
  filters: {
    title: '',
    unchanged: 'unchanged value'
  },
};

const useStore = create(devtools(immer((set) => ({
  ...initialState,
  increaseCount: (num = 1) => set((state) => { state.count += num }, false, 'increaseCount'),
  decreaseCount: (num = 1) => set((state) => { state.count -= num }, false, 'decreaseCount'),
  login: (user = 'klaus') => set({ user }, false, 'login'),
  logout: () => set({ user: '' }, false, 'logout'),
  searchTitle: (title) => set(
    (state) => { state.filters.title = title },
    false,
    'searchTitle'
  ),
  reset: () => set(initialState, false, 'reset'),
}))));

export const useCount = () => useStore((state) => state.count);
export const useIncreaseCount = () => useStore((state) => state.increaseCount);
export const useDecreaseCount = () => useStore((state) => state.decreaseCount);

export const useUser = () => useStore((state) => state.user);
export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);

export const useFilteredTitle = () => useStore((state) => state.filters.title);
export const useSearchTitle = () => useStore((state) => state.searchTitle);

export const useComposedValue = () => useStore((state) => ({
  unchanged: state.filters.unchanged,
  count: state.count
}), shallow);

export const useResetStore = () => {
  const reset = useStore((state) => state.reset);

  useEffect(() => {
    return () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};