import { useEffect, useState } from "react";

import homeImg from "../assets/home.png";
import searchImg from "../assets/busqueda.png";
import favImg from "../assets/favoritos.png";
import trailerImg from "../assets/trailer.png";

import agendarImg from "../assets/odontologia/agendarImg.png";
import calendarioImg from "../assets/odontologia/calendario-citas.png";
import dashboardImg from "../assets/odontologia/dashboard.png";
import home1Img from "../assets/odontologia/home-3.png";
import homecomentariosImg from "../assets/odontologia/home-comentarios.png";
import homeFotosImg from "../assets/odontologia/home-fotos.png";
import homeHorariosImg from "../assets/odontologia/home-horarios.png";
import loginImg from "../assets/odontologia/login.png";
import miscitasImg from "../assets/odontologia/mis-citas.png";
import presupuestoImg from "../assets/odontologia/presupuesto.png";
import tratamientosImg from "../assets/odontologia/tratamientos.png";

const projects = [
  {
    title: "App tipo Netflix",
    description:
      "Plataforma web inspirada en streaming con búsqueda de películas, consumo de API externa y una interfaz visual moderna.",
    tech: ["React", "Tailwind", "TMDB API", "Context API"],
    demo: "https://vhsflix.vercel.app",
    code: "https://github.com/alexisrrh/proyecto-Peliculas",
    images: [homeImg, searchImg, favImg, trailerImg],
  },
  {
    title: "Sistema odontológico",
    description:
      "Sistema completo para gestión de pacientes, citas y autenticación, con lógica real de negocio y panel profesional.",
    tech: ["React", "Supabase", "Tailwind", "React Router"],
    demo: "https://consultorio-odontologico-lac.vercel.app",
    code: "https://github.com/alexisrrh/consultorio-odontologico",
    images: [
      loginImg,
      dashboardImg,
      calendarioImg,
      agendarImg,
      miscitasImg,
      presupuestoImg,
      tratamientosImg,
      home1Img,
      homecomentariosImg,
      homeFotosImg,
      homeHorariosImg,
    ],
  },
];

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images?.length || project.images.length === 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-red-500/30">
      {project.images?.length ? (
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentImage ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-56 bg-gradient-to-br from-red-600/20 via-zinc-900 to-blue-600/20" />
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-500"
          >
            Ver demo
          </a>

          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 font-medium text-white transition hover:bg-white/5"
          >
            Ver código
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Estos proyectos muestran mi experiencia creando interfaces reales,
            conectando datos externos y resolviendo necesidades concretas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}