import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

// Warm gold-cream — readable on white, elegant on red
const CREAM = '#ffecbb'

export default function Hero() {
  const { t } = useLang()
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Manual loop: pause 3s on last frame (red), then restart
  const handleEnded = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    setTimeout(() => {
      v.currentTime = 0
      v.play()
    }, 4000)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video background — manual loop with 3s hold on red */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover scale-[1.3] transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onCanPlay={() => setLoaded(true)}
          onEnded={handleEnded}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
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
            href="#about"
            className="inline-block px-8 py-3 font-sans text-sm tracking-widest-plus uppercase text-navy-800 hover:opacity-90 transition-all duration-300"
            style={{ backgroundColor: CREAM }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#shop"
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
