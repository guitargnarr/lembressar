import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video background — no overlay per Pip */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onCanPlay={() => setLoaded(true)}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content with staggered reveal — dark text for white bg */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className={`font-sans text-xs tracking-widest-plus uppercase text-navy-500 mb-6
                      transition-all duration-1000 delay-300 ease-out
                      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-navy-800 font-light leading-tight mb-6
                      transition-all duration-1200 delay-500 ease-out
                      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {t.brand}
        </h1>
        <div
          className={`h-px bg-gold-400 mx-auto mb-6 transition-all duration-1000 delay-700 ease-out
                      ${loaded ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}
        />
        <p
          className={`font-serif text-lg md:text-xl text-navy-500 italic leading-relaxed mb-10 max-w-xl mx-auto
                      transition-all duration-1000 delay-900 ease-out
                      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t.hero.tagline}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center
                      transition-all duration-1000 delay-[1100ms] ease-out
                      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a href="#shop" className="btn-primary">
            {t.hero.cta1}
          </a>
          <a href="#shop" className="btn-outline">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                    transition-all duration-1000 delay-[1400ms] ease-out
                    ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="font-sans text-[10px] tracking-widest-plus uppercase text-navy-400">
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 bg-navy-300/50 hero-scroll-pulse" />
      </div>
    </section>
  )
}
