'use client';

import { HiDotsHorizontal } from 'react-icons/hi';
import Container from '../../Container';
import VendorCategoryItem from './VendorCategoryItem';
import SliderMobileVersion from '../../SliderMobileVersion';
import { useFilterVendorModal } from '@/app/hooks/useFilterVendorModal';
import { VendorCategoryProps } from '@/app';
import { useCallback } from 'react';

const VendorCategory: React.FC<VendorCategoryProps> = ({ categoryName, vendors, id, slug }) => {
  const { onOpen, filters } = useFilterVendorModal();

  const showModalFilter = useCallback(() => {
    onOpen(slug, categoryName);
  }, [onOpen, slug, categoryName]);

  return (
    <div>
      <Container>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold text-[#252525]'>
              {categoryName} di {filters[slug] !== undefined ? filters[slug].city : 'Indonesia'}
            </h2>
            <p className='text-xs text-[#555555]'>
              Lihat Rekomendasi dengan <b>{filters[slug] !== undefined ? filters[slug].budget : 'All Budget'}</b> budget
            </p>
          </div>
          <HiDotsHorizontal onClick={showModalFilter} size={25} className='text-neutral-400 cursor-pointer' />
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
