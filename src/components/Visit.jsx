import { useLang } from '../i18n/LanguageContext'
import { useCms } from '../lib/CmsContext'

export default function Visit() {
  const { t } = useLang()
  const cms = useCms()

  return (
    <section id="visit" className="py-24 md:py-32 bg-cream-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in order-2 md:order-1">
            <div className="bg-navy-100 rounded-sm overflow-hidden" style={{ height: '400px' }}>
              <iframe
                title={`${t.brandUpper} location`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8!2d2.3565!3d48.8515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671fd1d15abab%3A0x6a0e6a1e6b6c6d6e!2s24+Rue+Saint-Louis+en+l'%C3%8Ele%2C+75004+Paris%2C+France!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="fade-in order-1 md:order-2">
            <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4">
              {t.visit.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-800 font-light mb-6">
              {t.visit.heading}
            </h2>
            <div className="section-divider !mx-0 mb-8" />

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">{t.visit.address}</h3>
                <p className="text-navy-500 leading-relaxed">
                  24 Rue Saint-Louis en l{'\u2019\u00cele'}<br />
                  75004 Paris<br />
                  France
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">{t.visit.hours}</h3>
                <div className="text-navy-500 text-sm space-y-1">
                  <p>{t.visit.hoursLine1}</p>
                  <p>{t.visit.hoursLine2}</p>
                  <p className="italic text-navy-400">{t.visit.byAppointment}</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">{t.visit.region}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {t.visit.regionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
