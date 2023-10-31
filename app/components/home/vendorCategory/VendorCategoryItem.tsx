'use client';

import Image from 'next/image';
import RatingStar from './RatingStar';
import { VendorCategoryItemProps } from '@/app';

const VendorCategoryItem: React.FC<VendorCategoryItemProps> = () => {
  return (
    <div className='bg-white flex flex-col gap-2 relative w-full box-border cursor-pointer first:ml-4 last:mr-4'>
      <div className='overflow-hidden rounded-lg w-[140px] h-[140px]'>
        <Image src={'/images/product/wedding-planning/img_20220706_105050_393-eXf8n5jPB.webp'} alt='product image 1' width={500} height={500} className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col gap-2 max-w-[135px]'>
        <h3 className='text-[#252525] text-sm font-semibold truncate'>Ilham Dhiya Ulhaq Selalu Sayang Annisa</h3>
        <RatingStar />
      </div>
    </div>
  );
};

export default VendorCategoryItem;
