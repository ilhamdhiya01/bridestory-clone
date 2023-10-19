'use client';

import CategoryItem from './CategoryItem';
import { useHomeStore } from '@/app/store/home/HomeStore';
import SliderMobileVersion from '../../SliderMobileVersion';

const VendorRecomendationList = () => {
  const { vendorSelected } = useHomeStore();

  if (vendorSelected === undefined || vendorSelected === null) {
    return;
  }

  return (
    <SliderMobileVersion>
      {vendorSelected.map((category) => (
        <CategoryItem key={category.id} categoryName={category.categoryName} />
      ))}
    </SliderMobileVersion>
  );
};

export default VendorRecomendationList;
