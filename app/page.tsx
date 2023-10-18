import Banner from './components/home/banner/Banner';
import VendorRecomendation from './components/home/vendorRecomendation/VendorRecomendation';

export default function Home() {
  return (
    <div className='mt-14 bg-white h-full'>
      <Banner />
      <div className='mt-8'>
        <VendorRecomendation />
      </div>
    </div>
  );
}
