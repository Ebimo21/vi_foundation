import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'framer-motion';

const Landing = () => {
  return (
    <section className='flex flex-wrap items-center'>
      <div className='basis-7/12 md:basis-9/12 sm:basis-full'>
        <motion.div 
        initial={{opacity: 0, x:-100}}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className='max-w-[560px] md:max-w-full '>

      <motion.h1 
        
        className='text-5xl lg:text-4xl xmd:text-4xl '>No Vulnerable Child is deprived of a quality life.</motion.h1>
          <p className='xtext-xl xlg:text-lg xmd:text-sm xmt-6'>Improving the life of the male and female child. The foundation is of the opinion thatevery child should have the opportunity of a good life.</p>
          <Button 
            text="Let's Work Together" 
            styling="p-2 w-52 mt-6 bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]"
            />
            </motion.div>
      </div>

      <div className='basis-5/12 md:basis-full'>
      <img className='block ml-auto md:m-auto w-full max-w-[250px]' src='assets/images/landing-image-2.png' />
      </div>
    </section>
  )
}

export default Landing