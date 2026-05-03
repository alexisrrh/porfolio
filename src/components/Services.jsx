import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Convertir diseños en interfaces",
    text: "Transformo ideas, referencias o diseños en páginas responsive con estructura clara, animaciones cuidadas y acabado profesional.",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    number: "02",
    title: "Dar vida a proyectos con datos",
    text: "Integro APIs, productos, formularios, búsquedas, filtros y contenido dinámico para que una web deje de ser estática.",
    tags: ["APIs", "Fetch", "Estado"],
  },
  {
    number: "03",
    title: "Mejorar webs lentas o antiguas",
    text: "Modernizo la parte visual de sitios existentes, optimizando navegación, experiencia móvil, carga visual y percepción profesional.",
    tags: ["UX", "Performance", "Rediseño"],
  },
  {
    number: "04",
    title: "Construir flujos funcionales",
    text: "Creo pantallas conectadas entre sí: login, paneles, formularios, rutas protegidas, favoritos, dashboards y gestión de datos.",
    tags: ["Auth", "Rutas", "Supabase"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.14),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300 text-center">
            Qué puedo aportar
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl text-center">
            Soluciones frontend
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              para problemas reales.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70 text-center">
            No vendo una lista de tecnologías. Uso frontend para mejorar
            productos, crear experiencias claras y construir interfaces que
            funcionen en escenarios reales.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.35, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-cyan-300/[0.08]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100 " />

              <div className="relative flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                  {service.number}
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white text-center">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-cyan-50/70 text-center">
                    {service.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 text-center">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-cyan-50/75 text-center"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center backdrop-blur-xl"
        >
          <p className="mx-auto max-w-3xl text-xl font-semibold leading-8 text-cyan-50/85 text-center">
            Mi objetivo es simple: crear frontend que se vea profesional, se
            entienda rápido y funcione bien desde el primer uso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}