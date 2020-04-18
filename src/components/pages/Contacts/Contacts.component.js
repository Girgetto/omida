import React from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../../layout'

const Contacts = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      
      <div>
        <p>{t('contact.ContactUs', 'Contacts')}</p>
        <div>
          <a href="mailto:info@remida-realestate.com">info@remida-realestate.com</a>
          
          </div>
      </div>
    </div>
  )
}

export default Contacts
