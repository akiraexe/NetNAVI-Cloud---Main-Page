import React from 'react';

export function EvolvingSolutions() {
  return (
    <section id="soluciones" className="py-20 px-6 bg-brand-lightBg border-t-2 border-brand-mutedRow">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado directo y legible */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textDark tracking-tight">
            Soluciones de Hardware y Aplicaciones a tu Medida
          </h2>
          <p className="mt-4 text-lg text-brand-textDark/80 max-w-2xl mx-auto font-medium">
            No te vendemos humo. Te desplegamos herramientas robustas, de bajo costo operativo y listas para trabajar en tu entorno real.
          </p>
        </div>

        {/* Grid de Soluciones Reales (Catálogo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta 1: La especialidad de los fierros (Baremetal/Sistemas) */}
          <div className="p-8 rounded-2xl bg-brand-lightBg/60 backdrop-blur-xs border border-brand-textDark/10 interactive-card">
            <div className="w-12 h-12 rounded-xl bg-brand-warmOrange/10 flex items-center justify-center mb-6 text-brand-warmOrange font-bold text-xl">
              ⚙️
            </div>
            <h3 className="text-2xl font-bold text-brand-textDark mb-3">
              Infraestructura y Servidores Baremetal
            </h3>
            <p className="text-brand-textDark/80 leading-relaxed font-medium">
              Desplegamos y optimizamos servidores físicos locales o virtuales utilizando sistemas ultra-ligeros basados en estándares de alta disponibilidad. Máximo rendimiento de tu hardware existente sin pagar licencias abusivas.
            </p>
          </div>

          {/* Tarjeta 2: La especialidad del código (Apps/Scripts) */}
          <div className="p-8 rounded-2xl bg-brand-lightBg/60 backdrop-blur-xs border border-brand-textDark/10 interactive-card">
            <div className="w-12 h-12 rounded-xl bg-brand-accentGold/20 flex items-center justify-center mb-6 text-brand-accentGold font-bold text-xl">
              💻
            </div>
            <h3 className="text-2xl font-bold text-brand-textDark mb-3">
              Desarrollo de Software y Automatizaciones
            </h3>
            <p className="text-brand-textDark/80 leading-relaxed font-medium">
              Creamos aplicaciones web, paneles de administración (dashboards) y scripts automatizados a la medida de tus procesos de negocio. Herramientas diseñadas para ser intuitivas para tu personal, rápidas y sin letras chiquitas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}