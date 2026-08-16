import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import Seo from "../components/Seo";
import { localized } from "../utils/localized";
import {
  architectureFlow,
  featureCards,
  lacFacts,
  lacImages,
  lacProblem,
  lacSolution,
  lacTech,
  learnings,
  mainFlow,
  roadmap,
  roleExperiences,
  secondaryScreens,
  technicalChallenges,
  technicalDecisions,
} from "../data/consultorioLacCaseStudy";
import { getProjectBySlug } from "../data/projects";

const sectionClass = "scroll-mt-28";
const shellClass =
  "rounded-[1.5rem] border border-emerald-200/12 bg-white/[0.055] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl";
const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-emerald-300 text-[#03140f] hover:bg-emerald-200 focus-visible:ring-emerald-200`;
const secondaryButton = `${buttonBase} border border-emerald-200/20 bg-white/10 text-white hover:border-emerald-200/55 hover:bg-emerald-200/10 focus-visible:ring-emerald-200`;

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-200">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-200/75">
          {children}
        </div>
      )}
    </div>
  );
}

function TextBlock({ paragraphs }) {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  return (
    <div className="space-y-5 text-base leading-8 text-slate-200/75">
      {paragraphs.map((paragraph) => (
        <p key={localized(paragraph, language)}>
          {localized(paragraph, language)}
        </p>
      ))}
    </div>
  );
}

function StudyImage({
  image,
  className = "",
  loading = "lazy",
  compact = false,
  hover = false,
  fixedFrame = false,
}) {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  return (
    <figure
      className={`mx-auto w-full overflow-hidden rounded-[1.5rem] border border-emerald-200/12 bg-[#07130f]/88 shadow-[0_18px_54px_rgba(2,6,23,0.24)] ${
        fixedFrame ? "aspect-[16/9] h-full" : ""
      } ${
        compact ? "p-1.5 md:p-2" : "p-3"
      } ${
        hover
          ? "motion-safe:transition motion-safe:duration-300 motion-safe:hover:scale-[1.03] hover:border-emerald-200/35 hover:shadow-[0_24px_70px_rgba(16,185,129,0.12)]"
          : ""
      } ${className}`}
    >
      <img
        src={image.src}
        alt={localized(image.alt, language)}
        loading={loading}
        decoding={loading === "lazy" ? "async" : undefined}
        width={image.width}
        height={image.height}
        className={`block w-full rounded-[1.1rem] ${
          fixedFrame ? "h-full" : "h-auto"
        }`}
        style={{
          objectFit: image.fit ?? "contain",
          objectPosition: fixedFrame ? "center" : image.position ?? "top",
        }}
      />
    </figure>
  );
}

function TechChip({ item }) {
  const Icon = item.icon;

  return (
    <span className="inline-flex min-h-10 items-center gap-2 rounded-2xl border border-emerald-200/14 bg-emerald-200/8 px-3 py-2 text-xs font-black text-emerald-50/88">
      <Icon className="h-4 w-4 text-emerald-200" aria-hidden="true" />
      {item.name}
    </span>
  );
}

function ExternalIcon() {
  return <FaExternalLinkAlt className="ml-2 h-3.5 w-3.5" aria-hidden="true" />;
}

export default function ConsultorioLacCaseStudy() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const project = getProjectBySlug("consultorio-lac");

  return (
    <main className="relative overflow-hidden bg-[#020617] text-white">
      <Seo
        title={{
          es: "Consultorio OdontolÃ³gico LAC | Caso de estudio",
          en: "Consultorio OdontolÃ³gico LAC | Case study",
        }}
        description={{
          es: "Caso de estudio de Consultorio OdontolÃ³gico LAC, sistema web de gestiÃ³n clÃ­nica con React, Vite, React Router, Context API, Supabase Auth y Supabase Database.",
          en: "Case study for Consultorio OdontolÃ³gico LAC, a clinical management web system with React, Vite, React Router, Context API, Supabase Auth, and Supabase Database.",
        }}
        canonicalPath="/projects/consultorio-lac"
        image={lacImages.hero.src}
        type="article"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(20,184,166,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0),rgba(6,18,15,0.78)_55%,rgba(2,6,23,1))]" />

      <section className="relative z-10 px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <Link to="/projects" className={secondaryButton}>
            {t("caseStudy.backToProjects")}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.04fr] lg:items-center xl:gap-16">
            <div>
              <p className="inline-flex rounded-full border border-emerald-200/25 bg-emerald-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-100">
                {t("lac.badge")}
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Consultorio OdontolÃ³gico LAC
              </h1>
              <p className="mt-6 text-xl font-bold leading-8 text-emerald-50/88">
                {t("lac.subtitle")}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {lacTech.map((tech) => (
                  <TechChip key={tech.name} item={tech} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryButton}
                  aria-label={t("caseStudy.openDemo", {
                    title: "Consultorio OdontolÃ³gico LAC",
                  })}
                >
                  {t("caseStudy.viewDemo")}
                  <ExternalIcon />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryButton}
                    aria-label={t("caseStudy.openRepository", {
                      title: "Consultorio OdontolÃ³gico LAC",
                    })}
                  >
                    {t("caseStudy.viewCode")}
                    <ExternalIcon />
                  </a>
                )}
                <Link to="/projects" className={secondaryButton}>
                  {t("caseStudy.backToProjects")}
                </Link>
              </div>
            </div>

            <StudyImage
              image={lacImages.hero}
              loading="eager"
            />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {lacFacts.map((fact) => (
              <article key={localized(fact.label, language)} className={shellClass}>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                  {localized(fact.label, language)}
                </p>
                <p className="mt-3 text-sm font-bold leading-6 text-slate-100/88">
                  {localized(fact.value, language)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="problema" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("caseStudy.problem")}
              title={t("lac.problemTitle")}
            />
            <div className="mt-7">
              <TextBlock paragraphs={lacProblem} />
            </div>
          </div>
          <StudyImage image={lacImages.problem} />
        </div>
      </section>

      <section id="solucion" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:gap-16">
          <StudyImage image={lacImages.solution} />
          <div>
            <SectionHeading
              eyebrow={t("caseStudy.solution")}
              title={t("lac.solutionTitle")}
            />
            <div className="mt-7">
              <TextBlock paragraphs={lacSolution} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("lac.roles")}
            title={t("lac.rolesTitle")}
          />

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
            {roleExperiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article
                  key={localized(experience.role, language)}
                  className={`${shellClass} grid h-full grid-rows-[auto_auto_auto]`}
                >
                  <div className="flex items-start gap-4 lg:min-h-[7.5rem]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/20 bg-emerald-200/10 text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-black text-white">
                        {localized(experience.role, language)}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-200/70">
                        {localized(experience.description, language)}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 grid content-start gap-2 sm:grid-cols-2 lg:min-h-[11.5rem]">
                    {experience.items.map((item) => (
                      <li
                        key={localized(item, language)}
                        className="flex min-h-11 items-center rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-bold text-slate-100/82"
                      >
                        {localized(item, language)}
                      </li>
                    ))}
                  </ul>

                  <StudyImage
                    image={experience.image}
                    className="mt-6 self-end"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("lac.mainFlow")}
            title={t("lac.mainFlowTitle")}
          />

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-emerald-200/12 bg-[#07130f]/72 p-5">
            <ol className="grid gap-3 md:grid-cols-4">
              {mainFlow.map((step, index) => (
                <li
                  key={localized(step, language)}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-black text-white">{localized(step, language)}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {secondaryScreens.map((image) => (
              <StudyImage
                key={localized(image.alt, language)}
                image={image}
                compact
                hover
                fixedFrame
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("lac.features")}
            title={t("lac.featuresTitle")}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={localized(feature.title, language)} className={shellClass}>
                  <Icon className="h-7 w-7 text-emerald-200" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {localized(feature.title, language)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200/70">
                    {localized(feature.text, language)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="arquitectura" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("caseStudy.architecture")}
            title={t("lac.architectureTitle")}
          />

          <div className="mt-8 rounded-[1.5rem] border border-emerald-200/12 bg-[#07130f]/78 p-5 md:p-8">
            <div
              className="grid gap-3 text-center"
              aria-label={t("lac.architectureAria")}
            >
              {architectureFlow.map((node, index) => (
                <div key={`${localized(node, language)}-${index}`}>
                  <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-black text-slate-50/88">
                    {localized(node, language)}
                  </div>
                  {index < architectureFlow.length - 1 && (
                    <div
                      className="mx-auto h-7 w-px bg-emerald-200/28"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-200/70">
              {t("lac.architectureDescription")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("caseStudy.technicalDecisions")}
            title={t("lac.decisionsTitle")}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {technicalDecisions.map((decision) => {
              const Icon = decision.icon;

              return (
                <article key={localized(decision.name, language)} className={shellClass}>
                  <Icon className="h-8 w-8 text-emerald-200" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {localized(decision.name, language)}
                  </h3>
                  <p className="mt-3 text-sm font-black text-emerald-50/88">
                    {localized(decision.decision, language)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200/68">
                    {localized(decision.reason, language)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="retos" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("caseStudy.technicalChallenges")}
            title={t("lac.challengesTitle")}
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {technicalChallenges.map((item) => (
              <article key={localized(item.challenge, language)} className={shellClass}>
                <h3 className="text-xl font-black text-white">
                  {localized(item.challenge, language)}
                </h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                  {t("caseStudy.approach")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/72">
                  {localized(item.approach, language)}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-teal-100">
                  {t("caseStudy.observableResult")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/72">
                  {localized(item.result, language)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aprendizajes" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={t("caseStudy.learnings")}
            title={t("lac.learningsTitle")}
          />
          <div className={shellClass}>
            <TextBlock paragraphs={learnings} />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("lac.future")}
            title={t("lac.futureTitle")}
          >
            <p>
              {t("caseStudy.futureRoadmapNote")}
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((item) => (
              <article
                key={localized(item, language)}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-5"
              >
                <p className="text-sm font-bold leading-6 text-slate-100/78">
                  {localized(item, language)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[1.7rem] border border-emerald-200/18 bg-emerald-200/10 p-8 text-center backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.03em] text-white md:text-5xl">
            {t("lac.ctaTitle")}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              {t("caseStudy.viewDemo")}
              <ExternalIcon />
            </a>
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                {t("caseStudy.viewCode")}
                <ExternalIcon />
              </a>
            )}
            <Link to="/projects" className={secondaryButton}>
              {t("caseStudy.backToProjects")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
