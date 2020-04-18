import React, { useState } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants'
import cs from 'classnames'

const MobileNavbar = () => {
  const [isBlock, setIsBlock] = useState(false)
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
          <Link className={style.link} to={ROUTES.index}>Home</Link>
          <Link className={style.link} to={ROUTES.aboutUs}>About Us</Link>
          <Link className={style.link} to={ROUTES.services}>Services</Link>
          <Link className={style.link} to={ROUTES.contacts}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
