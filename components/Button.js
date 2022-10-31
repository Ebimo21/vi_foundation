import React from 'react'

const Button = ({text, styling}) => {
  return (
    <button className={` text-white  rounded-lg ${styling}`}>{text}</button>
  )
}

export default Button