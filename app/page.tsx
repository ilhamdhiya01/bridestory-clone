'use client';

import axios from 'axios';
import Banner from './components/home/banner/Banner';
import VendorCategory from './components/home/vendorCategory/VendorCategory';
import VendorRecomendation from './components/home/vendorRecomendation/VendorRecomendation';
import { useEffect } from 'react';
import { useHomeStore } from './store/home/HomeStore';

const Home = () => {
  const { setVendorCategories, vendorCategories } = useHomeStore();
  useEffect(() => {
    const fetchVendorCategories = async () => {
      const response = await axios.get('/api/vendor');
      setVendorCategories(response.data);
    };
    fetchVendorCategories();
  }, [setVendorCategories]);
  return (
    <div className='mt-14 bg-white'>
      <Banner />
      <div className='mt-8'>
        <VendorRecomendation />
      </div>
      <div className='mt-8 flex flex-col gap-10'>
        {vendorCategories.map((vendorCategory, index) => (
          <VendorCategory key={vendorCategory.id} id={vendorCategory.id} categoryName={vendorCategory.categoryName} vendors={vendorCategory.vendors} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
