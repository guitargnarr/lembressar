import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { paintings } from '../data/paintings'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PaintingDetail() {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const painting = paintings.find((p) => p.slug === slug)

  if (!painting) return <Navigate to="/paintings" replace />

  const shareUrl = `https://lembrasser.com/paintings/${painting.slug}`
  const shareTitle = `${painting.title[lang]} — ${t.brandUpper}`

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/paintings"
            className="inline-block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-8 hover:text-navy-600 transition-colors"
          >
            &larr; {lang === 'fr' ? 'Toutes les peintures' : 'All paintings'}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={painting.image}
                alt={painting.title[lang]}
                className="w-full object-cover"
              />
            </div>

            <div className="py-4">
              <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                {painting.artist}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-navy-800 font-light mb-4">
                {painting.title[lang]}
              </h1>
              <div className="w-12 h-px bg-gold-400 mb-6" />

              <p className="text-navy-600 leading-relaxed mb-8">
                {painting.description[lang]}
              </p>

              <div className="space-y-3 mb-8 border-t border-navy-200 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-navy-400 uppercase tracking-widest-plus font-sans text-xs">
                    {lang === 'fr' ? 'Technique' : 'Medium'}
                  </span>
                  <span className="text-navy-700 font-serif">{painting.medium[lang]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-400 uppercase tracking-widest-plus font-sans text-xs">
                    Dimensions
                  </span>
                  <span className="text-navy-700 font-serif">{painting.dimensions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-400 uppercase tracking-widest-plus font-sans text-xs">
                    {lang === 'fr' ? 'Ann\u00e9e' : 'Year'}
                  </span>
                  <span className="text-navy-700 font-serif">{painting.year}</span>
                </div>
              </div>

              <div className="border-t border-navy-200 pt-6 mb-8">
                <p className="font-serif text-3xl text-navy-800 mb-1">
                  {painting.price}&euro;
                </p>
                <p className="text-navy-400 text-sm italic">
                  {lang === 'fr' ? 'Prix indicatif \u2014 contactez-nous' : 'Indicative price \u2014 contact us'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`mailto:contact@lembressar.com?subject=${encodeURIComponent(
                    `${lang === 'fr' ? 'Int\u00e9ress\u00e9(e) par' : 'Interested in'}: ${painting.title[lang]}`
                  )}&body=${encodeURIComponent(
                    `${lang === 'fr' ? 'Bonjour,\n\nJe suis int\u00e9ress\u00e9(e) par l\u2019\u0153uvre' : 'Hello,\n\nI am interested in the work'} "${painting.title[lang]}" (${painting.price}\u20ac).\n\n${shareUrl}`
                  )}`}
                  className="btn-primary text-center"
                >
                  {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                </a>
              </div>

              {/* Share */}
              <div>
                <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-3">
                  {lang === 'fr' ? 'Partager' : 'Share'}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigator.clipboard?.writeText(shareUrl)}
                    className="text-navy-400 hover:text-navy-700 transition-colors text-sm font-sans underline underline-offset-4 cursor-pointer"
                  >
                    {lang === 'fr' ? 'Copier le lien' : 'Copy link'}
                  </button>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-navy-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
