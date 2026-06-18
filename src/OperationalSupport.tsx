import React from 'react';

export function OperationalSupport() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-secondary/5 to-primary/5 border-t-4 border-secondary/20">
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent drop-shadow-2xl mb-6">
          Soporte Operativo para tu Día a Día
        </h2>

        <p className="mt-8 text-xl md:text-2xl text-gray-800 drop-shadow-lg max-w-2xl mx-auto leading-relaxed mb-20">
          Te ayudamos a resolver problemas técnicos cotidianos y a dejar tus
          equipos funcionando correctamente.
        </p>

        <div className="space-y-12">
          {/* FILA 1: Las 3 principales */}
          <div className="grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Service 1: Reinstalación */}
            <div className="space-y-8 p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 border border-white/30">
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-primary drop-shadow-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12h14l-7 -8l-7 8" />
                <path d="M5 17a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -2" />
              </svg>
              <h3 className="font-bold text-xl text-gray-900 drop-shadow-md">Reinstalación y configuración básica</h3>
              <p className="text-lg text-gray-800 leading-relaxed drop-shadow-sm">Dejamos tus sistemas listos para operar sin complicaciones.</p>
            </div>

            {/* Service 2: Ensamble */}
            <div className="space-y-8 p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 border border-white/30">
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-secondary drop-shadow-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M12 17v-11.5" />
                <path d="M7 10v3l5 3" />
                <path d="M12 14.5l5 -2v-2.5" />
                <path d="M16 10h2v-2h-2l0 2" />
                <path d="M6 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M10 5.5h4l-2 -2.5l-2 2.5" />
              </svg>
              <h3 className="font-bold text-xl text-gray-900 drop-shadow-md">Ensamble y puesta a punto de equipos</h3>
              <p className="text-lg text-gray-800 leading-relaxed drop-shadow-sm">Montamos y optimizamos tu hardware para un rendimiento óptimo.</p>
            </div>

            {/* Service 3: Respaldos */}
            <div className="space-y-8 p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 border border-white/30">
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-primary drop-shadow-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                <path d="M4 6v6c0 1.657 3.582 3 8 3c.856 0 1.68 -.05 2.454 -.144m5.546 -2.856v-6" />
                <path d="M4 12v6c0 1.657 3.582 3 8 3c.171 0 .341 -.002 .51 -.006" />
                <path d="M19 22v-6" />
                <path d="M22 19l-3 -3l-3 3" />
              </svg>
              <h3 className="font-bold text-xl text-gray-900 drop-shadow-md">Respaldos y recuperación de información</h3>
              <p className="text-lg text-gray-800 leading-relaxed drop-shadow-sm">Protegemos tus datos y te ayudamos a recuperarlos si es necesario.</p>
            </div>
          </div>

          {/* FILA 2: Las 2 tarjetas lado a lado */}
          <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto">
            {/* Service 4: Asesorías */}
            <div className="space-y-8 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 border border-white/40">
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-secondary drop-shadow-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15.02 19.52c-2.341 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.649 1.407 2.575 3.253 2.742 5.152" />
                <path d="M19 22v.01" />
                <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
              </svg>
              <h3 className="font-bold text-xl text-gray-900 drop-shadow-md">Asesorías técnicas puntuales</h3>
              <p className="text-lg text-gray-800 leading-relaxed drop-shadow-sm">Ofrecemos guía experta para tus dudas y desafíos tecnológicos.</p>
            </div>

            {/* Service 5: Trámites */}
            <div className="space-y-8 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 border border-white/40">
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-primary drop-shadow-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                <path d="M9 14l2 2l4 -4" />
              </svg>
              <h3 className="font-bold text-xl text-gray-900 drop-shadow-md">Acompañamiento en trámites y servicios</h3>
              <p className="text-lg text-gray-800 leading-relaxed drop-shadow-sm">Te guiamos en la gestión de servicios esenciales como tu conexión a internet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGEN DE FONDO FULL-WIDTH + OVERLAY */}
      {/* 📁 COLOCA AQUÍ TU IMAGEN: support-bg.jpg en public/ */}
      <div 
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        style={{
          backgroundImage: `url('/encuadre_negocio_02.webp')`, // Updated to .webp
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* OVERLAY GRADIENTE LOGO - 40-50% Opacidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-primary/30 to-secondary/40" />
      </div>
    </section>
  );
}