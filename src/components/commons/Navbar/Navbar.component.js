import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import cs from 'classnames'
import MobileNavbar from './components/MobileNavbar'

import { homepage } from '../../../../package.json';

const Navbar = ({ className, setLanguage }) => {
  const [t] = useTranslation()
  const changeLanguage = (lng) => {
    setLanguage(lng)  
    i18n.changeLanguage(lng)
  }

  const PREFIX =
    process.env.REACT_APP_ENV === 'development'
      ? 'http://localhost:3000/#'
      : `${homepage}/#`

  return (
    <div className={className}>
      <MobileNavbar />
      <ul className="list">
        <Link
          to={ROUTES.index}
          className={cs(
            window.location.href === PREFIX + ROUTES.index && 'selected'
          )}
        >
          {t('navbar.home', 'Home')}
        </Link>
        <Link
          to={ROUTES.aboutUs}
          className={cs(
            window.location.href === PREFIX + ROUTES.aboutUs && 'selected'
          )}
        >
          {t('navbar.aboutUs', 'About Us')}
        </Link>
        <Link
          to={ROUTES.services}
          className={cs(
            window.location.href === PREFIX + ROUTES.services && 'selected'
          )}
        >
          {t('navbar.services', 'Services')}
        </Link>
        <Link
          to={ROUTES.contacts}
          className={cs(
            window.location.href === PREFIX + ROUTES.contacts && 'selected'
          )}
        >
          {t('navbar.contacts', 'Contacts')}
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
          className="language__de"
          onClick={() => changeLanguage('de')}
          role="img"
          aria-label="de"
        >
          DE
        </span>
        <span
          className="language__fr"
          onClick={() => changeLanguage('fr')}
          role="img"
          aria-label="de"
        >
          FR
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
          中文
        </span>
      </div>
    </div>
  )
}

export default Navbar
