import React from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../../layout'

const Services = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <h2>{t('services.Intro')}</h2>
      <p>{t('services.IntroText')}</p>
      <div className="titles">
        <h3>
          {t('services.LuxuryRealEstate')} | {t('services.BusinessAdvisory')} | 
          {t('services.TechnicalAdvice')} | {t('services.Refurbishment')} | 
          {t('services.BusinessMaximization')} | {t('services.Management')} | 
          {t('services.Coordination')} | {t('services.AfterSales')} | 
          {t('services.Planning')}
        </h3>
      </div>
      <p>{t('services.TheTarget')}</p>
      <p>{t('services.ADeep')}</p>
      <p>{t('services.WeWill')}</p>
      <p>{t('services.WeCoordinate')}</p>
    </div>
  )
}

export default Services
