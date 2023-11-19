'use client';

import axios from 'axios';
import Container from '../../Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useHomeStore } from '@/app/store/home/HomeStore';
import { useVendorRecomendationModal } from '@/app/hooks/useVendorRecomendationModal';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { CategoryProps } from '@/app';
import CategoryItem from './CategoryItem';
import SliderMobileVersion from '../../SliderMobileVersion';
import useLocalStorage from '@/app/hooks/useLocalStorage';

type VendorRecomendationProps = {
  listSelected: CategoryProps[];
};

const VendorRecomendation: React.FC<VendorRecomendationProps> = ({ listSelected }) => {
  const { onOpen } = useVendorRecomendationModal();
  const { categories, setCategories } = useHomeStore();
  const [categorySelected, setCategorySelected] = useLocalStorage<string[]>('categorySelected', []);

  const selected = useMemo(() => {
    if (listSelected.length === 0) {
      return categories.filter((category) => categorySelected.includes(category.slug));
    }
    return listSelected;
  }, [categories, categorySelected, listSelected]);

  const fetchAllCategory = useCallback(async () => {
    try {
      const response = await axios.get('/api/category');
      const categories: CategoryProps[] = response.data;
      if (response.status === 200) {
        setCategories(categories);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [setCategories]);

  useEffect(() => {
    fetchAllCategory();
  }, [fetchAllCategory, setCategories]);

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
          <SliderMobileVersion>
            {selected.map((category) => (
              <CategoryItem key={category.id} categoryName={category.categoryName} />
            ))}
          </SliderMobileVersion>
        </div>
      </div>
    </>
  );
};

export default VendorRecomendation;
