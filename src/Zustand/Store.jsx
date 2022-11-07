import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increaseCount: (num = 1) => set((state) => ({ count: state.count + num })),
  decreaseCount: (num = 1) => set((state) => ({ count: state.count - num })),
}));

export const useCount = () => useStore((state) => state.count);
export const useIncreaseCount = () => useStore((state) => state.increaseCount);
export const useDecreaseCount = () => useStore((state) => state.decreaseCount);
