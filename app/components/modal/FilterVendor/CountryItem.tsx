'use client';
import { FaChevronRight } from 'react-icons/fa6';

const CountryItem: React.FC<{ countryName: string; onSelected: () => void }> = ({ countryName, onSelected }) => {
  return (
    <div onClick={onSelected} className='flex justify-between items-center py-3 px-4'>
      <span className='text-sm text-[#252525]'>{countryName}</span>
      <FaChevronRight size={15} className='text-[#aaaaaa]' />
    </div>
  );
};

export default CountryItem;
