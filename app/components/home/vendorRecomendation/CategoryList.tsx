// // import CategoryItem from './CategoryItem';
// import { PrismaClient } from '@prisma/client';

// const CategoryList = async () => {
//   const prisma = new PrismaClient();
//   const categories = await prisma.category.findMany({
//     select: {
//       categoryName: true,
//       id: true,
//     },
//   });
//   return (
//     <div className='w-full flex flex-row items-center overflow-x-auto no-scrollbar mt-3'>
//       {categories.map((category) => (
//         <CategoryItem key={category.id} categoryName={category.categoryName} />
//       ))}
//     </div>
//   );
// };

// export default CategoryList;
