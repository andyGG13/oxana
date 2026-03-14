# 💇‍♀️ Oxana Salon – Moderne Friseursalon-Website

Eine professionelle, responsive Website für einen Friseursalon in Regensburg, gebaut mit moderne Web-Technologien.

## 🎯 Features

- ✅ **Responsive Design** – Optimiert für Mobilgeräte, Tablet und Desktop
- ✅ **Performance-fokussiert** – Schnelle Ladezeiten
- ✅ **SEO-optimiert** – Für lokale Suchergebnisse
- ✅ **Komponenten-basiert** – Leicht wartbar und erweiterbar
- ✅ **TypeScript** – Sichere und typsichere Entwicklung
- ✅ **Tailwind CSS** – Moderne, konsistente Gestaltung
- ✅ **Barrierefreiheit** – WCAG-konforme Strukturen

## 🛠️ Tech Stack

- **Next.js 15** – React Framework für Produktion
- **TypeScript** – Typsichere Entwicklung
- **Tailwind CSS** – Utility-first CSS
- **Google Fonts** – Playfair Display & Inter

## 📦 Installation

```bash
# Abhängigkeiten installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build
npm start

# Linting
npm run lint
```

Die Website läuft unter **`http://localhost:3000`**

## 📋 Seitenstruktur

### Komponenten

```
src/components/
├── Header.tsx         # Navigation + Sticky Header
├── Hero.tsx           # Teaser mit CTA
├── Services.tsx       # Leistungsangebot (4 Services)
├── Gallery.tsx        # Bildergalerie
├── WhyUs.tsx          # USP + Vertrauensfaktoren
├── Reviews.tsx        # Kundenbewertungen (Google-Style)
├── Location.tsx       # Standort + Google Maps
├── Contact.tsx        # Kontaktformular + Öffnungszeiten
└── Footer.tsx         # Footer mit Links
```

## 🎨 Design-System

### Farben

```
Primär:     #F7F6F4 (Warmweiß)
Dark:       #1F1F1F (Anthrazit)
Sekundär:   #EFEDEB (Hellgrau)
Akzent:     #6B4F3A (Dunkelbraun)
Alt:        #6C7A6B (Salbeigrün)
```

### Typografie

- **Headlines**: Playfair Display (Serifen, elegant)
- **Body**: Inter (Sans-Serif, modern & lesbar)

## 📱 Mobile-First Ansatz

- Touch-optimierte Buttons (min. 44x44px)
- Click-to-call für Telefonnummern
- Lesbare Schriftgrößen
- Optimale Abstände

## 🚀 Deployment

```bash
# Vercel (empfohlen)
vercel deploy

# Docker
docker build -t oxana-salon .
docker run -p 3000:3000 oxana-salon

# Static Export
npm run build && npm run export
```

## 📝 Konfiguration

### Kontaktinformationen

Bearbeite `src/lib/constants.ts`:

```typescript
export const CONTACT = {
  PHONE: '0941 20059325',
  ADDRESS: 'Brandlberger Straße, 93057 Regensburg',
  // ...
}
```

### Meta Tags & SEO

Bearbeite `src/app/layout.tsx` für Meta-Tags und Keywords.

## 🖼️ Bilder einbinden

Ersetze Bildplatzhalter in den Komponenten:

```tsx
// Placeholder (aktuell)
<div className="bg-light-gray rounded-lg overflow-hidden">
  <div className="w-full h-full bg-gradient-to-br from-accent/10">
    Placeholder
  </div>
</div>

// Mit echtem Bild
import Image from 'next/image'

<Image
  src="/images/salon-1.jpg"
  alt="Salonaufnahme"
  width={600}
  height={400}
  className="rounded-lg object-cover"
/>
```

Speichern Sie Bilder in `public/images/`.

## 🔍 SEO Tipps

- Schema Markup für lokales Business hinzufügen
- Open Graph Tags für Social Media
- Sitemap generieren
- Google Search Console einbinden
- Google My Business-Profil aktualisieren

## 🐛 Debugging

```bash
# Development mode mit Debug-Output
DEBUG=* npm run dev

# TypeScript-Fehler prüfen
npx tsc --noEmit
```

## 📄 Lizenz & Verwendung

Diese Website ist eine Custom-Entwicklung für Oxana Salon.

---

**Version 1.0.0** | Gebaut mit ❤️ für Oxana Salon
