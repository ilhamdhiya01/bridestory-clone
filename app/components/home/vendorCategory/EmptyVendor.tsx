'use client';

import Image from 'next/image';
import Container from '../../Container';

type EmptyVendorProps = {
  categoryName: string;
  city?: string;
};

const EmptyVendor: React.FC<EmptyVendorProps> = ({ categoryName, city }) => {
  return (
    <Container>
      <div className='w-full rounded-md p-5 shadow-lg'>
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
          <Image src='/images/not-found.png' alt='Empty Vendor' width={800} height={800} className='w-40 h-20 object-cover' />
          <h2 className='font-bold text-[#555]'>Oh nooo!</h2>
          <p className='text-[#848484] text-sm'>
            Kami tidak dapat menemukan {categoryName} di {city}. Mungkin Anda bisa memilih kota lainnya.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default EmptyVendor;
