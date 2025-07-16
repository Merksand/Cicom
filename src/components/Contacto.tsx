import React from "react";

const Contacto: React.FC = () => (
  <section id="contacto" className="py-12 bg-white dark:bg-[#1e293b] flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e40af] dark:text-[#60a5fa]">Contacto</h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full px-4">

      <form className="flex-1 bg-[#f3f4f6] dark:bg-[#1e293b] rounded-xl shadow-xl p-8 flex flex-col gap-6 border border-[#e5e7eb] dark:border-[#334155]" onSubmit={e => e.preventDefault()}>
        <label className="font-semibold text-[#1e293b] dark:text-[#f3f4f6] flex flex-col gap-1">
          Nombre
          <input 
            type="text" 
            className="w-full border border-[#cbd5e1] dark:border-[#334155] rounded-lg px-4 py-2 bg-white dark:bg-[#0f172a] text-[#1e293b] dark:text-[#f3f4f6] placeholder-[#64748b] dark:placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#60a5fa] transition" 
            placeholder="Tu nombre completo" 
            required 
          />
        </label>
        <label className="font-semibold text-[#1e293b] dark:text-[#f3f4f6] flex flex-col gap-1">
          Email
          <input 
            type="email" 
            className="w-full border border-[#cbd5e1] dark:border-[#334155] rounded-lg px-4 py-2 bg-white dark:bg-[#0f172a] text-[#1e293b] dark:text-[#f3f4f6] placeholder-[#64748b] dark:placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#60a5fa] transition" 
            placeholder="correo@ejemplo.com" 
            required 
          />
        </label>
        <label className="font-semibold text-[#1e293b] dark:text-[#f3f4f6] flex flex-col gap-1">
          Mensaje
          <textarea 
            className="w-full border border-[#cbd5e1] dark:border-[#334155] rounded-lg px-4 py-2 bg-white dark:bg-[#0f172a] text-[#1e293b] dark:text-[#f3f4f6] placeholder-[#64748b] dark:placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#60a5fa] transition resize-none" 
            rows={4} 
            placeholder="Escribe tu mensaje aquí..." 
            required 
          />
        </label>
        <button 
          type="submit" 
          className="mt-2 bg-gradient-to-r from-[#1e40af] via-[#0e7490] to-[#60a5fa] dark:from-[#60a5fa] dark:via-[#0ea5e9] dark:to-[#1e40af] text-white dark:text-[#1e293b] px-6 py-2 rounded-lg font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#60a5fa]"
        >
          Enviar
        </button>
      </form>
      {/* Mapa*/}
      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-2 text-[#1e40af] dark:text-[#60a5fa]">Datos de contacto</h3>
          <p className="text-[#1e293b] dark:text-[#f3f4f6]">Email: contacto@cicscz.org.bo</p>
          <p className="text-[#1e293b] dark:text-[#f3f4f6]">Teléfono: +591 3 3420222</p>
          <p className="text-[#1e293b] dark:text-[#f3f4f6]">Facebook: <a href="https://www.facebook.com/SCZCICOM" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] dark:text-[#60a5fa] hover:underline">SCZCICOM</a></p>
          <p className="text-[#1e293b] dark:text-[#f3f4f6]">Dirección: Av. Beni esquina 2do anillo, Santa Cruz</p>
        </div>
        <div className="h-56 w-full rounded-lg overflow-hidden shadow">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121575.86903432784!2d-63.33421360273442!3d-17.780136399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c4e1b44b07%3A0xcc69ad11651650b9!2sColegio%20de%20Ingenieros%20Comerciales%20Santa%20Cruz!5e0!3m2!1ses!2sbo!4v1752625319481!5m2!1ses!2sbo" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del Colegio de Ingenieros Comerciales de Santa Cruz">
          </iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contacto; 