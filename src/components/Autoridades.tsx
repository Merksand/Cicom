import React from "react";

const autoridades = [
  {
    nombre: "Lic. María Elena Suárez",
    cargo: "Presidente",
    descripcion: "Líder del colegio profesional con amplia experiencia en el sector comercial y de marketing.",
    imagen: "/img/quienes-somos/Cicom-1.jpg"
  },
  {
    nombre: "Ing. Carlos Rodríguez",
    cargo: "Vicepresidente",
    descripcion: "Responsable de las operaciones administrativas y desarrollo institucional.",
    imagen: "/img/quienes-somos/Cicom-10.jpg"
  },
  {
    nombre: "Lic. Ana Patricia López",
    cargo: "Secretaria General",
    descripcion: "Encargada de la gestión documental y comunicación institucional.",
    imagen: "/img/quienes-somos/Cicom-11.jpg"
  },
  {
    nombre: "Ing. Roberto Martínez",
    cargo: "Tesorero",
    descripcion: "Responsable de la gestión financiera y presupuestaria del colegio.",
    imagen: "/img/quienes-somos/Cicom-23.jpg"
  },
  {
    nombre: "Lic. Sandra Fernández",
    cargo: "Secretaria de Actas",
    descripcion: "Encargada del registro y seguimiento de las actividades del directorio.",
    imagen: "/img/quienes-somos/Cicom-32.jpg"
  },
  {
    nombre: "Ing. Luis Alberto Vargas",
    cargo: "Vocal",
    descripcion: "Miembro del directorio con enfoque en desarrollo profesional y capacitación.",
    imagen: "/img/galeria/Cicom-4.jpg"
  }
];

const Autoridades: React.FC = () => (
  <section id="autoridades" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa]">Autoridades</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
      {autoridades.map((autoridad, index) => (
        <div key={index} className="bg-[#f3f4f6] dark:bg-[#334155] rounded-lg p-6 shadow-lg border border-[#f3f4f6] dark:border-[#475569] text-center transition-colors duration-300">
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
        </div>
      ))}
    </div>
  </section>
);

export default Autoridades; 