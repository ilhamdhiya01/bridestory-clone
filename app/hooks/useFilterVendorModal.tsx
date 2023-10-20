import { create } from 'zustand';

export const useFilterVendorModal = create<{ isOpen: boolean; onOpen: () => void; onClose: () => void }>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
