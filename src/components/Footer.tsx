import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-dark text-cream py-12 sm:py-16 border-t-2 border-accent/20">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-dark font-serif font-bold text-lg">O</span>
              </div>
              <span className="text-lg font-serif font-semibold">Oxana Salon</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Ihr Friseursalon in Regensburg für hochwertige Haarschnitte, professionelle Farbberatung und persönlichen Service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-cream/80 hover:text-accent transition">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-accent transition">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#location" className="text-cream/80 hover:text-accent transition">
                  Standort
                </a>
              </li>
              <li>
                <a href="/impressum" className="text-cream/80 hover:text-accent transition">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-cream/80 hover:text-accent transition">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Opening Hours */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm mb-6">
              <div>
                <p className="text-cream/70 mb-1">Telefon</p>
                <a href="tel:094120059325" className="text-accent hover:text-opacity-80 transition font-semibold">
                  0941 20059325
                </a>
              </div>
              <div>
                <p className="text-cream/70 mb-1">Adresse</p>
                <p className="text-cream/90">
                  Brandlberger Straße<br />
                  93057 Regensburg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-cream/60">
          <p>
            © {currentYear} Oxana Salon. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-accent transition">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-accent transition">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
