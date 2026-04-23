export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-red-400 text-center">
            Sobre mí
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl text-center">
            Desarrollo interfaces modernas con enfoque práctico y visual
          </h2>

          <p className="mt-6 leading-8 text-gray-400 text-center">
            Soy desarrollador frontend y me enfoco en crear aplicaciones web
            atractivas, funcionales y adaptadas a necesidades reales. Trabajo
            principalmente con React, Tailwind y APIs, cuidando tanto la
            experiencia visual como la estructura del proyecto.
          </p>

          <p className="mt-4 leading-8 text-gray-400 text-center">
            He desarrollado proyectos como una app inspirada en Netflix y un
            sistema odontológico con autenticación, gestión de pacientes y
            citas. Me interesa construir productos que no solo se vean bien,
            sino que también resuelvan problemas concretos.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
          <h3 className="text-2xl font-semibold text-white text-center">
            Lo que puedo aportar
          </h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="font-medium text-white">Diseño moderno</p>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                Interfaces limpias, visuales y adaptadas a móvil.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="font-medium text-white">Lógica real</p>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                Formularios, autenticación, consumo de APIs y flujos de usuario.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="font-medium text-white">Orientado a negocio</p>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                Webs y apps pensadas para mostrar servicios, gestionar datos y
                ofrecer una experiencia profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}