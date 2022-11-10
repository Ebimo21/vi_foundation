import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = ({children, title , menu, data}) => {
  return (
    <>
        <Head>
            <title>{`${title} | VI Foundation`}</title>
            <meta name="description" content="VI Foundation Website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header menu={menu}/>
          <main className='max-w-[1050px] xl:px-[100px] m-auto  md:px-0 md:w-11/12 md:m-auto '>{children}</main>
        <Footer data={data}/>
    </>
  )
}

export default Layout