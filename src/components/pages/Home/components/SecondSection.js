import React from 'react';
import style from './style.module.scss';
import { useTranslation } from 'react-i18next';

const SecondSection = () => {
  const [t] = useTranslation();
  return (
    <section className={style.secondSection}>
      <div>
        {t('home.Analysis')}
        {t('home.Consultancy')}
        {t('home.Coordination')}
      </div>
      <p>{t('home.ConsultancyMediation')}</p>
    </section>
  );
};

export default SecondSection;
