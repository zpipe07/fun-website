import { Container } from '@mui/material'
import { Box, useTheme } from '@mui/system'

import Footer from 'components/Footer'
import Header from 'components/Header'

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
      <Header />

      {children}

      <Box sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
        <Footer />
      </Box>
    </Container>
  )
}

export default Page
