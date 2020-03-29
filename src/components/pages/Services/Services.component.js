import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = ({ className }) => {
  const [t] = useTranslation();
  return (
    <div className={className}>
      <h1>{t('services.Intro')}</h1>
      <p>{t('services.IntroText')}</p>
      {/* <div className="titles">
        <h1>{t('services.LuxuryRealEstate')}</h1>
        <h1>{t('services.BusinessAdvisory')}</h1>
        <h1>{t('services.TechnicalAdvice')}</h1>
        <h1>{t('services.Refurbishment')}</h1>
        <h1>{t('services.BusinessMaximization')}</h1>
        <h1>{t('services.Management')}</h1>
        <h1>{t('services.Coordination')}</h1>
        <h1>{t('services.AfterSales')}</h1>
        <h1>{t('services.Planning')}</h1>
      </div> */}
      <p>{t('services.TheTarget')}</p>
      <p>{t('services.ADeep')}</p>
      <p>{t('services.WeWill')}</p>
      <p>{t('services.WeCoordinate')}</p>
    </div>
  );
};

export default Services;
