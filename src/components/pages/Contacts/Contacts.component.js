import React from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../../layout'

const Contacts = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <SEO title="Remida | Contacts">
        <div>
          <p>{t('contact.ContactUs', 'Contacts')}</p>
          <a href="mailto:webmaster@example.com">info@remida-realestate.com</a>
        </div>
      </SEO>
    </div>
  )
}

export default Contacts
