import { CategoryProps } from '..';

export type HomeState = {
  categories: CategoryProps[];
  vendorSelected?: CategoryProps[];
};

export type HomeAction = {
  setCategories: (data: CategoryProps[]) => void;
  setVendorSelected: (data: CategoryProps[]) => void;
};

export type HomeStore = HomeState & HomeAction;
