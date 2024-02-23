import { StateCreator } from "zustand";

export interface MobileDrawerType {
  isDrawerOpen: boolean;
  handleDrawerTogglerSet: (isOpen: boolean) => void;
  handleDrawerToggler: () => void;
}

const createMobileDrawerSlice: StateCreator<MobileDrawerType> = (set) => ({
  // the state
  isDrawerOpen: false,
  // the set function
  handleDrawerTogglerSet: (isOpen: boolean) =>
    set((state) => ({ isDrawerOpen: isOpen })),
  // the toggle function
  handleDrawerToggler: () =>
    set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
});

export default createMobileDrawerSlice;
