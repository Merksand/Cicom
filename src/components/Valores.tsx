import React, { useEffect, useState } from "react";

const valores = [
  {
    titulo: "Excelencia Profesional",
    descripcion: "Compromiso con los más altos estándares de calidad y competencia en el ejercicio profesional.",
    icono: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    titulo: "Ética y Transparencia",
    descripcion: "Actuación basada en principios éticos sólidos y transparencia en todas nuestras acciones.",
    icono: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    titulo: "Innovación",
    descripcion: "Fomento de la creatividad y adaptación a las nuevas tecnologías y metodologías del sector.",
    icono: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    titulo: "Colaboración",
    descripcion: "Trabajo en equipo y cooperación para lograr objetivos comunes y desarrollo del sector.",
    icono: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v3m8 0a4 4 0 01-8 0m8 0v3a4 4 0 01-8 0V7a4 4 0 018 0v3z" />
      </svg>
    )
  },
  {
    titulo: "Responsabilidad Social",
    descripcion: "Compromiso con el desarrollo sostenible y el bienestar de la sociedad boliviana.",
    icono: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
      </svg>
    )
  },
  {
    titulo: "Liderazgo",
    descripcion: "Promoción del liderazgo efectivo y la toma de decisiones estratégicas en el sector comercial.",
    icono: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const Valores: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="valores" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center">
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa] transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>Nuestros Valores</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {valores.map((valor, index) => (
          <div 
            key={index} 
            className={`bg-[#f3f4f6] dark:bg-[#334155] rounded-lg p-6 shadow-lg border border-[#f3f4f6] dark:border-[#475569] transition-all duration-700 delay-${index * 100} hover:shadow-xl hover:scale-105 hover:rotate-1 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className={`text-[#1e40af] dark:text-[#60a5fa] mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}>
              {valor.icono}
            </div>
            <h3 className={`text-lg font-semibold mb-2 text-[#1e293b] dark:text-[#f3f4f6] transition-all duration-500 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>{valor.titulo}</h3>
            <p className={`text-sm text-[#1e293b] dark:text-[#f3f4f6] transition-all duration-500 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>{valor.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Valores; 