import React from 'react';

export function Problem() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-neutral to-gray-50 border-t-8 border-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl text-gray-900 font-semibold">
          Cuando dependes de sistemas que no entiendes,
        </p>
        <p className="mt-4 text-xl text-gray-900 font-semibold">
          cualquier falla se traduce en ventas perdidas.
        </p>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Y la mayoría de las veces, nadie responde a tiempo.
        </p>
      </div>
    </section>
  );
}
