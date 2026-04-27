import { Link } from 'react-router-dom'
import { LuInstagram, LuYoutube, LuFacebook, LuMail, LuPhone, LuMapPin } from 'react-icons/lu'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/videos', label: 'Videos' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: LuInstagram, href: 'https://instagram.com/kiizaizo', label: 'Instagram' },
  { icon: LuYoutube, href: '#', label: 'YouTube' },
  { icon: LuFacebook, href: '#', label: 'Facebook' },
]

const services = [
  { label: 'Live Piano Performance', to: '/services' },
  { label: 'Piano Lessons', to: '/services' },
  { label: 'Wedding Music', to: '/services' },
  { label: 'Corporate Events', to: '/services' },
  { label: 'Private Functions', to: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-gold-500/10">

      {/* ── Main Footer ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1 — Brand ──────────────────────────── */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl tracking-widest text-cream hover:text-gold-400 transition-colors duration-300">
              ISAAC <span className="gold-text">KIIZA</span>
            </Link>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40 mt-2 mb-6">
              Pianist · Performer · Teacher
            </p>
            <p className="font-body text-base text-cream/55 leading-relaxed mb-8">
              A London-based pianist specialising in live music for events
              and piano lessons for beginners. Graduate of the Academy
              of Contemporary Music.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-gold-500/20 text-cream/50 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 — Navigation ─────────────────────── */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Navigation
            </h4>
            <div className="w-8 h-px bg-gold-500/30 mb-6" />
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body text-base text-cream/55 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 3 — Services ───────────────────────── */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Services
            </h4>
            <div className="w-8 h-px bg-gold-500/30 mb-6" />
            <nav className="flex flex-col gap-3">
              {services.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="font-body text-base text-cream/55 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 4 — Contact ────────────────────────── */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Get In Touch
            </h4>
            <div className="w-8 h-px bg-gold-500/30 mb-6" />
            <div className="flex flex-col gap-5">

              <a
                href="mailto:isaaackiiza805@gmail.com"
                className="flex items-start gap-3 group"
              >
                <LuMail size={15} className="text-gold-400 mt-1 flex-shrink-0" />
                <span className="font-body text-base text-cream/55 group-hover:text-gold-400 transition-colors duration-300 break-all">
                  isaaackiiza805@gmail.com
                </span>
              </a>

              <a
                href="tel:07312383505"
                className="flex items-center gap-3 group"
              >
                <LuPhone size={15} className="text-gold-400 flex-shrink-0" />
                <span className="font-body text-base text-cream/55 group-hover:text-gold-400 transition-colors duration-300">
                  07312383505
                </span>
              </a>

              <div className="flex items-center gap-3">
                <LuMapPin size={15} className="text-gold-400 flex-shrink-0" />
                <span className="font-body text-base text-cream/55">
                  London, United Kingdom
                </span>
              </div>

              <a
                href="https://instagram.com/kiizaizo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <LuInstagram size={15} className="text-gold-400 flex-shrink-0" />
                <span className="font-body text-base text-cream/55 group-hover:text-gold-400 transition-colors duration-300">
                  @kiizaizo
                </span>
              </a>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="btn-primary mt-8 inline-flex items-center gap-2 text-xs py-3 px-6"
            >
              Book Now
            </Link>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────── */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/25 tracking-wider">
            © {new Date().getFullYear()} Isaac Kiiza. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/20 tracking-wider">
            Pianist · London, UK
          </p>
        </div>
      </div>

    </footer>
  )
}