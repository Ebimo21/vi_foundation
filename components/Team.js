import React from 'react'
import { Section } from './Section'
import {urlFor} from '../config/sanityClient'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Team = ({data}) => {

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
  
  const aniVariant3 = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.6}},
    hidden: {opacity: 0, y: 50}
  }

  useEffect(() => {
    if(inView){
      controls.start("visible");

    }
  }, [controls, inView])

  return (
    <Section styling="flex flex-col items-center text-center mt-10">
      <motion.h4 
        ref={ref} 
        variants={aniVariant} 
        animate={controls} 
        initial="hidden"
        className='text-2xl font-bold bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef] bg-clip-text  text-transparent'>{data.pre}</motion.h4>
      <motion.h4 
        ref={ref} 
        variants={aniVariant2} 
        animate={controls} 
        initial="hidden"
        className='xh-14 xleading-7 text-5xl font-extrabold'>{data.title}</motion.h4>
      <motion.p 
        ref={ref} 
        variants={aniVariant3} 
        animate={controls} 
        initial="hidden"
        className='w w-4/5 lg:w-full m-auto'>{data.paragraph}</motion.p>
      <motion.div 
        ref={ref} 
        variants={aniVariant} 
        animate={controls} 
        initial="hidden"
        className='flex justify-around w-full flex-wrap gap-y-5 gap '>
        {data.members.map((item, index) =>{
            return(
              <div 
                key={index} 
                className="card mt-10 w-72 sm:w-80 bg-base-100 shadow-xl rounded-tl-none rounded-tr-[100px] ">
                <figure className='border-8 border-teal-600 rounded-tr-[100px] overflow-hidden'>
                  <img src={urlFor(item.img).url()} alt={item.alt} />
                  {/* <img src={`/assets/images/${item.image}`} alt={item.alt} /> */}
                </figure>
                <div className="card-body justify-ends ">
                  <h3 className="card-titles leading-4 text-xl font-semibold ">{item.name}</h3>
                  <p className='leading-32 text-sm font-extrabold'>{item.position}</p>
                  <p className='text-xs font-medium '>{item.quote}</p>
                </div>
              </div>
            )
        })}
      </motion.div>
    </Section>
  )
}

export default Team