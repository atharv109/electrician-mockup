import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function Cursor() {
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const springConfig = { stiffness: 120, damping: 18, mass: 0.8 }
  const ringX = useSpring(rawX, springConfig)
  const ringY = useSpring(rawY, springConfig)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - 4)
      rawY.set(e.clientY - 4)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [rawX, rawY])

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: rawX, y: rawY }} />
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-14px',
          translateY: '-14px',
        }}
      />
    </>
  )
}
