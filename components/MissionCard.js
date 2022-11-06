import React from 'react'

const MissionCard = ({item, urlFor}) => {
  return (
    <div className='flex'>
        <div className='basis-5/12 sm:hidden'>
            <img  src={urlFor(item.img).url()} />
            {/* <img  src={`/assets/images/${item.image}`} /> */}
        </div>
        <div className='basis-5/12 sm:m-auto sm:basis-9/12 sm:text-center'>
            <h4 className='font font-extrabold'>{item.title}</h4>
            <p className='text-sm'>{item.text}</p>
        </div>
    </div>
  )
}

export default MissionCard
