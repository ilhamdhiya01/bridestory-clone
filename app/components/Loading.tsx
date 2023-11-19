'use client';

import Image from 'next/image';

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Image src='/gif/loaderfaster.gif' alt='loading' width={700} height={700} className='w-12 h-12' />
    </div>
  );
};

export default Loading;
