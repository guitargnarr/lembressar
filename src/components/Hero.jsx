export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80"
          alt="Art gallery interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="font-sans text-xs tracking-widest-plus uppercase text-cream-200 mb-6">
          Galerie d'Art et d'Artisanat
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-6">
          l{'\u2019'}EmbrAssEr
        </h1>
        <div className="w-16 h-px bg-gold-400 mx-auto mb-6" />
        <p className="font-serif text-lg md:text-xl text-cream-200 italic leading-relaxed mb-10 max-w-xl mx-auto">
          Art, artisanat et aide a la creation artistique
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#gallery" className="btn-primary">
            Decouvrir
          </a>
          <a href="#shop" className="btn-outline border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-navy-800">
            Boutique
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-widest-plus uppercase text-cream-300">
          Defiler
        </span>
        <div className="w-px h-8 bg-cream-300/50 animate-pulse" />
      </div>
    </section>
  )
}
