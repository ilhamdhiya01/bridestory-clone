import { CategoryProps, VendorCategoryProps } from '..';

export type HomeState = {
  categories: CategoryProps[];
  vendorCategories: VendorCategoryProps[];
};

export type HomeAction = {
  setCategories: (data: CategoryProps[]) => void;
  setVendorCategories: (data: string[], setLoading: (data: boolean) => void) => void;
};

export type HomeStore = HomeState & HomeAction;

export type GlobalState = {
  isLoading: boolean;
};

export type GlobalAction = {
  setLoading: (data: boolean) => void;
};

export type GlobalStore = GlobalState & GlobalAction;
