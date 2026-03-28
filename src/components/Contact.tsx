import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import SectionLabel from './ui/SectionLabel'
import SplitText from './ui/SplitText'
import MagneticButton from './ui/MagneticButton'
import GoldButton from './ui/GoldButton'

const serviceOptions = [
  'Residential Wiring',
  'Commercial Electrical',
  'Safety Inspection',
  'Solar & EV Charging',
  'Smart Home Systems',
  'Emergency Repair',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
    source: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-transparent border-b border-rule px-0 py-3 text-text-primary text-sm placeholder:text-text-dim focus:border-volt focus:outline-none transition-colors duration-200'

  const selectClass =
    'w-full bg-transparent border-b border-rule px-0 py-3 text-sm focus:border-volt focus:outline-none transition-colors duration-200 appearance-none cursor-none ' +
    (form.service ? 'text-text-primary' : 'text-text-dim')

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-base overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-12 mb-12 border-b border-rule pb-12">
          <SectionLabel>Get in Touch</SectionLabel>
          <SplitText
            as="h2"
            className="font-display text-text-primary leading-none tracking-wide"
            style={{ fontSize: 'clamp(44px, 6.5vw, 80px)' }}
            delay={0.1}
            stagger={0.05}
          >
            GET YOUR FREE QUOTE
          </SplitText>
          <p className="text-text-muted text-sm mt-4">
            No obligation. We respond within 2 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">

          {/* Left — Contact info */}
          <div className="px-6 lg:px-12 py-12 lg:border-r border-rule">
            <div className="space-y-8 mb-10">
              {[
                { icon: Phone, label: '(555) 248-0110', sub: 'Call or text anytime' },
                { icon: Mail, label: 'hello@voltaelectric.com', sub: 'Reply within 2 hours' },
                { icon: MapPin, label: 'Austin, TX & Surrounding Areas', sub: 'Serving Greater Austin since 2004' },
              ].map(({ icon: Icon, label, sub }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-4 h-4 text-volt mt-1 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-medium">{label}</p>
                    <p className="text-text-muted text-xs mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency callout — inverted */}
            <motion.div
              className="bg-volt p-5 flex items-start gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Clock className="w-4 h-4 on-volt mt-0.5 shrink-0" />
              <div>
                <p className="on-volt font-bold text-sm uppercase tracking-wider">
                  Electrical Emergency?
                </p>
                <p className="on-volt text-xs mt-1 opacity-80">
                  We answer 24/7 — call{' '}
                  <a href="tel:5552480110" className="underline cursor-none">
                    (555) 248-0110
                  </a>{' '}
                  right now.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            className="px-6 lg:px-12 py-12 border-t border-rule lg:border-t-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-14 h-14 border border-volt flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7 text-volt" />
                  </div>
                  <h3 className="font-display text-3xl text-text-primary tracking-wide mb-3">
                    MESSAGE SENT
                  </h3>
                  <p className="text-text-muted text-sm max-w-xs leading-relaxed">
                    We'll be in touch within 2 hours. For emergencies call (555) 248-0110.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        required
                        placeholder="(512) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" disabled className="bg-panel text-text-muted">
                          Select a service...
                        </option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o} className="bg-panel text-text-primary">
                            {o}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-xs">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={form.description}
                      onChange={handleChange}
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  <GoldButton type="submit" className="w-full mt-2">
                    Send My Quote Request
                  </GoldButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
