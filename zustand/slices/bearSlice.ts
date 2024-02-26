import { StateCreator } from "zustand";

export interface BearType {
  bears: number;
  addBear: () => void;
}

const createBearSlice: StateCreator<BearType> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
});


export default createBearSlice