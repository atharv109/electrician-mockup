import { motion } from 'motion/react'
import { ChevronDown, Star, ShieldCheck, Zap } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import GoldButton from './ui/GoldButton'
import SectionLabel from './ui/SectionLabel'

const badges = [
  { icon: Zap, label: '500+ Projects' },
  { icon: Star, label: '4.9★ Rating' },
  { icon: ShieldCheck, label: 'Fully Licensed' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 50%, rgba(245,197,24,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Faint grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 79px, #F5C518 79px, #F5C518 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #F5C518 79px, #F5C518 80px)',
        }}
      />

      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(245,197,24,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <AnimatedSection delay={0}>
          <SectionLabel>Licensed & Insured · Austin, TX · TDLR #EC12345</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="font-display text-[clamp(72px,12vw,140px)] leading-none tracking-wide mb-6">
            <span className="text-white block">WIRING AUSTIN'S</span>
            <span className="text-gold-gradient block">FUTURE.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            From circuit breakers to full rewires, Volta Electric delivers precision electrical
            work for homes and businesses that demand nothing but the best.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-4 mb-14">
            <GoldButton href="#contact">Get a Free Quote</GoldButton>
            <GoldButton href="#services" variant="outline">
              View Our Services
            </GoldButton>
          </div>
        </AnimatedSection>

        {/* Trust badges */}
        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap gap-6 md:gap-10">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
        }}
      />
    </section>
  )
}
