'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import CarouselItem from './CarouselItem';

const pagination = {
  clickable: true,
  dynamicBullets: true,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + '"></span>';
  },
};

const images = [
  {
    imageUrl: '/images/bs-concierge-2_hpb-1200x400-3-52jVY-FMx.webp',
    imageAlt: 'image 1',
  },
  {
    imageUrl: '/images/golden-rama-wedding-hpb-1-ipZy2LhL9.webp',
    imageAlt: 'image 2',
  },
  {
    imageUrl: '/images/hilda-package-homepage-i-3-paF1AKZdw.webp',
    imageAlt: 'image 3',
  },
  {
    imageUrl: '/images/hpb-bs-pay-1-5Kzl6UbP8.webp',
    imageAlt: 'image 4',
  },
  {
    imageUrl: '/images/kejar-diskon-2-EW1T6w9IV.webp',
    imageAlt: 'image 5',
  },
  {
    imageUrl: '/images/wedding-checklist-3-x9ehgmIJn.webp',
    imageAlt: 'image 6',
  },
  {
    imageUrl: '/images/wedding-site_hpb-1200x400-1-MLresrw-5.webp',
    imageAlt: 'image 7',
  },
];

const Carousel = () => {
  return (
    <div className='w-full overflow-hidden relative'>
      {/* <CarouselNavigation isEnd={state.isEnd} index={state.activeIndex} /> */}
      <Swiper
        navigation={{
          enabled: true,
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
        }}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => console.log('slide')}
        className='w-full h-[165px]'
      >
        {images.map((image) => (
          <SwiperSlide key={image.imageAlt}>
            <CarouselItem img={image.imageUrl} imgAlt={image.imageAlt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
