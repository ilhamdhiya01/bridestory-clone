'use client';

import { AiOutlineClose } from 'react-icons/ai';
import Modal from './Modal';
import { useFilterVendorModal } from '@/app/hooks/useFilterVendorModal';
import { FaChevronRight } from 'react-icons/fa6';
import Container from '../Container';
import Button from '../Button';

const FilterVendorModal = () => {
  const { isOpen, onClose } = useFilterVendorModal();
  const body = (
    <div className='h-full'>
      <div className='flex justify-center items-center border-b py-4 relative'>
        <AiOutlineClose size={20} className='absolute left-2 text-[#848484]' />
        <h3 className='font-semibold'>Venue</h3>
      </div>
      <div>
        <Container>
          <div className='flex items-center justify-between py-4 border-b'>
            <h2 className='font-semibold text-[#252525]'>
              Ubah budget untuk <span>Venue</span>
            </h2>
            <div className='flex items-center'>
              <span className='text-[#aaaaaa] font-semibold'>All Budget</span>
              <FaChevronRight className='text-[#aaaaaa]' />
            </div>
          </div>
          <div className='flex items-center justify-between py-4 border-b'>
            <h2 className='font-semibold text-[#252525]'>
              Ubah lokasi <span>Venue</span>
            </h2>
            <div className='flex items-center'>
              <span className='text-[#aaaaaa] font-semibold'>Indonesia</span>
              <FaChevronRight className='text-[#aaaaaa]' />
            </div>
          </div>
          <div className='mt-16'>
            <Button label='Selesai' />
          </div>
        </Container>
      </div>
    </div>
  );

  return <Modal isOpen={isOpen} onClose={onClose} body={body} filter />;
};

export default FilterVendorModal;
