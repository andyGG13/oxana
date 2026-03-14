import React from 'react'
import Image from 'next/image'
import { images } from '@/lib/images.config'

export default function WhyUs() {
  return (
    <section className="w-full py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark mb-8">
              Ein Friseursalon mit persönlicher Atmosphäre
            </h2>

            <p className="text-lg text-dark/75 leading-relaxed mb-8">
              Unser Salon steht für eine ruhige, freundliche Atmosphäre und ehrliche Beratung. Viele Kundinnen sagen, dass sie sich bei uns besonders wohlfühlen, weil wir uns Zeit nehmen und aufmerksam arbeiten.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 mb-10 animate-fade-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Erfahrung im Friseurhandwerk</h3>
                  <p className="text-dark/70 text-sm">Jahrelange Expertise in Schnitt, Farbe und Styling</p>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Sorgfältige Arbeit</h3>
                  <p className="text-dark/70 text-sm">Präzision bei Schnitt und Farbe ohne Kompromisse</p>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.5s'}}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Persönliche Beratung</h3>
                  <p className="text-dark/70 text-sm">Wir nehmen uns Zeit without Stress und Druck</p>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.6s'}}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Viele Stammkunden</h3>
                  <p className="text-dark/70 text-sm">Zufriedene Kundinnen und Kunden aus Regensburg stellen das Vertrauen dar</p>
                </div>
              </div>
            </div>

            <p className="text-dark/70 text-base leading-relaxed">
              Gerade bei Haarfarbe und Colorationen ist Vertrauen wichtig. Deshalb besprechen wir Wünsche und Möglichkeiten immer vorher in Ruhe.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[250px] sm:h-[350px] bg-light-gray rounded-lg overflow-hidden shadow-md">
            <Image
              src={images.whyUs.src}
              alt={images.whyUs.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
