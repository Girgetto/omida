import React from 'react';
import { useTranslation } from 'react-i18next';

const FirstSection = () => {
  const [t] = useTranslation();
  return (
  <section className="firstSection">
    <h1 className="mainTitle">{t('title')}</h1>
  </section>
)};

export default FirstSection;
