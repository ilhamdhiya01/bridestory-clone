'use client';

import Image from 'next/image';

const CarouselItem: React.FC<{ img: string; imgAlt: string }> = ({ img, imgAlt }) => {
  return (
    <div className='overflow-hidden rounded-md'>
      <Image src={img} alt={imgAlt} width={500} height={500} className='w-full  object-cover' />
    </div>
  );
};

export default CarouselItem;
