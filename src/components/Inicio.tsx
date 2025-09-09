import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Inicio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(
    null
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Bloqueo de scroll
  useEffect(() => {
    if (imagenSeleccionada) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setImagenSeleccionada(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [imagenSeleccionada]);

  return (
    <section
      id="inicio"
      className="w-full flex flex-col items-center justify-center pb-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-64 md:h-96 relative flex items-center justify-center overflow-hidden"
      >
        <img
          src="/img/banner/banner-principal.jpg"
          alt="Banner principal del Colegio de Ingenieros Comerciales de Santa Cruz"
          className={`absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#1e40af]/80 via-[#0e7490]/60 to-[#60a5fa]/60 dark:from-[#1e40af]/90 dark:via-[#0e7490]/80 dark:to-[#60a5fa]/70 rounded-lg transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg px-6 py-2 rounded shadow-xl backdrop-blur-sm"
        >
          Bienvenidos al CICOM
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl mt-8 px-4 text-center"
      >
        <p className="text-lg md:text-xl text-[#1e293b] dark:text-[#f3f4f6] font-medium">
          Colegio de Ingenieros Comerciales & Ingenieros en Marketing y
          Publicidad
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <h3 className="text-xl font-semibold mb-6 text-[#1e40af] dark:text-[#60a5fa] text-center">
          Nuestra Institución
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: "/img/inicio/Cicom-2.jpg", alt: "Actividades del colegio" },
            { src: "/img/inicio/Cicom-5.jpg", alt: "Eventos institucionales" },
            {
              src: "/img/inicio/Cicom-17.jpg",
              alt: "Capacitaciones profesionales",
            },
            { src: "/img/inicio/Cicom-31.jpg", alt: "Networking profesional" },
          ].map((imagen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
              onClick={() => setImagenSeleccionada(imagen.src)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setImagenSeleccionada(null);
          }}
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Inicio;
