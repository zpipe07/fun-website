import * as React from 'react'
import { IconButton, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'

import { ColorModeContext } from 'providers/ThemeProvider'

interface Props {
  sx?: SxProps
}

const ThemeToggle: React.FC<Props> = ({ sx }) => {
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()

  return (
    <IconButton
      sx={{ opacity: '0.8', ...sx }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
      size="large"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ThemeToggle
