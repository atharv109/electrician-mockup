import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, animate } from 'motion/react'
import AnimatedSection from './ui/AnimatedSection'
import SectionLabel from './ui/SectionLabel'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Years in Business' },
  { value: 4.9, suffix: '★', label: 'Average Rating', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
]

function StatCard({
  value,
  suffix,
  label,
  decimals = 0,
  delay = 0,
}: {
  value: number
  suffix: string
  label: string
  decimals?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useMotionValue(0)
  const displayRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration: 2,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (displayRef.current) {
          displayRef.current.textContent = decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()
        }
      },
    })
    return controls.stop
  }, [inView, value, delay, decimals, count])

  return (
    <div
      ref={ref}
      className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col items-start"
    >
      <div className="font-display text-[56px] leading-none text-gold mb-2">
        <span ref={displayRef}>0</span>
        <span>{suffix}</span>
      </div>
      <p className="text-text-muted text-sm uppercase tracking-widest">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-dark-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Story */}
          <div>
            <AnimatedSection delay={0}>
              <SectionLabel>About Volta Electric</SectionLabel>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(44px,6vw,72px)] leading-none tracking-wide text-white mb-8">
                BUILT ON 20 YEARS OF TRUST
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-5 text-text-muted leading-relaxed mb-10">
                <p>
                  Founded in Austin in 2004 by master electrician Marcus Volta, Volta Electric Co.
                  started as a two-man crew rewiring older bungalows in East Austin. Two decades
                  later, we've grown into a 24-person team trusted by homeowners, architects, and
                  general contractors across the Greater Austin area.
                </p>
                <p>
                  We don't subcontract. Every wire we pull is touched by a licensed Volta
                  electrician, under our direct supervision, covered by our warranty. That
                  commitment to quality is why 80% of our work comes from repeat clients and
                  referrals.
                </p>
                <p>
                  When you hire Volta, you're hiring two decades of Austin electrical knowledge —
                  and a team that treats your home or business like our own.
                </p>
              </div>
            </AnimatedSection>

            {/* Value badges */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {['Licensed Master Electrician', 'Family-Owned Since 2004', '500+ Projects'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="text-xs font-semibold uppercase tracking-wider px-4 py-2 border border-dark-border rounded-full text-text-muted"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Stats */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} delay={0.3 + i * 0.1} />
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                'Volta rewired our entire 1960s house without us moving out for a single day. Unbelievably professional.',
              author: 'Sarah K.',
              location: 'Hyde Park, Austin',
            },
            {
              quote:
                "Our new restaurant's full electrical install came in on time and under budget. That's unheard of.",
              author: 'James T.',
              location: 'Restaurant Owner',
            },
            {
              quote:
                'Marcus and his team installed our EV chargers and solar wiring in one day. Incredible work.',
              author: 'David R.',
              location: 'Lakeway, TX',
            },
          ].map((t, i) => (
            <AnimatedSection key={t.author} delay={0.1 * i}>
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-white text-sm font-semibold">{t.author}</p>
                  <p className="text-text-muted text-xs">{t.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
