import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title="Página no encontrada | Alexis Rodríguez"
        description="Página no encontrada en el portfolio de Alexis Rodriguez."
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.2),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
          404
        </p>
        <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-cyan-50/70">
          La ruta solicitada no existe en este portfolio.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-[#020617] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            Volver al inicio
          </Link>
          <Link
            to="/projects"
            className="rounded-2xl border border-cyan-300/20 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
