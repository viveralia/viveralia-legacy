import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Home/Hero'
import Projects from '../components/Projects/Projects'
import SEO from '../components/SEO/SEO'
import Stack from '../components/Home/Stack'

const index = () => {
  return (
    <Layout>
      <SEO localTitle="Iván Viveros - Fullstack Dev" />
      <Hero />
      <Projects />
      <Stack />
    </Layout>
  )
}

export default index
