'use client';

const CategoryItem: React.FC<{ categoryName: string }> = ({ categoryName }) => {
  return (
    <div
      className={`
        mt-4
        first:ml-4
        last:mr-4
        border 
        text-center
        px-5 
        py-2
        text-sm
        rounded-full 
        text-[#eba1a1] 
        border-[#eba1a1] 
        cursor-pointer
      `}
    >
      <span
        className={`
          transition 
          duration-200 
          text-[#eba1a1]
          whitespace-nowrap
        `}
      >
        {categoryName}
      </span>
    </div>
  );
};

export default CategoryItem;
