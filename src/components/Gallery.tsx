import React from 'react'
import Image from 'next/image'
import { images } from '@/lib/images.config'

const galleryItems = images.gallery

export default function Gallery() {
  return (
    <section className="w-full py-16 sm:py-24 bg-light-gray">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        {/* Headline */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl text-dark mb-6">
            Ein Eindruck unserer Arbeit
          </h2>
          <p className="text-lg text-dark/75 max-w-2xl leading-relaxed">
            Bei Friseuren zählt am Ende das Ergebnis. Sehen Sie Beispiele aus unserem Salon – von Haarschnitten über Colorationen bis zu Stylings. Viele unserer Kundinnen und Kunden schätzen die natürliche Wirkung der Frisuren und Farben.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative h-80 bg-gradient-to-br from-accent/10 to-accent-alt/10 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-500 animate-fade-up`}
              style={{animationDelay: `${0.1 * (idx + 1)}s`}}
            >
              {/* Image */}
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/50">
                  <div className="text-center">
                    <p className="text-dark/60 font-serif text-2xl mb-2">[Bild]</p>
                    <p className="text-dark/50 font-medium text-sm">{item.title}</p>
                  </div>
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{item.category}</p>
                <p className="text-white/90 text-xs">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about images entfernt */}
      </div>
    </section>
  )
}
