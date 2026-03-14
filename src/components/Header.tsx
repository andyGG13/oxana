

import Link from "next/link"
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-cream border-b border-light-gray shadow-sm z-50">
      <div className="mx-auto max-w-container px-5 sm:px-7 py-5 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Zur Startseite">
          <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center group-hover:bg-accent/90 transition">
            <span className="text-cream font-serif font-bold text-lg">O</span>
          </div>
          <h1 className="font-serif text-lg font-semibold text-dark hidden sm:block">
            Oxana
          </h1>
        </Link>

        {/* Navigation & CTA */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-dark text-sm hover:text-accent transition">
              Leistungen
            </a>
            <a href="#location" className="text-dark text-sm hover:text-accent transition">
              Standort
            </a>
            <a href="#contact" className="text-dark text-sm hover:text-accent transition">
              Kontakt
            </a>
          </nav>
          {/* Desktop Call Button */}
          <a 
            href="tel:094120059325" 
            className="hidden md:inline-block bg-accent text-cream px-5 py-2.5 rounded-md text-sm font-medium hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
          >
            Anrufen
          </a>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
