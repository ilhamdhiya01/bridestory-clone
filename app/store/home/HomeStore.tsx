import { create } from 'zustand';
import { HomeState, HomeStore } from '..';

const initialValue: HomeState = {
  isOpen: false,
};

export const useHomeStore = create<HomeStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
