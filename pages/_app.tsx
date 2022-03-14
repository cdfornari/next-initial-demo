import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
}

type AppPropswithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropswithLayout) {
  const getLayout = Component.getLayout || (page => page);
  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
