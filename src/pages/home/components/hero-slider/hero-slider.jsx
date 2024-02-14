import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { heroData } from '../../../../data/hero-data';
import { Button } from '../../../../components/ui/button/button';
import { SliderButton } from '../slider-button';

import { Navigation } from 'swiper/modules';

export const HeroSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={true}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        className='mySwiper'
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className='w-full relative pt-[203px] pb-[236px] bg-no-repeat bg-center bg-cover'
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="container">
                <div className='flex flex-col'>
                  <h2 className='text-[16px] text-pink font-bold mb-2'>{item.name}</h2>
                  <h1 className='text-[53px] font-josefinSans font-bold max-w-[644px] mb-2'>{item.title}</h1>
                  <p className="text-subText font-bold text-[16px] mb-[27px] max-w-[529px]">{item.text}</p>
                  <Button type='button' className="w-[163px] text-white">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-3 absolute bottom-[-100px] translate-x-[-50%] z-10 left-[50%]">
        {heroData.map((item, index) => (
          <SliderButton key={index} index={index} currentIndex={currentSlideIndex} />
        ))}
      </div>
    </>
  );
};


