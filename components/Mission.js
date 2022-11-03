import React from 'react'
import { core } from '../data/content-text';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import { EffectCards } from "swiper";
import MissionCard from './MissionCard';

import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

const Mission = () => {
  return (
    <>
      <Swiper
        modules={[EffectCards, Navigation, Pagination, Mousewheel, Scrollbar, A11y]}
        effect={"cards"}
        navigation={true}
        mousewheel={true}
        pagination={{ clickable: true }}
        className="mySwiper w-[600px] md:w-[80%] h-[250px] sm:my-10"
      >
        {core.map((item) =>{
          return(
            <SwiperSlide key={item.id} className='flex items-center justify-center bg-white'>
              <MissionCard item={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Mission
