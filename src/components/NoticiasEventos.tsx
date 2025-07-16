import React from "react";

const noticias = [
  {
    titulo: "Seminario de Actualización Profesional",
    fecha: "10 de junio de 2024",
    descripcion: "Participa en nuestro seminario anual sobre nuevas tendencias en ingeniería civil."
  },
  {
    titulo: "Convocatoria a Asamblea General",
    fecha: "25 de mayo de 2024",
    descripcion: "Invitamos a todos los miembros a la asamblea general ordinaria para tratar temas institucionales."
  },
  {
    titulo: "Jornada de Integración",
    fecha: "5 de abril de 2024",
    descripcion: "Evento de confraternización y networking para miembros y nuevos afiliados."
  }
];

const NoticiasEventos: React.FC = () => (
  <section id="noticias-eventos" className="py-12 bg-gray-50 flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Noticias o Eventos</h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full px-4">
      {noticias.map((n, i) => (
        <div key={i} className="flex-1 bg-white rounded-lg shadow p-6 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{n.titulo}</h3>
          <p className="text-sm text-gray-500 mb-2">{n.fecha}</p>
          <p className="text-gray-700">{n.descripcion}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NoticiasEventos; 