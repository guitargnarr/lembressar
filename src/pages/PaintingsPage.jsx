import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { paintings } from '../data/paintings'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PaintingsPage() {
  const { lang, t } = useLang()

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Link
              to="/"
              className="inline-block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4 hover:text-navy-600 transition-colors"
            >
              &larr; {lang === 'fr' ? 'Retour' : 'Back'}
            </Link>
            <h1 className="font-serif text-3xl md:text-5xl text-navy-800 font-light mb-4">
              {lang === 'fr' ? 'Peintures Originales' : 'Original Paintings'}
            </h1>
            <div className="section-divider" />
            <p className="text-navy-500 mt-6 max-w-xl mx-auto">
              {lang === 'fr'
                ? '\u0152uvres uniques d\u2019artistes contemporains, s\u00e9lectionn\u00e9es pour leur authenticit\u00e9 et leur caract\u00e8re exceptionnel.'
                : 'Unique works by contemporary artists, selected for their authenticity and exceptional character.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((painting) => (
              <Link
                key={painting.slug}
                to={`/paintings/${painting.slug}`}
                className="group"
              >
                <div className="img-zoom mb-4">
                  <img
                    src={painting.image}
                    alt={painting.title[lang]}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg text-navy-700 mb-1 group-hover:text-navy-500 transition-colors">
                  {painting.title[lang]}
                </h3>
                <p className="text-navy-400 text-sm mb-1">{painting.artist}</p>
                <p className="font-sans text-xs tracking-widest-plus uppercase text-gold-500">
                  {painting.price}&euro;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
