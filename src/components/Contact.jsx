import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { useCms } from '../lib/CmsContext'

export default function Contact() {
  const { t } = useLang()
  const cms = useCms()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = cms?.email || 'contact@lembressar.com'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || t.contact.mailtoSubject
    )}&body=${encodeURIComponent(
      `${t.contact.name}: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-navy-800 font-light mb-4">
            {t.contact.heading}
          </h2>
          <div className="section-divider" />
        </div>

        {submitted ? (
          <div className="fade-in visible text-center py-12">
            <h3 className="font-serif text-2xl text-navy-700 mb-4">{t.contact.thankYou}</h3>
            <p className="text-navy-500">{t.contact.thankYouMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-in space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                             focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div>
                <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                             focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                {t.contact.subject}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                           focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>

            <div>
              <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                           focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn-primary cursor-pointer">
                {t.contact.send}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
