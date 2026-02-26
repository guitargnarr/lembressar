export default function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-cream-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div className="fade-in order-2 md:order-1">
            <div className="bg-navy-100 rounded-sm overflow-hidden" style={{ height: '400px' }}>
              <iframe
                title="L'Embressar location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.6!2d2.1!3d43.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s57+Chem.+de+la+M%C3%A9tairie+Haute%2C+81580+Cambounet-sur-le-Sor%2C+France!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info */}
          <div className="fade-in order-1 md:order-2">
            <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4">
              Nous Trouver
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-800 font-light mb-6">
              Rendez-nous visite
            </h2>
            <div className="section-divider !mx-0 mb-8" />

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">Adresse</h3>
                <p className="text-navy-500 leading-relaxed">
                  57 Chemin de la Metairie Haute<br />
                  81580 Cambounet-sur-le-Sor<br />
                  France
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">Horaires</h3>
                <div className="text-navy-500 text-sm space-y-1">
                  <p>Mercredi - Samedi : 10h - 18h</p>
                  <p>Dimanche : 14h - 18h</p>
                  <p className="italic text-navy-400">Sur rendez-vous en dehors de ces horaires</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">Region</h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  Situee dans le Tarn, entre Toulouse et Castres, au coeur de la
                  campagne du sud-ouest de la France. Un cadre idyllique pour
                  decouvrir l'art et l'artisanat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
