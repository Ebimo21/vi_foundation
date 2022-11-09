import React from 'react'
import { footer, social } from '../data/content-text'

import 'boxicons'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className=' max-w-[1270px] m-auto xl:px-[100px] bg-black text-white p-10 sm:p-4'>
      <div className='flex flex-wrap lg:justify-start sm:gap-5'>
        <div className='basis-1/6 lg:basis-1/3 sm:basis-full ml-8 md:ml-0 '>
          <h4 className='font-extrabold text-xl'>Link</h4>
          {footer.link.map((item, index)=> <p className='mb-1' key={index}>{item}</p>)}
        </div>
        <div className='basis-1/3 ml-8 md:ml-0'>
          <h4 className='font-extrabold text-xl'>Contact Address</h4>
          <p>{footer.address}</p>

          <h4 className='font-extrabold mt-4 text-xl'>General Enquiries</h4>
          <p>{footer.enquiries.tel}</p>
          <p>{footer.enquiries.email}</p>
        </div>
        <div className='basis-1/3 lg:basis-full ml-8 md:ml-0'>
          <h4 className='font-extrabold text-xl'>Subscribe to Our <br /> Newsletter</h4>
          <p className='mb-4'>Signup to recieve regular updates from us!</p>
          <input className='p-2 btn-bg ' type={"text"} />
          <input type={"button"} value={"Sign Up"} className="btn button bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef]" />

          <div className='flex items-center'>
          <span>Social Media</span> 
          {social.map(item => <Link key={item.id} href={`https://www.${item.url}`}><box-icon name={item.handle} type="logo" color="#ffffff"></box-icon></Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
