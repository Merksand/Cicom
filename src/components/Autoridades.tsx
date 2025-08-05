import React from "react";
import { motion } from "framer-motion";

const autoridades = [
  {
    nombre: "Ing. Gaby López Moreno De Lino",
    cargo: "Presidente",
    descripcion: "Líder máximo del colegio profesional, responsable de la dirección estratégica y representación institucional.",
    imagen: "/img/directorio/5.jpg"
  },
  {
    nombre: "Ing. Christian Suarez Díaz",
    cargo: "Vicepresidente",
    descripcion: "Segunda autoridad del colegio, encargado de coordinar las actividades en ausencia del presidente.",
    imagen: "/img/directorio/1.jpg"
  },
  {
    nombre: "Ing. Willy Eguez Montoya",
    cargo: "Director General y Actas",
    descripcion: "Responsable de la gestión documental, actas de reuniones y comunicación institucional.",
    imagen: "/img/directorio/7.jpg"
  },
  {
    nombre: "Ing. Ingrid Paola Becerra Gómez",
    cargo: "Director Régimen Económico",
    descripcion: "Encargada de la gestión financiera, presupuestaria y económica del colegio profesional.",
    imagen: "/img/directorio/0.jpg"
  },
  {
    nombre: "Ing. Maria Angelica Ibañez Candia",
    cargo: "1er. Director",
    descripcion: "Primer director del colegio, responsable de áreas específicas de desarrollo institucional.",
    imagen: "/img/directorio/3.jpg"
  },
  {
    nombre: "Ing. Jorge Méndez Aurich",
    cargo: "2do. Director",
    descripcion: "Segundo director del colegio, encargado de proyectos y programas de desarrollo profesional.",
    imagen: "/img/directorio/2.jpg"
  },
  {
    nombre: "Ing. Diego Rivadeneira Sereviche",
    cargo: "Director Suplente 1",
    descripcion: "Primer director suplente, apoya las funciones del directorio y participa en decisiones institucionales.",
    imagen: "/img/directorio/6.jpg"
  },
  {
    nombre: "Ing. Jean Paul Guzman Castro",
    cargo: "Director Suplente 2",
    descripcion: "Segundo director suplente, colabora en las actividades del directorio y representa a la institución.",
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