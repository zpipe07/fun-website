import type { NextPage } from 'next'
import Head from 'next/head'

import TypewriterText from 'components/TypewriterText'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zackpiper.com | home</title>
      </Head>

      <main>
        <TypewriterText>Hello, world!!!</TypewriterText>
      </main>
    </>
  )
}

export default Home
