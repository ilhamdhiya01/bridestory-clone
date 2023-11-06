import { type } from 'os';
import { IconType } from 'react-icons';
import type { Vendor } from '@prisma/client';

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

export type Vendors = {
  vendor: Vendor;
};

export type VendorCategoryItemProps = {
  name: strin;
  slug: string;
  image: string;
};

export type VendorCategoryProps = {
  id: number;
  slug: string;
  categoryName: string;
  vendors: Vendors[];
};

export type Filter = {
  categoryName: string;
  categorySlug: string;
  budget: string;
  country: string;
  city: string;
};

export type Country = {
  countryName: string;
  countryCode: string;
  flag: string;
};

export type City = {
  cityName: string;
  adminName1: string;
  selected: boolean;
};

export type Budget = {
  id: number;
  price: string;
  selected: boolean;
};

export type FilterVendorState = {
  isOpen: boolean;
  initialFilter: Record<string, Filter>;
  countries: Country[];
  cities: City[];
  citySelected: boolean;
  budgetSelected: boolean;
  budgets: Budget[];
};
