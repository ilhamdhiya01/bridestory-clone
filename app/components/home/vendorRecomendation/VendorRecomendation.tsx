'use client';

import axios from 'axios';
import Container from '../../Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useHomeStore } from '@/app/store/home/HomeStore';
import { useVendorRecomendationModal } from '@/app/hooks/useVendorRecomendationModal';
import { useCallback, useEffect } from 'react';
import { CategoryProps } from '@/app';
import useLocalStorageArray from '@/app/hooks/useLocalStorage';
import VendorRecomendationList from './VendorRecomendationList';
import CategoryItem from './CategoryItem';
import SliderMobileVersion from '../../SliderMobileVersion';

const VendorRecomendation = () => {
  const { onOpen } = useVendorRecomendationModal();
  const { setCategories, vendorSelected, categories, setVendorSelected } = useHomeStore();
  // const [storageVedorSelected, setStorageVedorSelected] = useLocalStorageArray<CategoryProps>('vendorSelected', []);

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
    // check localstorage have a package selected, set initial vendor if localstorage is null
    // if (storageVedorSelected.length === 0) {
    //   const initialCategories = [
    //     { categoryName: 'Venue', id: 1, selected: true },
    //     { categoryName: 'Wedding Planner', id: 2, selected: true },
    //     { categoryName: 'Fotografi', id: 3, selected: true },
    //   ];
    //   setStorageVedorSelected(initialCategories);
    //   setVendorSelected(initialCategories);
    // }

    fetchAllCategory();
  }, [fetchAllCategory, setCategories, setVendorSelected]);

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
          {/* <VendorRecomendationList vendors={storageVedorSelected} /> */}
          <SliderMobileVersion>
            {vendorSelected?.map((category) => (
              <CategoryItem key={category.id} categoryName={category.categoryName} />
            ))}
          </SliderMobileVersion>
        </div>
      </div>
    </>
  );
};

export default VendorRecomendation;
