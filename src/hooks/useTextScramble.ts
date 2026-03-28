import { useState, useCallback, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—'

export function useTextScramble(original: string) {
  const [displayed, setDisplayed] = useState(original)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    let frame = 0
    const totalFrames = 14

    intervalRef.current = setInterval(() => {
      setDisplayed(
        original
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < Math.floor((frame / totalFrames) * original.length)) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      frame++
      if (frame > totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayed(original)
      }
    }, 35)
  }, [original])

  return { displayed, scramble }
}
