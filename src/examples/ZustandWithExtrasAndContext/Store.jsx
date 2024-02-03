import { create } from 'zustand';
import {useEffect, useMemo} from 'react';
import {createContext, useContextSelector} from "use-context-selector";
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";
import {useShallow} from "zustand/react/shallow";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

const initialState = {
  count: 0,
  user: '',
  filters: {
    title: '',
    unchanged: 'unchanged value'
  },
};

const createUseStore = () => create(devtools(immer((set) => ({
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

const StoreContext = createContext(null);

export function ContextProvider({ children }) {
    const useStore = useMemo(() => createUseStore(), []);
    const store = useStore();
  useStoreRenderCount('ZustandWithExtrasAndContext', 'ContextProvider');
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

export const useComposedValue = () => useStoreContext(
  useShallow((state) => ({
    unchanged: state.filters.unchanged,
    count: state.count
  }))
);

export const useResetStore = () => {
  const reset = useStoreContext((state) => state.reset);

  useEffect(() => {
    return () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};