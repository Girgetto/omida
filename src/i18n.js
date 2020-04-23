import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${window.location.pathname}locales/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: 'en',
    debug: false,
    lng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    defaultNS: 'general',
    ns: ['general', 'errors', 'warnings'],
  })

export default i18n
