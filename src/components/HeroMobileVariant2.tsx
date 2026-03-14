import React from 'react';
import Image from 'next/image';
import { images } from '@/lib/images.config';

export default function HeroMobileVariant2() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-start bg-gradient-to-b from-cream via-cream to-light-gray px-0 pt-10 pb-6">
      {/* Bild als Banner */}
      <div className="w-full relative h-48 sm:h-64 overflow-hidden mb-6">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-xs mx-auto">
        <h1 className="font-serif text-3xl xs:text-4xl text-dark text-center mb-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
          Friseur in Regensburg
        </h1>
        <p className="text-base xs:text-lg text-dark/80 text-center mb-6 max-w-xs animate-fade-up" style={{animationDelay: '0.3s'}}>
          Haarschnitt, Farbe & Styling – professionell und persönlich. Viele Stammkunden vertrauen uns seit Jahren.
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-center gap-2 text-dark/80 text-sm animate-fade-up" style={{animationDelay: '0.4s'}}>
            <span>✓</span>
            <span>Erfahrene Friseurinnen mit Leidenschaft</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-dark/80 text-sm animate-fade-up" style={{animationDelay: '0.5s'}}>
            <span>✓</span>
            <span>Professionelle Haarfarbe & Coloration</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-dark/80 text-sm animate-fade-up" style={{animationDelay: '0.6s'}}>
            <span>✓</span>
            <span>Viele zufriedene Stammkunden</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full animate-fade-up" style={{animationDelay: '0.7s'}}>
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
        <p className="mt-8 text-xs text-dark/60 text-center animate-fade-up" style={{animationDelay: '0.8s'}}>
          Telefon: <span className="font-semibold text-accent">0941 20059325</span>
        </p>
      </div>
    </section>
  );
}
