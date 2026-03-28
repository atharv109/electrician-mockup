import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Zap } from 'lucide-react'
import ScrollProgress from './ui/ScrollProgress'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-md border-b border-rule'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-none px-6 lg:px-12 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group cursor-none">
            <div className="w-7 h-7 bg-volt flex items-center justify-center">
              <Zap className="w-4 h-4 on-volt" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg text-text-primary tracking-wider group-hover:text-volt transition-colors duration-200">
              VOLTA ELECTRIC
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-text-primary text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-200 cursor-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-volt on-volt px-6 py-2.5 text-xs font-bold uppercase tracking-widest cursor-none hover:bg-volt-dim transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary p-1 cursor-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden bg-surface border-t border-rule md:hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-muted hover:text-text-primary text-xs font-medium uppercase tracking-[0.2em] transition-colors cursor-none"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-volt on-volt px-6 py-3 text-xs font-bold uppercase tracking-widest text-center cursor-none mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
