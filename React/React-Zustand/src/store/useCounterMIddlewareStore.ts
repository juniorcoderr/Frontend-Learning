import { create } from "zustand";

// this zustand middleware automatically saves the state to localStorage. So, if we refresh the page then count value will be restored.
import { persist } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterMiddlewareStore = create<CounterStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "counter-storage", // localStorage key name
    }
  )
);
