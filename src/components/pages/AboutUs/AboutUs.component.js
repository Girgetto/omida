import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'react-router-dom/Link';

const AboutUs = ({ className }) => {
  const [t] = useTranslation();
  return (
    <div className={className}>
      <h1>{t('about.EachHuman', 'EachHuman')}</h1>
      <main>
        <h1>{t('about.35Years', '35Years')}</h1>
        <p>{t('about.Mido', 'Mido')}</p>
        <Link to={'/'}>{t('about.LearnMore', 'LearnMore')}</Link>
      </main>
    </div>
  );
};

export default AboutUs;
