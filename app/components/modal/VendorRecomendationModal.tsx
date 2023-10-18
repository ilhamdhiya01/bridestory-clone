'use client';

import React from 'react';
import Modal from './Modal';
import { useHomeStore } from '@/app/store/home/HomeStore';
import Container from '../Container';
import CategoryList from '../home/vendorRecomendation/VendorRecomendationList';
import Button from '../Button';

const VendorRecomendationModal = () => {
  const { isOpen, onClose } = useHomeStore();

  const body = (
    <div onClick={(e) => e.stopPropagation()} className='py-3'>
      <Container>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-[21px]'>Atur kategori di halaman Bridestory Anda</h3>
          <span className='text-sm text-[#555555]'>Pilih kategori vendor yang sedang Anda cari. Jangan khawatir, Anda bisa mengubahnya setiap saat</span>
        </div>
        <div className='mt-4'>
          <CategoryList />
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
