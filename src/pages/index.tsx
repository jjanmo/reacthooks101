import GridCalendar from '@components/GridCalendar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ReactHook 101</title>
      </Head>

      <GridCalendar />
    </>
  )
}
