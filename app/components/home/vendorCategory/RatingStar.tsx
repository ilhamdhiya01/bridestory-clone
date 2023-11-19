'use client';
import { AiFillStar } from 'react-icons/ai';

const RatingStar = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-row items-center gap-1'>
        <AiFillStar size={11} className='text-[#d9d8d8]' />
        <AiFillStar size={11} className='text-[#d9d8d8]' />
        <AiFillStar size={11} className='text-[#d9d8d8]' />
        <AiFillStar size={11} className='text-[#d9d8d8]' />
        <AiFillStar size={11} className='text-[#d9d8d8]' />
      </div>
      <p className='text-[#555555] text-xs leading-3'>Berikan review untuk Vendor ini</p>
    </div>
  );
};

export default RatingStar;
