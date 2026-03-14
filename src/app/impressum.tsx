import React from 'react';

export default function Impressum() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">Impressum</h1>
      <div className="space-y-4 text-dark/80 text-base">
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p>
          Oxana Friseursalon<br />
          Brandlberger Straße<br />
          93057 Regensburg<br />
          Deutschland
        </p>
        <p><strong>Vertreten durch:</strong><br />
          Oxana Mustermann
        </p>
        <p><strong>Kontakt:</strong><br />
          Telefon: 0941 20059325<br />
          E-Mail: info@oxana-friseur.de
        </p>
        <p><strong>Umsatzsteuer-ID:</strong><br />
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
        </p>
        <p><strong>Aufsichtsbehörde:</strong><br />
          Handwerkskammer Niederbayern-Oberpfalz<br />
          Ditthornstraße 10<br />
          93055 Regensburg
        </p>
        <p><strong>Haftungsausschluss:</strong><br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </section>
  );
}
