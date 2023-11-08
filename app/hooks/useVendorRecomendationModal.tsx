import { create } from 'zustand';

type VendorRecomendationState = {
  isOpen: boolean;
};

type VendorRecomendationAction = {
  onClose: () => void;
  onOpen: () => void;
};

type VendorRecomendationStore = VendorRecomendationState & VendorRecomendationAction;

export const useVendorRecomendationModal = create<VendorRecomendationStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
