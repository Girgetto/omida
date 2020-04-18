import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import i18n from 'i18next';
import cs from 'classnames';

const Navbar = ({ className, setLanguage }) => {
  const changeLanguage = lng => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className={className}>
      <ul className="list">
        <Link
          to={ROUTES.index}
          className={cs(window.location.href.includes('home') && 'selected')}
        >
          Home
        </Link>
        <Link
          to={ROUTES.aboutUs}
          className={cs(window.location.href.includes('about') && 'selected')}
        >
          About Us
        </Link>
        <Link
          to={ROUTES.services}
          className={cs(window.location.href.includes('services') && 'selected')}
        >
          Services
        </Link>
        <Link
          to={ROUTES.contacts}
          className={cs(window.location.href.includes('contacts') && 'selected')}
        >
          Contacts
        </Link>
        
      </ul>
      <div className="language">
        <span
          className="language__gb"
          onClick={() => changeLanguage('en')}
          role="img"
          aria-label="en"
        >
          EN
        </span>
        <span
          className="language__it"
          onClick={() => changeLanguage('it')}
          role="img"
          aria-label="it"
        >
          IT
        </span>
        <span
          className="language__ru"
          onClick={() => changeLanguage('ru')}
          role="img"
          aria-label="ru"
        >
          RU
        </span>
        <span
          className="language__cn"
          onClick={() => changeLanguage('cn')}
          role="img"
          aria-label="cn"
        >
          CN
        </span>
      </div>
    </div>
  );
};

export default Navbar;
