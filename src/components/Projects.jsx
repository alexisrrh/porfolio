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
    images: [
      groom1,
      groom2,
      groom3,
      groom4,
      groom5,
      groom6,
      groom7,
      groom8,
      groom9,
    ],
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
  if (!project.images?.length || project.images.length === 1) return;

  const isMobile = window.innerWidth < 768;

  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }, isMobile ? 3000 : 3000);

  return () => clearInterval(interval);
}, [project.images]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.08 }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-cyan-300/15 bg-white/[0.07] p-3 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-2xl md:rounded-[2.5rem] md:p-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.14),transparent_30%)] opacity-70" />

      <motion.div
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 left-0 hidden w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl md:block"
      />

      <div
        className={`relative grid items-center gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          whileHover={{ rotate: isReverse ? -1.5 : 1.5, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-purple-500/15 blur-2xl opacity-70 transition group-hover:opacity-100 md:-inset-4 md:rounded-[2.5rem]" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#020617]/80 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:rounded-[2rem] md:p-3 md:shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
            <div className="mb-2 flex items-center justify-between px-2 md:mb-3">
              <div className="flex gap-1.5 md:gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 md:h-3 md:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 md:h-3 md:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 md:h-3 md:w-3" />
              </div>

              <span className="text-[10px] font-bold text-cyan-100/50 md:text-xs">
                live-preview
              </span>
            </div>

            <div className="relative h-[190px] overflow-hidden rounded-[1.2rem] sm:h-[240px] md:h-[430px] md:rounded-[1.5rem]">
              <img
                src={project.images[currentImage]}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 md:bottom-5 md:left-5 md:right-5 md:items-center md:gap-4">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] text-cyan-200 md:text-xs md:tracking-[0.3em]">
                    Proyecto 0{index + 1}
                  </p>
                  <p className="mt-0.5 text-lg font-black text-white md:mt-1 md:text-2xl">
                    {project.title}
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black backdrop-blur md:block">
                  Responsive
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-center gap-1.5 md:mt-4 md:gap-2">
              {project.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImage(imgIndex)}
                  className={`h-1.5 rounded-full transition-all md:h-2 ${
                    currentImage === imgIndex
                      ? "w-8 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)] md:w-12"
                      : "w-1.5 bg-white/30 hover:bg-white/60 md:w-2"
                  }`}
                  aria-label={`Ver imagen ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative p-3 text-center sm:p-5 lg:p-8">
          <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200 sm:text-[10px] md:mb-6 md:px-4 md:py-2 md:text-xs md:tracking-[0.25em]">
            {project.label}
          </div>

          <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-white sm:text-3xl md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-cyan-50/75 sm:text-base md:mt-6 md:text-lg md:leading-8">
            {project.description}
          </p>

          <div className="mt-7 hidden rounded-[1.5rem] border border-white/10 bg-[#020617]/70 p-5 text-center md:block">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300">
              Resultado
            </p>
            <p className="mt-3 text-base leading-7 text-cyan-50/80">
              {project.result}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 md:mt-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-black text-cyan-50/80 backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10 sm:text-xs md:rounded-2xl md:px-4 md:py-2"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative overflow-hidden rounded-[1.3rem] p-[2px] transition hover:-translate-y-1 hover:scale-[1.03] active:scale-95 md:rounded-[1.6rem]"
            >
              <span className="absolute inset-0 rounded-[1.3rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] blur-md md:rounded-[1.6rem]" />

              <span className="relative flex items-center justify-center gap-2 rounded-[1.3rem] bg-[#020617] px-3 py-3 text-xs font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.25)] sm:px-5 sm:text-sm md:gap-3 md:rounded-[1.6rem] md:px-7 md:py-4 md:text-base">
                Ver demo
                <span className="hidden h-7 w-7 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover/btn:translate-x-1 sm:flex md:h-8 md:w-8">
                  →
                </span>
              </span>
            </a>

            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative overflow-hidden rounded-[1.3rem] p-[2px] transition hover:-translate-y-1 hover:scale-[1.03] active:scale-95 md:rounded-[1.6rem]"
            >
              <span className="absolute inset-0 rounded-[1.3rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] blur-md md:rounded-[1.6rem]" />

              <span className="relative flex items-center justify-center gap-2 rounded-[1.3rem] bg-[#020617] px-3 py-3 text-xs font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.25)] sm:px-5 sm:text-sm md:gap-3 md:rounded-[1.6rem] md:px-7 md:py-4 md:text-base">
                Ver código
                <span className="hidden h-7 w-7 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover/btn:translate-x-1 sm:flex md:h-8 md:w-8">
                  →
                </span>
              </span>
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
      className="relative overflow-hidden bg-[#020617] px-4 py-24 text-white sm:px-6 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.18),transparent_35%)]" />

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "140px 140px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:140px_140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.08 }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-20"
        >
          <p className="text-3xl font-black uppercase tracking-[0.32em] text-cyan-300 md:text-sm md:tracking-[0.4em]">
            Proyectos seleccionados
          </p>

          <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.05em] md:mt-5 md:text-7xl md:leading-[0.95] md:tracking-[-0.06em]">
            Interfaces reales.
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lógica real.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-cyan-50/70 sm:text-base md:mt-7 md:text-xl md:leading-8">
            Estos proyectos demuestran mi capacidad para crear productos
            visuales, responsive y funcionales usando React, APIs,
            autenticación, estados globales y despliegues reales.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-14">
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