import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './style.module.scss';
import view4 from '../../../../assets/img/view4.jpg';
import styles from './style.module.scss';

const OurMission = () => {
  const [t] = useTranslation();
  return (
    <div
      className={styled.ourMission}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className={styled.column_2}>
        <img className={styles.image} src={view4} alt="view4" />
      </div>
      <div className={styled.column_2}>
        <div>
          <h2>{t('home.OurMission')}</h2>
        </div>
        <div>
          <p>{t('home.WeOffer')}</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
