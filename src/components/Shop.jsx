const SHOP_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80',
    title: 'Peintures Originales',
    desc: 'Oeuvres uniques d\'artistes contemporains',
    price: 'A partir de 150',
  },
  {
    src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80',
    title: 'Tirages Photographiques',
    desc: 'Impressions d\'art en edition limitee',
    price: 'A partir de 80',
  },
  {
    src: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=500&q=80',
    title: 'Ceramiques Artisanales',
    desc: 'Pieces uniques faconnees a la main',
    price: 'A partir de 45',
  },
  {
    src: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=500&q=80',
    title: 'Objets d\'Art',
    desc: 'Sculptures, bijoux et creations artisanales',
    price: 'A partir de 35',
  },
]

export default function Shop() {
  return (
    <section id="shop" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4">
            A Decouvrir
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-navy-800 font-light mb-4">
            Boutique
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SHOP_ITEMS.map((item, i) => (
            <div key={i} className="fade-in group">
              <div className="img-zoom mb-4">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg text-navy-700 mb-1 group-hover:text-navy-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-navy-400 text-sm mb-2">{item.desc}</p>
              <p className="font-sans text-xs tracking-widest-plus uppercase text-gold-500">
                {item.price}&euro;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <p className="font-serif text-lg text-navy-500 italic mb-6">
            Chaque piece est unique. Contactez-nous pour en savoir plus.
          </p>
          <a href="#contact" className="btn-primary">
            Nous Contacter
          </a>
        </div>
      </div>
    </section>
  )
}
