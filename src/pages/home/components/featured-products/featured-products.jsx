import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { featuredProducts } from '../../../../data/home-data';
import { ProductCard } from '../cards/product-card/product-card';
import { Mousewheel } from 'swiper/modules';

export const FeaturedProducts = () => {
  return (
    <div className='mb-[70px]'>
      <Swiper
        className='px-[15px] py-[30px]'
        spaceBetween={30}
        slidesPerView={4}
        mousewheel={true}
        loop={true}
        modules={[Mousewheel]}
        autoplay={{ delay: 2000 }}
      >
        {featuredProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
