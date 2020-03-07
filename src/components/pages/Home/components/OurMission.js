import React from 'react';
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const [t] = useTranslation();
  return (
    <div>
      <div>{t('home.OurMission')}</div>
      <div>{t('home.WeOffer')}</div>
    </div>
  );
};

export default OurMission;
