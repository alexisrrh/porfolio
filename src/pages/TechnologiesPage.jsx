import Seo from "../components/Seo";

const techGroups = [
  {
    title: "Frontend",
    items: [
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
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Flask", "APIs REST", "JWT"],
  },
  {
    title: "Datos y servicios",
    items: ["Supabase", "PostgreSQL", "MySQL", "SQL", "Google Gemini"],
  },
  {
    title: "Herramientas y despliegue",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Capacitor"],
  },
];

export default function TechnologiesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title="Tecnologías | Alexis Rodríguez"
        description="Stack de Alexis Rodriguez: React, Node.js, Python, Supabase, PostgreSQL, APIs REST, Google Gemini, Vercel, Render y Capacitor."
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            Tecnologías
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Herramientas con las que construyo.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70">
            React · Node.js · Python · Supabase como stack principal, con
            herramientas para frontend, backend, datos, APIs, despliegue y
            aplicaciones móviles.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {techGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-200">
                  0{index + 1}
                </span>
                <h2 className="text-2xl font-black text-white">
                  {group.title}
                </h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-cyan-50/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
