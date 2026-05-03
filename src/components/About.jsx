import { motion } from "framer-motion";
import fotoPerfil from "../assets/foto-perfil.jpeg";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-3xl font-black uppercase tracking-[0.4em] text-cyan-300">
            Mi enfoque
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Desarrollo frontend con enfoque en{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              calidad real
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/10 p-3 shadow-[0_30px_100px_rgba(34,211,238,0.14)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#020617]">
                <img
                  src={fotoPerfil}
                  alt="Foto de Alexis"
                  className="h-[430px] w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-2xl border border-cyan-300/20 bg-[#020617]/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    Open to work
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENIDO */}
          <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-8 text-cyan-50/80"
            >
              <p className="text-center">
                Soy desarrollador frontend especializado en React. Me enfoco en
                construir interfaces modernas, rápidas y bien estructuradas,
                trabajando con datos reales y lógica funcional.
              </p>

              <p className="text-center">
                Me interesa crear productos que no solo se vean bien, sino que
                funcionen correctamente en escenarios reales: navegación fluida,
                manejo de estado, consumo de APIs y experiencia de usuario clara.
              </p>

              <p className="text-center">
                Actualmente busco formar parte de un equipo donde pueda seguir
                creciendo y aportar valor desde el desarrollo frontend.
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-center">
                <p className="text-sm font-semibold text-cyan-200">
                  No busco solo hacer interfaces bonitas, busco construir
                  aplicaciones que funcionen bien.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="grid gap-4">
                {strengths.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    <p className="text-lg font-black text-white text-center">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-cyan-50/70 text-center">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-[1.5rem] border border-white/10 bg-[#020617]/70 p-5"
              >
                <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-purple-300 text-center">
                  Stack principal
                </p>

             <div className="flex flex-wrap justify-center gap-3 text-center">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}