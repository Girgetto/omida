import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <ul className="list">
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>About Us</Link>
      </ul>
    </div>
  )
}

export default Navbar
