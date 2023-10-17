'use client';

import Container from '../../Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import CategoryList from './VendorRecomendationList';
import { useHomeStore } from '@/app/store/home/HomeStore';

const VendorRecomendation = () => {
  const { onOpen } = useHomeStore();
  return (
    <>
      <Container>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold text-[#252525]'>Rekomendasi Vendor Untuk Saya</h2>
          <HiDotsHorizontal size={25} onClick={onOpen} className='text-neutral-400 cursor-pointer' />
        </div>
      </Container>
      <div className='overflow-x-hidden'>{/* <CategoryList /> */}</div>
    </>
  );
};

export default VendorRecomendation;
