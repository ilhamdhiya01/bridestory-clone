import Banner from './components/home/banner/Banner';
import VendorCategory from './components/home/vendorCategory/VendorCategory';
import VendorRecomendation from './components/home/vendorRecomendation/VendorRecomendation';

export default function Home() {
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
