import Image from 'next/image'
import React from 'react'
import { Section } from './Section'
import imageUrlBuilder from '@sanity/image-url'
import client, { urlFor } from '../config/sanityClient';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Iconista = ({items, styling}) => {

  const builder =imageUrlBuilder(client)

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const aniVariant = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.3}},
    hidden: {opacity: 0, y: 50}
  }

  useEffect(() => {
    if(inView){
      controls.start("visible");

    }
  }, [controls, inView])

  return (
    <Section styling={`${styling} sm:py-2 text-white flex flex-wrap justify-around text-center bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef] rounded-3xl`}>
      {items.map((item, index)=>{
        return(
          <motion.span 
            key={index} 
            className={`${!item.img && item.lead? "sm:w-1/3": "sm:w-1/2"} sm:my-4"`}
            ref={ref} 
            variants={aniVariant} 
            animate={controls} 
            initial="hidden" >
            
            {item.img? 
              (
                <Image 
                  className='m-auto' 
                  src={urlFor(item.img).url()}
                  // src={`/assets/images/${item.image}`} 
                  width="50" 
                  height="50" 
                  alt={item.alt}
                />
              ) : ""
            }

            {item.lead? 
              (
                <span>{item.lead}</span>
              ): ""
            }
          </motion.span>
        )
      })}
    </Section>
  )
}

export default Iconista