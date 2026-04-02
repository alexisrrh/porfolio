import react from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-lg font-semibold">
          LOGO
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="px-3 py-2 rounded-md bg-gray-900">
            Inicio
          </a>
          <a href="#" className="px-3 py-2 rounded-md hover:bg-white/10">
            Historia
          </a>
          <a href="#" className="px-3 py-2 rounded-md hover:bg-white/10">
            Horario
          </a>
          <a href="#" className="px-3 py-2 rounded-md hover:bg-white/10">
            Contacto
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button className="md:hidden text-xl">
          ☰
        </button>

      </div>
    </nav>
  );
};





    export default Navbar;  