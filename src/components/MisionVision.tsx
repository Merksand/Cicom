import React from "react";

const MisionVision: React.FC = () => (
  <section id="mision-vision" className="py-12 bg-white flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Misión y Visión</h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-3xl w-full px-4">
      <div className="flex-1 bg-blue-50 rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Misión</h3>
        <p className="text-gray-700">Brindar formación profesional de calidad, promoviendo la ética y el desarrollo continuo de nuestros miembros para contribuir al progreso de la sociedad.</p>
      </div>
      <div className="flex-1 bg-blue-50 rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Visión</h3>
        <p className="text-gray-700">Ser líderes en la representación y capacitación de ingenieros civiles y de obras municipales, reconocidos por nuestro compromiso y excelencia.</p>
      </div>
    </div>
  </section>
);

export default MisionVision; 