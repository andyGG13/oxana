"use client";
import React, { useState } from 'react'

export default function Location() {
  const [showMap, setShowMap] = useState(false);
  return (
    <section id="location" className="w-full py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl text-dark mb-4">
          Friseur in Regensburg
        </h2>
        <p className="text-lg text-dark/75 max-w-2xl mb-12 leading-relaxed">
          Gut erreichbar in der Nähe der Brandlberger Straße und des Katjuscha Markts. Viele Kunden kommen aus den umliegenden Vierteln, weil der Salon schnell erreichbar ist.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Address & Map Button */}
          <div>
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-dark mb-4">Adresse</h3>
              <div className="space-y-2 text-dark/75 text-lg mb-6">
                <p className="font-medium">Brandlberger Straße</p>
                <p>93057 Regensburg</p>
              </div>
              
              <a
                href="https://maps.app.goo.gl/okMremHmfXkyEV7a8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-cream px-6 py-3 rounded-md font-medium hover:bg-accent/90 hover:shadow-lg transition-all duration-300 text-base transform hover:scale-105"
              >
                Route zu Google Maps
              </a>
            </div>

            {/* Info Box */}
            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-semibold text-dark mb-3">Bequem erreichbar</h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                Unser Salon liegt zentral in Regensburg – Sie erreichen uns bequem mit dem Auto (Parkplätze sind direkt vor Ort vorhanden) oder mit öffentlichen Verkehrsmitteln. Die Bushaltestelle <strong>Pommerstraße</strong> (Linie 1, direkt vom Hauptbahnhof) ist nur wenige Schritte entfernt. Auch aus der Innenstadt und den umliegenden Stadtteilen sind wir schnell erreichbar.
              </p>
            </div>
          </div>

          {/* Google Maps DSGVO Placeholder */}
          <div className="relative w-full h-[400px] bg-light-gray rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            {showMap ? (
              <>
                <iframe
                  title="Google Maps - Friseursalon Oxana"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.6954384632027!2d12.116297692451738!3d49.03539931438679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6522b95f7d8654ed%3A0xdf9fe3df9e74157!2sOxana%20Friseursalon!5e0!3m2!1sde!2sde!4v1773516918279!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '12px', width: '100%', height: '100%' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-0 left-0 w-full bg-white/90 text-dark text-xs text-center py-2 px-3 border-t border-light-gray">
                  Mit dem Laden der Karte akzeptieren Sie die <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Datenschutzerklärung von Google</a>.
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <span className="text-dark/60 mb-4">Google Maps Karte anzeigen</span>
                <button
                  onClick={() => setShowMap(true)}
                  className="bg-accent text-cream px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-all duration-300 shadow-md"
                >
                  Karte laden
                </button>
                <p className="mt-4 text-xs text-dark/60 text-center max-w-xs">
                  Mit Klick auf „Karte laden“ akzeptieren Sie die Datenschutzerklärung von Google. Die Karte wird von Google Maps eingebettet und es können Daten übertragen werden.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
