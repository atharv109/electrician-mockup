import { Zap } from 'lucide-react'

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
    <footer className="bg-surface border-t border-rule">
      <div className="max-w-none px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 bg-volt flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 on-volt" strokeWidth={2.5} />
              </div>
              <span className="font-display text-base tracking-wider text-text-primary">
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
                      className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200 cursor-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-text-dim text-xs">© 2025 Volta Electric Co. All rights reserved.</p>
          <p className="text-text-dim text-xs">
            Licensed Master Electrician · Texas TDLR #EC12345
          </p>
        </div>
      </div>
    </footer>
  )
}
