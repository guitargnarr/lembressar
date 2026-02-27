import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function Header() {
  const { lang, t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const NAV_LINKS = [
    { href: '#about', label: t.nav.about },
    { href: '#shop', label: t.nav.shop },
    { href: '#visit', label: t.nav.visit },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navHref = (hash) => (isHome ? hash : `/${hash}`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className={`font-serif text-2xl tracking-widest-plus transition-colors duration-500 ${
              scrolled || !isHome ? 'text-navy-700' : 'text-white'
            }`}
          >
            {t.brand}
          </span>
        </Link>

        {/* Desktop nav + lang toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                className={`font-sans text-xs tracking-widest-plus uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-navy-600 hover:text-navy-800'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggle}
            className={`font-sans text-xs tracking-widest-plus uppercase border rounded px-3 py-1 transition-all duration-300 cursor-pointer ${
              scrolled || !isHome
                ? 'border-navy-300 text-navy-600 hover:bg-navy-700 hover:text-cream-50'
                : 'border-white/40 text-white/80 hover:bg-white/10'
            }`}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>

        {/* Mobile: lang toggle + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className={`font-sans text-xs tracking-widest-plus uppercase border rounded px-2 py-1 transition-colors cursor-pointer ${
              scrolled || !isHome
                ? 'border-navy-300 text-navy-600'
                : 'border-white/40 text-white/80'
            }`}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 transition-colors ${
              scrolled || !isHome ? 'text-navy-700' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50/98 backdrop-blur-sm border-t border-navy-100">
          <nav className="flex flex-col py-6 px-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-xs tracking-widest-plus uppercase text-navy-600 hover:text-navy-800 py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
