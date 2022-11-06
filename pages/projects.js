import React from 'react'
import Layout from '../components/Layout'
import client from '../config/sanityClient'

const projects = ({menuItem}) => {
  return (
    <Layout title={"Projects"} menu={menuItem}>
    <h1>projects</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  
  return {
    props: { menuItem }
  };
}

export default projects