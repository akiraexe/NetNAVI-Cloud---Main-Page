import React from 'react';

export function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-3xl mx-auto text-center text-neutral">
        <h2 className="text-3xl font-semibold">
          Tecnología práctica, sin venderte de más.
        </h2>

        <p className="mt-4 text-neutral">
          Acompañamiento real para negocios que ya están trabajando.
        </p>

        <button className="mt-8 px-6 py-3 rounded-2xl bg-secondary text-neutral font-medium hover:bg-primary transition">
          ¿Prefieres agendar?
        </button>
      </div>
    </section>
  );
}