import create from 'zustand';

const useStore = create((set) => ({
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

export const useCount = () => useStore((state) => state.count);
export const useIncreaseCount = () => useStore((state) => state.increaseCount);
export const useDecreaseCount = () => useStore((state) => state.decreaseCount);

export const useUser = () => useStore((state) => state.user);
export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);

export const useFilteredTitle = () => useStore((state) => state.filters.title);
export const useSearchTitle = () => useStore((state) => state.searchTitle);

export const useComposedValue = () => useStore((state) => ({
  unchanged: state.filters.unchanged,
  count: state.count
}));