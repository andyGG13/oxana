import React from 'react'
import Image from 'next/image'
import { images } from '@/lib/images.config'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-start bg-gradient-to-b from-cream via-cream to-light-gray pt-16 sm:pt-24">
      {/* Mobile: Hero-Bild als echtes Banner */}
      <div className="block md:hidden w-full">
        <div className="relative w-full h-48 sm:h-64 overflow-hidden">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Background pattern or image placeholder */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-alt rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-container px-5 sm:px-7 py-12 sm:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark leading-[1.15] mb-6">
              Friseur in Regensburg
            </h1>
            
            <p className="text-lg text-dark/80 leading-relaxed mb-8 max-w-lg">
              Haarschnitt, Farbe & Styling – professionell und persönlich. Viele Stammkunden vertrauen uns seit Jahren.
            </p>

            {/* Trust points */}
            <div className="space-y-3 mb-10 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              <div className="flex items-start gap-3 opacity-0 animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                <span className="text-accent text-lg mt-1 font-semibold">✓</span>
                <span className="text-dark/75">Erfahrene Friseurinnen mit Leidenschaft</span>
              </div>
              <div className="flex items-start gap-3 opacity-0 animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <span className="text-accent text-lg mt-1 font-semibold">✓</span>
                <span className="text-dark/75">Professionelle Haarfarbe & Coloration</span>
              </div>
              <div className="flex items-start gap-3 opacity-0 animate-slide-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                <span className="text-accent text-lg mt-1 font-semibold">✓</span>
                <span className="text-dark/75">Viele zufriedene Stammkunden aus der Umgebung</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <a
                href="tel:094120059325"
                className="bg-accent text-cream px-8 py-4 rounded-md font-medium text-center hover:bg-accent/90 hover:shadow-lg transition-all duration-300 text-lg transform hover:scale-105"
              >
                Jetzt Termin vereinbaren
              </a>
              <a
                href="#contact"
                className="border-2 border-accent text-accent px-8 py-4 rounded-md font-medium text-center hover:bg-accent hover:text-cream transition-all duration-300 transform hover:scale-105"
              >
                Mehr erfahren
              </a>
            </div>

            {/* Phone prominent */}
            <p className="mt-8 text-sm text-dark/60 opacity-0 animate-slide-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
              Telefon: <span className="font-semibold text-accent text-base">0941 20059325</span>
            </p>
          </div>

          {/* Hero-Bild auf Desktop rechts */}
          <div className="hidden md:block relative h-[400px] md:h-[500px] bg-light-gray rounded-lg overflow-hidden shadow-xl">
              <Image
              src={images.hero.src}
                alt="Friseursalon Oxana in Regensburg – moderner Salon, freundliches Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
