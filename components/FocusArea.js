import Image from 'next/image'
import React from 'react'
import { Section } from './Section'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Swiper Js Import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';

//Swiper JS CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';


const FocusArea = ({data}) => {
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
    <Section styling="flex flex-col items-center text-center my-10">
      <h2 className='sm:text-3xl'>{data.title}</h2>
      <p className='w-4/5 sm:w-full m-auto'>{data.paragraph}</p>
      <div className='flex justify-around w-full flex-wrap'>
        <Swiper
          cssMode={true}
          modules={[Navigation, Pagination, Mousewheel, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          mousewheel={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {data.item.map((item, index) =>{
              return(
                <SwiperSlide key={index}>
                  <div className='card w-722 bg-base-100 shadow-xl text-left'>
                    <figure>
                      <img 
                        src={urlFor(item.img).url()} 
                        alt={item.alt}  
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-titles  h-14 leading-7 text-xl font-semibold ">{item.lead}</h3>
                      <p className=''>{item.sub}</p>
                      <quote className="font-bold italic ">{`"${item.slogan}"`}</quote>
                    </div>
                  </div>
                </SwiperSlide>   
              )
          })}
        </Swiper>
      </div>
    </Section>
  )
}

export default FocusArea
