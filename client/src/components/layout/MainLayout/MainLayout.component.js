import React from 'react'
import { Navbar } from '../../commons'

const MainLayout = ({ className, children }) => {
  return (
    <div className={className}>
    <Navbar/>
      {children}
    </div>
  )
}

export default MainLayout;
