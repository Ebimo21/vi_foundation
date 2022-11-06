import React from 'react'
import { About } from '../components/About'
import Layout from '../components/Layout'
import client from '../config/sanityClient'

const about = ({menuItem}) => {
  return (
    <Layout title={"About"}  menu={menuItem}>
      <About/>
    </Layout>
  )
}


export async function getStaticProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  
  return {
    props: { menuItem}
  };
}


export default about
