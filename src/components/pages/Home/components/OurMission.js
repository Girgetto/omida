import React from 'react';
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const [t] = useTranslation();
  return (
    <div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        {t('home.OurMission')}
      </div>
      <div>{t('home.WeOffer')}</div>
    </div>
  );
};

export default OurMission;
