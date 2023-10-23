'use client';

import { FaCheck } from 'react-icons/fa6';

const CityItem: React.FC<{ cityName: string; onSelected: () => void; selected: boolean }> = ({ cityName, onSelected, selected }) => {
  return (
    <div onClick={onSelected} className='py-3 px-4'>
      <div className='flex justify-between items-center group'>
        <span className={`text-sm transition duration-200 group-hover:text-[#aaa] ${selected ? 'text-[#aaa]' : 'text-[#252525]'}`}>{cityName}</span>
        {selected && <FaCheck className='text-[#eba1a1]' />}
      </div>
    </div>
  );
};

export default CityItem;
