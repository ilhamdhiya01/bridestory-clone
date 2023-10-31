import { type } from 'os';
import { IconType } from 'react-icons';

export type MenuItemProps = {
  label: string;
  icon: IconType;
  link: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  body: React.ReactElement;
  filter: boolean;
};

export type CategoryProps = {
  categoryName: string;
  id: number;
  selected: boolean;
};

export type VendorRecomendationItemProps = {
  categoryName: string;
  id: number;
  onSelected?: () => void;
  selected?: boolean;
};

export type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

export type Vendor = {
  name: string;
  image: string;
  slug: string;
};

export type VendorCategoryItemProps = {
  name: strin;
  slug: string;
  image: string;
};

export type VendorCategoryProps = {
  categoryName?: string;
  vendors?: Vendor[];
};
