import React from "react";
import { motion } from "framer-motion";

const autoridades = [
  {
    nombre: "Ing. Gaby López Moreno De Lino",
    cargo: "Presidente",
    descripcion: "Líder del colegio profesional con amplia experiencia en el sector comercial y de marketing.",
    imagen: "/img/directorio/5.jpg"
  },
  {
    nombre: "Ing. Christian Suarez Díaz",
    cargo: "Vicepresidente",
    descripcion: "Responsable de las operaciones administrativas y desarrollo institucional.",
    imagen: "/img/directorio/1.jpg"
  },
  {
    nombre: "Ing. Willy Eguez Montoya",
    cargo: "Director General y Actas",
    descripcion: "Encargada de la gestión documental y comunicación institucional.",
    imagen: "/img/directorio/7.jpg"
  },
  {
    nombre: "Ing. Ingrid Paola Becerra Gómez",
    cargo: "DIrector Régimen Económico",
    descripcion: "Responsable de la gestión financiera y presupuestaria del colegio.",
    imagen: "/img/directorio/0.jpg"
  },
  {
    nombre: "Ing. Maria Angelica Ibañez Candia",
    cargo: "1er. Director",
    descripcion: "Encargada del registro y seguimiento de las actividades del directorio.",
    imagen: "/img/directorio/3.jpg"
  },
  {
    nombre: "Ing. Jorge Méndez Aurich",
    cargo: "2do. Director",
    descripcion: "Miembro del directorio con enfoque en desarrollo profesional y capacitación.",
    imagen: "/img/directorio/2.jpg"
  },
  {
    nombre: "Ing. Diego Rivadeneira Sereviche",
    cargo: "Director Suplente 1",
    descripcion: "Miembro del directorio con enfoque en desarrollo profesional y capacitación.",
    imagen: "/img/directorio/6.jpg"
  },
  {
    nombre: "Ing. Jean Paul Guzman Castro",
    cargo: "Director Suplente 1",
    descripcion: "Miembro del directorio con enfoque en desarrollo profesional y capacitación.",
    imagen: "/img/directorio/4.jpg"
  },
];

const Autoridades: React.FC = () => (
  <motion.section id="autoridades" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa]"
    >Autoridades</motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
      {autoridades.map((autoridad, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#f3f4f6] dark:bg-[#334155] rounded-lg p-6 shadow-lg border border-[#f3f4f6] dark:border-[#475569] text-center"
        >
          <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
            <img
              src={autoridad.imagen}
              alt={autoridad.nombre}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1 text-[#1e293b] dark:text-[#f3f4f6]">{autoridad.nombre}</h3>
          <p className="text-[#1e40af] dark:text-[#60a5fa] font-medium mb-2">{autoridad.cargo}</p>
          <p className="text-sm text-[#1e293b] dark:text-[#f3f4f6]">{autoridad.descripcion}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Autoridades; 