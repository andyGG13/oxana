import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Friseur Regensburg – Haarschnitt, Farbe & Styling | Salon Brandlberger Straße',
  description: 'Friseur in Regensburg nahe Brandlberger Straße. Haarschnitt, Haarfarbe und Styling für Damen und Herren. Termin einfach telefonisch vereinbaren. 0941 20059325',
  keywords: [
    'Friseur Regensburg',
    'Haarschnitt Regensburg',
    'Haarfarbe Regensburg',
    'Friseur Brandlberger Straße',
    'Friseur in der Nähe',
    'Salon Regensburg',
  ],
  openGraph: {
    title: 'Friseur Regensburg – Haarschnitt, Farbe & Styling',
    description: 'Professioneller Friseursalon in Regensburg mit erfahrenen Friseurinnen.',
    type: 'website',
  },
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6B4F3A" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect fill='%236B4F3A' width='32' height='32'/><text x='50%' y='50%' font-size='18' font-family='serif' font-weight='bold' fill='%23F7F6F4' text-anchor='middle' dominant-baseline='middle'>O</text></svg>" />
        {/* SEO Meta Tags */}
        <title>Friseur Regensburg – Haarschnitt, Farbe & Styling | Salon Brandlberger Straße</title>
        <meta name="description" content="Friseur in Regensburg nahe Brandlberger Straße. Haarschnitt, Haarfarbe und Styling für Damen und Herren. Termin einfach telefonisch vereinbaren. 0941 20059325" />
        <meta name="keywords" content="Friseur Regensburg, Haarschnitt Regensburg, Haarfarbe Regensburg, Friseur Brandlberger Straße, Friseur in der Nähe, Salon Regensburg" />
        <link rel="canonical" href="https://oxana-friseur.de/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Friseur Regensburg – Haarschnitt, Farbe & Styling" />
        <meta property="og:description" content="Professioneller Friseursalon in Regensburg mit erfahrenen Friseurinnen." />
        <meta property="og:url" content="https://oxana-friseur.de/" />
        <meta property="og:site_name" content="Oxana Friseursalon" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="/images/salon-2.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseur Regensburg – Haarschnitt, Farbe & Styling" />
        <meta name="twitter:description" content="Professioneller Friseursalon in Regensburg mit erfahrenen Friseurinnen." />
        <meta name="twitter:image" content="/images/salon-2.jpg" />
      </head>
      <body className="bg-cream text-dark antialiased">
        <Header />
        <main className="w-full animate-fade-up" style={{animationDelay: '0.1s'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
