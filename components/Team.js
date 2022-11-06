import React from 'react'
import { Section } from './Section'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const Team = ({data}) => {

  const client = createClient({
    projectId: "gy5ghu0p",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });
  const builder =imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <Section styling="flex flex-col items-center text-center mt-10">
      <h4 className='text-2xl font-bold bg-[rgb(255, 0, 255)] bg-gradient-to-r from-[#ff00ff] to-[#00ffef] bg-clip-text  text-transparent'>{data.pre}</h4>
      <h4 className='xh-14 xleading-7 text-5xl font-extrabold'>{data.title}</h4>
      <p className='w w-4/5 lg:w-full m-auto'>{data.paragraph}</p>
      <div className='flex justify-around w-full flex-wrap gap-y-5 gap '>
        {data.members.map((item, index) =>{
            return(
              <div key={index} className="card mt-10 w-72 sm:w-80 bg-base-100 shadow-xl rounded-tr-[100px] ">
                <figure className=''>
                  <img src={urlFor(item.img).url()} alt={item.alt} />
                  {/* <img src={`/assets/images/${item.image}`} alt={item.alt} /> */}
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