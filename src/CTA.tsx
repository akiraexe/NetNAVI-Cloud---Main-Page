import React from 'react';

export function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-brand-mutedRow to-brand-lightBg border-t border-brand-textDark/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-brand-textDark tracking-tight">
          Tecnología práctica, sin venderte de más.
        </h2>

        <p className="mt-4 text-brand-textDark/80 font-medium">
          Acompañamiento real para negocios que ya están trabajando.
        </p>

        <div className="flex justify-center items-center pt-4">
          <a
            href="https://calendly.com/espacio-para-ti"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto mt-8 px-8 py-4 rounded-xl bg-brand-warmOrange text-white text-lg font-bold shadow-md hover:bg-brand-warmOrange/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            🗓️ ¿Prefieres agendar?
          </a>
        </div>
      </div>
    </section>
  );
}