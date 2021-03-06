import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/system'

type Props = {
  children: string
}

const TypewriterText: React.FC<Props> = ({ children }) => {
  const chars = children.split('')

  const [typedChars, setTypedChars] = useState('')

  const theme = useTheme()

  useEffect(() => {
    const typeCharacter = () => {
      const timeout = Math.random() * 750

      setTimeout(() => {
        const nextChar = chars.shift()

        setTypedChars((prevState) => {
          return prevState + nextChar
        })

        if (chars.length > 0) {
          typeCharacter()
        }
      }, timeout)
    }

    typeCharacter()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        textAlign: 'center',

        '&::after': {
          content: '"|"',
          fontWeight: '100',
          color: 'transparent',
          backgroundColor: theme.palette.text.primary,
        },
      }}
    >
      {typedChars}
    </Typography>
  )
}

export default TypewriterText
