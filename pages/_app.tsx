import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { NextSeo } from 'next-seo'
import seoConfig from '../next-seo.config'
import AppStyles from '../src/styles/global.styles'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppStyles>
        <NextSeo {...seoConfig} />
        <Component {...pageProps} />
        <GlobalStyle />
      </AppStyles>
    </>
  )
}

export default App
