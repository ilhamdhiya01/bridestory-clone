'use client';

import CategoryItem from './CategoryItem';
import { useHomeStore } from '@/app/store/home/HomeStore';

const VendorRecomendationList = () => {
  const { vendorSelected } = useHomeStore();

  if (vendorSelected === undefined || vendorSelected === null) {
    return;
  }

  return (
    <div className='overflow-x-hidden'>
      <div className='w-full gap-2 flex flex-row items-center overflow-x-auto no-scrollbar'>
        {vendorSelected.map((category) => (
          <CategoryItem key={category.id} categoryName={category.categoryName} />
        ))}
      </div>
    </div>
  );
};

export default VendorRecomendationList;
