import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// creating custom hook -> useCounter() /-----\ here set method inside the callback function allows us to change our initial state
export const useCounter = create<CounterStore>((set) => ({
  // defining the state
  count: 0, // initial value of state

  // changing the value of our state
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
