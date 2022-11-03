import Image from 'next/image'
import React from 'react'
import Button from './Button'
import headerNavLinks from '../data/headerNavLink'
import MobileNav from './MobileNav'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex items-center font-medium px-[100px] py-[20px] sm:px-[20px]'>
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
            {headerNavLinks.map((item, index)=> <li key={index}><Link href={item.href}>{item.title}</Link></li>)}
            <li><Button 
                  text="Contact Us" 
                  styling="bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef] p-2 w-36"
                />
            </li>
        </menu>

        <span className='ml-auto hidden lg:block'>
            <MobileNav/>
        </span>
    </header>
  )
}