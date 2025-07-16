import React, { useState, useEffect } from "react";

const imagenesGaleria = [
  { src: "/img/galeria/Cicom-4.jpg", alt: "Actividades profesionales" },
  { src: "/img/galeria/Cicom-7.jpg", alt: "Eventos institucionales" },
  { src: "/img/galeria/Cicom-12.jpg", alt: "Capacitaciones" },
  { src: "/img/galeria/Cicom-14.jpg", alt: "Conferencias" },
  { src: "/img/galeria/Cicom-15.jpg", alt: "Seminarios" },
  { src: "/img/galeria/Cicom-19.jpg", alt: "Networking" },
  { src: "/img/galeria/Cicom-25.jpg", alt: "Certificaciones" },
  { src: "/img/galeria/Cicom-26.jpg", alt: "Asambleas" },
  { src: "/img/galeria/Cicom-29.jpg", alt: "Premiaciones" },
  { src: "/img/galeria/Cicom-30.jpg", alt: "Actividades gremiales" },
  { src: "/img/galeria/Cicom-33.jpg", alt: "Desarrollo profesional" },
  { src: "/img/galeria/Cicom-34.jpg", alt: "Comunidad CICOM" },
  { src: "/img/galeria/Cicom-22.jpg", alt: "Eventos especiales" },
  { src: "/img/galeria/Cicom-13.jpg", alt: "Actividades académicas" },
  { src: "/img/galeria/Cicom-6.jpg", alt: "Momentos institucionales" }
];

const Galeria: React.FC = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);
  const [imagenesCargadas, setImagenesCargadas] = useState<Set<number>>(new Set());

  // Precargar imágenes
  useEffect(() => {
    imagenesGaleria.forEach((imagen, index) => {
      const img = new Image();
      img.onload = () => {
        setImagenesCargadas(prev => new Set(prev).add(index));
      };
      img.onerror = () => {
        console.warn(`Error cargando imagen: ${imagen.src}`);
      };
      img.src = imagen.src;
    });
  }, []);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (imagenSeleccionada) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [imagenSeleccionada]);

  return (
    <section id="galeria" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa]">Galería de Imágenes</h2>
      <p className="text-center text-[#1e293b] dark:text-[#f3f4f6] mb-8 max-w-2xl px-4">
        Descubre los momentos más importantes de nuestra institución a través de nuestra galería de imágenes.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl w-full px-4">
        {imagenesGaleria.map((imagen, index) => (
          <div 
            key={index} 
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white  border border-[#f3f4f6] dark:border-[#1e293b]"
            onClick={() => setImagenSeleccionada(imagen.src)}
          >
            {imagenesCargadas.has(index) ? (
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-48 bg-[#f3f4f6] dark:bg-[#1e293b] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1e40af] dark:border-[#60a5fa]"></div>
              </div>
            )}
            <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <svg className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={imagenSeleccionada}
              alt="Imagen ampliada"
              className=" max-h-[95vh] object-contain"
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

export default Galeria; 