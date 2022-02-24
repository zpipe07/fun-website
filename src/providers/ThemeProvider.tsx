import * as React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemProvider,
} from '@mui/material/styles'

// const theme = createTheme({
//   typography: {
//     fontFamily: ['Roboto Mono', 'monospace'].join(','),
//   },
//   palette: {
//     mode: 'dark',
//   },
// })

interface Props {
  children: React.ReactNode
}

const ColorModeContext = React.createContext({
  toggleColorMode: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
})

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemProvider theme={theme}>{children}</MuiThemProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemeProvider
