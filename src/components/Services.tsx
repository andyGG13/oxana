import React from 'react'

const services = [
  {
    title: 'Haarschnitt Damen',
    description: 'Individuelle Schnitte passend zu Haarstruktur, Gesichtsform und Stil. Auf Wunsch inklusive Beratung und Styling.'
  },
  {
    title: 'Haarschnitt Herren',
    description: 'Saubere, moderne oder klassische Herrenhaarschnitte. Schnell, präzise und alltagstauglich.'
  },
  {
    title: 'Haarfarbe & Coloration',
    description: 'Professionelle Farbtechniken für natürliche oder ausdrucksstarke Ergebnisse. Unsere Spezialität.'
  },
  {
    title: 'Styling & Pflege',
    description: 'Föhnen, Styling und Pflegebehandlungen für gesund aussehendes Haar.'
  }
]

export default function Services() {
  return (
    <section id="services" className="w-full py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        {/* Headline */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl text-dark mb-6">
            Unsere Friseurleistungen
          </h2>
          <p className="text-lg text-dark/75 max-w-2xl leading-relaxed">
            Wir bieten klassische Friseurdienstleistungen für Damen und Herren – vom präzisen Haarschnitt bis zur professionellen Coloration.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 border border-light-gray opacity-0 hover:translate-y-[-8px] transform"
              style={{animation: `slideUp 0.6s ease-out forwards`, animationDelay: `${0.1 * (idx + 1)}s`}}
            >
              {/* Optional: dezentes Icon oder gar nichts, hier entfernt für natürlicheres Design */}
              
              <h3 className="font-serif text-xl text-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-dark/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
