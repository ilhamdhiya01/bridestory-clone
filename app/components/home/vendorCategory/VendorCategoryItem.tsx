'use client';

import Image from 'next/image';
import RatingStar from './RatingStar';
import { VendorCategoryItemProps } from '@/app';

const VendorCategoryItem: React.FC<VendorCategoryItemProps> = ({ name, slug, image }) => {
  return (
    <div className='bg-white flex flex-col gap-2 relative w-full box-border cursor-pointer first:ml-4 last:mr-4'>
      <div className='overflow-hidden rounded-xl w-[140px] h-[140px]'>
        <Image src={`/images/product/wedding-planning/${image}`} alt='product image 1' width={500} height={500} className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col gap-2 max-w-[135px]'>
        <h3 className='text-[#252525] text-sm font-semibold truncate'>{name}</h3>
        <RatingStar />
      </div>
    </div>
  );
};

export default VendorCategoryItem;
