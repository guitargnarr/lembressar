export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="fade-in">
            <p className="font-sans text-xs tracking-widest-plus uppercase text-navy-400 mb-4">
              Notre Vision
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-800 font-light leading-tight mb-6">
              L'art de la rencontre entre l'artiste et le monde
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <div className="space-y-5 text-navy-600 leading-relaxed">
              <p>
                L{'\u2019'}EmbrAssEr est une galerie ou chaque oeuvre raconte une histoire. Nous
                selectionnons des artistes et des artisans dont le travail reflète une
                authenticite profonde et un savoir-faire exceptionnel.
              </p>
              <p>
                Plus qu'une galerie, nous accompagnons les artistes dans leur processus de
                creation -- de la selection a la curation, du developpement a la preparation
                d'impressions. Les photographes beneficient de l'assistance de la galerie pour
                la reproduction de leurs oeuvres.
              </p>
              <p>
                Fondee en 2017, L{'\u2019'}EmbrAssEr collabore activement avec des galeries au Japon
                et en Europe, ouvrant des ponts entre les cultures et les sensibilites
                artistiques.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in img-zoom rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
              alt="Artist at work in studio"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {[
            {
              title: 'Art & Artisanat',
              desc: 'Selection d\'oeuvres d\'art et d\'objets artisanaux, choisis pour leur authenticite et leur caractere unique.',
            },
            {
              title: 'Aide a la Creation',
              desc: 'Accompagnement des artistes et photographes dans la realisation et la reproduction de leurs oeuvres.',
            },
            {
              title: 'Ouverture Internationale',
              desc: 'Collaboration active avec des galeries au Japon et en Europe, tissant des liens entre les cultures.',
            },
          ].map((item, i) => (
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
