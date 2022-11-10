// import menuItem from "../data/menuItem";
import React from 'react'
import Layout from '../components/Layout'
import client from '../config/sanityClient'

const donation = ({menuItem, footer}) => {
  return (
    <Layout title={"Donation"} menu={menuItem} data={footer}>
      <div className='flex items-center h-[50vh]'>
      <h1>Donation Page</h1>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  const footers = await client.fetch(`*[_type == "footer"]`);
  const footer = footers[0]
  
  return {
    props: { menuItem, footer }
  };
}

export default donation