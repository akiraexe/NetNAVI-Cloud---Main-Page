import React from 'react';

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-brand-mutedRow to-brand-lightBg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-textDark tracking-tight mb-2">
          Cómo trabajamos contigo
        </h2>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3 text-center">
          {/* 1. Te escuchamos */}
          <div className="space-y-6 p-8 bg-brand-lightBg rounded-2xl border border-brand-textDark/5 interactive-card">
            <svg className="w-12 h-12 mx-auto text-brand-warmOrange" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
            <h3 className="font-bold text-2xl text-brand-textDark">1. Te escuchamos</h3>
            <p className="text-base text-brand-textDark/80 leading-relaxed font-medium">
              Entendemos cómo operas hoy a nivel de piso y qué es lo realmente crítico para la continuidad de tu negocio.
            </p>
          </div>

          {/* 2. Ajustamos */}
          <div className="space-y-6 p-8 bg-brand-lightBg rounded-2xl border border-brand-textDark/5 interactive-card">
            <svg className="w-12 h-12 mx-auto text-brand-accentGold" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 1 1 1.51 1.65 1.65 0 0 1 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <h3 className="font-bold text-2xl text-brand-textDark">2. Ajustamos</h3>
            <p className="text-base text-brand-textDark/80 leading-relaxed font-medium">
              Diseñamos con soluciones pures y eficientes de bajo costo. Usamos solo la tecnología que tu operación demanda, evitando gastos excesivos.
            </p>
          </div>

          {/* 3. Te acompañamos */}
          <div className="space-y-6 p-8 bg-brand-lightBg rounded-2xl border border-brand-textDark/5 interactive-card">
            <svg className="w-12 h-12 mx-auto text-brand-warmOrange" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <h3 className="font-bold text-2xl text-brand-textDark">3. Te acompañamos</h3>
            <p className="text-base text-brand-textDark/80 leading-relaxed font-medium">
              Estamos en la trinchera contigo. Si un sistema falla o es momento de expandir tu infraestructura, ahí estamos para resolverlo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}