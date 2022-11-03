import React from 'react'
import { About } from '../components/About'
import Layout from '../components/Layout'
import Mission from '../components/Mission'
import Team from '../components/Team'

const about = () => {
  return (
    <Layout title={"About"}>
      <About/>
    </Layout>
  )
}

export default about
