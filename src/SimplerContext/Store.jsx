import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

function useStore() {
  const [count, setCount] = useState(0);

  return {
    count,
    increaseCount: useCallback((num = 1) => setCount((c) => c + num), []),
    decreaseCount: useCallback((num = 1) => setCount((c) => c - num), []),
  };
}

const StoreContext = createContext(null);

export function ContextProvider({ children }) {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
}

export const useCount = () => useContextSelector(StoreContext, (state) => state.count);
export const useIncreaseCount = () => useContextSelector(StoreContext, (state) => state.increaseCount);
export const useDecreaseCount = () => useContextSelector(StoreContext, (state) => state.decreaseCount);
