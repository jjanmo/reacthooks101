import GNB from '@components/gnb/GNB'
import { AppProps } from 'next/app'
import Layout from '@components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GNB />
      <Component {...pageProps} />
    </Layout>
  )
}
