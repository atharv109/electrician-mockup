import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import SectionLabel from './ui/SectionLabel'
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
    'w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors duration-200'

  const selectClass =
    'w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors duration-200 appearance-none cursor-pointer ' +
    (form.service ? 'text-white' : 'text-text-muted')

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-dark-border" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Contact info */}
          <div>
            <AnimatedSection delay={0}>
              <SectionLabel>Get in Touch</SectionLabel>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(44px,6vw,72px)] leading-none tracking-wide text-white mb-4">
                GET YOUR FREE QUOTE
              </h2>
              <p className="text-text-muted mb-10">
                No obligation. We respond within 2 hours during business hours.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: '(555) 248-0110', sub: 'Call or text anytime' },
                  { icon: Mail, label: 'hello@voltaelectric.com', sub: 'We reply within 2 hours' },
                  {
                    icon: MapPin,
                    label: 'Austin, TX & Surrounding Areas',
                    sub: 'Serving Greater Austin since 2004',
                  },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{label}</p>
                      <p className="text-text-muted text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Emergency box */}
            <AnimatedSection delay={0.3}>
              <div className="border border-gold/30 bg-gold/5 rounded-xl p-5 flex items-center gap-4">
                <Clock className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Electrical Emergency?</p>
                  <p className="text-text-muted text-xs mt-0.5">
                    We answer 24/7. Call{' '}
                    <a href="tel:5552480110" className="text-gold hover:underline">
                      (555) 248-0110
                    </a>{' '}
                    right now.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-display text-3xl text-white tracking-wide mb-3">
                      MESSAGE SENT!
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                      Thanks! We'll be in touch within 2 hours. For emergencies, call us directly
                      at (555) 248-0110.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          <option value="" disabled>
                            Select a service...
                          </option>
                          {serviceOptions.map((o) => (
                            <option key={o} value={o} className="bg-dark-card text-white">
                              {o}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                          ▾
                        </div>
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

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                        How Did You Hear About Us?
                      </label>
                      <select
                        name="source"
                        value={form.source}
                        onChange={handleChange}
                        className={
                          'w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors duration-200 appearance-none cursor-pointer ' +
                          (form.source ? 'text-white' : 'text-text-muted')
                        }
                      >
                        <option value="" disabled>
                          Select an option...
                        </option>
                        {['Google', 'Referral', 'Yelp', 'Nextdoor', 'Social Media', 'Other'].map(
                          (o) => (
                            <option key={o} value={o} className="bg-dark-card text-white">
                              {o}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <GoldButton type="submit" className="w-full mt-2">
                      Send My Quote Request
                    </GoldButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
