export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold tracking-wide text-white">
          Alexis.dev
        </a>

        <div className="hidden gap-6 md:flex">
          <a href="#projects" className="text-sm text-gray-300 transition hover:text-white">
            Proyectos
          </a>
          <a href="#services" className="text-sm text-gray-300 transition hover:text-white">
            Servicios
          </a>
          <a href="#contact" className="text-sm text-gray-300 transition hover:text-white">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}