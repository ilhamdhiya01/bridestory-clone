'use client';

import Container from '../../Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import CategoryItem from './CategoryItem';

const VendorRecomendation = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold text-[#252525]'>Rekomendasi Vendor Untuk Saya</h2>
          <HiDotsHorizontal size={25} className='text-neutral-400' />
        </div>
      </Container>
      <div className='overflow-x-hidden'>
        <div className='w-full flex flex-row items-center overflow-x-auto no-scrollbar mt-3'>
          <CategoryItem />
        </div>
      </div>
    </>
  );
};

export default VendorRecomendation;
