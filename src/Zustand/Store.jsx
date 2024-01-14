import create from 'zustand';
import {useEffect} from "react";

const initialState = {
  count: 0,
  user: '',
  filters: {
    title: '',
    unchanged: 'unchanged value'
  },
};

const useStore = create((set) => ({
  ...initialState,
  increaseCount: (num = 1) => set((state) => ({ count: state.count + num })),
  decreaseCount: (num = 1) => set((state) => ({ count: state.count - num })),
  login: (user = 'klaus') => set({ user }),
  logout: () => set({ user: '' }),
  searchTitle: (title) => set((state) => ({ filters: { ...state.filters, title } })),
  reset: () => set(initialState),
}));

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
}));

export const useResetStore = () => {
  const reset = useStore((state) => state.reset);

  useEffect(() => {
    return () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};