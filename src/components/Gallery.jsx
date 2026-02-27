import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const GALLERY_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    alt: 'Contemporary painting',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&q=80',
    alt: 'Ceramic artisan work',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80',
    alt: 'Handcrafted pottery',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&q=80',
    alt: 'Fine art photography',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80',
    alt: 'Sculpture exhibition',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80',
    alt: 'Mixed media artwork',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    alt: 'Artist brushes',
    span: 'md:col-span-2',
  },
]

export default function Gallery() {
  const { t } = useLang()

  return (
    <section id="gallery" className="py-24 md:py-32 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-300 mb-4">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream-100 font-light mb-4">
            {t.gallery.heading}
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`fade-in img-zoom group cursor-pointer ${item.span}`}
            >
              <div className="relative h-64 md:h-full min-h-[240px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-all duration-500 flex items-end">
                  <p className="text-cream-100 font-sans text-xs tracking-widest-plus uppercase p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Link to="/paintings" className="btn-outline border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-navy-800">
            {t.gallery.seeMore}
          </Link>
        </div>
      </div>
    </section>
  )
}
