import Image from 'next/image'
import React from 'react'
import Button from './Button'
import MobileNav from './MobileNav'
import Link from 'next/link'

export const Header = ({menu}) => {
  return (
    <header className='max-w-[1050px] m-auto xl:px-[100px] flex items-center font-medium  md:px-0 md:w-11/12 md:m-auto py-[20px]'>
        <span className='flex items-center' >
            <Image 
              className='inline' 
              src={"/assets/images/logo.jpeg"} 
              width="50" 
              height="50" 
              alt='VI Joseph Foundation Logo' />
            <span className='lg:hidden ml-4'>VI JOSEPH FOUNDATION</span>
        </span>

        <menu className='flex gap-[6vw] ml-auto items-center lg:hidden '>
            {menu.map((item, index)=> <li key={index}><Link href={item.href}>{item.link}</Link></li>)}
            <li>
              <Button 
                  text="Contact Us" 
                  styling="bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef] p-2 w-36"
              />
            </li>
        </menu>

        <span className='ml-auto hidden lg:block'>
            <MobileNav menu={menu}/>
        </span>
    </header>
  )
}

