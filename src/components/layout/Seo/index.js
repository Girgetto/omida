import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, children }) => (
  <>
    <Helmet>
      <html lang={window.localStorage.i18nextLng} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </>
)

export default SEO
