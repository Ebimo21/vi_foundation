import React from 'react'

export const Section = ({styling, children}) => {
  return (
    <section className={`${styling} p-5 sm:p-0 `}>
        {children}
    </section>
  )
}
