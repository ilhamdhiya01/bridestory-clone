'use client';
import axios from 'axios';
import VendorRecomendationItem from './VendorRecomendationItem';
import { useCallback, useEffect, useState } from 'react';
import { CategoryProps } from '../..';

const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const fetchAllCategory = async () => {
    const response = await axios.get('/api/category');
    setCategories(response.data);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const handleSelected = useCallback(
    (index: number) => {
      const updatedCategories = [...categories];
      updatedCategories[index].selected = !updatedCategories[index].selected;
      setCategories(updatedCategories);
    },
    [categories, setCategories]
  );

  return (
    <div className='flex flex-wrap gap-2'>
      {categories.map((category, index) => (
        <VendorRecomendationItem key={category.id} selected={category.selected} onSelected={() => handleSelected(index)} categoryName={category.categoryName} id={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
