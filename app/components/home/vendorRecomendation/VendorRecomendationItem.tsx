'use client';
import { VendorRecomendationItemProps } from '../../..';

const VendorRecomendationItem: React.FC<VendorRecomendationItemProps> = ({ onSelected, categoryName, id, selected }) => {
  return (
    <div
      onClick={onSelected}
      className={`
        transition 
        duration-200 
        border 
        inline-block 
        border-[#d9d8d8] 
        px-5 
        py-2 
        text-sm 
        rounded-full 
        text-[#aaaaaa] 
        group 
        hover:border-[#eba1a1] 
        cursor-pointer
        active:bg-[#eba1a1]
        ${selected ? 'bg-[#eba1a1] border-[#eba1a1]' : ''}
        `}
    >
      <span
        className={`
          transition 
          duration-200 
          group-active:text-white
          ${selected ? 'text-white' : ''}
          `}
      >
        {categoryName}
      </span>
    </div>
  );
};

export default VendorRecomendationItem;
