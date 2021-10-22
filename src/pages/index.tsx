import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography } from '@mui/material'

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
      </main>
    </>
  )
}

export default Home
