import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface GoldButtonProps {
  children: ReactNode
  variant?: 'solid' | 'outline'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export default function GoldButton({
  children,
  variant = 'solid',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: GoldButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-200 cursor-none'

  const styles =
    variant === 'solid'
      ? 'bg-volt on-volt hover:bg-volt-dim'
      : 'border border-volt text-volt hover:bg-volt/10'

  const combined = `${base} ${styles} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
