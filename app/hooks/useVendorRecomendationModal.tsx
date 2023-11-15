import { create } from 'zustand';
import { CategoryProps } from '..';

type VendorRecomendationState = {
  isOpen: boolean;
  selectedList: CategoryProps[];
  test: string[];
};

type VendorRecomendationAction = {
  onClose: () => void;
  onOpen: () => void;
  setSelectedList: (data: CategoryProps[]) => void;
  setTest: (data: string[]) => void;
};

const initialValue: VendorRecomendationState = {
  isOpen: false,
  selectedList: [],
  test: [],
};

type VendorRecomendationStore = VendorRecomendationState & VendorRecomendationAction;

export const useVendorRecomendationModal = create<VendorRecomendationStore>((set, get) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setSelectedList: (data) => set({ selectedList: data }),
  setTest: (data) => set({ test: data }),
}));
