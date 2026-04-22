import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold tracking-wide text-white">
          Alexis.dev
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Proyectos
          </a>
          <a
            href="#services"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
          >
            Contacto
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              className="text-gray-300 transition hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="text-gray-300 transition hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a
              href="#services"
              className="text-gray-300 transition hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-red-600 px-4 py-2 text-center font-medium text-white transition hover:bg-red-500"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}