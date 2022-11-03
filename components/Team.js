import React from 'react'
import { team } from '../data/content-text'
import { Section } from './Section'

const Team = () => {
  return (
    <Section styling="flex flex-col items-center text-center mt-10">
      <p>{team.pre}</p>
      <h2>{team.title}</h2>
      <p className='w w-3/5 sm:w-full m-auto'>{team.paragraph}</p>
      <div className='flex justify-around w-full flex-wrap gap-y-5 gap '>
        {team.members.map((item, index) =>{
            return(
              <div key={index} className="card mt-10 w-72 sm:w-80 bg-base-100 shadow-xl rounded-tr-[100px] ">
                <figure className=''>
                  <img src={`/assets/images/${item.image}`} alt={item.alt} />
                </figure>
                <div className="card-body justify-ends ">
                  <h3 className="card-titles leading-4 text-xl font-semibold ">{item.name}</h3>
                  <p className='leading-325 text-sm'>{item.position}</p>
                  <p className='text-xs '>{item.quote}</p>
                </div>
              </div>
            )
        })}
      </div>
    </Section>
  )
}

export default Team