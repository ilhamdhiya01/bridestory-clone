import CategoryItem from './CategoryItem';

const CategoryList = () => {
  return (
    <div className='w-full flex flex-row items-center overflow-x-auto no-scrollbar mt-3'>
      <CategoryItem />
    </div>
  );
};

export default CategoryList;
