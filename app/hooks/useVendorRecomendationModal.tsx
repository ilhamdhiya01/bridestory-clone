import { create } from 'zustand';

type Category = {
  slugCategory: string;
  categoryName: string;
  selected: boolean;
};

type VendorRecomendationState = {
  isOpen: boolean;
  selected: Record<string, Category>;
};

const DEFAULT_SELECTED: Category = {
  slugCategory: '',
  categoryName: '',
  selected: false,
};

type VendorRecomendationAction = {
  onClose: () => void;
  onOpen: () => void;
  getVendorRecomendationBySlugCategory: (slugCategory: string) => Category;
};

const initialValue: VendorRecomendationState = {
  isOpen: false,
  selected: {},
};

type VendorRecomendationStore = VendorRecomendationState & VendorRecomendationAction;

export const useVendorRecomendationModal = create<VendorRecomendationStore>((set, get) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  getVendorRecomendationBySlugCategory: (slugCategory) => {
    const { selected } = get();
    if (!Object.hasOwn(selected, slugCategory)) {
      set((state) => ({ selected: { ...state.selected, [slugCategory]: DEFAULT_SELECTED } }));
      return DEFAULT_SELECTED;
    }
    return selected[slugCategory];
  },
}));
