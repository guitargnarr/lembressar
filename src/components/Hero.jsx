import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [inkFilled, setInkFilled] = useState(false)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Reveal text once ink has filled the center (~7s in)
  useEffect(() => {
    if (!loaded) return
    const timer = setTimeout(() => setInkFilled(true), 6500)
    return () => clearTimeout(timer)
  }, [loaded])

  const handleEnded = () => {
    setEnded(true)
    // Pause on last frame
    if (videoRef.current) {
      videoRef.current.pause()
    }
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

      {/* White text — invisible on white bg, revealed as ink fills */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className={`font-sans text-xs tracking-widest-plus uppercase text-white/90 mb-6
                      transition-all duration-[2000ms] ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-6
                      transition-all duration-[2500ms] ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          {t.brand}
        </h1>
        <div
          className={`h-px bg-white/60 mx-auto mb-6 transition-all duration-[2000ms] delay-300 ease-out
                      ${inkFilled ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}
        />
        <p
          className={`font-serif text-lg md:text-xl text-white/80 italic leading-relaxed mb-10 max-w-xl mx-auto
                      transition-all duration-[2000ms] delay-500 ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t.hero.tagline}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center
                      transition-all duration-[2000ms] delay-700 ease-out
                      ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a href="#shop" className="inline-block px-8 py-3 bg-white/90 text-navy-800 font-sans text-sm tracking-widest-plus uppercase hover:bg-white transition-all duration-300">
            {t.hero.cta1}
          </a>
          <a href="#shop" className="inline-block px-8 py-3 border border-white/70 text-white font-sans text-sm tracking-widest-plus uppercase hover:bg-white/10 transition-all duration-300">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator — appears after text */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                    transition-all duration-1000 delay-1000 ease-out
                    ${inkFilled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="font-sans text-[10px] tracking-widest-plus uppercase text-white/60">
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 bg-white/30 hero-scroll-pulse" />
      </div>
    </section>
  )
}
