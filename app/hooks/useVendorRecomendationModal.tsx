import { create } from 'zustand';

type Category = {
  slugCategory: string;
  categoryName: string;
  onSelected: boolean;
};

type VendorRecomendationState = {
  isOpen: boolean;
  selected: Record<string, Category>;
};

const DEFAULT_SELECTED: Category = {
  slugCategory: '',
  categoryName: '',
  onSelected: false,
};

type VendorRecomendationAction = {
  onClose: () => void;
  onOpen: () => void;
  getVendorRecomendationBySlugCategory: (slugCategory: string) => Category;
  setSelected: (slugCategory: string, data: Category) => void;
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

    if (selected.hasOwnProperty(slugCategory)) {
      set((state) => {
        const updatedSelected = { ...state.selected };
        delete updatedSelected[slugCategory];
        return { selected: updatedSelected };
      });
    }

    if (!selected.hasOwnProperty(slugCategory)) {
      set((state) => ({ selected: { ...state.selected, [slugCategory]: { ...DEFAULT_SELECTED, onSelected: !DEFAULT_SELECTED.onSelected, slugCategory: slugCategory } } }));
      return DEFAULT_SELECTED;
    }

    return selected[slugCategory];
  },
  setSelected: (slugCategory, data) => set((state) => ({ selected: { ...state.selected, [slugCategory]: data } })),
}));
