import React from 'react'
import { useTranslation } from 'react-i18next'

import { SEO } from '../../layout'

const Services = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <SEO title="Omida - Real Estate Consulting - Italy | Services" />
      <div className="header">
        <div id="overlay"></div>
        <p>
          Each human being lives three lives: the public, the private and the
          secret one. The last one is dedicated to manage important business.
        </p>
      </div>
      <div className="content">
        <h2>{t('services.Intro')}</h2>
        <p>{t('services.IntroText')}</p>
        <div className="titles">
          <h3>
            {t('services.LuxuryRealEstate')} | {t('services.BusinessAdvisory')}{' '}
            |{t('services.TechnicalAdvice')} | {t('services.Refurbishment')} |
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
    </div>
  )
}

export default Services
