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
import useLocalStorageArray from './hooks/useLocalStorageArray';
import { useFilterVendorModal } from './hooks/useFilterVendorModal';

const Home = () => {
  const { setVendorCategories, vendorSelected, vendorCategories } = useHomeStore();
  const { setLoading, isLoading } = useGlobalStore();
  const [storageVedorSelected, setStorageVedorSelected] = useLocalStorageArray<CategoryProps>('vendorSelected', []);
  const [test, setTest] = useState<Filter>({ categoryName: '', categorySlug: '', budget: '', country: '', city: '' });
  const { filters } = useFilterVendorModal();
  useEffect(() => {
    // setTest({ ...test, initialFilter });
    setLoading(true);
    setVendorCategories(storageVedorSelected?.map((vendor) => vendor.id) || [], setLoading);
  }, [setVendorCategories, vendorSelected, setLoading, storageVedorSelected]);

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
