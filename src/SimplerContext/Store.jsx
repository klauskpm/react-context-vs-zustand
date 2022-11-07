import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

function useStore() {
  const [count, setCount] = useState(0);

  return {
    count,
    increaseCount: useCallback((num = 1) => setCount(count + num), [count]),
    decreaseCount: useCallback((num = 1) => setCount(count - num), [count]),
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
