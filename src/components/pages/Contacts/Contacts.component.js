import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = ({ className }) => {
  const [t] = useTranslation();
  return (
    <div className={className}>
      
      <div>
        <p>{t('contact.ContactUs', 'Contacts')}</p>
        <div>info@remida-realestate.com</div>
      </div>
    </div>
    
  );
};

export default Contacts;
