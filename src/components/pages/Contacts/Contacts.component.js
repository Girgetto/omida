import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = ({ className }) => {
  const [t] = useTranslation();
  return (
    <div className={className}>
      <p>{t('contact.ContactUs', 'Contacts')}</p>
    </div>
  );
};

export default Contacts;
