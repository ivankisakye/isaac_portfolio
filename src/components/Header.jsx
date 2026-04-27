import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { LuMenu, LuX, LuPhone, LuMail, LuCalendar } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'
import { LuSun, LuMoon } from 'react-icons/lu'

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, setDark } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">

        {/* ── Top Bar — email & phone ───────────────────── */}
        <div
          className={`bg-dark-800/90 backdrop-blur-md border-b border-gold-500/10 transition-all duration-500 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0 border-0' : 'max-h-10 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="mailto:isaaackiiza805@gmail.com"
                className="flex items-center gap-2 font-sans text-xs text-cream/40 hover:text-gold-400 transition-colors duration-300"
              >
                <LuMail size={11} />
                isaaackiiza805@gmail.com
              </a>
              <a
                href="tel:07312383505"
                className="hidden sm:flex items-center gap-2 font-sans text-xs text-cream/40 hover:text-gold-400 transition-colors duration-300"
              >
                <LuPhone size={11} />
                07312383505
              </a>
            </div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cream/25">
              London, UK
            </span>
          </div>
        </div>

        {/* ── Main Nav Bar ────────────────────────────── */}
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold-500/10 py-4'
              : 'bg-dark-900/60 backdrop-blur-sm py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">

            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl md:text-2xl tracking-widest text-cream hover:text-gold-400 transition-colors duration-300 flex-shrink-0"
            >
              ISAAC <span className="gold-text">KIIZA</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                      isActive ? 'text-gold-400' : 'text-cream/60 hover:text-cream'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

              {/* Theme toggle */}
                <button
                onClick={() => setDark(!dark)}
                className="text-cream/60 hover:text-gold-400 transition-colors duration-300 p-1"
                aria-label="Toggle theme"
                >
                {dark ? <LuSun size={18} /> : <LuMoon size={18} />}
                </button>



            {/* Right side — Book Now + Hamburger */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                to="/contact"
                className="hidden md:flex items-center gap-2 btn-primary py-2 px-5 text-xs"
              >
                <LuCalendar size={13} />
                Book Now
              </Link>

              <a
                href="tel:07312383505"
                className="hidden md:flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gold-400 hover:text-gold-300 transition-colors duration-300"
              >
                <LuPhone size={13} />
                Call
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-cream/70 hover:text-gold-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ───────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <nav
          className={`absolute top-0 right-0 bottom-0 w-72 bg-dark-800 border-l border-gold-500/10
            flex flex-col justify-center px-12 gap-7 transition-transform duration-500 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-display text-2xl transition-colors duration-300 ${
                  isActive ? 'text-gold-400' : 'text-cream/60 hover:text-cream'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile Book Now */}
          <div className="border-t border-gold-500/10 pt-6 mt-2 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center flex items-center justify-center gap-2 text-xs"
            >
              <LuCalendar size={13} />
              Book Now
            </Link>

            <a
              href="tel:07312383505"
              className="flex items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gold-400"
            >
              <LuPhone size={13} />
              07312383505
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}