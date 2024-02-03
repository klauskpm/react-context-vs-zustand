import {useCallback, useState} from 'react';
import {createContext, useContextSelector} from 'use-context-selector';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

const initialState = {
  title: '',
  unchanged: 'unchanged value'
};

function useStore() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');
  const [filters, setFilters] = useState(initialState);

  return {
    count,
    increaseCount: useCallback((num = 1) => setCount(count + num), [count]),
    decreaseCount: useCallback((num = 1) => setCount(count - num), [count]),

    user,
    login: useCallback((user = 'klaus') => setUser(user), []),
    logout: useCallback(() => setUser(''), []),

    filters,
    searchTitle: useCallback((title) => setFilters((filters) => ({...filters, title})), [])
  };
}

const StoreContext = createContext(null);

export function ContextProvider({children}) {
  const store = useStore();
  useStoreRenderCount('SimplerContextWithExtras', 'ContextProvider');

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
