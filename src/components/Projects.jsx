import { useEffect, useState } from "react";

import homeImg from "../assets/home.png";
import favoritosImg from "../assets/favoritos.png";
import imagenImg from "../assets/imagen.png";
import trailerImg from "../assets/trailer.png";

import agendarImg from "../assets/odontologia/agendarImg.png";
import calendarioImg from "../assets/odontologia/calendario-citas.png";
import dashboardImg from "../assets/odontologia/dashboard.png";
import home4 from "../assets/odontologia/home4.png";
import home1 from "../assets/odontologia/home1.png";
import home3 from "../assets/odontologia/home3.png";
import homeHorariosImg from "../assets/odontologia/home-horarios.png";
import loginImg from "../assets/odontologia/login.png";

import home2 from "../assets/odontologia/home2.png";

import priteca1Img from "../assets/priteca/priteca.png";
import priteca2Img from "../assets/priteca/priteca1.png"
import priteca3Img from "../assets/priteca/priteca2.png"
import priteca4Img from "../assets/priteca/priteca3.png"
import priteca5Img from "../assets/priteca/priteca4.png"
import panaderiaImg from "../assets/panaderia/panaderia1.png";
import panaderia2Img from "../assets/panaderia/panaderia2.png";
import panaderia3Img from "../assets/panaderia/panaderia3.png";
import panaderia4Img from "../assets/panaderia/panaderia4.png";
import panaderia5Img from "../assets/panaderia/panaderia5.png";

const projects = [
  {
    title: "App tipo Netflix",
    description:
      "Plataforma web inspirada en streaming con búsqueda de películas, consumo de API externa y una interfaz visual moderna.",
    tech: ["React", "Tailwind", "TMDB API", "Context API"],
    demo: "https://vhsflix.vercel.app",
    code: "https://github.com/alexisrrh/proyecto-Peliculas",
    images: [homeImg, favoritosImg, imagenImg, trailerImg],
  },
  {
    title: "Sistema odontológico",
    description:
      "Sistema completo para gestión de pacientes, citas y autenticación, con lógica real de negocio y panel profesional.",
    tech: ["React", "Supabase", "Tailwind", "React Router"],
    demo: "https://consultorio-odontologico-lac.vercel.app",
    code: "https://github.com/alexisrrh/consultorio-odontologico",
    images: [home2,
      home3,
      home4,
      home1,
      loginImg,
      dashboardImg,
      calendarioImg,
      agendarImg,
      
      homeHorariosImg,
    ],
  },
  {
  title: "Constructora Priteca",
  description:
    "Sitio web moderno para empresa de reformas y construcción, con enfoque en conversión de clientes y diseño profesional.",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
   tech: ["React", "Tailwind", "Framer Motion"],
  demo: "https://priteca-web.vercel.app/",
  code: "https://github.com/alexisrrh/priteca-web",
  images:[
    priteca1Img,
    priteca2Img,
    priteca5Img,
    priteca4Img,
    priteca3Img]
},
  {
    title: "Panadería Ipanema",
    description:
      "Web profesional para una panadería artesanal, enfocada en conversión de clientes mediante diseño atractivo, navegación clara y contacto directo con WhatsApp.",
    tech: ["React", "Tailwind", "React Router"],
    demo: "https://panaderia-peach.vercel.app/",
    code: "https://github.com/alexisrrh/panaderia-web.git",
    images: [
      panaderiaImg,
      panaderia2Img,
      panaderia3Img,
      panaderia4Img,
      panaderia5Img,
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
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500/40">
      {project.images?.length ? (
        <div className="relative h-72 overflow-hidden md:h-80">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/10" />

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
        <div className="h-72 bg-gradient-to-br from-red-600/20 via-zinc-900 to-blue-600/20 md:h-80" />
      )}

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
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
        <div className="mb-12 text-center">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-red-400">
            Portfolio
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-3 text-center text-sm font-bold md:text-2xl">
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