import { create } from 'zustand';
import { CategoryProps } from '..';

type VendorRecomendationState = {
  isOpen: boolean;
  selectedList: CategoryProps[];
};

type VendorRecomendationAction = {
  onClose: () => void;
  onOpen: () => void;
  setSelectedList: (data: CategoryProps[]) => void;
};

const initialValue: VendorRecomendationState = {
  isOpen: false,
  selectedList: [],
};

type VendorRecomendationStore = VendorRecomendationState & VendorRecomendationAction;

export const useVendorRecomendationModal = create<VendorRecomendationStore>((set, get) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setSelectedList: (data) => set({ selectedList: data }),
}));
