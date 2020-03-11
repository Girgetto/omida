import React from 'react';
import { useTranslation } from 'react-i18next';

const LastSection = () => {
  const [t] = useTranslation();
  return (
    <div>
      <div>{t('home.OurMission')}</div>
      <div>{t('home.WeOffer')}</div>
    </div>
  );
};

export default LastSection;
