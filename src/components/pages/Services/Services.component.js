import React from 'react'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const [t] = useTranslation();
  return (
    <div>
      {t('services.Intro')}
      {t('services.IntroText')}
      {t('services.LuxuryRealEstate')}
      {t('services.BusinessAdvisory')}
      {t('services.TechnicalAdvice')}
      {t('services.Refurbishment')}
      {t('services.BusinessMaximization')}
      {t('services.Management')}
      {t('services.Coordination')}
      {t('services.AfterSales')}
      {t('services.Planning')}
      {t('services.TheTarget')}
      {t('services.ADeep')}
      {t('services.WeWill')}
      {t('services.WeCoordinate')}
    </div>
  )
}

export default Services;
