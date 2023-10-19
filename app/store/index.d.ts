import { CategoryProps } from '..';

export type HomeState = {
  isOpen: boolean;
  categories: CategoryProps[];
  vendorSelected?: CategoryProps[];
};

export type HomeAction = {
  onOpen: () => void;
  onClose: () => void;
  setCategories: (data: CategoryProps[]) => void;
  setVendorSelected: (data: CategoryProps[]) => void;
};

export type HomeStore = HomeState & HomeAction;
