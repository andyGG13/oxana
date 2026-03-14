/**
 * Bilderkonfiguration für die Website
 */

export const images = {
  // Hero Section - Großes Bild rechts im Hero
  hero: {
    src: '/images/salon-1.jpg',
    alt: 'Friseursalon Oxana - Salon Atmosphäre',
  },

  // Gallery - Nur die 3 Haarbilder und Salon außen
  gallery: [
    {
      src: '/images/O_1.jpg',
      title: 'Haare – Schnitt/Farbe',
      category: 'Prozess',
      alt: 'Haare während des Prozesses 1',
    },
    {
      src: '/images/O_2.jpg',
      title: 'Haare – Schnitt/Farbe',
      category: 'Prozess',
      alt: 'Haare während des Prozesses 2',
    },
    {
      src: '/images/O_3.jpg',
      title: 'Haare – Schnitt/Farbe',
      category: 'Prozess',
      alt: 'Haare während des Prozesses 3',
    },
  ],

  // Why Us Section - Bild vor Kontakt
  whyUs: {
    src: '/images/salon-2.jpg',
    alt: 'Salon Innenansicht',
  },
}

/**
 * ANLEITUNG:
 * 
 * 1. Erstelle einen Ordner: public/images/
 * 
 * 2. Speichere deine Bilder dort:
 *    - salon-1.jpg  (Hero Bild)
 *    - salon-2.jpg  (Salonraum)
 *    - salon-team.jpg (Team)
 *    - frisur-1.jpg (Haarschnitt Beispiel)
 *    - frisur-2.jpg (Weitere Frisur)
 *    - farbe-1.jpg (Haarfärbung 1)
 *    - farbe-2.jpg (Haarfärbung 2)
 *    - styling-1.jpg (Styling Beispiel)
 *    - logo.png (Optional: Dein Salon Logo)
 * 
 * 3. Ersetze die Bildnamen hier in dieser Datei:
 *    src: '/images/DEIN-BILDNAME.jpg'
 * 
 * 4. Das Programm lädt die Bilder automatisch!
 * 
 * BILDFORMATE:
 * - JPG/JPEG: Fotos (komprimiert, schnell)
 * - PNG: Logos, transparente Bilder
 * - WebP: Modern & schnell
 * 
 * BILDGRÖSSEN (empfohlen):
 * - Hero Bild: 600x500px oder größer
 * - Galerie: 500x500px
 * - Team: 600x450px
 * 
 * BILDQUALITÄT:
 * - Professionelle Fotos (nicht zu dunkel!)
 * - Gutes Licht
 * - Saubere Schnitte und klare Details
 * - Konsistenter Stil
 */
