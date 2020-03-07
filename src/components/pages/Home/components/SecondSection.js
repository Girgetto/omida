import React from 'react';
import style from './style.module.scss';
import { useTranslation } from 'react-i18next';

const SecondSection = () => {
  const [t] = useTranslation();
  return (
    <section className={style.secondSection}>
      <p>{t('home.RealEstate')}</p>
    </section>
  );
};

export default SecondSection;
