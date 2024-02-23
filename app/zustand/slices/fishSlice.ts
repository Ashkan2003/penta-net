import { StateCreator } from "zustand";

export interface FishType {
  fishes: number;
  addFishes: () => void;
}

const createFishSlice: StateCreator<FishType> = (set) => ({
  fishes: 0,
  addFishes: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export default createFishSlice;
