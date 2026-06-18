import React from 'react';

export function PartnerSolutions() {
  return (
    <section className="py-24 px-6 bg-brand-lightBg">
      <div className="max-w-4xl mx-auto">
        
        {/* CASO DE ÉXITO (Social Proof - Pide Rubén "Flais") */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textDark tracking-tight mb-6">
            Probado en Entornos Reales
          </h2>
          <div className="p-8 rounded-2xl bg-brand-mutedRow/70 border border-brand-textDark/10 inline-block text-left max-w-2xl shadow-md interactive-card">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-warmOrange bg-brand-warmOrange/10 px-3 py-1 rounded-full">
              Caso de Éxito Reciente
            </span>
            <h3 className="text-xl font-bold text-brand-textDark mt-3 mb-2">
              Migración de Infraestructura de Servicios Básicos
            </h3>
            <p className="text-brand-textDark/80 leading-relaxed font-medium mb-4">
              Optimizamos el entorno de servidores de un negocio local utilizando virtualizaciones ligeras. El resultado: **99.9% de uptime continuo**, eliminación completa de interrupciones en su jornada y una reducción del 40% en costos de licencias de software privativo.
            </p>
            <div className="text-sm font-bold text-brand-textDark/60">
              🛠️ Tecnologías implementadas: KVM Cluster Virtualization & Linux Minimal Deployments.
            </div>
          </div>
        </div>

        {/* QUIÉNES SOMOS (Humanización - Pide Erick) */}
        <div className="text-center pt-8 border-t border-brand-textDark/10">
          <h3 className="text-2xl font-extrabold text-brand-textDark mb-4">
            Detrás de NetNAVI Cloud
          </h3>
          <p className="text-lg text-brand-textDark/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Somos ingenieros y administradores de sistemas con casi dos décadas de experiencia real operando fierros, infraestructura y código. Nos apasiona la tecnología de "garage" bien hecha: robusta, segura y diseñada artesanalmente para resolver problemas de negocios de carne y hueso en México. No somos intermediarios ni revendedores.
          </p>
        </div>

      </div>
    </section>
  );
}