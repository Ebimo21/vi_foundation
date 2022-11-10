import Image from 'next/image'
import React from 'react'
import { Section } from './Section'
import { urlFor} from '../config/sanityClient'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const aniVariant = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
    hidden: {opacity: 0, y: 50}
  }
  
  const aniVariant2 = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.7, delay: 0.4}},
    hidden: {opacity: 0, y: 50}
  }

  useEffect(() => {
    if(inView){
      controls.start("visible");

    }
  }, [controls, inView])
  
  return (
    <Section styling="flex flex-col items-center text-center my-10">
      <motion.h2 
        ref={ref} 
        variants={aniVariant} 
        animate={controls} 
        initial="hidden"
        className='sm:text-3xl mb-2'>{data.title}</motion.h2>
      <motion.p 
        ref={ref} 
        variants={aniVariant2} 
        animate={controls} 
        initial="hidden"
        className='w-4/5 sm:w-full m-auto mb-10'>{data.paragraph}</motion.p>
      <motion.div 
        ref={ref} 
        variants={aniVariant} 
        animate={controls} 
        initial="hidden"
        className='flex justify-around w-full flex-wrap'>
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
                        // src={`/assets/images/${item.image}`} 
                        alt={item.alt}  
                      />
                    </figure>
                    <div className="card-body">
                      <h4 className="card-titles  h-14 leading-7 text-xl font-semibold ">{item.lead}</h4>
                      <p className=''>{item.sub}</p>
                      <quote className="font-bold italic ">{`"${item.slogan}"`}</quote>
                    </div>
                  </div>
                </SwiperSlide>   
              )
          })}
        </Swiper>
      </motion.div>
    </Section>
  )
}

export default FocusArea
