import React from 'react';
import { useTranslation } from 'react-i18next';

const LastSection = () => {
  const [t] = useTranslation();
  return (
    <div>
      <div>{t('home.ATradition')}</div>
      <div>{t('home.WeDevelop')}</div>
    </div>
  );
};

export default LastSection;
