"use client";

import React, { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger/Kreuz Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none active:ring-0 z-[100] relative"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        onClick={() => setOpen(!open)}
        tabIndex={0}
        style={{ boxShadow: 'none' }}
      >
        <span
          className={`block absolute left-2.5 top-4 w-5 h-0.5 bg-dark rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
        ></span>
        <span
          className={`block absolute left-2.5 top-6 w-5 h-0.5 bg-dark rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block absolute left-2.5 top-8 w-5 h-0.5 bg-dark rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>
      {/* Overlay und Navigation */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
        style={{ background: open ? 'rgba(0,0,0,0.40)' : 'rgba(0,0,0,0)' }}
        onClick={() => setOpen(false)}
      >
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-cream shadow-lg flex flex-col gap-6 p-8 pt-24 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <a href="#services" className="text-dark text-lg font-medium hover:text-accent transition" onClick={() => setOpen(false)}>Leistungen</a>
          <a href="#location" className="text-dark text-lg font-medium hover:text-accent transition" onClick={() => setOpen(false)}>Standort</a>
          <a href="#contact" className="text-dark text-lg font-medium hover:text-accent transition" onClick={() => setOpen(false)}>Kontakt</a>
          <a href="/impressum" className="text-dark text-lg font-medium hover:text-accent transition" onClick={() => setOpen(false)}>Impressum</a>
          <a href="/datenschutz" className="text-dark text-lg font-medium hover:text-accent transition" onClick={() => setOpen(false)}>Datenschutz</a>
          <a href="tel:094120059325" className="mt-8 bg-accent text-cream px-6 py-3 rounded-md text-center font-medium hover:bg-accent/90 transition">Anrufen</a>
        </nav>
      </div>
    </>
  );
}
