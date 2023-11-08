'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHomeStore } from '@/app/store/home/HomeStore';
import useLocalStorageArray from '@/app/hooks/useLocalStorageArray';
import { useVendorRecomendationModal } from '@/app/hooks/useVendorRecomendationModal';
import Modal from './Modal';
import Container from '../Container';
import Button from '../Button';
import VendorRecomendationItem from '../home/vendorRecomendation/VendorRecomendationItem';
import { CategoryProps, VendorCategoryProps } from '@/app';
import { useGlobalStore } from '@/app/store/GlobalStore';

const VendorRecomendationModal = () => {
  const { isOpen, selected, onClose, getVendorRecomendationBySlugCategory, setSelected } = useVendorRecomendationModal();
  const { categories, vendorSelected, setCategories, setVendorSelected, setVendorCategories } = useHomeStore();
  const { setLoading } = useGlobalStore();
  const [storageVedorSelected, setStorageVedorSelected] = useLocalStorageArray<CategoryProps>('vendorSelected', []);

  // const select = useMemo(() => test(), [getVendorRecomendationBySlugCategory]);
  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selected));
    console.log(selected);
  }, [storageVedorSelected, setVendorSelected, selected]);

  // const test = (slug: string) => {
  //   getVendorRecomendationBySlugCategory(slug);
  // };

  const handleVendorSelected = (slugCategory: string) => {
    const clicked = categories.find((item) => item.slug === slugCategory);
    console.log(clicked);
    if (clicked) {
      if (selected.hasOwnProperty(slugCategory)) {
        console.log('hilangkan');
        // setStorageVedorSelected(storageVedorSelected.filter((category) => category.id !== id));
        // setSelected(slugCategory, {...selected, })
      } else {
        console.log('tambahkan');
        // setStorageVedorSelected([...storageVedorSelected, clicked]);
      }
    }
  };

  // handle select category and change bg when category selected
  // const handleSelected = (index: number) => {
  //   const updatedCategories = [...categories];
  //   updatedCategories[index].selected = !updatedCategories[index].selected;
  //   setCategories(updatedCategories);
  //   // get data category selected and store to localStorage
  //   handleVendorSelected(updatedCategories[index].slug);
  // };

  const handleSelected = useCallback(
    (slugCategory: string, index: number) => {
      getVendorRecomendationBySlugCategory(slugCategory);
      // setSelected(slugCategory, { ...select, onSelected: !set });
      // setKey(slugCategory);
      // getVendorRecomendationBySlugCategory(category.slug).slugCategory
      // const updatedCategories = [...categories];
      // updatedCategories[index].selected = !updatedCategories[index].selected;
      // setCategories(updatedCategories);
      // handleVendorSelected(slugCategory);
    },
    [getVendorRecomendationBySlugCategory]
  );

  const handleFilterSelectedCategory = () => {
    onClose();
    setLoading(true);
    setVendorCategories(storageVedorSelected?.map((vendor) => vendor.id) || [], setLoading);
  };

  const body = (
    <div className='py-3'>
      <Container>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-[21px]'>Atur kategori di halaman Bridestory Anda</h3>
          <span className='text-sm text-[#555555]'>Pilih kategori vendor yang sedang Anda cari. Jangan khawatir, Anda bisa mengubahnya setiap saat</span>
        </div>
        <div className='flex flex-row flex-wrap gap-2 mt-4'>
          {categories.map((category, index) => (
            <VendorRecomendationItem key={category.id} selected={category.selected} onSelected={() => handleSelected(category.slug, index)} categoryName={category.categoryName} id={category.id} />
          ))}
        </div>
        <div className='mt-3'>
          <Button label='Selesai' onClick={handleFilterSelectedCategory} />
        </div>
      </Container>
    </div>
  );

  return <Modal isOpen={isOpen} onClose={onClose} body={body} />;
};

export default VendorRecomendationModal;
