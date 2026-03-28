import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  reverse?: boolean
  className?: string
}

export default function Marquee({
  children,
  speed = 25,
  reverse = false,
  className = '',
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
      }}
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <span className="flex items-center">{children}</span>
        <span className="flex items-center">{children}</span>
      </div>
    </div>
  )
}
