import React, { useState } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants'
import { useTranslation } from 'react-i18next'
import cs from 'classnames'
import i18n from 'i18next'

const MobileNavbar = ({ setLanguage }) => {
  const [isBlock, setIsBlock] = useState(false)
  const [t] = useTranslation()

  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }

  return (
    <div className={style.mobileNavbar}>
      <div className={style.topnav}>
        <span className="icon" onClick={() => setIsBlock(!isBlock)}>
          <i className={cs('fa fa-bars', style.faIcon, style.bars)}></i>
        </span>
        <div
          id={style.myLinks}
          style={!isBlock ? { display: 'none' } : { display: 'block' }}
        >
          <span className="icon" onClick={() => setIsBlock(!isBlock)}>
            <i className={cs('fa fa-times', style.faIcon)}></i>
          </span>
          <Link className={style.link} to={ROUTES.index}>
            {t('navbar.home', 'Home')}
          </Link>
          <Link className={style.link} to={ROUTES.aboutUs}>
            {t('navbar.aboutUs', 'About Us')}
          </Link>
          <Link className={style.link} to={ROUTES.services}>
            {t('navbar.services', 'Services')}
          </Link>
          <Link className={style.link} to={ROUTES.contacts}>
            {t('navbar.contacts', 'Contacts')}
          </Link>
          <div className={style.language}>
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
              className="language__es"
              onClick={() => changeLanguage('es')}
              role="img"
              aria-label="es"
            >
              ES
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
      </div>
    </div>
  )
}

export default MobileNavbar
