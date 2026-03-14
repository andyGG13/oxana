
import React from 'react'
import Image from 'next/image'
import { images } from '@/lib/images.config'

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-light-gray">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark mb-8">
              Termin vereinbaren
            </h2>

            <p className="text-lg text-dark/75 leading-relaxed mb-10">
              Der einfachste Weg zu einem Termin ist ein kurzer Anruf. So können wir direkt schauen, wann der nächste freie Termin verfügbar ist und welche Behandlung geplant ist.
            </p>

            {/* PHONE */}
            <div className="mb-10">
              <p className="text-dark/60 text-sm font-medium uppercase mb-2">Telefon</p>
              <a
                href="tel:094120059325"
                className="text-4xl sm:text-5xl font-serif text-accent hover:text-opacity-80 transition"
              >
                0941 20059325
              </a>
              <p className="text-dark/70 text-sm mt-3">Anruf zur Terminvereinbarung</p>
            </div>

            {/* OPENING HOURS */}
            <div className="mb-10">
              <p className="text-dark/60 text-sm font-medium uppercase mb-3">Öffnungszeiten</p>
              <div className="space-y-2 text-dark/75 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Samstag:</span>
                  <span>09:00–14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Montag:</span>
                  <span>Geschlossen</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dienstag:</span>
                  <span>09:00–18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mittwoch:</span>
                  <span>09:00–17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Donnerstag:</span>
                  <span>09:00–18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Freitag:</span>
                  <span>09:00–19:00</span>
                </div>
              </div>
              <p className="text-dark/60 text-sm mt-4">
                Viele Termine können kurzfristig vergeben werden. Rufen Sie an – wir helfen gerne!
              </p>
            </div>

            {/* CTA */}
            <a
              href="tel:094120059325"
              className="inline-block bg-accent text-cream px-8 py-4 rounded-md font-medium hover:bg-accent/90 hover:shadow-lg transition-all duration-300 text-lg transform hover:scale-105"
            >
              Jetzt anrufen
            </a>
          </div>

          {/* Form Grid / Alternative Contact Info */}
          <div className="bg-white p-8 sm:p-12 rounded-lg border border-accent/10">
            <h3 className="font-serif text-2xl text-dark mb-6">Kontaktinformationen</h3>

            <div className="space-y-8">
              {/* Address */}
              <div>
                <p className="text-dark/60 text-sm font-medium uppercase mb-2">Adresse</p>
                <p className="text-dark/85 text-base leading-relaxed">
                  Brandlberger Straße<br />
                  93057 Regensburg<br />
                  Deutschland
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-dark/60 text-sm font-medium uppercase mb-2">Telefon</p>
                <a
                  href="tel:094120059325"
                  className="text-accent font-semibold hover:text-opacity-80 transition text-base"
                >
                  0941 20059325
                </a>
              </div>

              {/* Note */}
              <div className="pt-4 border-t border-light-gray">
                <p className="text-dark/70 text-sm leading-relaxed">
                  Telefonanrufe sind die beste Möglichkeit, schnell einen Termin zu bekommen. Wir freuen uns auf Ihren Anruf!
                </p>
              </div>
            </div>

            {/* Salon Außenbild unter Kontaktinformationen */}
            <div className="mt-8">
              <div className="relative h-[250px] w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src={images.gallery.find(img => img.title === 'Salon Außenansicht')?.src || '/images/O_5.jpg'}
                  alt={images.gallery.find(img => img.title === 'Salon Außenansicht')?.alt || 'Salon von außen'}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                  priority={false}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
