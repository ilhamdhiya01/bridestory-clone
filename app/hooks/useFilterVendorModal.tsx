import { create } from 'zustand';

export type Filter = {
  slugCategory?: string;
  budget?: string;
  country?: string;
  city?: string;
};

type Country = {
  countryName: string;
  countryCode: string;
  flag: string;
};

type City = {
  cityName: string;
  adminName1: string;
  selected: boolean;
};

type Budget = {
  id: number;
  price: string;
  selected: boolean;
};

type FilterModalData = {
  categoryName: string;
  slugCategory: string;
};

type FilterVendorState = {
  isOpen: boolean;
  filters: Record<string, Filter>;
  countries: Country[];
  cities: City[];
  budgets: Budget[];
  filterModalData: FilterModalData;
};

type FilterVendorAction = {
  onClose: () => void;
  onOpen: (slugCategory: string, categoryName: string) => void;
  getFilterBySlugCategory: (data: string) => Filter;
  setFilters: (category: string, data: Filter) => void;
  setCountries: (data: Country[]) => void;
  setCites: (data: City[]) => void;
  setBudgets: (data: Budget[]) => void;
};

type FilterVendorStore = FilterVendorState & FilterVendorAction;

export const DEFAULT_FILTER: Filter = {
  budget: 'All Budget',
  slugCategory: '',
  city: 'Indonesia',
  country: 'ID',
};

const initialValue: FilterVendorState = {
  isOpen: false,
  filters: {},
  countries: [],
  cities: [],
  budgets: [],
  filterModalData: { slugCategory: '', categoryName: '' },
};

export const useFilterVendorModal = create<FilterVendorStore>((set, get) => ({
  ...initialValue,
  onOpen: (slugCategory, categoryName) => set({ isOpen: true, filterModalData: { slugCategory: slugCategory, categoryName: categoryName } }),
  onClose: () => set({ isOpen: false }),
  getFilterBySlugCategory: (slugCategory) => {
    const { filters } = get();
    // check if slugCategory not exist and set slug to be key
    if (!Object.hasOwn(filters, slugCategory)) {
      set((state) => ({ filters: { ...state.filters, [slugCategory]: DEFAULT_FILTER } }));
      return DEFAULT_FILTER;
    }
    // if slugCategory already exist return all filters by slugCateory
    return filters[slugCategory];
  },
  // function for set value by key slugCategory
  setFilters: (slugCategory, data) => set((state) => ({ filters: { ...state.filters, [slugCategory]: data } })),
  setCountries: (data) => set({ countries: data }),
  setCites: (data) => set({ cities: data }),
  setBudgets: (data) => set({ budgets: data }),
}));
