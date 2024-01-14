import {createContext, useCallback, useContext, useState} from 'react';
import {useStoreRenderCount} from "../hooks/useLogRenders";

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
    searchTitle: useCallback((title) => setFilters((filters) => ({ ...filters, title })), [])
  };
}

const StoreContext = createContext(null);

export function ContextProvider({ children }) {
  const store = useStore();
  useStoreRenderCount('SimplerContext', 'ContextProvider');

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useCount = () => useContext(StoreContext).count;
export const useIncreaseCount = () => useContext(StoreContext).increaseCount;
export const useDecreaseCount = () => useContext(StoreContext).decreaseCount;

export const useUser = () => useContext(StoreContext).user;
export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;

export const useFilteredTitle = () => useContext(StoreContext).filters.title;
export const useSearchTitle = () => useContext(StoreContext).searchTitle;

export const useComposedValue = () => {
  const state = useContext(StoreContext);
  return {
    unchanged: state.filters.unchanged,
    count: state.count
  };
}
