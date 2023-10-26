import { create } from 'zustand';
import { HomeState, HomeStore } from '..';

const initialValue: HomeState = {
  categories: [],
  vendorSelected: undefined,
};

export const useHomeStore = create<HomeStore>((set) => ({
  ...initialValue,
  setCategories: (data) => set({ categories: data }),
  setVendorSelected: (data) => set({ vendorSelected: data }),
}));
