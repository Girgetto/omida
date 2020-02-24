import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants'

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <ul className="list">
        <Link to={ROUTES.index}>Home</Link>
        <Link to={ROUTES.aboutUs}>About Us</Link>
      </ul>
    </div>
  )
}

export default Navbar
