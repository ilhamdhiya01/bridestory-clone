'use client';

import axios from 'axios';
import Banner from './components/home/banner/Banner';
import VendorCategory from './components/home/vendorCategory/VendorCategory';
import VendorRecomendation from './components/home/vendorRecomendation/VendorRecomendation';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/api/vendor');
      console.log(response.data);
    };
    fetch();
  }, []);
  return (
    <div className='mt-14 bg-white'>
      <Banner />
      <div className='mt-8'>
        <VendorRecomendation />
      </div>
      <div className='mt-8'>
        <VendorCategory />
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
