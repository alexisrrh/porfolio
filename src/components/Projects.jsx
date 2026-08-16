import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { featuredProjects, projects } from "../data/projects";
import { localized } from "../utils/localized";

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

function ProjectCard({ project, compact = false, featuredHover = false }) {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    document.visibilityState === "visible",
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
  const title = localized(project.title, language);
  const description = localized(project.description, language);

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
      className={`group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[1.7rem] border bg-white/[0.07] p-2.5 backdrop-blur-2xl transition-[transform,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.99] md:rounded-[2rem] ${
        isMainProject
          ? "border-cyan-300/35 shadow-[0_0_70px_rgba(34,211,238,0.14)]"
          : "border-cyan-300/15 shadow-[0_0_60px_rgba(34,211,238,0.08)]"
      } ${
        featuredHover
          ? "md:hover:z-20 md:hover:-translate-y-1.5 md:hover:scale-[1.02] md:hover:border-cyan-200/35 md:hover:bg-white/[0.095] md:hover:shadow-[0_18px_54px_rgba(34,211,238,0.16),0_10px_38px_rgba(168,85,247,0.10)] md:focus-within:z-20 md:focus-within:-translate-y-1.5 md:focus-within:scale-[1.02] md:focus-within:border-cyan-200/35 md:focus-within:bg-white/[0.095] md:focus-within:shadow-[0_18px_54px_rgba(34,211,238,0.16),0_10px_38px_rgba(168,85,247,0.10)]"
          : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.14),transparent_30%)] opacity-70 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          featuredHover ? "md:group-hover:opacity-100 md:group-focus-within:opacity-100" : ""
        }`}
      />

      <div className="relative flex h-full min-w-0 flex-col gap-3">
        <div className="relative aspect-[16/9] min-w-0 shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#020617]/80">
          <img
            src={activeImage?.src}
            alt={
              localized(activeImage?.alt, language) ||
              t("projects.previewAlt", { title })
            }
            loading="lazy"
            decoding="async"
            className={`h-full w-full transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              featuredHover ? "md:group-hover:scale-[1.02] md:group-focus-within:scale-[1.02]" : "group-hover:scale-[1.03]"
            }`}
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
                aria-label={t("projects.previousImage", { title })}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#020617]/75 text-lg font-black text-white shadow-lg backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex"
                aria-label={t("projects.nextImage", { title })}
              >
                ›
              </button>

              <div
                className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#020617]/75 px-2.5 py-2 backdrop-blur sm:bottom-4 sm:left-auto sm:right-4"
                role="group"
                aria-label={t("projects.imagesOf", { title })}
              >
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black text-white transition hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:hidden"
                  aria-label={t("projects.previousImage", { title })}
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
                    aria-label={t("projects.viewImage", {
                      count: index + 1,
                      title,
                    })}
                    aria-current={currentImage === index ? "true" : undefined}
                  />
                ))}

                <button
                  type="button"
                  onClick={showNextImage}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black text-white transition hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:hidden"
                  aria-label={t("projects.nextImage", { title })}
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
                {localized(project.label, language)}
              </p>
            )}
          </div>

          <h3 className="mx-auto flex min-h-14 max-w-[22rem] items-center justify-center text-2xl font-black leading-tight tracking-[-0.03em] text-white">
            {title}
          </h3>

          <p className="mx-auto max-w-[42rem] text-[15px] leading-[1.6] text-cyan-50/72 md:text-base">
            {description}
          </p>

          <div className="space-y-1.5">
            <div className="flex flex-wrap content-start items-start justify-center gap-1.5">
              {visibleTech.map((tech) => (
                <span
                  key={localized(tech, language)}
                  className="rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-black text-cyan-50/78"
                >
                  {localized(tech, language)}
                </span>
              ))}
            </div>
            {remainingTechCount > 0 && (
              <div className="flex justify-center">
                <span
                  className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1.5 text-[10px] font-black text-cyan-100"
                  aria-label={t("projects.additionalTechAria", {
                    count: remainingTechCount,
                  })}
                >
                  {t("projects.additionalTech", {
                    count: remainingTechCount,
                  })}
                </span>
              </div>
            )}
          </div>

          {visibleProof.length > 0 && (
            <div className="px-2 py-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300/80">
                {t("projects.capabilities")}
              </p>
              <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                {visibleProof.map((item) => (
                  <span
                    key={localized(item, language)}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold text-cyan-50/62"
                  >
                    {localized(item, language)}
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
                {t("projects.caseStudy")}
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
                {t("projects.code")}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects({ compact = false }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-24 text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.18),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            {t("home.featuredEyebrow")}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            {t("home.featuredTitle")}
          </h2>
        </div>

        <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact={compact} featuredHover />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sortedProjects = [
    ...featuredProjects,
    ...projects.filter((project) => !project.featured),
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-24 text-white sm:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.18),transparent_35%)]" />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "140px 140px"] }
        }
        transition={
          shouldReduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }
        }
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:140px_140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            {t("projects.eyebrow")}
          </p>
          <h1 className="mx-auto mt-5 max-w-[20rem] text-2xl font-black leading-[1.08] tracking-[-0.02em] sm:max-w-4xl sm:text-4xl md:text-6xl md:leading-[0.95] md:tracking-[-0.04em]">
            {t("projects.title")}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70">
            {t("projects.description")}
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
