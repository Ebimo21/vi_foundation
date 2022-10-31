import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header></Header>
        {children}
        <Footer></Footer>
    </>
  )
}

export default Layout