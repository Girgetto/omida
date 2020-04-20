import React from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../../layout'
import contact from '../../../assets/img/contact.jpg'
import styles from '../Home/components/style.module.scss'

const Contacts = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <SEO title="Remida | Contacts"/>
      <div>
        <p>{t('contact.ContactUs', 'Contacts')}</p>
        <div>
          <a href="mailto:info@remida-realestate.com">info@remida-realestate.com</a>
          <div className={styles.square}>
        <img className={styles.image} src={contact} alt="contact" />
      </div>
          </div>
      </div>
    </div>
  )
}

export default Contacts