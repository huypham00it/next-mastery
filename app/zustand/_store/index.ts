import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// State types
interface States {
  dogs: number;
}

// Action types
interface Actions {
  increase: () => void;
  decrease: () => void;
}

export const useDogStore = create(
  persist<States & Actions>(
    (set) => ({
      dogs: 0,
      increase: () => set((state) => ({ dogs: state.dogs + 1 })),
      decrease: () => set((state) => ({ dogs: state.dogs - 1 })),
    }),
    {
      name: "dogStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
