import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto as simple fallback
    const mailtoLink = `mailto:contact@lembressar.com?subject=${encodeURIComponent(
      formData.subject || 'Message depuis le site'
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
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
            Ecrivez-Nous
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-navy-800 font-light mb-4">
            Contact
          </h2>
          <div className="section-divider" />
        </div>

        {submitted ? (
          <div className="fade-in visible text-center py-12">
            <h3 className="font-serif text-2xl text-navy-700 mb-4">Merci!</h3>
            <p className="text-navy-500">
              Votre message a ete prepare. Veuillez l'envoyer depuis votre client mail.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-in space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                             focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                             focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                           focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg"
                placeholder="A propos de..."
              />
            </div>

            <div>
              <label className="block font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-navy-200 py-3 text-navy-700
                           focus:border-navy-600 focus:outline-none transition-colors font-serif text-lg resize-none"
                placeholder="Votre message..."
              />
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn-primary cursor-pointer">
                Envoyer
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
