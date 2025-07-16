import React from "react";
import { motion } from "framer-motion";

const Afiliacion: React.FC = () => (
  <motion.section id="afiliacion" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#f3f4f6] dark:bg-[#334155] rounded-xl shadow-lg p-8 max-w-4xl w-full flex flex-col items-center border border-[#f3f4f6] dark:border-[#475569]"
    >
      <div className="mb-4">
        <svg className="h-10 w-10 text-[#1e40af] dark:text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa]">Afiliación</h2>
      <p className="text-center text-[#1e293b] dark:text-[#f3f4f6] px-4 mb-6">
        Únete al Colegio de Ingenieros Comerciales, Financieros y de Marketing de Santa Cruz 
        y forma parte de una comunidad profesional comprometida con la excelencia.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 w-full mt-8">
        <div className="bg-white dark:bg-[#334155] rounded-lg p-6 shadow border border-[#f3f4f6] dark:border-[#475569]">
          <h3 className="text-xl font-semibold mb-3 text-[#1e40af] dark:text-[#60a5fa]">Requisitos</h3>
          <ul className="text-[#1e293b] dark:text-[#f3f4f6] text-sm space-y-2">
            <li>• Título de Ingeniero Comercial, Financiero o de Marketing</li>
            <li>• Cédula de identidad vigente</li>
            <li>• Certificado de nacimiento</li>
            <li>• Certificado de título profesional</li>
            <li>• Formulario de afiliación completado</li>
            <li>• Pago de cuota de afiliación</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-[#334155] rounded-lg p-6 shadow border border-[#f3f4f6] dark:border-[#475569]">
          <h3 className="text-xl font-semibold mb-3 text-[#1e40af] dark:text-[#60a5fa]">Beneficios</h3>
          <ul className="text-[#1e293b] dark:text-[#f3f4f6] text-sm space-y-2">
            <li>• Certificación profesional</li>
            <li>• Capacitaciones y cursos especializados</li>
            <li>• Networking con otros profesionales</li>
            <li>• Acceso a eventos y conferencias</li>
            <li>• Representación gremial</li>
            <li>• Descuentos en servicios profesionales</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-3 text-[#1e40af] dark:text-[#60a5fa]">Proceso de Afiliación</h3>
        <p className="text-[#1e293b] dark:text-[#f3f4f6] text-sm mb-4">
          Para iniciar tu proceso de afiliación, contacta con nuestra oficina o descarga 
          el formulario de afiliación desde nuestra página web.
        </p>
        <button className="bg-[#1e40af] dark:bg-[#60a5fa] text-white dark:text-[#1e40af] px-6 py-3 rounded-lg hover:bg-[#0e7490] dark:hover:bg-[#67e8f9] transition">
          Descargar Formulario
        </button>
      </div>
    </motion.div>
    
    {/* Img de afiliaciones*/}
    <div className="mt-12 max-w-6xl w-full px-4">
      <h3 className="text-xl font-semibold mb-6 text-[#1e40af] dark:text-[#60a5fa] text-center">Actividades de Afiliación</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[{
          src: "/img/eventos/Cicom-3.jpg",
          alt: "Capacitación para afiliados",
          titulo: "Capacitaciones",
          desc: "Programas de formación continua para nuestros afiliados."
        }, {
          src: "/img/eventos/Cicom-8.jpg",
          alt: "Eventos de networking",
          titulo: "Networking",
          desc: "Eventos para conectar con otros profesionales del sector."
        }, {
          src: "/img/eventos/Cicom-9.jpg",
          alt: "Asambleas de afiliados",
          titulo: "Asambleas",
          desc: "Participación en las decisiones institucionales."
        }].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#f3f4f6] dark:bg-[#334155] rounded-lg overflow-hidden shadow-lg border border-[#f3f4f6] dark:border-[#475569]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-[#1e293b] dark:text-[#f3f4f6] mb-2">{item.titulo}</h4>
              <p className="text-sm text-[#1e293b] dark:text-[#f3f4f6]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Afiliacion; 