import React from 'react'
import Layout from '../components/Layout'
import client from '../config/sanityClient'
// import menuItem from "../data/menuItem";

const projects = ({menuItem}) => {
  return (
    <Layout title={"Projects"} menu={menuItem}>
      <div className='flex items-center h-[50vh]'>
        <h1>Projects Page</h1>
      </div>
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