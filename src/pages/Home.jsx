import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { FeaturedProjects } from "../components/Projects";

function CapabilitiesIntro() {
  const capabilities = [
    "Interfaces React responsive",
    "APIs con Node.js, Express, Python y Flask",
    "Autenticación, autorización y datos con Supabase",
    "IA, PostgreSQL, Vercel, Render y Capacitor",
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.14),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Capacidades Full Stack
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Frontend, backend, datos y despliegue.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center text-sm font-bold text-cyan-50/80 backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Alexis Rodríguez | Full Stack Developer"
        description="Portfolio de Alexis Rodriguez, Full Stack Developer con proyectos en React, Node.js, Python, Supabase, APIs REST e inteligencia artificial."
      />
      <Hero />
      <FeaturedProjects compact />
      <CapabilitiesIntro />
    </>
  );
}
