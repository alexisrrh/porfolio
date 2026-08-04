import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredProjects, projects } from "../data/projects";

const carouselIntervalMs = 1700;

const projectButtonBase =
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl px-3 py-2.5 text-xs font-black leading-none transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 active:scale-[0.98] sm:px-4";

const projectButtonPrimary = `${projectButtonBase} bg-cyan-300 text-[#020617] shadow-[0_0_28px_rgba(34,211,238,0.28)] hover:bg-cyan-200 focus-visible:ring-cyan-200`;

const projectButtonSecondary = `${projectButtonBase} border border-cyan-300/20 bg-white/10 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10 focus-visible:ring-cyan-300`;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function ProjectCard({ project, compact = false }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    () => document.visibilityState === "visible",
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const images = project.images ?? [];
  const imageCount = images.length;
  const activeImage = images[currentImage] ?? images[0];
  const canRotate = imageCount > 1 && !prefersReducedMotion;
  const visibleTechCount = Math.min(project.visibleTechCount ?? 4, 4);
  const visibleTech = project.tech.slice(0, compact ? 4 : visibleTechCount);
  const remainingTechCount = project.tech.length - visibleTech.length;
  const visibleProof = project.proof?.slice(0, 3) ?? [];
  const isMainProject = project.slug === "nutrismart-coach";

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!canRotate || isPaused || !isDocumentVisible) return undefined;

    const intervalId = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageCount);
    }, carouselIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [canRotate, imageCount, isDocumentVisible, isPaused]);

  const showControls = imageCount > 1;

  const showPreviousImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const showNextImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % imageCount);
  };

  const showImage = (index) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentImage(index);
  };

  return (
    <motion.article
      initial={false}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      className={`group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[1.7rem] border bg-white/[0.07] p-2.5 backdrop-blur-2xl md:rounded-[2rem] ${
        isMainProject
          ? "border-cyan-300/35 shadow-[0_0_70px_rgba(34,211,238,0.14)]"
          : "border-cyan-300/15 shadow-[0_0_60px_rgba(34,211,238,0.08)]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.14),transparent_30%)] opacity-70" />

      <div className="relative flex h-full min-w-0 flex-col gap-3">
        <div className="relative aspect-[16/9] min-w-0 shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#020617]/80">
          <img
            src={activeImage?.src}
            alt={activeImage?.alt ?? `Vista previa de ${project.title}`}
            loading="lazy"
            className="h-full w-full transition duration-500 group-hover:scale-[1.03]"
            style={{
              objectFit: activeImage?.fit ?? "cover",
              objectPosition: activeImage?.position ?? "top",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

          {showControls && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#020617]/75 text-lg font-black text-white shadow-lg backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex"
                aria-label={`Imagen anterior de ${project.title}`}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#020617]/75 text-lg font-black text-white shadow-lg backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex"
                aria-label={`Imagen siguiente de ${project.title}`}
              >
                ›
              </button>

              <div
                className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#020617]/75 px-2.5 py-2 backdrop-blur sm:bottom-4 sm:left-auto sm:right-4"
                aria-label={`Imágenes de ${project.title}`}
              >
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black text-white transition hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:hidden"
                  aria-label={`Imagen anterior de ${project.title}`}
                >
                  ‹
                </button>

                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={showImage(index)}
                    className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                      currentImage === index
                        ? "w-7 bg-cyan-300"
                        : "w-2 bg-white/45 hover:bg-white/80"
                    }`}
                    aria-label={`Ver imagen ${index + 1} de ${project.title}`}
                    aria-current={currentImage === index ? "true" : undefined}
                  />
                ))}

                <button
                  type="button"
                  onClick={showNextImage}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black text-white transition hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:hidden"
                  aria-label={`Imagen siguiente de ${project.title}`}
                >
                  ›
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex h-full min-w-0 flex-col gap-2 px-3 py-2 text-center">
          <div className="flex min-h-7 items-start justify-center">
            {isMainProject && (
              <p className="inline-flex max-w-full items-center justify-center rounded-full border border-cyan-200/45 bg-cyan-300/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100">
                {project.label}
              </p>
            )}
          </div>

          <h3 className="mx-auto flex min-h-14 max-w-[22rem] items-center justify-center text-2xl font-black leading-tight tracking-[-0.03em] text-white">
            {project.title}
          </h3>

          <p className="mx-auto max-w-[42rem] text-sm leading-[1.55] text-cyan-50/72">
            {project.description}
          </p>

          <div className="space-y-1.5">
            <div className="flex flex-wrap content-start items-start justify-center gap-1.5">
              {visibleTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-black text-cyan-50/78"
                >
                  {tech}
                </span>
              ))}
            </div>
            {remainingTechCount > 0 && (
              <div className="flex justify-center">
                <span
                  className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1.5 text-[10px] font-black text-cyan-100"
                  aria-label={`${remainingTechCount} tecnologías adicionales`}
                >
                  +{remainingTechCount} tecnologías
                </span>
              </div>
            )}
          </div>

          {visibleProof.length > 0 && (
            <div className="px-2 py-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300/80">
                Capacidades
              </p>
              <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                {visibleProof.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold text-cyan-50/62"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

       <div
  className={`mt-auto grid gap-1.5 ${
    project.caseStudyPath ? "grid-cols-3" : "grid-cols-2"
  }`}
>
            {project.caseStudyPath && (
              <Link
                to={project.caseStudyPath}
                className={projectButtonPrimary}
              >
                Caso de estudio
              </Link>
            )}

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={projectButtonSecondary}
            >
              Demo
            </a>

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={projectButtonSecondary}>
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects({ compact = false }) {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-24 text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.18),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Proyectos destacados
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Productos construidos con React, APIs y datos.
          </h2>
        </div>

        <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact={compact} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  const sortedProjects = [
    ...featuredProjects,
    ...projects.filter((project) => !project.featured),
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-24 text-white sm:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.18),transparent_35%)]" />

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "140px 140px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:140px_140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            Proyectos
          </p>
          <h1 className="mx-auto mt-5 max-w-[20rem] text-2xl font-black leading-[1.08] tracking-[-0.02em] sm:max-w-4xl sm:text-4xl md:text-6xl md:leading-[0.95] md:tracking-[-0.04em]">
            Productos desarrollados con frontend, backend y datos.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70">
            Cada proyecto resume qué necesidad aborda, qué tipo de producto es
            y qué tecnologías principales utiliza. Los destacados enlazan a
            casos de estudio internos.
          </p>
        </div>

        <div className="grid min-w-0 items-stretch gap-7 lg:grid-cols-2">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
