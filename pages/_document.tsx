import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from 'next-i18next.config'
import { FC } from 'react'

const MyDocument: FC = () => {
  const currentLocale =
  // this.props.__NEXT_DATA__.query.locale ||
  i18nextConfig.i18n.defaultLocale

  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
