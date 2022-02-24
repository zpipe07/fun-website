import { Avatar } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import ThemeToggle from 'components/ThemeToggle'

const Header = () => {
  const theme = useTheme()

  return (
    <header>
      <Box
        sx={{
          padding: theme.spacing(2),
          marginBottom: theme.spacing(3),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/3170184?v=4"
          sx={{ height: theme.spacing(8), width: theme.spacing(8) }}
        />

        <ThemeToggle
          sx={{
            position: 'absolute',
            right: 0,
          }}
        />
      </Box>
    </header>
  )
}

export default Header
