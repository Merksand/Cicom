import React, { useState } from "react";
import { motion } from "framer-motion";

interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  tipo: "evento" | "noticia";
}

const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Capacitación en Marketing Digital",
    descripcion: "Curso intensivo sobre estrategias de marketing digital para profesionales del sector comercial.",
    fecha: "2024-01-15",
    imagen: "/img/eventos/Cicom-3.jpg",
    tipo: "evento"
  },
  {
    id: 2,
    titulo: "Conferencia sobre Finanzas Corporativas",
    descripcion: "Evento académico sobre las últimas tendencias en finanzas corporativas y gestión financiera.",
    fecha: "2024-02-20",
    imagen: "/img/eventos/Cicom-8.jpg",
    tipo: "evento"
  },
  {
    id: 3,
    titulo: "Asamblea General Ordinaria",
    descripcion: "Reunión anual de afiliados para discutir los logros del año y planificar el siguiente período.",
    fecha: "2024-03-10",
    imagen: "/img/eventos/Cicom-9.jpg",
    tipo: "evento"
  },
  {
    id: 4,
    titulo: "Nuevas Afiliaciones al Colegio",
    descripcion: "Información sobre el proceso de afiliación y los beneficios para nuevos miembros.",
    fecha: "2024-01-05",
    imagen: "/img/eventos/Cicom-16.jpg",
    tipo: "noticia"
  },
  {
    id: 5,
    titulo: "Certificación Profesional",
    descripcion: "Programa de certificación para ingenieros comerciales y de marketing.",
    fecha: "2024-02-15",
    imagen: "/img/eventos/Cicom-18.jpg",
    tipo: "noticia"
  },
  {
    id: 6,
    titulo: "Convenio con Universidad",
    descripcion: "Firma de convenio con universidad local para programas de posgrado.",
    fecha: "2024-03-01",
    imagen: "/img/eventos/Cicom-20.jpg",
    tipo: "noticia"
  },
  {
    id: 7,
    titulo: "Seminario de Comercio Internacional",
    descripcion: "Seminario sobre comercio internacional y oportunidades de exportación.",
    fecha: "2024-04-05",
    imagen: "/img/eventos/Cicom-21.jpg",
    tipo: "evento"
  },
  {
    id: 8,
    titulo: "Actualización de Estatutos",
    descripcion: "Proceso de actualización de estatutos del colegio profesional.",
    fecha: "2024-01-20",
    imagen: "/img/eventos/Cicom-24.jpg",
    tipo: "noticia"
  },
  {
    id: 9,
    titulo: "Networking Empresarial",
    descripcion: "Evento de networking para profesionales del sector comercial y de marketing.",
    fecha: "2024-05-10",
    imagen: "/img/eventos/Cicom-27.jpg",
    tipo: "evento"
  },
  {
    id: 10,
    titulo: "Premio a la Excelencia Profesional",
    descripcion: "Ceremonia de entrega del premio anual a la excelencia profesional.",
    fecha: "2024-06-15",
    imagen: "/img/eventos/Cicom-28.jpg",
    tipo: "evento"
  }
];

const Eventos: React.FC = () => {
  const [filtro, setFiltro] = useState<"todos" | "evento" | "noticia">("todos");

  const eventosFiltrados = eventos.filter(evento => 
    filtro === "todos" ? true : evento.tipo === filtro
  );

  return (
    <motion.section id="eventos" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <video src="https://res.cloudinary.com/dwdoodwk1/video/upload/v1758053930/cicom-video_fz9d9p.mp4" controls />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa]"
      >Eventos y Noticias</motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex gap-2 mb-6"
      >
        <button
          onClick={() => setFiltro("todos")}
          className={`px-4 py-2 rounded transition-all duration-300 hover:scale-105 ${
            filtro === "todos" 
              ? "bg-[#1e40af] dark:bg-[#60a5fa] text-white dark:text-[#1e40af] shadow-lg" 
              : "bg-[#f3f4f6] dark:bg-[#1e293b] text-[#1e293b] dark:text-[#f3f4f6] hover:bg-[#1e40af] dark:hover:bg-[#60a5fa] hover:text-white dark:hover:text-[#1e40af]"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro("evento")}
          className={`px-4 py-2 rounded transition-all duration-300 hover:scale-105 ${
            filtro === "evento" 
              ? "bg-[#1e40af] dark:bg-[#60a5fa] text-white dark:text-[#1e40af] shadow-lg" 
              : "bg-[#f3f4f6] dark:bg-[#1e293b] text-[#1e293b] dark:text-[#f3f4f6] hover:bg-[#1e40af] dark:hover:bg-[#60a5fa] hover:text-white dark:hover:text-[#1e40af]"
          }`}
        >
          Eventos
        </button>
        <button
          onClick={() => setFiltro("noticia")}
          className={`px-4 py-2 rounded transition-all duration-300 hover:scale-105 ${
            filtro === "noticia" 
              ? "bg-[#1e40af] dark:bg-[#60a5fa] text-white dark:text-[#1e40af] shadow-lg" 
              : "bg-[#f3f4f6] dark:bg-[#1e293b] text-[#1e293b] dark:text-[#f3f4f6] hover:bg-[#1e40af] dark:hover:bg-[#60a5fa] hover:text-white dark:hover:text-[#1e40af]"
          }`}
        >
          Noticias
        </button>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {eventosFiltrados.map((evento, index) => (
          <motion.div
            key={evento.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#f3f4f6] dark:bg-[#334155] rounded-lg p-6 shadow-lg border border-[#f3f4f6] dark:border-[#475569]"
          >
            <img src={evento.imagen} alt={evento.titulo} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold mb-1 text-[#1e293b] dark:text-[#f3f4f6]">{evento.titulo}</h3>
            <p className="text-[#1e40af] dark:text-[#60a5fa] font-medium mb-2">{evento.fecha}</p>
            <p className="text-sm text-[#1e293b] dark:text-[#f3f4f6]">{evento.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Eventos; 