import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion } from "framer-motion";
import Link from 'next/link';
import { urlFor } from '../config/sanityClient';

const Landing = ({data}) => {
  return (
    <section className='flex flex-wrap items-center mt-10 '>
      <div className='basis-7/12 md:basis-9/12 sm:basis-full'>
        <motion.div 
          initial={{opacity: 0, y:-100}}
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
          className='max-w-[560px] md:max-w-full '>
          
          <motion.h1
            className='text-5xl lg:text-4xl xmd:text-4xl mb-5'>
            {data.lead}
          </motion.h1>
          <p className='xtext-xl xlg:text-lg xmd:text-sm xmt-6'>{data.sub}</p>
          <Link href={"#getintouch"}>
            <Button 
              text={data.btn}
              styling="btn p-2 w-52 mt-6 bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]"/>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{opacity: 0, y:100}}
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.7 }}
        className='basis-5/12 md:basis-full'>
          <img 
            className='block ml-auto md:m-auto w-full max-w-[250px]' 
            src={urlFor(data.img).url()}
            // src={`/assets/images/landing-image-2.png`} 
            alt={data.alt} />
      </motion.div>
    </section>
  )
}

export default Landing