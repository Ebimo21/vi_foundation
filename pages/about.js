import React from 'react'
import { About } from '../components/About'
import Layout from '../components/Layout'
import SendMessage from '../components/SendMessage'
import client from '../config/sanityClient'

// import menuItem from "../data/menuItem";

const about = ({menuItem, about,  getintouch, footer}) => {
  return (
    <Layout title={"About"} menu={menuItem} data={footer}>
      <About data={about}/>
      <SendMessage data={getintouch}/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  const abouts = await client.fetch(`*[_type == "about"]`);
  const about = abouts[0]
  const getintouchs = await client.fetch(`*[_type == "getintouch"]`);
  const getintouch = getintouchs[0]
  const footers = await client.fetch(`*[_type == "footer"]`);
  const footer = footers[0]
  return {
    props: { menuItem, about, getintouch, footer}
  };
}


export default about
