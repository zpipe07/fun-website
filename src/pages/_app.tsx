import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Page from 'components/Page'

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <CssBaseline />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}
export default MyApp
