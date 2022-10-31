import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Landing = () => {
  return (
    <section className='flex h-[80vh] items-center'>
        <div className='basis-2/4'>
        <h1 className='text text-6xl'>No Vulnerable <br />Child is deprived <br /> of a quality life.</h1>
        <p className='text-xl mt-6'>Improving the life of the male and female child. The foundation is of the opinion thatevery child should have the opportunity of a good life.</p>
        <Button text="Let's Work Together" styling="p-2 w-52 mt-6 bg-[rgb(215,72,198)] bg-gradient-to-r from-[#d748c6] to-[#4595f4]"/>
        </div>

        {/* <div>
            <Image className='inline' src={"/assets/images/logo.jpeg"} width="500" height="500" alt='VI Joseph Foundation Logo' />
        </div> */}
    </section>
  )
}

export default Landing