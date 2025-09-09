import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const imagenes = [
  { src: "/img/quienes-somos/Cicom-1.jpg", alt: "Fundación del colegio" },
  { src: "/img/quienes-somos/Cicom-10.jpg", alt: "Desarrollo institucional" },
  { src: "/img/quienes-somos/Cicom-11.jpg", alt: "Crecimiento profesional" },
  { src: "/img/quienes-somos/Cicom-23.jpg", alt: "Actividades gremiales" },
  { src: "/img/quienes-somos/Cicom-32.jpg", alt: "Comunidad profesional" },
];

const QuienesSomos: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setModal(null);
  }, []);
  useEffect(() => {
    if (modal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [modal, handleKeyDown]);

  const modalPortal = modal
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={modal.src}
              alt={modal.alt}
              className="max-w-full max-h-[95vh] object-contain"
            />
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              aria-label="Cerrar imagen"
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
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <motion.section
        id="quienes-somos"
        className="py-12 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={`bg-white dark:bg-[#1e293b] rounded-xl shadow-lg p-8 max-w-4xl w-full flex flex-col items-center border border-[#f3f4f6] dark:border-[#1e293b] transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className={`mb-4 transition-all duration-700 delay-200 ${
              isVisible ? "rotate-0 scale-100" : "rotate-180 scale-0"
            }`}
          >
            <svg
              className="h-10 w-10 text-[#1e40af] dark:text-[#60a5fa]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v3m8 0a4 4 0 01-8 0m8 0v3a4 4 0 01-8 0V7a4 4 0 018 0v3z"
              />
            </svg>
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa] transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            ¿Quiénes somos?
          </h2>
          <p
            className={`text-center text-[#1e293b] dark:text-[#f3f4f6] px-4 mb-6 transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Somos el Colegio de Ingenieros Comerciales & Ingenieros en Marketing
            y Publicidad , una institución comprometida con la excelencia
            profesional y el desarrollo del sector comercial y de marketing en
            Bolivia.
          </p>

          <div className="grid md:grid-cols-2 gap-8 w-full mt-8">
            <div
              className={`bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-6 transition-all duration-700 delay-500 hover:shadow-lg hover:scale-105 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#1e40af] dark:text-[#60a5fa]">
                Misión
              </h3>
              <p className="text-[#1e293b] dark:text-[#f3f4f6] text-sm">
                Promover la excelencia profesional y ética de los ingenieros
                comerciales y de marketing, financieros y económicos ofreciendo
                servicios de capacitación, certificación y desarrollo
                profesional, a fin de contribuir al avance del sector comercial
                y de marketing en Bolivia y apoyar el crecimiento económico de
                la región de Santa Cruz.
              </p>
            </div>

            <div
              className={`bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-6 transition-all duration-700 delay-600 hover:shadow-lg hover:scale-105 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#1e40af] dark:text-[#60a5fa]">
                Visión
              </h3>
              <p className="text-[#1e293b] dark:text-[#f3f4f6] text-sm">
                Ser la entidad de referencia en Bolivia para los ingenieros
                comerciales y de marketing, financiero y económicos,
                destacándose por la innovación, calidad y ética profesional, y
                promoviendo una contribución significativa al desarrollo
                sostenible del país y el posicionamiento competitivo de sus
                afiliados en el ámbito nacional e internacional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Galería de imágenes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <h3 className="text-xl font-semibold mb-6 text-[#1e40af] dark:text-[#60a5fa] text-center">
            Nuestra Historia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagenes.map((imagen, index) => (
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
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                onClick={() => setModal(imagen)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
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
      </motion.section>
      {modalPortal}
    </>
  );
};

export default QuienesSomos;
