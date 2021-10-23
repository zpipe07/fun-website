import { useEffect, useState } from 'react'

type Props = {
  children: string
}

const TypewriterText: React.FC<Props> = ({ children }) => {
  const chars = children.split('')
  const [typedChars, setTypeChars] = useState('')

  useEffect(() => {
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const nextChar = chars.shift()

      if (!nextChar) return clearInterval(interval)

      setTypeChars((prevState) => {
        return prevState + nextChar
      })
    }, 250)
  }, [])

  return (
    <>
      <p>TypewriterText</p>
      <p>{children}</p>
      <p>{typedChars}</p>
    </>
  )
}

export default TypewriterText
