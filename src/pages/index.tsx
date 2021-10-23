import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography } from '@mui/material'
import TypewriterText from 'components/TypewriterText'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zackpiper.com | home</title>
      </Head>

      <main>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Hello, world!
        </Typography>

        <TypewriterText>Here&apos;s some text</TypewriterText>
      </main>
    </>
  )
}

export default Home
