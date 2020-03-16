import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const [t] = useTranslation();
  return (
  <section className="firstSection">
    <h1 className="mainTitle">{t('title')}</h1>
    <p>{t('home.RealEstate')}</p>
  </section>
)};

export default Main;
