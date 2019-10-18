import React from 'react'

const MainLayout = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default MainLayout;
