export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white">Alexis.dev</p>
          <p className="mt-1 text-sm text-gray-400">
            Frontend Developer · React · Tailwind · APIs
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <a
            href="#hero"
            className="transition hover:text-white"
          >
            Inicio
          </a>
          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contacto
          </a>
          <a
            href="https://github.com/alexisrrh"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © 2026 Alexis. Todos los derechos reservados.
      </div>
    </footer>
  );
}