import React from 'react'
import Navbar from './Navbar'
import './global.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
