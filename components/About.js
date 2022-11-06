import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { Section } from './Section'

export const About = () => {
  return (
    <Section styling="flex items-center flex-wrap-reverse sm:my-10">
      <div className='basis-[50%] md:basis-full'>
        <img src='/assets/images/boy png.png' className='ml-auto block md:m-auto w-full max-w-[250px]' alt="people playing around with kids"/>
        {/* <Image 
          className='ml-auto' 
          src="/assets/images/boy png.png" 
          alt="people playing around with kids" 
          width="400" 
          height="400" /> */}
      </div>

      <div className='basis-[50%] sm:basis-full'>
        <h2 className='text-5xl leading-relaxed sm:text-xl'>About Us</h2>
        <p className='text lg:text-[1.5vw] sm:text-sm'>VI Joseph Foundationa works to improve the life of the male and female child. The foundation is of the opinion that no child should be denied of the opportunity of a good life, young ones are the future of the nation so they must be supported and equipped with the tools they require to succeed.</p>
        <Button 
          text="Learn More" 
          styling="p-2 w-52 mt-6 bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]"/>
      </div>
    </Section>
  )
}