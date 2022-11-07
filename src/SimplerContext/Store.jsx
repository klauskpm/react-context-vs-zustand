import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

function useStore() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');

  return {
    count,
    increaseCount: useCallback((num = 1) => setCount(count + num), [count]),
    decreaseCount: useCallback((num = 1) => setCount(count - num), [count]),

    user,
    login: useCallback((user = 'klaus') => setUser(user), []),
    logout: useCallback(() => setUser(''), [])
  };
}

const StoreContext = createContext(null);

export function ContextProvider({ children }) {
  const store = useStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useCount = () => useContextSelector(StoreContext, (state) => state.count);
export const useIncreaseCount = () => useContextSelector(StoreContext, (state) => state.increaseCount);
export const useDecreaseCount = () => useContextSelector(StoreContext, (state) => state.decreaseCount);

export const useUser = () => useContextSelector(StoreContext, (state) => state.user);
export const useLogin = () => useContextSelector(StoreContext, (state) => state.login);
export const useLogout = () => useContextSelector(StoreContext, (state) => state.logout);
