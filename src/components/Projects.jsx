import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
import priteca2Img from "../assets/priteca/priteca1.png";
import priteca3Img from "../assets/priteca/priteca2.png";
import priteca4Img from "../assets/priteca/priteca3.png";
import priteca5Img from "../assets/priteca/priteca4.png";

import panaderiaImg from "../assets/panaderia/panaderia1.png";
import panaderia2Img from "../assets/panaderia/panaderia2.png";
import panaderia3Img from "../assets/panaderia/panaderia3.png";
import panaderia4Img from "../assets/panaderia/panaderia4.png";
import panaderia5Img from "../assets/panaderia/panaderia5.png";

import groom1 from "../assets/groom/groom1.png";
import groom2 from "../assets/groom/groom2.png";
import groom3 from "../assets/groom/groom3.png";
import groom4 from "../assets/groom/groom4.png";
import groom5 from "../assets/groom/groom5.png";
import groom6 from "../assets/groom/groom6.png";
import groom7 from "../assets/groom/groom7.png";
import groom8 from "../assets/groom/groom8.png";
import groom9 from "../assets/groom/groom9.png";


const projects = [
{
  title: "The Real Groom",
  label: "Cliente real · Ecommerce",
  description:
    "Rediseño frontend de ecommerce de productos para mascotas, optimizando velocidad, experiencia de usuario y navegación.",
  result:
    "Mejora en rendimiento y experiencia visual, manteniendo backend en WordPress/WooCommerce.",
  tech: ["React", "Tailwind", "WooCommerce API", "UX/UI"],
  demo: "https://the-real-groom.vercel.app",
  code: "https://github.com/ultraxcode-com/the-real-groom",
  images: [groom1, groom2, groom3, groom4,groom5,groom6,groom7,groom8,groom9],
},

  {
    title: "VHSFlix",
    label: "Web App · API",
    description:
      "Plataforma tipo streaming con búsqueda, favoritos, categorías dinámicas y consumo de datos reales desde TMDB.",
    result: "Experiencia visual tipo Netflix con lógica real de frontend.",
    tech: ["React", "Tailwind", "TMDB API", "Context API"],
    demo: "https://vhsflix.vercel.app",
    code: "https://github.com/alexisrrh/proyecto-Peliculas",
    images: [homeImg, favoritosImg, imagenImg, trailerImg],
  },
  {
    title: "Sistema Odontológico",
    label: "Sistema real · Auth",
    description:
      "Sistema clínico con autenticación, roles, gestión de pacientes, citas, historial y panel médico.",
    result: "Flujo completo para paciente y doctor usando lógica de negocio real.",
    tech: ["React", "Supabase", "Tailwind", "React Router"],
    demo: "https://consultorio-odontologico-lac.vercel.app",
    code: "https://github.com/alexisrrh/consultorio-odontologico",
    images: [
      home2,
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
    label: "Landing · Negocio",
    description:
      "Web moderna para empresa de reformas y construcción, enfocada en presentación visual y conversión.",
    result: "Landing profesional para mostrar servicios y generar confianza.",
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "https://priteca-web.vercel.app/",
    code: "https://github.com/alexisrrh/priteca-web",
    images: [priteca1Img, priteca2Img, priteca5Img, priteca4Img, priteca3Img],
  },
  {
    title: "Panadería Ipanema",
    label: "Web comercial",
    description:
      "Página para panadería artesanal con diseño visual, secciones comerciales y contacto directo.",
    result: "Presencia online limpia, responsive y orientada al cliente final.",
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

function ProjectShowcase({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    if (!project.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.article
    initial={{ opacity: 0, y: 35 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.45, ease: "easeOut" }}
viewport={{ once: true, amount: 0.15 }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-cyan-300/15 bg-white/[0.07] p-4 shadow-[0_0_90px_rgba(34,211,238,0.09)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.18),transparent_30%)] opacity-70" />

      <motion.div
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
      />

      <div
        className={`relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Mockup */}
        <motion.div
          whileHover={{ rotate: isReverse ? -1.5 : 1.5, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-2xl opacity-80 transition group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617]/80 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs font-bold text-cyan-100/50">
                live-preview
              </span>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] md:h-[430px]">
              <img
                src={project.images[currentImage]}
                alt={project.title}
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">
                    Proyecto 0{index + 1}
                  </p>
                  <p className="mt-1 text-2xl font-black text-white">
                    {project.title}
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black backdrop-blur md:block">
                  Responsive
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {project.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImage(imgIndex)}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === imgIndex
                      ? "w-12 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Ver imagen ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <div className="relative p-2 lg:p-8">
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
            {project.label}
          </div>

          <h3 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-cyan-50/75">
            {project.description}
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-[#020617]/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300">
              Resultado
            </p>
            <p className="mt-3 text-base leading-7 text-cyan-50/80">
              {project.result}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-cyan-50/80 backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative overflow-hidden rounded-[1.6rem] p-[2px] transition hover:-translate-y-1 hover:scale-[1.03] active:scale-95"
            >
              <span className="absolute inset-0 rounded-[1.6rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] blur-md" />

              <span className="relative flex items-center justify-center gap-3 rounded-[1.6rem] bg-[#020617] px-7 py-4 font-black text-white shadow-[0_0_55px_rgba(34,211,238,0.35)]">
                Ver demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover/btn:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.6rem] border border-cyan-300/20 bg-white/10 px-7 py-4 text-center font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:scale-[1.03] hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              Ver código ↗
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.18),transparent_35%)]" />

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "140px 140px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:140px_140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            Proyectos seleccionados
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Interfaces reales.
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lógica real.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70 md:text-xl">
            Estos proyectos demuestran mi capacidad para crear productos
            visuales, responsive y funcionales usando React, APIs,
            autenticación, estados globales y despliegues reales.
          </p>
        </motion.div>

        <div className="space-y-14">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}