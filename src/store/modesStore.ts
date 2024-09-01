import { create } from "zustand";

type Store = {
  isDark: boolean;

  changeDarkMode: () => void;
};

const useModesStore = create<Store>((set) => ({
  isDark: false,
  changeDarkMode: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useModesStore;
