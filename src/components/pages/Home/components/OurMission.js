import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './style.module.scss';

const OurMission = () => {
  const [t] = useTranslation();
  return (
    <div className={styled.ourMission}>
      <div className={styled.column_2}></div>
      <div className={styled.column_2}>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <h1>
            {t('home.OurMission')}
          </h1>
        </div>
        <div>
          <p>
            {t('home.WeOffer')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
