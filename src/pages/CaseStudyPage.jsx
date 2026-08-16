import { lazy, Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import { getProjectBySlug } from "../data/projects";
import { localized } from "../utils/localized";

const ConsultorioLacCaseStudy = lazy(() => import("./ConsultorioLacCaseStudy"));
const NutriSmartCaseStudy = lazy(() => import("./NutriSmartCaseStudy"));
const VHSFlixCaseStudy = lazy(() => import("./VHSFlixCaseStudy"));

function CaseStudyFallback() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-[#020617] px-6 py-32 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 text-cyan-100/70">
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
        <span className="text-xs font-black uppercase tracking-[0.32em]">{t("common.loading")}</span>
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const heroImage = project?.images?.[0];
  const projectTitle = localized(project?.title, language);

  if (slug === "nutrismart-coach") {
    return (
      <Suspense fallback={<CaseStudyFallback />}>
        <NutriSmartCaseStudy />
      </Suspense>
    );
  }

  if (slug === "consultorio-lac") {
    return (
      <Suspense fallback={<CaseStudyFallback />}>
        <ConsultorioLacCaseStudy />
      </Suspense>
    );
  }

  if (slug === "vhsflix") {
    return (
      <Suspense fallback={<CaseStudyFallback />}>
        <VHSFlixCaseStudy />
      </Suspense>
    );
  }

  if (!project?.caseStudyPath) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title={{
          es: `${projectTitle} | Caso de estudio`,
          en: `${projectTitle} | Case study`,
        }}
        description={{
          es: `Caso de estudio inicial de ${projectTitle}, proyecto de Alexis Rodriguez.`,
          en: `Initial case study for ${projectTitle}, a project by Alexis Rodriguez.`,
        }}
        canonicalPath={`/projects/${slug}`}
        image={heroImage?.src}
        type="article"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.2),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          to="/projects"
          className="inline-flex rounded-2xl border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          ← {t("caseStudy.backToProjects")}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              {t("caseStudy.caseStudy")}
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
              {projectTitle}
            </h1>
            <p className="mt-7 text-lg leading-8 text-cyan-50/75">
              {localized(project.description, language)}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/10 p-3 shadow-[0_30px_100px_rgba(34,211,238,0.12)] backdrop-blur-xl">
            <img
              src={heroImage.src}
              alt={
                localized(heroImage.alt, language) ||
                t("projects.previewAlt", { title: projectTitle })
              }
              className="h-72 w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={localized(tech, language)}
              className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-black text-cyan-50/80"
            >
              {localized(tech, language)}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#020617] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            {t("caseStudy.viewDemo")}
          </a>
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:border-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {t("caseStudy.viewRepository")}
            </a>
          )}
        </div>

        <div className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              {t("caseStudy.index")}
            </p>
            <p className="mt-4 text-sm leading-6 text-cyan-50/60">
              {t("caseStudy.indexDescription")}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t("caseStudy.futureSections", { returnObjects: true }).map((section) => (
            <article
              key={section}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <h2 className="text-xl font-black text-white">{section}</h2>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
