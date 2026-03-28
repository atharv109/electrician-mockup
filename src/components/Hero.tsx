import { motion } from 'motion/react'
import SplitText from './ui/SplitText'
import MagneticButton from './ui/MagneticButton'

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '4.9★', label: 'Rating' },
  { value: '20+', label: 'Years' },
  { value: '24/7', label: 'Emergency' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-base"
    >
      {/* Section number watermark */}
      <span
        className="section-num"
        style={{ top: '-0.08em', left: '-0.04em' }}
        aria-hidden="true"
      >
        01
      </span>

      {/* Main grid — flex-1 fills remaining height */}
      <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px]">

        {/* Left: Giant headline */}
        <div className="flex flex-col justify-center pt-28 pb-12 px-6 lg:px-12">
          <motion.p
            className="rule-volt text-text-muted text-xs uppercase tracking-[0.25em] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Austin, TX · Est. 2004
          </motion.p>

          {/* VOLTA */}
          <SplitText
            as="h1"
            className="font-display leading-[0.88] tracking-tight text-text-primary"
            style={{ fontSize: 'clamp(80px, 14vw, 172px)' }}
            delay={0.2}
            stagger={0.08}
          >
            VOLTA
          </SplitText>

          {/* ELECTRIC — volt color */}
          <SplitText
            as="h1"
            className="font-display leading-[0.88] tracking-tight text-volt"
            style={{ fontSize: 'clamp(80px, 14vw, 172px)' }}
            delay={0.3}
            stagger={0.08}
          >
            ELECTRIC
          </SplitText>

          {/* CO. */}
          <SplitText
            as="h1"
            className="font-display leading-[0.88] tracking-tight text-text-primary"
            style={{ fontSize: 'clamp(80px, 14vw, 172px)' }}
            delay={0.38}
            stagger={0.08}
          >
            CO.
          </SplitText>
        </div>

        {/* Right: Info column */}
        <motion.div
          className="border-t border-rule lg:border-t-0 lg:border-l border-rule flex flex-col justify-center gap-8 px-6 lg:px-10 pt-10 pb-12 lg:pt-28"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-text-muted text-xs uppercase tracking-[0.2em]">
            Licensed &amp; Insured · TDLR #EC12345
          </p>

          <p className="text-text-primary text-base leading-relaxed">
            From circuit breakers to full rewires — precision electrical work for homes and
            businesses that demand nothing but the best.
          </p>

          <MagneticButton
            href="#contact"
            className="bg-volt on-volt px-8 py-4 font-bold uppercase tracking-widest text-sm w-full"
          >
            Get a Free Quote
          </MagneticButton>

          <a
            href="#services"
            className="text-text-muted text-xs uppercase tracking-widest hover:text-text-primary transition-colors cursor-none text-center"
          >
            View Our Services ↓
          </a>

          <p className="text-text-dim text-xs border-t border-rule pt-6">
            Serving Greater Austin since 2004. Every job handled by our licensed team — no
            subcontracting, ever.
          </p>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 border-t border-rule grid grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`py-6 px-6 lg:px-10 flex flex-col gap-1 ${i % 2 === 0 ? 'border-r border-rule' : ''} ${i < 2 ? 'lg:border-r border-rule border-b lg:border-b-0' : ''} ${i === 2 ? 'lg:border-r border-rule' : ''}`}
          >
            <span className="font-display text-3xl text-volt tracking-wide leading-none">
              {value}
            </span>
            <span className="text-text-muted text-xs uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
