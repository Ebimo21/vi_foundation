import Image from 'next/image'
import React from 'react'
import { Section } from './Section'

const Iconista = ({item, styling}) => {
  return (
    <Section styling={`${styling} sm:py-2 text-white flex flex-wrap justify-around text-center bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef] rounded-3xl`}>
      {item.map((item, index)=>{
        return(
          <span key={index} className={`${!item.image && item.lead? "sm:w-1/3": "sm:w-1/2"} sm:my-4"`}>
            {item.image? 
              (
                <Image 
                  className='m-auto' 
                  src={`/assets/images/${item.image}`} 
                  width="50" 
                  height="50" 
                  alt={item.alt}
                />
              ) : ""
            }

            {item.lead? 
              (
                <span>{item.lead}</span>
              ): ""
            }
          </span>
        )
      })}
    </Section>
  )
}

export default Iconista