'use client';

import Container from '../../Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useHomeStore } from '@/app/store/home/HomeStore';
import VendorRecomendationList from './VendorRecomendationList';
import { useEffect } from 'react';
import axios from 'axios';

const VendorRecomendation = () => {
  const { onOpen, setCategories } = useHomeStore();
  useEffect(() => {
    const fetchAllCategory = async () => {
      const response = await axios.get('/api/category');
      setCategories(response.data);
    };
    fetchAllCategory();
    console.log('render');
  }, []);

  return (
    <>
      <Container>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold text-[#252525]'>Rekomendasi Vendor Untuk Saya</h2>
          <HiDotsHorizontal size={25} onClick={onOpen} className='text-neutral-400 cursor-pointer' />
        </div>
      </Container>
      <div className='overflow-x-hidden'>
        <div className='w-full overflow-x-auto no-scrollbar'>
          <VendorRecomendationList />
        </div>
      </div>
    </>
  );
};

export default VendorRecomendation;
