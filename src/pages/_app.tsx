import GNB from '@components/gnb/GNB'
import { AppProps } from 'next/app'
import Layout from '@components/layout'
import Head from 'next/head'
import GlobalStyles from '@styles/GlobalStyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hooks101</title>
      </Head>

      <GlobalStyles />
      <GNB />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
