import { Zap } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

const footerLinks = {
  Services: [
    'Residential Wiring',
    'Commercial Electrical',
    'Safety Inspections',
    'Solar & EV Charging',
    'Smart Home Systems',
    'Emergency Repairs',
  ],
  Company: ['Home', 'About Us', 'Services', 'Contact'],
  Contact: ['(555) 248-0110', 'hello@voltaelectric.com', 'Austin, TX', 'Mon–Fri 7am–6pm'],
}

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-gold rounded-sm flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" strokeWidth={2.5} />
                </div>
                <span className="font-display text-lg tracking-wider text-white">
                  VOLTA ELECTRIC
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                Power. Precision. Performance. Austin's premier electrical contractor since 2004.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-text-muted hover:text-white text-sm transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © 2025 Volta Electric Co. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Licensed Master Electrician · Texas TDLR Electrical Contractor #EC12345
          </p>
        </div>
      </div>
    </footer>
  )
}
