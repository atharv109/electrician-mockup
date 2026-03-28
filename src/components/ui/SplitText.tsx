import { useRef, ElementType } from 'react'
import { motion, useInView } from 'motion/react'

interface SplitTextProps {
  children: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  stagger?: number
  as?: ElementType
}

export default function SplitText({
  children,
  className = '',
  style,
  delay = 0,
  stagger = 0.06,
  as: Tag = 'div',
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px -10% 0px' })

  const words = children.split(' ')

  return (
    // @ts-expect-error polymorphic element
    <Tag ref={ref} className={className} style={style} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : { y: '110%' }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
