import { useState } from 'react'
import { motion } from 'motion/react'
import { Zap, Building2, Shield, Sun, Lightbulb, Wrench } from 'lucide-react'
import SectionLabel from './ui/SectionLabel'
import { useTextScramble } from '../hooks/useTextScramble'

const services = [
  {
    num: '01',
    icon: Zap,
    title: 'RESIDENTIAL WIRING',
    description:
      'Panel upgrades, full rewires, and new construction rough-in for Austin homes. Done right, the first time — backed by our lifetime workmanship warranty.',
  },
  {
    num: '02',
    icon: Building2,
    title: 'COMMERCIAL ELECTRICAL',
    description:
      'Tenant fit-outs, 3-phase power systems, warehouse and retail electrical. We work around your schedule and deliver on time, every time.',
  },
  {
    num: '03',
    icon: Shield,
    title: 'SAFETY INSPECTIONS',
    description:
      "Pre-purchase audits, insurance compliance reports, and OSHA electrical certification. Know exactly what you're buying before you sign.",
  },
  {
    num: '04',
    icon: Sun,
    title: 'SOLAR & EV CHARGING',
    description:
      'Level 2 EV charger installation, solar panel interconnects, and battery backup system wiring. Future-proof your home or business today.',
  },
  {
    num: '05',
    icon: Lightbulb,
    title: 'SMART HOME SYSTEMS',
    description:
      'Lutron lighting control, whole-home automation wiring, and smart panel installation. Your home, working for you.',
  },
  {
    num: '06',
    icon: Wrench,
    title: '24/7 EMERGENCY REPAIRS',
    description:
      'Same-hour response, fault diagnosis, and urgent restoration — nights, weekends, and holidays. Power back on fast.',
  },
]

function ServiceRow({
  num,
  icon: Icon,
  title,
  description,
  isLast,
  index,
}: {
  num: string
  icon: typeof Zap
  title: string
  description: string
  isLast: boolean
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`grid grid-cols-[48px_1fr_32px] lg:grid-cols-[72px_1fr_48px] gap-4 lg:gap-8 items-start py-7 lg:py-8 px-6 lg:px-12 cursor-none transition-colors duration-200 ${!isLast ? 'border-b border-rule' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? '#0E0E0E' : 'transparent' }}
      transition={{ duration: 0.15 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      custom={index}
    >
      {/* Number */}
      <motion.span
        className="font-display text-base lg:text-lg pt-1 leading-none"
        animate={{ color: hovered ? '#E8FF47' : '#2E2E2E' }}
        transition={{ duration: 0.15 }}
      >
        {num}
      </motion.span>

      {/* Content */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <motion.div
            animate={{ color: hovered ? '#E8FF47' : '#6B6B6B' }}
            transition={{ duration: 0.15 }}
          >
            <Icon className="w-4 h-4" />
          </motion.div>
          <h3
            className="font-display tracking-wide text-text-primary"
            style={{ fontSize: 'clamp(22px, 3.5vw, 44px)', lineHeight: 1 }}
          >
            {title}
          </h3>
        </div>

        <motion.p
          className="text-text-muted text-sm leading-relaxed overflow-hidden"
          animate={{
            maxHeight: hovered ? '120px' : '0px',
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? '12px' : '0px',
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {description}
        </motion.p>
      </div>

      {/* Arrow */}
      <motion.span
        className="font-display text-xl pt-1 text-text-muted leading-none"
        animate={{
          x: hovered ? 4 : 0,
          color: hovered ? '#E8FF47' : '#2E2E2E',
        }}
        transition={{ duration: 0.2 }}
      >
        →
      </motion.span>
    </motion.div>
  )
}

export default function Services() {
  const { displayed, scramble } = useTextScramble('OUR SERVICES')

  return (
    <section id="services" className="relative py-16 lg:py-24 bg-base overflow-hidden">
      {/* Section number watermark — top right */}
      <span
        className="section-num"
        style={{ top: '-0.08em', right: '-0.04em', left: 'auto' }}
        aria-hidden="true"
      >
        02
      </span>

      <div className="relative z-10">
        {/* Section header */}
        <div className="px-6 lg:px-12 mb-10 flex items-end justify-between">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2
              className="font-display text-text-primary leading-none tracking-wide cursor-none"
              style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
              onMouseEnter={scramble}
            >
              {displayed}
            </h2>
          </div>
          <p className="text-text-muted text-xs uppercase tracking-widest hidden md:block">
            Hover to explore
          </p>
        </div>

        {/* Full-width divider */}
        <div className="border-t border-rule" />

        {/* Service rows */}
        {services.map((service, i) => (
          <ServiceRow
            key={service.num}
            {...service}
            isLast={i === services.length - 1}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
