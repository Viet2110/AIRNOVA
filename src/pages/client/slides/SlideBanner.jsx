
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SlideBanner.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Search from '../../../components/common/client/Search';

export default function SlideBanner() {
  return (
    <div className="h-screen relative">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='w-xl h-100'>
          <img src="https://images.pexels.com/photos/34031796/pexels-photo-34031796.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Search />
    </div>
  );
}

