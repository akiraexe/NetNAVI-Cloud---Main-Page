import React from 'react';

export function WhoItsFor() {
  return (
    <section className="py-20 px-6 bg-neutral border-t-4 border-primary/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
          Negocios con los que trabajamos
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {/* Puestos de comida y fondas - SOPA */}
          <Card
            icon={
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-primary drop-shadow-lg" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1" />
                <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
              </svg>
            }
            title="Puestos de comida y fondas"
            text="Negocios que dependen del flujo diario y no pueden detenerse."
          />

          {/* Confiterías y locales pequeños - CARAMelo */}
          <Card
            icon={
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-secondary drop-shadow-lg" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7.05 11.293l4.243 -4.243a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-4.243 4.243a2 2 0 0 1 -2.828 0l-2.829 -2.831a2 2 0 0 1 0 -2.828" />
                <path d="M16.243 9.172l3.086 -.772a1.5 1.5 0 0 0 .697 -2.516l-2.216 -2.217a1.5 1.5 0 0 0 -2.44 .47l-1.248 2.913" />
                <path d="M9.172 16.243l-.772 3.086a1.5 1.5 0 0 1 -2.516 .697l-2.217 -2.216a1.5 1.5 0 0 1 .47 -2.44l2.913 -1.248" />
              </svg>
            }
            title="Confiterías y locales pequeños"
            text="Operaciones estables que buscan orden y continuidad."
          />

          {/* Comercios al menudeo - BOLSA CORAZÓN */}
          <Card
            icon={
              <svg className="w-14 h-14 md:w-16 lg:w-20 mx-auto text-primary drop-shadow-lg" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
              </svg>
            }
            title="Comercios al menudeo"
            text="Ventas directas donde cada día cuenta."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }: any) {
  return (
    <div className="group p-8 rounded-3xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 hover:border-secondary/50">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
