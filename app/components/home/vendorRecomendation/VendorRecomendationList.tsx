'use client';

import CategoryItem from './CategoryItem';
import { useHomeStore } from '@/app/store/home/HomeStore';
import SliderMobileVersion from '../../SliderMobileVersion';
import { CategoryProps } from '@/app';
import useLocalStorage from '@/app/hooks/useLocalStorage';

type VendorRecomendationListProps = {
  vendors?: CategoryProps[];
};
const VendorRecomendationList: React.FC<VendorRecomendationListProps> = ({ vendors }) => {
  const [categorySelected, setCategorySelected] = useLocalStorage<string[]>('categorySelected', []);
  const { categories } = useHomeStore();
  const vendorRecomendation = categories.filter((vendor) => categorySelected.includes(vendor.slug));
  console.log(vendorRecomendation);

  return <SliderMobileVersion>{vendorRecomendation ? vendorRecomendation.map((vendor) => <CategoryItem key={vendor.slug} categoryName={vendor.categoryName} />) : vendors?.map((category) => <CategoryItem key={category.id} categoryName={category.categoryName} />)}</SliderMobileVersion>;
};

export default VendorRecomendationList;
