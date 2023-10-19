'use client';

import Container from '../../Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useHomeStore } from '@/app/store/home/HomeStore';
import VendorRecomendationList from './VendorRecomendationList';
import { useEffect } from 'react';
import axios from 'axios';
import { CategoryProps } from '@/app';

const VendorRecomendation = () => {
  const { onOpen, setCategories, vendorSelected, categories } = useHomeStore();

  useEffect(() => {
    const fetchAllCategory = async () => {
      const response = await axios.get('/api/category');
      setCategories(response.data);
    };
    fetchAllCategory();
  }, []);

  // check vendor selected from localStorage and set selected vendor to true
  const checkVendorSelected = () => {
    const initializedCategories = categories.map((category) => ({
      ...category,
      selected: vendorSelected?.some((selected) => selected.id === category.id),
    })) as CategoryProps[];
    setCategories(initializedCategories);
  };

  const showVendorSelected = () => {
    checkVendorSelected();
    onOpen();
  };

  return (
    <>
      <Container>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold text-[#252525]'>Rekomendasi Vendor Untuk Saya</h2>
          <HiDotsHorizontal size={25} onClick={showVendorSelected} className='text-neutral-400 cursor-pointer' />
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
