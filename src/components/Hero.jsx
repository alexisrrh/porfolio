export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">

      {/* fondo efecto */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,80,0.2),transparent_40%),radial-gradient(circle_at_bottom,rgba(0,150,255,0.15),transparent_40%)]" />

      <div className="relative max-w-4xl mx-auto">

        <p className="text-red-400 uppercase text-sm tracking-widest">
          Frontend Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          Desarrollo páginas web modernas y{" "}
          <span className="text-red-500">experiencias digitales</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Creo interfaces atractivas, rápidas y funcionales con React, APIs y diseño profesional adaptado a negocios reales.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl font-semibold transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl"
          >
            Contactar
          </a>

        </div>

      </div>
    </section>
  );
}