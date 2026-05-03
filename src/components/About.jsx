import { motion } from "framer-motion";

const strengths = [
  {
    title: "Interfaces cuidadas",
    text: "Diseño limpio, responsive y con atención al detalle visual.",
  },
  {
    title: "Lógica real",
    text: "Trabajo con APIs, estados, rutas y estructuras reales de frontend.",
  },
  {
    title: "Código escalable",
    text: "Componentes reutilizables y estructura clara pensada para crecer.",
  },
];

const stack = ["React", "JavaScript", "Tailwind", "APIs", "Supabase", "Git"];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-md font-black uppercase tracking-[0.4em] text-cyan-300">
            Sobre mí
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
            Desarrollo frontend con enfoque en{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              calidad real
            </span>
          </h2>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-lg leading-8 text-cyan-50/80"
          >
            <p className="text-center" >
              Soy desarrollador frontend especializado en React. Me enfoco en
              construir interfaces modernas, rápidas y bien estructuradas,
              trabajando con datos reales y lógica funcional.
            </p>

            <p className="text-center" >
              Me interesa crear productos que no solo se vean bien, sino que
              funcionen correctamente en escenarios reales: navegación fluida,
              manejo de estado, consumo de APIs y experiencia de usuario clara.
            </p>

             <p className="text-center" >
              Actualmente busco formar parte de un equipo donde pueda seguir
              creciendo y aportar valor desde el desarrollo frontend.
            </p>

            {/* FRASE DIFERENCIADORA */}
            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm text-cyan-200 font-semibold text-center">
                No busco solo hacer interfaces bonitas, busco construir
                aplicaciones que funcionen bien.
              </p>
            </div>
          </motion.div>

          {/* DERECHA */}
          <div className="space-y-8">

            {/* BLOQUES DE VALOR */}
            <div className="grid gap-4">
              {strengths.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10"
                >
                  <p className="text-lg font-black text-white text-center">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-cyan-50/70 text-center">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* STACK */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#020617]/70 p-6"
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] text-purple-300 mb-4 text-center">
                Stack principal
              </p>

              <div className="flex flex-wrap gap-3">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-50/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}