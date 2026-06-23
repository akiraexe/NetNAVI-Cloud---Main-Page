import React from 'react';
import { IconPackage, IconCloud, IconUserCheck } from '@tabler/icons-react';

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="py-24 px-6 bg-gradient-to-b from-brand-mutedRow to-brand-lightBg">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-warmOrange bg-brand-warmOrange/10 px-3 py-1 rounded-full">
            Ecosistema Activo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textDark tracking-tight mt-3">
            Herramientas Listas para Encender en tu Negocio
          </h2>
          <p className="mt-4 text-lg text-brand-textDark/85 max-w-2xl mx-auto font-medium">
            Soluciones integradas llave en mano bajo esquemas flexibles y marcas aliadas. Elige lo que necesitas hoy y actívalo de inmediato.
          </p>
        </div>

        {/* GRID DE LAS 3 VERTICALES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* VERTICAL 1: LOGÍSTICA (PuntoPost) */}
          <div className="p-8 rounded-2xl bg-brand-lightBg border border-brand-textDark/10 interactive-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-warmOrange/10 flex items-center justify-center mb-6 text-brand-warmOrange">
                <IconPackage className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-brand-textDark mb-3">
                Logística y Punto Físico
              </h3>
              <p className="text-sm text-brand-textDark/80 leading-relaxed font-medium mb-4">
                **PuntoPost:** Infraestructura física para la gestión de entregas y recolección de paquetes. Ideal para comercios que buscan convertirse en nodos de distribución locales o asegurar el resguardo seguro de mercancía de última milla.
              </p>
            </div>
            <div className="text-xs font-bold text-brand-warmOrange mt-4">
              📍 Operativo en Ciudad de México
            </div>
          </div>

          {/* VERTICAL 2: NUBE Y RESPALDOS (Nephos, Don Dominio, AOMEI) */}
          <div className="p-8 rounded-2xl bg-brand-lightBg border border-brand-accentGold/40 interactive-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-accentGold/20 flex items-center justify-center mb-6 text-brand-accentGold">
                <IconCloud className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-brand-textDark mb-3">
                Nube y Respaldo Corporativo
              </h3>
              <p className="text-sm text-brand-textDark/80 leading-relaxed font-medium mb-4">
                Asegura la identidad de tu empresa con correo corporativo bajo tu propio dominio de internet. Incluye almacenamiento seguro en la nube privada (White Label) y blindaje de datos mediante sistemas de respaldo automático contra fallas catastróficas.
              </p>
            </div>
            <div className="text-xs font-bold text-brand-accentGold mt-4">
              ☁️ Infraestructura Marca Blanca
            </div>
          </div>

          {/* VERTICAL 3: SOPORTE BAJO DEMANDA */}
          <div className="p-8 rounded-2xl bg-brand-lightBg border border-brand-textDark/10 interactive-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-warmOrange/10 flex items-center justify-center mb-6 text-brand-warmOrange">
                <IconUserCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-brand-textDark mb-3">
                Soporte Técnico Especializado
              </h3>
              <p className="text-sm text-brand-textDark/80 leading-relaxed font-medium mb-4">
                Despachamos ingenieros y técnicos calificados directo a tu establecimiento o sucursal mediante órdenes de servicio claras. Cobertura de mantenimiento preventivo y correctivo bajo demanda: pagas sólo cuando lo necesitas, sin nóminas fijas.
              </p>
            </div>
            <div className="text-xs font-bold text-brand-textDark/60 mt-4">
              📋 Soporte por Orden de Servicio
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}