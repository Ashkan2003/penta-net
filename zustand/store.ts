import { create } from "zustand";
import { FishType } from "./slices/fishSlice";
import { BearType } from "./slices/bearSlice";
import createFishSlice from "./slices/fishSlice";
import createBearSlice from "./slices/bearSlice";
import createMobileDrawerSlice, {
  MobileDrawerType,
} from "./slices/mobileDrawerSlice";

// to bind(conect) tow or more slices, zusted recommanded this way
// see docs for "slicesPattern"
export const useBoundStore = create<MobileDrawerType & FishType & BearType>()(
  (...a) => ({
    ...createMobileDrawerSlice(...a),
    ...createFishSlice(...a),
    ...createBearSlice(...a),
  })
);
