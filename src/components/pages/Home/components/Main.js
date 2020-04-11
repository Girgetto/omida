import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './style.module.scss';

const Main = () => {
  const [t] = useTranslation();
  return (
    <section className={style.firstSection}>
      <div className={style.shadow}>
        <img src={require('../../../../assets/img/franco.jpg')} alt="franco" />
      </div>
      <div className={style.mainTitle}>
        <h1>{t('title')}</h1>
        <p>{t('home.RealEstate')}</p>
      </div>
    </section>
  );
};

export default Main;
