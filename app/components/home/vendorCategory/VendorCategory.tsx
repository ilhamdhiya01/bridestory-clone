'use client';

import { HiDotsHorizontal } from 'react-icons/hi';
import Container from '../../Container';
import VendorCategoryItem from './VendorCategoryItem';
import SliderMobileVersion from '../../SliderMobileVersion';
import { useFilterVendorModal } from '@/app/hooks/useFilterVendorModal';
import { VendorCategoryProps } from '@/app';

const VendorCategory: React.FC<VendorCategoryProps> = ({ categoryName, vendors, id }) => {
  const { onOpen, filters } = useFilterVendorModal();
  return (
    <div>
      <Container>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold text-[#252525]'>
              {categoryName} di {filters.city}
            </h2>
            <p className='text-xs text-[#555555]'>
              Lihat Rekomendasi dengan <b>{filters.budget === 'All Budget' ? 'Semua' : filters.budget}</b> budget
            </p>
          </div>
          <HiDotsHorizontal onClick={onOpen} size={25} className='text-neutral-400 cursor-pointer' />
        </div>
      </Container>
      <div className='mt-4'>
        <SliderMobileVersion>
          {vendors.map((item, index) => (
            <VendorCategoryItem key={index} name={item.vendor.name} image={item.vendor.image} slug={item.vendor.slug} />
          ))}
        </SliderMobileVersion>
      </div>
    </div>
  );
};

export default VendorCategory;
