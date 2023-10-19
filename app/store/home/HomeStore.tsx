import { create } from 'zustand';
import { HomeState, HomeStore } from '..';

const initialValue: HomeState = {
  isOpen: false,
  categories: [],
  vendorSelected: undefined,
};

export const useHomeStore = create<HomeStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setCategories: (data) => set({ categories: data }),
  setVendorSelected: (data) => set({ vendorSelected: data }),
}));
