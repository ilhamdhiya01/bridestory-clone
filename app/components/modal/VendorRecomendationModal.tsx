'use client';

import { useCallback, useEffect } from 'react';
import { useHomeStore } from '@/app/store/home/HomeStore';
import useLocalStorageArray from '@/app/hooks/useLocalStorageArray';
import Modal from './Modal';
import Container from '../Container';
import Button from '../Button';
import VendorRecomendationItem from '../home/vendorRecomendation/VendorRecomendationItem';
import { CategoryProps } from '@/app';

const VendorRecomendationModal = () => {
  const { isOpen, onClose, categories, setCategories, setVendorSelected, vendorSelected } = useHomeStore();
  const [storageVedorSelected, setStorageVedorSelected] = useLocalStorageArray<CategoryProps>('vendorSelected', []);

  useEffect(() => {
    setVendorSelected(storageVedorSelected);
  }, [storageVedorSelected]);

  const handleVendorSelected = (id: number) => {
    const clicked = categories.find((item) => item.id === id);
    if (clicked) {
      if (storageVedorSelected.some((category) => category.id === id)) {
        setStorageVedorSelected(storageVedorSelected.filter((category) => category.id !== id));
        console.log('hilang');
      } else {
        setStorageVedorSelected([...storageVedorSelected, clicked]);
        console.log('tambah');
      }
    }
  };

  // handle select category and change bg when category selected
  const handleSelected = (index: number) => {
    const updatedCategories = [...categories];
    updatedCategories[index].selected = !updatedCategories[index].selected;
    setCategories(updatedCategories);
    // get data category selected and store to localStorage
    handleVendorSelected(updatedCategories[index].id);
  };

  const body = (
    <div onClick={(e) => e.stopPropagation()} className='py-3'>
      <Container>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-[21px]'>Atur kategori di halaman Bridestory Anda</h3>
          <span className='text-sm text-[#555555]'>Pilih kategori vendor yang sedang Anda cari. Jangan khawatir, Anda bisa mengubahnya setiap saat</span>
        </div>
        <div className='flex flex-row flex-wrap gap-2 mt-4'>
          {categories.map((category, index) => (
            <VendorRecomendationItem key={category.id} selected={category.selected} onSelected={() => handleSelected(index)} categoryName={category.categoryName} id={category.id} />
          ))}
        </div>
        <div className='mt-3'>
          <Button label='Selesai' onClick={onClose} />
        </div>
      </Container>
    </div>
  );

  return <Modal isOpen={isOpen} onClose={onClose} body={body} />;
};

export default VendorRecomendationModal;
