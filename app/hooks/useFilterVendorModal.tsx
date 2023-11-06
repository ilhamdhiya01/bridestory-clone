import { create } from 'zustand';

type Filter = {
  categorySlug: string;
  budget: string;
  country: string;
  city: string;
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

type FilterVendorState = {
  isOpen: boolean;
  filters: Record<string, Filter>;
  countries: Country[];
  cities: City[];
  citySelected: boolean;
  budgetSelected: boolean;
  budgets: Budget[];
};

type FilterVendorAction = {
  onClose: () => void;
  onOpen: () => void;
  setFilter: (data: string) => void;
  setCountries: (data: Country[]) => void;
  setCites: (data: City[]) => void;
  setCitySelected: (data: boolean) => void;
  setBudgetSelected: (data: boolean) => void;
  setBudgets: (data: Budget[]) => void;
};

type FilterVendorStore = FilterVendorState & FilterVendorAction;

const DEFAULT_FILTER: Filter = {
  budget: '',
  categorySlug: '',
  city: '',
  country: '',
};

const initialValue: FilterVendorState = {
  isOpen: false,
  filters: {},
  countries: [],
  cities: [],
  citySelected: false,
  budgetSelected: false,
  budgets: [],
};

export const useFilterVendorModal = create<FilterVendorStore>((set, get) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setFilter: (category) => {
    const { filters } = get();
    if (!Object.hasOwn(filters, category)) {
      set((state) => ({ filters: { ...state.filters, [category]: DEFAULT_FILTER } }));
      return DEFAULT_FILTER;
    }
    return filters[category];
  },
  setCountries: (data) => set({ countries: data }),
  setCites: (data) => set({ cities: data }),
  setCitySelected: (data) => set({ citySelected: data }),
  setBudgetSelected: (data) => set({ budgetSelected: data }),
  setBudgets: (data) => set({ budgets: data }),
}));
