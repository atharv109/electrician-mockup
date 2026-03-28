import Cursor from './components/ui/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/ui/Marquee'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const tickerItems = [
  'Residential Wiring',
  '·',
  'Commercial Electrical',
  '·',
  'Panel Upgrades',
  '·',
  'Solar & EV Charging',
  '·',
  'Smart Home Systems',
  '·',
  '24/7 Emergency',
  '·',
  'Licensed & Insured',
  '·',
  'Austin TX Since 2004',
  '·',
]

function TickerContent() {
  return (
    <>
      {tickerItems.map((item, i) => (
        <span
          key={i}
          className={`font-display text-lg tracking-wider px-5 ${
            item === '·' ? 'text-volt' : 'text-text-muted'
          }`}
        >
          {item}
        </span>
      ))}
    </>
  )
}

export default function App() {
  return (
    <>
      <Cursor />
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />

        {/* Ticker 1 — between Hero and Services */}
        <Marquee speed={28} className="border-y border-rule bg-surface py-4">
          <TickerContent />
        </Marquee>

        <Services />

        {/* Ticker 2 — between Services and About, reverse direction */}
        <Marquee speed={32} reverse className="border-y border-rule bg-surface py-4">
          <TickerContent />
        </Marquee>

        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
