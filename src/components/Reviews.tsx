import React from 'react'

const reviews = [
  {
    stars: 5,
    text: 'Ich habe immer nur gute Erfahrungen hier gemacht. Alle Friseurinnen sind sehr kompetent.\nTolles Preis-Leistungsverhältnis!',
    author: 'A'
  },
  {
    stars: 5,
    text: 'Mit 10 Sternen würde ich den Salon bewerten, wenn es möglich wäre. ERSTE KLASSE Salon! Ich habe wieder meine natürliche Haarfarbe! Die anderen Friseure behaupteten, dass es nicht möglich wäre? Nur die besten Meister kennen sich richtig aus. Mit einem Wort: Im Friseursalon Oxana sind Profis am Werk!',
    author: 'Bella Philipp-Mayer'
  },
  {
    stars: 5,
    text: 'Top Service, sehr freundlich.\nIch habe dort einen Gutschein für meine Freundin geholt. Sie war sehr begeistert!',
    author: 'Wasilis Mayer'
  }
]

export default function Reviews() {
  return (
    <section className="w-full py-16 sm:py-24 bg-light-gray">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        {/* Headline & Rating */}
        <div className="mb-16 sm:mb-20 text-center opacity-0 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          <div className="mb-4 flex items-center justify-center gap-2">
            <h2 className="font-serif text-4xl sm:text-5xl text-dark">
              4,7 von 5 Sternen
            </h2>
          </div>
          
          <p className="text-lg text-dark/75 max-w-2xl leading-relaxed mx-auto">
            Unser Salon wird bei Google regelmäßig sehr gut bewertet. Viele Kunden loben die freundliche Atmosphäre, saubere Haarschnitte und natürliche Farbresultate.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {[reviews[0], reviews[2], reviews[1]].map((review, idx) => (
            <div
              key={idx}
              className={
                `bg-white p-8 rounded-lg shadow-sm border border-cream/50 hover:shadow-lg transition-all duration-500 animate-fade-up ` +
                (idx === 2 ? 'md:col-span-2' : '')
              }
              style={{animationDelay: `${0.1 * (idx + 1)}s`}}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-dark/75 text-base leading-relaxed mb-5">
                „{review.text}"
              </p>

              {/* Author */}
              <p className="text-dark/60 text-sm font-medium">
                – {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center">
          <p className="text-dark/70 text-sm mb-5">
            Weitere echte Kundenbewertungen finden Sie online:
          </p>
          <a
            href="https://www.google.com/search?sa=X&sca_esv=a598d55f83047397&sxsrf=ANbL-n43uymWZ4NZWo7x7NLn527J-R1l3A:1773516607218&q=Oxana+Friseursalon+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDAwNzQ0NTU2tjA2NjS1sLS03MDI-IpRzr8iMS9Rwa0oszi1tKg4MSc_TyEotSo1rzgzPy81bxErAQUA5QJColwAAAA&rldimm=1007115533833158999&tbm=lcl&hl=de-DE&ved=2ahUKEwjnm4GbkKCTAxXzcfEDHWVDC00Q9fQKegQITxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-md font-medium hover:bg-accent hover:text-cream transition"
          >
            Weitere Google-Bewertungen ansehen
          </a>
        </div>
      </div>
    </section>
  )
}
