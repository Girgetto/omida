import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = ({ className }) => {
  const [t] = useTranslation();
  return (
    <div className={className}>
      <h1>{t('about.EachHuman', 'EachHuman')}</h1>
      <main>
        <h1>{t('about.35Years', '35Years')}</h1>
        <p>{t('about.Mido', 'Mido')}</p>
        <a>{t('about.LearnMore', 'LearnMore')}</a>
      </main>
    </div>
  );
};

export default AboutUs;
