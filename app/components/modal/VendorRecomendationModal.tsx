'use client';

import { useCallback, useEffect } from 'react';
import { useHomeStore } from '@/app/store/home/HomeStore';
import { useVendorRecomendationModal } from '@/app/hooks/useVendorRecomendationModal';
import Modal from './Modal';
import Container from '../Container';
import Button from '../Button';
import VendorRecomendationItem from '../home/vendorRecomendation/VendorRecomendationItem';
import { useGlobalStore } from '@/app/store/GlobalStore';
import useLocalStorage from '@/app/hooks/useLocalStorage';

const VendorRecomendationModal = () => {
  const { isOpen, onClose, setSelectedList, setTest } = useVendorRecomendationModal();
  const { categories, setCategories, setVendorCategories } = useHomeStore();
  const { setLoading } = useGlobalStore();
  const [categorySelected, setCategorySelected] = useLocalStorage<string[]>('categorySelected', []);

  useEffect(() => {
    setCategories(
      categories.map((category) => {
        if (categorySelected.includes(category.slug)) {
          return { ...category, selected: true };
        }
        return category;
      })
    );
  }, [categorySelected, isOpen, setCategories]);

  const handleSelected = useCallback(
    (slugCategory: string) => {
      setCategories(
        categories.map((category) => {
          if (category.slug === slugCategory) {
            if (categorySelected.includes(slugCategory)) {
              setCategorySelected(categorySelected.filter((slug) => slug !== slugCategory));
            } else {
              setCategorySelected([...categorySelected, category.slug]);
            }
            return { ...category, selected: !category.selected };
          }
          return category;
        })
      );
    },
    [categories, categorySelected, setCategories, setCategorySelected]
  );

  const handleFilterSelectedCategory = () => {
    onClose();
    setLoading(true);
    setVendorCategories(
      categorySelected.map((category) => category),
      setLoading
    );
    setSelectedList(categories.filter((category) => categorySelected.includes(category.slug)));
  };

  const body = (
    <div className='py-3'>
      <Container>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-[21px]'>Atur kategori di halaman Bridestory Anda</h3>
          <span className='text-sm text-[#555555]'>Pilih kategori vendor yang sedang Anda cari. Jangan khawatir, Anda bisa mengubahnya setiap saat</span>
        </div>
        <div className='flex flex-row flex-wrap gap-2 mt-4'>
          {categories.map((category) => (
            <VendorRecomendationItem key={category.id} selected={category.selected} onSelected={() => handleSelected(category.slug)} categoryName={category.categoryName} id={category.id} />
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
