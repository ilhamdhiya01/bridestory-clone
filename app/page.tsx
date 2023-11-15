'use client';

import Banner from './components/home/banner/Banner';
import VendorCategory from './components/home/vendorCategory/VendorCategory';
import VendorRecomendation from './components/home/vendorRecomendation/VendorRecomendation';
import { useEffect } from 'react';
import { useHomeStore } from './store/home/HomeStore';
import Loading from './components/Loading';
import { useGlobalStore } from './store/GlobalStore';
import useLocalStorage from './hooks/useLocalStorage';
import { useVendorRecomendationModal } from './hooks/useVendorRecomendationModal';

const Home = () => {
  const { setVendorCategories, vendorCategories, categories } = useHomeStore();
  const { selectedList } = useVendorRecomendationModal();
  const { setLoading, isLoading } = useGlobalStore();
  const [categorySelected, setCategorySelected] = useLocalStorage<string[]>('categorySelected', []);

  useEffect(() => {
    // if (categorySelected.length === 0) {
    //   setCategorySelected(['venue', 'wedding-planner', 'fotografi']);
    // }
    setLoading(true);
    setVendorCategories(
      categorySelected.map((category) => category),
      setLoading
    );
  }, [setVendorCategories, setLoading, categorySelected, setCategorySelected]);

  return (
    <div className='mt-14 bg-white'>
      <Banner />
      <div className='mt-8'>
        <VendorRecomendation listSelected={selectedList} />
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
