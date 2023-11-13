import { create } from 'zustand';

type Category = {
  slugCategory: string;
  categoryName: string;
};

type VendorRecomendationState = {
  isOpen: boolean;
};

const DEFAULT_SELECTED: Category = {
  slugCategory: '',
  categoryName: '',
};

type VendorRecomendationAction = {
  onClose: () => void;
  onOpen: () => void;
};

const initialValue: VendorRecomendationState = {
  isOpen: false,
};

type VendorRecomendationStore = VendorRecomendationState & VendorRecomendationAction;

export const useVendorRecomendationModal = create<VendorRecomendationStore>((set, get) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
