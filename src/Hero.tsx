import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-12 md:pt-24"> {/* pt-20 para Header */}
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-3xl mx-auto text-center text-neutral relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-6 bg-gradient-to-r from-neutral to-gray-200 bg-clip-text text-transparent">
          Digitaliza lo justo. Funciona desde el día uno.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 drop-shadow-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          Cobros, soporte y soluciones digitales sin complicaciones.
          Empieza con lo necesario, crece cuando estés listo.
        </p>
        
        <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md">
          Si algo falla, no te dejamos solo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://wa.me/5215544837317"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-3xl bg-neutral text-primary text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm border-2 border-white/20"
          >
            Sin compromiso ¡Te orientamos!
          </a>
          <a
            href="https://calendly.com/TU-USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline text-neutral hover:text-primary font-semibold transition-colors duration-300 drop-shadow-lg"
          >
            ¿Prefieres agendar?
          </a>
        </div>
      </div>

      {/* IMAGEN FONDO + OVERLAY */}
      <div 
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        style={{
          backgroundImage: `url('/encuadre_negocio_01.webp')`, // Updated to .webp
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-primary/35 to-secondary/50" />
      </div>
    </section>
  );
}