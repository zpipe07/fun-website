import { Avatar, Container, Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'

type Props = {
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <Container
      sx={{
        position: 'relative',
        minHeight: '100vh',
        paddingBottom: theme.spacing(7),
      }}
    >
      <header>
        <Box
          sx={{
            padding: theme.spacing(2),
            marginBottom: theme.spacing(3),
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/3170184?v=4"
            sx={{ height: theme.spacing(8), width: theme.spacing(8) }}
          />
        </Box>
      </header>

      {children}

      <Box sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
        <footer>
          <Typography variant="body1" sx={{ textAlign: 'center' }} gutterBottom>
            © {new Date().getFullYear()} Zack Piper
          </Typography>
        </footer>
      </Box>
    </Container>
  )
}

export default Page
