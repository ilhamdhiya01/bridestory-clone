'use client';

import axios from 'axios';
import Banner from './components/home/banner/Banner';
import VendorCategory from './components/home/vendorCategory/VendorCategory';
import VendorRecomendation from './components/home/vendorRecomendation/VendorRecomendation';
import { useEffect, useState } from 'react';
import { useHomeStore } from './store/home/HomeStore';
import { CategoryProps, Filter, VendorCategoryProps } from '.';
import Loading from './components/Loading';
import { useGlobalStore } from './store/GlobalStore';
import useLocalStorageArray from './hooks/useLocalStorage';
import { useFilterVendorModal } from './hooks/useFilterVendorModal';
import useLocalStorage from './hooks/useLocalStorage';

const Home = () => {
  const { setVendorCategories, vendorSelected, vendorCategories } = useHomeStore();
  const { setLoading, isLoading } = useGlobalStore();
  const [categorySelected, setCategorySelected] = useLocalStorage<string[]>('vendorSelected', []);
  const { filters } = useFilterVendorModal();
  useEffect(() => {
    setLoading(true);
    setVendorCategories(
      categorySelected.map((category) => category),
      setLoading
    );
  }, [setVendorCategories, vendorSelected, setLoading, categorySelected]);

  // let initialFilter = {
  //   categorySlug: '',
  //   categoryName: '',
  //   budget: 'All Budget',
  //   country: 'Jepang',
  //   city: 'Jepang',
  // };

  // const handleFilter = () => {
  //   return { ...initialFilter };
  // };

  return (
    <div className='mt-14 bg-white'>
      <Banner />
      <div className='mt-8'>
        <VendorRecomendation />
      </div>
      <div className='mt-8 flex flex-col gap-10'>{isLoading ? <Loading /> : vendorCategories.map((vendorCategory) => <VendorCategory key={vendorCategory.id} id={vendorCategory.id} slug={vendorCategory.slug} categoryName={vendorCategory.categoryName} vendors={vendorCategory.vendors} />)}</div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
