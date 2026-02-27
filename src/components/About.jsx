import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLang()

  const values = [
    { title: t.about.value1Title, desc: t.about.value1Desc },
    { title: t.about.value2Title, desc: t.about.value2Desc },
    { title: t.about.value3Title, desc: t.about.value3Desc },
  ]

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4">
              {t.about.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-800 font-light leading-tight mb-6">
              {t.about.heading}
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <div className="space-y-5 text-navy-600 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          <div className="fade-in img-zoom rounded-sm overflow-hidden">
            <img
              src="/images/embrace.jpg"
              alt="L\u2019Embrasser"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {values.map((item, i) => (
            <div key={i} className="fade-in text-center">
              <h3 className="font-serif text-xl text-navy-700 mb-3">{item.title}</h3>
              <div className="section-divider mb-4" />
              <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
