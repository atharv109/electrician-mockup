import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, animate, motion } from 'motion/react'
import SectionLabel from './ui/SectionLabel'
import SplitText from './ui/SplitText'

const stats = [
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 20, suffix: '+', label: 'Years' },
  { value: 4.9, suffix: '★', label: 'Rating', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Emergency' },
]

const testimonials = [
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
  {
    quote:
      "Best contractor we've ever worked with. Showed up on time, explained everything, zero surprises on the invoice.",
    author: 'Monica L.',
    location: 'South Congress',
  },
]

function StatItem({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number
  suffix: string
  label: string
  decimals?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useMotionValue(0)
  const displayRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (displayRef.current) {
          displayRef.current.textContent =
            decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()
        }
      },
    })
    return controls.stop
  }, [inView, value, decimals, count])

  return (
    <div ref={ref} className="py-6 border-b border-rule last:border-b-0">
      <div className="font-display text-volt leading-none mb-1" style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}>
        <span ref={displayRef}>0</span>
        <span>{suffix}</span>
      </div>
      <p className="text-text-muted text-xs uppercase tracking-widest">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-base overflow-hidden">
      {/* Section number watermark */}
      <span
        className="section-num"
        style={{ top: '-0.08em', right: '10%', left: 'auto' }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative z-10">
        {/* Main 70/30 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] border-b border-rule">

          {/* Left — Story */}
          <div className="px-6 lg:px-12 py-16 lg:border-r border-rule">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>About Volta Electric</SectionLabel>
            </motion.div>

            <SplitText
              as="h2"
              className="font-display text-text-primary leading-none tracking-wide mt-4 mb-10"
              style={{ fontSize: 'clamp(44px, 6.5vw, 80px)' }}
              delay={0.1}
              stagger={0.05}
            >
              BUILT ON 20 YEARS OF TRUST
            </SplitText>

            <motion.div
              className="space-y-5 text-text-muted leading-relaxed text-[15px] max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                Founded in Austin in 2004 by master electrician Marcus Volta, Volta Electric
                Co. started as a two-man crew rewiring older bungalows in East Austin. Two
                decades later, we've grown into a 24-person team trusted by homeowners,
                architects, and general contractors across the Greater Austin area.
              </p>
              <p>
                We don't subcontract. Every wire we pull is touched by a licensed Volta
                electrician, under our direct supervision, covered by our warranty. That
                commitment to quality is why 80% of our work comes from repeat clients and
                referrals.
              </p>
              <p>
                When you hire Volta, you're hiring two decades of Austin electrical knowledge
                — and a team that treats your home or business like our own.
              </p>
            </motion.div>

            {/* Value badges */}
            <motion.div
              className="flex flex-wrap gap-3 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {['Licensed Master Electrician', 'Family-Owned Since 2004', '500+ Projects Delivered'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium uppercase tracking-wider px-4 py-2 border border-rule rounded-full text-text-muted"
                  >
                    {badge}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right — Stat column */}
          <motion.div
            className="px-6 lg:px-10 py-16 border-t border-rule lg:border-t-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-dim text-xs uppercase tracking-widest mb-8">By the numbers</p>
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </motion.div>
        </div>

        {/* Testimonials — horizontal scroll strip */}
        <div className="px-6 lg:px-12 pt-12">
          <p className="text-text-muted text-xs uppercase tracking-[0.25em] mb-6 rule-volt">
            What clients say
          </p>
        </div>

        <div
          className="flex gap-6 overflow-x-auto px-6 lg:px-12 pb-16 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              className="flex-shrink-0 w-72 lg:w-80 border border-rule p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              whileHover={{ borderColor: 'rgba(232,255,71,0.25)' }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-volt text-sm">★</span>
                ))}
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="text-text-primary text-sm font-semibold">{t.author}</p>
                <p className="text-text-dim text-xs mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
