import React, { useState } from "react";
import Inicio from "./components/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Autoridades from "./components/Autoridades";
import Valores from "./components/Valores";
import Afiliacion from "./components/Afiliacion";
import Eventos from "./components/Eventos";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import { useEffect } from "react";
import { useDarkModeStore } from "./darkModeStore";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "autoridades", label: "Autoridades" },
  { id: "valores", label: "Valores" },
  { id: "afiliacion", label: "Afiliación" },
  { id: "eventos", label: "Eventos" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

const applyDarkClass = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("darkMode", dark ? "true" : "false");
};

const App: React.FC = () => {
  const dark = useDarkModeStore((s) => s.dark);
  const toggleDark = useDarkModeStore((s) => s.toggle);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    applyDarkClass(dark);
  }, [dark]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "darkMode") {
        const value = e.newValue === "true";
        applyDarkClass(value);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Scroll suave y cerrar menú móvil
  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      key={dark ? "dark" : "light"}
      className="min-h-screen bg-gradient-to-br from-[#60a5fa] via-[#f3f4f6] to-[#67e8f9] dark:from-[#1e40af] dark:via-[#1e293b] dark:to-[#0e7490] transition-colors duration-300"
    >
      {/* Menú de navegación fijo */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#1e293b]/90 shadow z-50 backdrop-blur border-b border-[#f3f4f6] dark:border-[#1e293b]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <span className="font-bold text-[#1e40af] dark:text-[#60a5fa] text-lg tracking-wide">
            <img src="/img/logo1.png" className="md:w-33 w-25 mr-2 " alt="" />
          </span>
          {/* Menú hamburguesa en móvil */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#67e8f9] dark:focus:ring-[#0e7490]"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6 text-[#1e40af] dark:text-[#60a5fa]"
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
            ) : (
              <svg
                className="h-6 w-6 text-[#1e40af] dark:text-[#60a5fa]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Menú de secciones */}
          <ul
            className={`
            flex-col md:flex-row md:flex gap-2 md:gap-4 text-sm md:text-base
            fixed md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-[#1e293b] md:bg-transparent md:dark:bg-transparent shadow md:shadow-none transition-all
            ${menuOpen ? "flex" : "hidden"} md:flex
            z-40 md:z-auto
          `}
          >
            {sections.map((s) => (
              <li
                key={s.id}
                className="border-b md:border-none border-[#f3f4f6] dark:border-[#1e293b] md:mb-0"
              >
                <a
                  href={`#${s.id}`}
                  className="block md:inline hover:text-[#0e7490] dark:hover:text-[#67e8f9] transition font-medium px-4 py-3 md:px-2 md:py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#67e8f9] dark:focus:ring-[#0e7490]"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(s.id);
                  }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-label={dark ? "Modo claro" : "Modo oscuro"}
            onClick={toggleDark}
            type="button"
            className="ml-4 p-2 rounded-full bg-[#f3f4f6] dark:bg-[#1e293b] border border-[#1e293b] dark:border-[#f3f4f6] shadow hover:bg-[#67e8f9] dark:hover:bg-[#0e7490] transition"
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1e40af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1e40af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Espacio para el menú fijo */}
      <div className="h-16" />
      {/* Secciones */}
      <main>
        <Inicio />
        <QuienesSomos />
        <Autoridades />
        <Valores />
        <Afiliacion />
        <Eventos />
        <Galeria />
        <Contacto />
      </main>
      {/* Footer */}
      <footer className="bg-[#1e40af] dark:bg-[#60a5fa] text-white dark:text-[#1e40af] text-center py-4 mt-8 shadow-inner">
        © {new Date().getFullYear()} CICOM - Colegio de Ingenieros Comerciales &
        Ingenieros en Marketing y Publicidad
      </footer>
    </div>
  );
};

export default App;
