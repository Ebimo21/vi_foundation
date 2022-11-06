import React from 'react'
import Layout from '../components/Layout'
import client from '../config/sanityClient'

const donation = ({menuItem}) => {
  return (
    <Layout title={"donation"} menu={menuItem}>
    <h1>donation</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
 
  
  return {
    props: { menuItem }
  };
}

export default donation