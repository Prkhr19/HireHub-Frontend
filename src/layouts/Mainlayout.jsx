import React from 'react'
import Navbar from '../Components/Navbar'

const Mainlayout = ({ children }) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default Mainlayout