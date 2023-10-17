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
};

export type CategoryProps = {
  categoryName: string;
  id: number;
  selected: boolean;
};

export type VendorRecomendationItemProps = {
  categoryName: string;
  id: number;
  onSelected: () => void;
  selected: boolean;
};
