import React from 'react'
import { About } from '../components/About'
import Layout from '../components/Layout'
import SendMessage from '../components/SendMessage'
import client from '../config/sanityClient'

// import menuItem from "../data/menuItem";

const about = ({menuItem, about,  getintouch}) => {
  return (
    <Layout title={"About"} menu={menuItem}>
      <About data={about}/>
      <SendMessage data={getintouch}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  const abouts = await client.fetch(`*[_type == "about"]`);
  const about = abouts[0]
  const getintouchs = await client.fetch(`*[_type == "getintouch"]`);
  const getintouch = getintouchs[0]
  return {
    props: { menuItem, about, getintouch}
  };
}


export default about
