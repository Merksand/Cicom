import React, { useState, useEffect } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const eventosFiltrados = eventos.filter(evento => 
    filtro === "todos" ? true : evento.tipo === filtro
  );

  return (
    <section id="eventos" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center">
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa] transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>Eventos y Noticias</h2>
      
      <div className={`flex gap-2 mb-6 transition-all duration-700 delay-200 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
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
      </div>

      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4 transition-all duration-1000 delay-400 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {eventosFiltrados.map((evento, index) => (
          <div 
            key={evento.id} 
            className={`bg-[#f3f4f6] dark:bg-[#334155] rounded-lg shadow-lg overflow-hidden border border-[#f3f4f6] dark:border-[#475569] transition-all duration-700 delay-${index * 100} hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded transition-all duration-300 hover:scale-105 ${
                  evento.tipo === "evento" 
                    ? "bg-[#1e40af] dark:bg-[#60a5fa] text-white dark:text-[#1e40af]" 
                    : "bg-[#0e7490] dark:bg-[#67e8f9] text-white dark:text-[#0e7490]"
                }`}>
                  {evento.tipo === "evento" ? "Evento" : "Noticia"}
                </span>
                <span className="text-xs text-[#1e293b] dark:text-[#f3f4f6]">{new Date(evento.fecha).toLocaleDateString()}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#1e293b] dark:text-[#f3f4f6] hover:text-[#1e40af] dark:hover:text-[#60a5fa] transition-colors duration-300">
                {evento.titulo}
              </h3>
              <p className="text-sm text-[#1e293b] dark:text-[#f3f4f6]">{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eventos; 