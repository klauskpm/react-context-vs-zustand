import { useState, useCallback, createContext, useContext } from 'react';

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

export const useCount = () => useContext(StoreContext).count;
export const useIncreaseCount = () => useContext(StoreContext).increaseCount;
export const useDecreaseCount = () => useContext(StoreContext).decreaseCount;

export const useUser = () => useContext(StoreContext).user;
export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
