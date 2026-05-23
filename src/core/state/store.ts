import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  test: number
  add: () => void;
  sub: () => void;
  reset: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      test: 1,
      add: () => set({ test: get().test + 1 }),
      sub: () => set({ test: get().test - 1 }),
      reset: () => set({ test: 1 }),
    }),
    {
      name: "test-store",
      version: 0,
    },
  ),
);