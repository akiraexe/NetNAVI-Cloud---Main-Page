import React from 'react';

export function Problem() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-brand-lightBg to-brand-mutedRow">
      <div className="max-w-3xl mx-auto text-center">
        {/* Un dolor directo que cualquier dueño de PyME entiende inmediatamente en México */}
        <p className="text-2xl md:text-3xl text-brand-textDark font-extrabold leading-tight">
          Cuando dependes de sistemas complejos que no entiendes,
        </p>
        <p className="mt-4 text-xl md:text-2xl text-brand-warmOrange font-extrabold">
          cualquier falla técnica se traduce en ventas perdidas.
        </p>
        <p className="mt-6 text-lg text-brand-textDark/80 max-w-xl mx-auto font-medium">
          Y la mayoría de las veces, el soporte de las grandes corporaciones corporativas nunca responde a tiempo.
        </p>
      </div>
    </section>
  );
}