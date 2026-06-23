import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-12 md:pt-24 bg-brand-lightBg">
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* TITULO: Eliminamos la transparencia y dejamos claro qué es NetNAVI */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-brand-textDark tracking-tight leading-none">
          Tecnología clara y sistemas estables para tu negocio.
        </h1>
        
        {/* SUBTITULO: Corregimos el "Efecto Clip" aclarando el nicho de software/hardware */}
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-brand-textDark/90 mb-6 max-w-3xl mx-auto leading-relaxed">
          Desplegamos la infraestructura, servidores y aplicaciones a la medida que tu empresa necesita. Sin complicaciones técnicas: empieza con lo justo y crece cuando estés listo.
        </p>
        
        {/* FRASE DE RESPALDO (Alineado con lo que pide Rubén "Flais") */}
        <p className="text-base md:text-lg font-bold text-brand-warmOrange mb-8 uppercase tracking-wider">
          Si algo falla, resolvemos de inmediato. No te dejamos solo.
        </p>

        {/* ACCIONES (CTAs): Colores cálidos, contrastados y con microinteracciones sutiles */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://wa.me/5215544837317"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-warmOrange text-white text-lg font-bold shadow-md hover:bg-brand-warmOrange/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Sin compromiso ¡Te orientamos!
          </a>
          <a
            href="#soluciones" 
            className="text-lg text-brand-textDark font-bold hover:text-brand-warmOrange transition-colors duration-200 underline decoration-2 decoration-brand-accentGold underline-offset-4"
          >
            Ver soluciones de hardware y apps
          </a>
        </div>
      </div>

      {/* IMAGEN DE FONDO + OVERLAY CÁLIDO SUAVE */}
      <div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('/encuadre_negocio_01.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Cambiamos el degradado frío por un filtro sutil que suaviza la imagen sobre el fondo crema */}
        <div className="absolute inset-0 bg-brand-lightBg/85 mix-blend-multiply" />
      </div>
    </section>
  );
}