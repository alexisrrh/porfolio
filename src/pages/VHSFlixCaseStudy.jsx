import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import { getProjectBySlug } from "../data/projects";
import { localized } from "../utils/localized";
import {
  architectureFlow,
  architectureLayers,
  deployTech,
  externalIcon as ExternalIcon,
  externalServices,
  featureCards,
  flowScreens,
  learnings,
  mainFlow,
  proofItems,
  roadmap,
  technicalChallenges,
  technicalDecisions,
  vhsflixFacts,
  vhsflixImages,
  vhsflixProblem,
  vhsflixSolution,
  vhsflixTech,
} from "../data/vhsflixCaseStudy";

const sectionClass = "scroll-mt-28";
const shellClass =
  "rounded-[1.5rem] border border-fuchsia-200/12 bg-white/[0.055] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl";
const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-fuchsia-300 text-[#18051d] hover:bg-fuchsia-200 focus-visible:ring-fuchsia-200`;
const secondaryButton = `${buttonBase} border border-fuchsia-200/20 bg-white/10 text-white hover:border-fuchsia-200/55 hover:bg-fuchsia-200/10 focus-visible:ring-fuchsia-200`;

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-fuchsia-200">
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
      className={`mx-auto w-full overflow-hidden rounded-[1.5rem] border border-fuchsia-200/12 bg-[#100719]/88 shadow-[0_18px_54px_rgba(2,6,23,0.24)] ${
        fixedFrame ? "aspect-[16/9]" : ""
      } ${compact ? "p-1.5 md:p-2" : "p-3"} ${
        hover
          ? "motion-safe:transition motion-safe:duration-300 motion-safe:hover:scale-[1.03] hover:border-fuchsia-200/35 hover:shadow-[0_24px_70px_rgba(217,70,239,0.12)]"
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
          objectFit: image.fit ?? "cover",
          objectPosition: fixedFrame ? "center" : image.position ?? "top",
        }}
      />
    </figure>
  );
}

function TechChip({ item }) {
  const Icon = item.icon;

  return (
    <span className="inline-flex min-h-10 items-center gap-2 rounded-2xl border border-fuchsia-200/14 bg-fuchsia-200/8 px-3 py-2 text-xs font-black text-fuchsia-50/88">
      <Icon className="h-4 w-4 text-fuchsia-200" aria-hidden="true" />
      {item.name}
    </span>
  );
}

function FeatureCard({ feature }) {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const Icon = feature.icon;

  return (
    <article className={shellClass}>
      <Icon className="h-7 w-7 text-fuchsia-200" aria-hidden="true" />
      <h3 className="mt-5 text-lg font-black text-white">{localized(feature.title, language)}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-200/70">{localized(feature.text, language)}</p>
    </article>
  );
}

export default function VHSFlixCaseStudy() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const project = getProjectBySlug("vhsflix");

  return (
    <main className="relative overflow-hidden bg-[#020617] text-white">
      <Seo
        title={{
          es: "VHSFlix | Caso de estudio Full Stack",
          en: "VHSFlix | Full Stack case study",
        }}
        description={{
          es: "Caso de estudio de VHSFlix, aplicacion Full Stack con React, Flask, JWT, SQLAlchemy, TMDB, YouTube, Vercel y Render.",
          en: "Case study for VHSFlix, a Full Stack application with React, Flask, JWT, SQLAlchemy, TMDB, YouTube, Vercel, and Render.",
        }}
        canonicalPath="/projects/vhsflix"
        image={vhsflixImages.hero.src}
        type="article"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(217,70,239,0.16),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0),rgba(24,5,29,0.76)_55%,rgba(2,6,23,1))]" />

      <section className="relative z-10 px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <Link to="/projects" className={secondaryButton}>
            {t("caseStudy.backToProjects")}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.04fr] lg:items-center xl:gap-16">
            <div>
              <p className="inline-flex rounded-full border border-fuchsia-200/25 bg-fuchsia-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-fuchsia-100">
                {t("vhsflix.badge")}
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                VHSFlix
              </h1>
              <p className="mt-6 text-xl font-bold leading-8 text-fuchsia-50/88">
                {t("vhsflix.subtitle")}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {vhsflixTech.map((tech) => (
                  <TechChip key={tech.name} item={tech} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryButton}
                  aria-label={t("caseStudy.openDemo", { title: "VHSFlix" })}
                >
                  {t("caseStudy.viewDemo")}
                  <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryButton}
                    aria-label={t("caseStudy.openRepository", {
                      title: "VHSFlix",
                    })}
                  >
                    {t("caseStudy.viewCode")}
                    <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                <Link to="/projects" className={secondaryButton}>
                  {t("caseStudy.backToProjects")}
                </Link>
              </div>
            </div>

            <StudyImage image={vhsflixImages.hero} loading="eager" />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {vhsflixFacts.map((fact) => (
              <article key={localized(fact.label, language)} className={shellClass}>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
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
              title={t("vhsflix.problemTitle")}
            />
            <div className="mt-7">
              <TextBlock paragraphs={vhsflixProblem} />
            </div>
          </div>
          <StudyImage image={vhsflixImages.problem} />
        </div>
      </section>

      <section id="solucion" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:gap-16">
          <StudyImage image={vhsflixImages.solution} />
          <div>
            <SectionHeading
              eyebrow={t("caseStudy.solution")}
              title={t("vhsflix.solutionTitle")}
            />
            <div className="mt-7">
              <TextBlock paragraphs={vhsflixSolution} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("vhsflix.mainFlow")}
            title={t("vhsflix.mainFlowTitle")}
          />

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-fuchsia-200/12 bg-[#100719]/72 p-5">
            <ol className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
              {mainFlow.map((step, index) => (
                <li
                  key={localized(step, language)}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-black text-white">{localized(step, language)}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {flowScreens.map((screen) => (
           <article
  key={localized(screen.title, language)}
  className="flex h-full flex-col rounded-[1.5rem] border border-fuchsia-200/12 bg-white/[0.055] p-4 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl"
>
                <h3 className="text-lg font-black text-white">{localized(screen.title, language)}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200/70">
                  {localized(screen.text, language)}
                </p>
                <StudyImage
                  image={screen.image}
                  className="mt-3"
                  compact
                  hover
                  fixedFrame
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("vhsflix.features")}
            title={t("vhsflix.featuresTitle")}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => (
              <FeatureCard key={localized(feature.title, language)} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="arquitectura" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("caseStudy.architecture")}
            title={t("vhsflix.architectureTitle")}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article key={localized(layer.title, language)} className={shellClass}>
                  <Icon className="h-8 w-8 text-fuchsia-200" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {localized(layer.title, language)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200/70">
                    {layer.items
                      .map((item) => localized(item, language))
                      .join(" Â· ")}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-fuchsia-200/12 bg-[#100719]/78 p-5 md:p-8">
            <div
              className="grid gap-3 text-center"
              aria-label={t("vhsflix.architectureAria")}
            >
              {architectureFlow.map((node, index) => (
                <div key={`${localized(node, language)}-${index}`}>
                  <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-black text-slate-50/88">
                    {localized(node, language)}
                  </div>
                  {index === 4 && (
                    <div className="mx-auto my-3 grid max-w-2xl gap-2 sm:grid-cols-3">
                      {externalServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-2xl border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-xs font-black text-cyan-50/85"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  )}
                  {index < architectureFlow.length - 1 && (
                    <div
                      className="mx-auto h-7 w-px bg-fuchsia-200/28"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-200/70">
              {t("vhsflix.architectureDescription")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("caseStudy.technicalDecisions")}
            title={t("vhsflix.decisionsTitle")}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {technicalDecisions.map((decision) => {
              const Icon = decision.icon;

              return (
                <article key={localized(decision.name, language)} className={shellClass}>
                  <Icon className="h-8 w-8 text-fuchsia-200" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {localized(decision.name, language)}
                  </h3>
                  <p className="mt-3 text-sm font-black text-fuchsia-50/88">
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
            title={t("vhsflix.challengesTitle")}
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {technicalChallenges.map((item) => (
              <article key={localized(item.challenge, language)} className={shellClass}>
                <h3 className="text-xl font-black text-white">
                  {localized(item.challenge, language)}
                </h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
                  {t("caseStudy.approach")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/72">
                  {localized(item.approach, language)}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
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

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("vhsflix.proof")}
            title={t("vhsflix.proofTitle")}
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {proofItems.map((item) => (
              <article
                key={localized(item, language)}
                className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4"
              >
                <p className="text-sm font-black text-slate-100/88">âœ“ {localized(item, language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aprendizajes" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={t("caseStudy.learnings")}
            title={t("vhsflix.learningsTitle")}
          />
          <div className={shellClass}>
            <TextBlock paragraphs={learnings} />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("caseStudy.nextSteps")}
            title={t("vhsflix.nextStepsTitle")}
          >
            <p>
              {t("caseStudy.vhsRoadmapNote")}
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
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
        <div className="mx-auto max-w-5xl rounded-[1.7rem] border border-fuchsia-200/18 bg-fuchsia-200/10 p-8 text-center backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.03em] text-white md:text-5xl">
            {t("vhsflix.ctaTitle")}
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {deployTech.map((tech) => (
              <TechChip key={tech.name} item={tech} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              {t("caseStudy.viewDemo")}
              <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
            </a>
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                {t("caseStudy.viewCode")}
                <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
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
