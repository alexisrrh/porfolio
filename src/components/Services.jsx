import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { localized } from "../utils/localized";

const tr = (es, en) => ({ es, en });

const servicesCopy = {
  titleLine: tr("Herramientas para construir", "Tools for building"),
  titleHighlight: tr("productos web.", "web products."),
  description: tr(
    "Trabajo con herramientas demostradas en mis proyectos: React para interfaz, Node.js y Python para APIs, Supabase/PostgreSQL para datos y Vercel/Render para despliegue.",
    "I work with tools demonstrated in my projects: React for interfaces, Node.js and Python for APIs, Supabase/PostgreSQL for data, and Vercel/Render for deployment.",
  ),
  callout: tr(
    "Este stack refleja experiencia práctica mediante proyectos: interfaces, autenticación, APIs, datos, integración con IA y despliegue.",
    "This stack reflects practical experience through projects: interfaces, authentication, APIs, data, AI integration, and deployment.",
  ),
};

const techGroups = [
  {
    number: "01",
    title: "Frontend",
    text: tr(
      "Interfaces React responsive, componentes reutilizables y estados de interfaz.",
      "Responsive React interfaces, reusable components, and interface states.",
    ),
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Context API",
    ],
  },
  {
    number: "02",
    title: "Backend",
    text: tr(
      "APIs y lógica de servidor para conectar productos con datos y autenticación.",
      "APIs and server logic to connect products with data and authentication.",
    ),
    tags: ["Node.js", "Express", "Python", "Flask", "APIs REST", "JWT"],
  },
  {
    number: "03",
    title: tr("Datos y servicios", "Data and services"),
    text: tr(
      "Persistencia, sesiones, autorización e integración con servicios externos.",
      "Persistence, sessions, authorization, and integration with external services.",
    ),
    tags: ["Supabase", "PostgreSQL", "MySQL", "SQL", "Google Gemini"],
  },
  {
    number: "04",
    title: tr("Herramientas y despliegue", "Tools and deployment"),
    text: tr(
      "Control de versiones, pruebas de APIs, publicación web y mobile.",
      "Version control, API testing, web publishing, and mobile deployment.",
    ),
    tags: ["Git", "GitHub", "Postman", "Vercel", "Render", "Capacitor"],
  },
];

export default function Services() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

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
            {t("technologies.eyebrow")}
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl text-center">
            {localized(servicesCopy.titleLine, language)}
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              {localized(servicesCopy.titleHighlight, language)}
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70 text-center">
            {localized(servicesCopy.description, language)}
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {techGroups.map((service) => (
            <motion.article
              key={localized(service.title, language)}
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
                    {localized(service.title, language)}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-cyan-50/70 text-center">
                    {localized(service.text, language)}
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
            {localized(servicesCopy.callout, language)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
