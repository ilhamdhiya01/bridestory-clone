'use client';

import CategoryItem from './CategoryItem';
import { useHomeStore } from '@/app/store/home/HomeStore';
import SliderMobileVersion from '../../SliderMobileVersion';
import { CategoryProps } from '@/app';
import useLocalStorageArray from '@/app/hooks/useLocalStorage';

type VendorRecomendationListProps = {
  vendors?: CategoryProps[];
};
const VendorRecomendationList: React.FC<VendorRecomendationListProps> = ({ vendors }) => {
  const { vendorSelected } = useHomeStore();

  // if (vendorSelected === undefined || vendorSelected === null) {
  //   return;
  // }

  return <SliderMobileVersion>{vendorSelected ? vendorSelected.map((category) => <CategoryItem key={category.id} categoryName={category.categoryName} />) : vendors?.map((category) => <CategoryItem key={category.id} categoryName={category.categoryName} />)}</SliderMobileVersion>;
};

export default VendorRecomendationList;
