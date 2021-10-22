import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer>
      <Typography variant="body1" sx={{ textAlign: 'center' }} gutterBottom>
        © {new Date().getFullYear()} Zack Piper
      </Typography>
    </footer>
  )
}

export default Footer
