import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Landing = () => {
  return (
    <section className='flex flex-wrap items-center'>
      <div className='basis-7/12 md:basis-9/12 sm:basis-full'>
        <div className='max-w-[560px] md:max-w-full '>

      <h1 className='text-5xl lg:text-4xl xmd:text-4xl '>No Vulnerable Child is deprived of a quality life.</h1>
          <p className='xtext-xl xlg:text-lg xmd:text-sm xmt-6'>Improving the life of the male and female child. The foundation is of the opinion thatevery child should have the opportunity of a good life.</p>
          <Button 
            text="Let's Work Together" 
            styling="p-2 w-52 mt-6 bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]"
            />
            </div>
      </div>

      <div className='basis-5/12 md:basis-full'>
      <img className='block ml-auto md:m-auto w-full max-w-[250px]' src='assets/images/landing-image-2.png' />
      </div>
    </section>
  )
}

export default Landing