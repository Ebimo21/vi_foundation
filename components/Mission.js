import React from 'react'
import { core } from '../data/content-text';
import MissionCard from './MissionCard';
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Swiper JS imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import { EffectCards } from "swiper";

// Swiper JS CSS
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

const Mission = ({data}) => {
  const client = createClient({
    projectId: "gy5ghu0p",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });
  const builder =imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }

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
        {data.map((item) =>{
          return(
            <SwiperSlide key={item.id} className='rounded-lg flex items-center justify-center bg-white'>
              <MissionCard item={item} urlFor={urlFor} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Mission
