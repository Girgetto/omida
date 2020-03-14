import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './style.module.scss';

const OurMission = () => {
  const [t] = useTranslation();
  return (
    <div className={styled.ourMission}>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        {t('home.OurMission')}
      </div>
      <div>{t('home.WeOffer')}</div>
    </div>
  );
};

export default OurMission;
