import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

// Deep cream for secondary text against red ink
const CREAM = '#faf3e7'

export default function Hero() {
  const { t } = useLang()
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [inkFilled, setInkFilled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Reveal text once ink has filled the center (~7s)
  useEffect(() => {
    if (!loaded) return
    const timer = setTimeout(() => setInkFilled(true), 6500)
    return () => clearTimeout(timer)
  }, [loaded])

  const handleEnded = () => {
    if (videoRef.current) videoRef.current.pause()
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video background — plays once, stops on last frame */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onCanPlay={() => setLoaded(true)}
          onEnded={handleEnded}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Text — headline with paint-stroke outline, cream secondary */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className={`font-sans text-xs tracking-widest-plus uppercase mb-6
                      transition-all duration-[2000ms] ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ color: CREAM }}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6
                      transition-all duration-[2500ms] ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            WebkitTextStroke: '0.5px rgba(30, 37, 80, 0.25)',
            color: CREAM,
          }}
        >
          {t.brand}
        </h1>
        <div
          className={`h-px mx-auto mb-6 transition-all duration-[2000ms] delay-300 ease-out
                      ${inkFilled ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}
          style={{ backgroundColor: CREAM }}
        />
        <p
          className={`font-serif text-lg md:text-xl italic leading-relaxed mb-10 max-w-xl mx-auto
                      transition-all duration-[2000ms] delay-500 ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ color: CREAM }}
        >
          {t.hero.tagline}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center
                      transition-all duration-[2000ms] delay-700 ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href="#shop"
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
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                    transition-all duration-1000 delay-1000 ease-out
                    ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
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
