import create from 'zustand';
import { useMemo } from 'react';
import {createContext, useContextSelector} from "use-context-selector";

const createUseStore = () => create((set) => ({
  count: 0,
  increaseCount: (num = 1) => set((state) => ({ count: state.count + num })),
  decreaseCount: (num = 1) => set((state) => ({ count: state.count - num })),

  user: '',
  login: (user = 'klaus') => set({ user }),
  logout: () => set({ user: '' }),

  filters: {
    title: '',
    unchanged: 'unchanged value'
  },
  searchTitle: (title) => set((state) => ({ filters: { ...state.filters, title } }))
}));

const StoreContext = createContext(null);

export function ContextProvider({ children }) {
    const useStore = useMemo(() => createUseStore(), []);
    const store = useStore();
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