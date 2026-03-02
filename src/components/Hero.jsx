import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

// Warm gold-cream — readable on white, elegant on red
const CREAM = '#ffecbb'
const VIMEO_ID = '1169192725'

export default function Hero() {
  const { t } = useLang()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Vimeo background — adaptive bitrate, CDN delivery */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&quality=auto`}
          className={`w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ border: 'none', scale: '1.3' }}
          allow="autoplay; fullscreen"
          title="Hero background"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* All text visible immediately in warm cream */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className="font-sans text-xs tracking-widest-plus uppercase mb-6"
          style={{ color: CREAM }}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          style={{ color: CREAM }}
        >
          {t.brand}
        </h1>
        <div
          className="w-16 h-px mx-auto mb-6"
          style={{ backgroundColor: CREAM }}
        />
        <p
          className="font-serif text-lg md:text-xl italic leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: CREAM }}
        >
          {t.hero.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#shop"
            className="inline-block px-8 py-3 font-sans text-sm tracking-widest-plus uppercase text-navy-800 hover:opacity-90 transition-all duration-300"
            style={{ backgroundColor: CREAM }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 font-sans text-sm tracking-widest-plus uppercase hover:bg-white/10 transition-all duration-300"
            style={{ border: `1px solid ${CREAM}`, color: CREAM }}
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="font-sans text-[10px] tracking-widest-plus uppercase"
          style={{ color: CREAM }}
        >
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 hero-scroll-pulse" style={{ backgroundColor: CREAM }} />
      </div>
    </section>
  )
}
