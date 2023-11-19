import { create } from 'zustand';
import { GlobalState, GlobalStore } from '.';

const initialValue: GlobalState = {
  isLoading: false,
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  ...initialValue,
  setLoading: (data) => set({ isLoading: data }),
}));
