import React from 'react';
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const [t] = useTranslation();
  return (
    <div>
      <div>{t('description.title4')}</div>
      <div>{t('description.part4')}</div>
    </div>
  );
};

export default OurMission;
