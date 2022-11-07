import { useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

function useStore() {
  const [count, setCount] = useState(0);

  return {
    count,
    increaseCount: (num = 1) => setCount(count + num),
    decreaseCount: (num = 1) => setCount(count - num),
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
