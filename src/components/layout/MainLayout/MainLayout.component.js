import React from 'react';
import { Navbar, Footer } from '../../commons';

const MainLayout = ({ className, children }) => {
  return (
    <div className={className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
