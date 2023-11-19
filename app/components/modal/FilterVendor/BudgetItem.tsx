'use client';

import { FaCheck } from 'react-icons/fa6';

const BudgetItem: React.FC<{ budget: string; onSelected: () => void; selected: boolean }> = ({ budget, onSelected, selected }) => {
  return (
    <div onClick={onSelected} className='py-3 px-4'>
      <div className='flex justify-between items-center group'>
        <span className={`text-sm transition duration-200 group-hover:text-[#aaa] ${selected ? 'text-[#aaa]' : 'text-[#252525]'}`}>{budget}</span>
        {selected && <FaCheck className='text-[#eba1a1]' />}
      </div>
    </div>
  );
};

export default BudgetItem;
