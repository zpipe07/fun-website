import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// declare module '@mui/material/styles' {
//   interface Theme {
//     typography: {
//       fontFamily: string
//     }
//     // status: {
//     //   danger: string
//     // }
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     typography?: {
//       fontFamily?: string
//     }
//     // status?: {
//     //   danger?: string
//     // }
//   }
// }

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
