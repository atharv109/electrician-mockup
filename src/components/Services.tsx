import { motion } from 'motion/react'
import { Zap, Building2, Shield, Sun, Lightbulb, Wrench } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import SectionLabel from './ui/SectionLabel'

const services = [
  {
    icon: Zap,
    title: 'Residential Wiring',
    description:
      'Panel upgrades, full rewires, and new construction rough-in for Austin homes. Done right, the first time.',
  },
  {
    icon: Building2,
    title: 'Commercial Electrical',
    description:
      'Tenant fit-outs, 3-phase power systems, warehouse and retail electrical — on time and on budget.',
  },
  {
    icon: Shield,
    title: 'Safety Inspections',
    description:
      'Pre-purchase audits, insurance compliance reports, and OSHA electrical certification for peace of mind.',
  },
  {
    icon: Sun,
    title: 'Solar & EV Charging',
    description:
      'Level 2 EV charger installation, solar panel interconnects, and battery backup system wiring.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Home Systems',
    description:
      'Lutron lighting control, whole-home automation wiring, and smart panel installation by certified pros.',
  },
  {
    icon: Wrench,
    title: '24/7 Emergency Repairs',
    description:
      'Same-hour response, fault diagnosis, and urgent restoration — nights, weekends, and holidays.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-dark-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <AnimatedSection className="mb-16">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display text-[clamp(48px,7vw,80px)] leading-none tracking-wide text-white mb-4">
            OUR SERVICES
          </h2>
          <p className="text-text-muted text-lg max-w-lg">
            Every service backed by 20 years of Austin electrical expertise and a lifetime
            workmanship warranty.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={0.08 * i}>
              <motion.div
                className="group bg-dark-card border border-dark-border rounded-2xl p-8 h-full cursor-default"
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(245,197,24,0.4)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Icon badge */}
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-gold" />
                </div>

                <h3 className="font-display text-2xl tracking-wide text-white mb-3">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/60 to-transparent transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
