import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import i18n from 'i18next';

const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <ul className="list">
        <Link to={ROUTES.index}>Home</Link>
        <Link to={ROUTES.aboutUs}>About Us</Link>
      </ul>
      <span onClick={() => changeLanguage('en')} role="img" aria-label="en">
        🇬🇧
      </span>
      <span onClick={() => changeLanguage('it')} role="img" aria-label="it">
        🇮🇹
      </span>
    </div>
  );
};

export default Navbar;
