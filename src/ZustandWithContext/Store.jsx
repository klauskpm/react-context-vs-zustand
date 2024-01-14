import { create } from 'zustand';
import {useEffect, useMemo} from "react";
import {createContext, useContextSelector} from "use-context-selector";
import {useStoreRenderCount} from "../hooks/useLogRenders";

const initialState = {
  count: 0,
  user: '',
  filters: {
    title: '',
    unchanged: 'unchanged value'
  },
};

const createUseStore = () => create((set) => ({
  ...initialState,
  increaseCount: (num = 1) => set((state) => ({ count: state.count + num })),
  decreaseCount: (num = 1) => set((state) => ({ count: state.count - num })),
  login: (user = 'klaus') => set({ user }),
  logout: () => set({ user: '' }),
  searchTitle: (title) => set((state) => ({ filters: { ...state.filters, title } })),
  reset: () => set(initialState),
}));

const StoreContext = createContext(null);

export function ContextProvider({ children }) {
  const useStore = useMemo(() => createUseStore(), []);
  const store = useStore();
  useStoreRenderCount('ZustandWithContext', 'ContextProvider');
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStoreContext = (callback) => useContextSelector(StoreContext, callback);

export const useCount = () => useStoreContext((state) => state.count);
export const useIncreaseCount = () => useStoreContext((state) => state.increaseCount);
export const useDecreaseCount = () => useStoreContext((state) => state.decreaseCount);

export const useUser = () => useStoreContext((state) => state.user);
export const useLogin = () => useStoreContext((state) => state.login);
export const useLogout = () => useStoreContext((state) => state.logout);

export const useFilteredTitle = () => useStoreContext((state) => state.filters.title);
export const useSearchTitle = () => useStoreContext((state) => state.searchTitle);

export const useComposedValue = () => useStoreContext((state) => ({
  unchanged: state.filters.unchanged,
  count: state.count
}));

export const useResetStore = () => {
  const reset = useStoreContext((state) => state.reset);

  useEffect(() => {
    return () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};