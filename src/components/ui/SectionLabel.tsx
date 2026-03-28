import { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-volt text-xs font-bold uppercase tracking-[0.3em] border-l-2 border-volt pl-3 mb-4 ${className}`}
    >
      {children}
    </p>
  )
}
