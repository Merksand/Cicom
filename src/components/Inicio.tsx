import React, { useEffect, useState } from "react";

const Inicio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (imagenSeleccionada) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setImagenSeleccionada(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [imagenSeleccionada]);

  return (
    <section id="inicio" className="w-full flex flex-col items-center justify-center pb-8">
      <div className="w-full h-64 md:h-96 relative flex items-center justify-center overflow-hidden">
        <img
          src="/img/banner/banner-principal.jpg"
          alt="Banner principal del Colegio de Ingenieros Comerciales de Santa Cruz"
          className={`absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-[#1e40af]/80 via-[#0e7490]/60 to-[#60a5fa]/60 dark:from-[#1e40af]/90 dark:via-[#0e7490]/80 dark:to-[#60a5fa]/70 rounded-lg transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} />
        <h1 className={`relative z-10 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg px-6 py-2 rounded shadow-xl backdrop-blur-sm transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Bienvenidos al CICOM
        </h1>
      </div>
      <div className={`max-w-2xl mt-8 px-4 text-center transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <p className="text-lg md:text-xl text-[#1e293b] dark:text-[#f3f4f6] font-medium">
          Colegio de Ingenieros Comerciales, Financieros y de Marketing de Santa Cruz
        </p>
      </div>
      
      {/* Galería de imágenes de inicio con animaciones */}
      <div className={`mt-12 max-w-6xl w-full px-4 transition-all duration-1000 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h3 className="text-xl font-semibold mb-6 text-[#1e40af] dark:text-[#60a5fa] text-center">
          Nuestra Institución
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: "/img/inicio/Cicom-2.jpg", alt: "Actividades del colegio" },
            { src: "/img/inicio/Cicom-5.jpg", alt: "Eventos institucionales" },
            { src: "/img/inicio/Cicom-17.jpg", alt: "Capacitaciones profesionales" },
            { src: "/img/inicio/Cicom-31.jpg", alt: "Networking profesional" }
          ].map((imagen, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-700 delay-${index * 200} hover:shadow-xl hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              onClick={() => setImagenSeleccionada(imagen.src)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal para imagen ampliada */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={e => { if (e.target === e.currentTarget) setImagenSeleccionada(null); }}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={imagenSeleccionada}
              alt="Imagen ampliada"
              className="max-h-[95vh] object-contain"
            />
            <button
              onClick={() => setImagenSeleccionada(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Inicio; 