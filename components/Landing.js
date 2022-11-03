import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Landing = () => {
  return (
    <section id='landing' className='flex h-[500px] sm:h-[85vh] items-start '>
        <div className='basis-3/5 sm:basis-full sm:translate-y-10'>
          <h1 className='text-6xl lg:text-5xl md:text-4xl '>No Vulnerable <br />Child is deprived <br /> of a quality life.</h1>
          <p className='text-xl lg:text-lg md:text-sm mt-6'>Improving the life of the male and female child. The foundation is of the opinion thatevery child should have the opportunity of a good life.</p>
          <Button 
            text="Let's Work Together" 
            styling="p-2 w-52 mt-6 bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]"
          />
        </div>
    </section>
  )
}

export default Landing