import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-brand-textDark text-brand-lightBg/90 border-t border-brand-textDark/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* LADO IZQUIERDO: Derechos reservados y marca con tipografía legible */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm font-bold tracking-wide">
            © {new Date().getFullYear()} NetNAVI Cloud. Todos los derechos reservados.
          </p>
          <p className="text-xs text-brand-lightBg/60 font-medium">
            Tecnología práctica y artesanal para negocios reales en México.
          </p>
        </div>

        {/* LADO DERECHO: Botones de Redes Sociales con Iconos Estándar e Interactividad Enriquecida */}
        <div className="flex items-center space-x-4 self-center md:self-auto md:ml-auto">
          {/* Facebook: Con enlace oficial configurado */}
          <a
            href="https://www.facebook.com/ntnavicloud"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-brand-lightBg/5 border border-brand-lightBg/10 text-brand-lightBg hover:bg-brand-warmOrange hover:text-white hover:border-brand-warmOrange transition-all duration-200 shadow-xs"
            aria-label="Facebook NetNAVI Cloud"
          >
            <IconBrandFacebook className="w-5 h-5 stroke-[2]" />
          </a>

          {/* X (Antes Twitter): Enlace vacío por ahora */}
          <a
            href="#"
            className="p-2.5 rounded-xl bg-brand-lightBg/5 border border-brand-lightBg/10 text-brand-lightBg/70 hover:bg-brand-accentGold hover:text-brand-textDark hover:border-brand-accentGold transition-all duration-200 shadow-xs"
            aria-label="X (Twitter)"
          >
            <IconBrandX className="w-5 h-5 stroke-[2]" />
          </a>

          {/* Instagram: Enlace vacío por ahora */}
          <a
            href="#"
            className="p-2.5 rounded-xl bg-brand-lightBg/5 border border-brand-lightBg/10 text-brand-lightBg/70 hover:bg-brand-accentGold hover:text-brand-textDark hover:border-brand-accentGold transition-all duration-200 shadow-xs"
            aria-label="Instagram"
          >
            <IconBrandInstagram className="w-5 h-5 stroke-[2]" />
          </a>

          {/* LinkedIn: Enlace vacío por ahora */}
          <a
            href="#"
            className="p-2.5 rounded-xl bg-brand-lightBg/5 border border-brand-lightBg/10 text-brand-lightBg/70 hover:bg-brand-accentGold hover:text-brand-textDark hover:border-brand-accentGold transition-all duration-200 shadow-xs"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="w-5 h-5 stroke-[2]" />
          </a>
        </div>

      </div>
    </footer>
  );
}