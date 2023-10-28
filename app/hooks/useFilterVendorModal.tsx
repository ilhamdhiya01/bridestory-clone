import { create } from 'zustand';

type Filter = {
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
  filters: Filter;
  countries: Country[];
  cities: City[];
  citySelected: boolean;
  budgetSelected: boolean;
  budgets: Budget[];
};

type FilterVendorAction = {
  onClose: () => void;
  onOpen: () => void;
  setFilter: (data: Filter) => void;
  setCountries: (data: Country[]) => void;
  setCites: (data: City[]) => void;
  setCitySelected: (data: boolean) => void;
  setBudgetSelected: (data: boolean) => void;
  setBudgets: (data: Budget[]) => void;
};

type FilterVendorStore = FilterVendorState & FilterVendorAction;

const initialValue: FilterVendorState = {
  isOpen: false,
  filters: {
    budget: 'All Budget',
    country: 'Indonesia',
    city: 'Indonesia',
  },
  countries: [],
  cities: [],
  citySelected: false,
  budgetSelected: false,
  budgets: [],
};

export const useFilterVendorModal = create<FilterVendorStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setFilter: (data) => set({ filters: data }),
  setCountries: (data) => set({ countries: data }),
  setCites: (data) => set({ cities: data }),
  setCitySelected: (data) => set({ citySelected: data }),
  setBudgetSelected: (data) => set({ budgetSelected: data }),
  setBudgets: (data) => set({ budgets: data }),
}));
