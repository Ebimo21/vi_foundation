import Image from 'next/image'
import React from 'react'
import Button from './Button'

export const Header = () => {
  return (
    <header className='flex items-center font-medium'>
        <span className='flex items-center' >
            <Image className='inline' src={"/assets/images/logo.jpeg"} width="50" height="50" alt='VI Joseph Foundation Logo' />
            <span className=' ml-4'>VI JOSEPH FOUNDATION</span>
        </span>

        <menu className='flex gap-[6vw] ml-auto items-center md:hidden '>
            <li>Home</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li><Button text="Contact Us" styling="bg-[rgb(215,72,198)] bg-gradient-to-r from-[#d748c6] to-[#4595f4] p-2 w-36"/></li>
        </menu>


    </header>
  )
}
