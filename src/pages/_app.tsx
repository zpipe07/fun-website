import * as React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'

import Page from 'components/Page'
import ThemeProvider from 'providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Page>
        <CssBaseline />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}
export default MyApp
