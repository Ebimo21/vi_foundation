import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { Section } from './Section'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import client, { urlFor } from '../config/sanityClient';

export const About = ({data}) => {
  
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const aniVariant1 = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.3}},
    hidden: {opacity: 0, y: 50}
  }
  const aniVariant2 = {
    visible: {opacity: 1, y: 0, transition: {duration: .6, delay: 0.3}},
    hidden: {opacity: 0, y: 50}
  }
  const aniVariant3 = {
    visible: {opacity: 1, y: 0, transition: {duration: .9, delay: 0.6}},
    hidden: {opacity: 0, y: 50}
  }

  useEffect(() => {
    if(inView){
      controls.start("visible");

    }
  }, [controls, inView])
  
  return (
    <Section styling="flex items-center flex-wrap-reverse sm:my-10">
      <motion.div 
        ref={ref} 
        variants={aniVariant3} 
        animate={controls} 
        initial="hidden" 
        className='basis-[50%] md:basis-full'
      >
        <img 
          src={urlFor(data.img).url()}
          // src='/assets/images/boy png.png' 
          className='ml-auto block md:m-auto w-full max-w-[250px]' 
          alt="people playing around with kids"
        />
      </motion.div>

      <div className='basis-[50%] sm:basis-full'>
        <motion.h2 
          ref={ref} 
          variants={aniVariant1} 
          animate={controls} 
          initial="hidden" 
          className='text-3xl leading-relaxed sm:text-xl'>{data.lead}</motion.h2>
        <motion.p 
          ref={ref} 
          variants={aniVariant2} 
          animate={controls} 
          initial="hidden" 
          className='xlg:text-[1.5vw] xsm:text-sm'>{data.sub}</motion.p>
        <Button 
          text="Learn More" 
          styling="p-2 w-52 mt-6 bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]"/>
      </div>
    </Section>
  )
}