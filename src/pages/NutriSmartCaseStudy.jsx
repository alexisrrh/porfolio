import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getProjectBySlug } from "../data/projects";
import {
  architectureFlow,
  externalIcon as ExternalIcon,
  learnings,
  nutrismartIntro,
  nutrismartMainTech,
  nutrismartProblem,
  nutrismartSolution,
  objectives,
  projectFacts,
  responsibilities,
  roadmap,
  screenshotPlaceholders,
  stackLayers,
  supabaseBranches,
  technicalChallenges,
  technicalDecisions,
  userFlow,
} from "../data/nutrismartCaseStudy";

const sectionClass = "scroll-mt-28";
const panelClass =
  "rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl";
const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-cyan-300 text-[#020617] hover:bg-cyan-200 focus-visible:ring-cyan-200`;
const secondaryButton = `${buttonBase} border border-cyan-300/20 bg-white/10 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10 focus-visible:ring-cyan-300`;

const userFlowMedia = [
  { ...screenshotPlaceholders.camera, aspect: "9 / 16" },
  { ...screenshotPlaceholders.diet, aspect: "9 / 16" },
  { ...screenshotPlaceholders.workout, aspect: "9 / 16" },
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-base leading-8 text-cyan-50/72">
          {children}
        </div>
      )}
    </div>
  );
}

function CaseStudyMedia({ media, loading = "lazy", className = "" }) {
  return (
    <figure
      aria-label={
        media.src
          ? media.alt
          : `${media.title}. ${media.text}. Archivo esperado: ${media.filename}`
      }
      className={`overflow-hidden rounded-[1.7rem] border border-cyan-300/15 bg-[#020617]/80 p-4 shadow-[0_28px_90px_rgba(34,211,238,0.08)] ${className}`}
      style={{ aspectRatio: media.aspect }}
    >
      {media.src ? (
        <img
          src={media.src}
          alt={media.alt}
          loading={loading}
          className="h-full w-full rounded-[1.25rem]"
          style={{
            objectFit: media.fit ?? "cover",
            objectPosition: media.position ?? "center",
          }}
        />
      ) : (
        <div className="flex h-full min-h-56 flex-col justify-between rounded-[1.25rem] border border-dashed border-cyan-300/25 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(49,46,129,0.35))] p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              {media.title}
            </p>
            <p className="mt-4 max-w-md text-lg font-black leading-tight text-white">
              {media.text}
            </p>
          </div>
          <figcaption className="mt-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs leading-5 text-cyan-50/70">
            Archivo esperado:{" "}
            <span className="font-black text-cyan-100">{media.filename}</span>
            <br />
            Ruta: {media.path}
          </figcaption>
        </div>
      )}
    </figure>
  );
}

function TextBlock({ paragraphs }) {
  return (
    <div className="space-y-5 text-base leading-8 text-cyan-50/72">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function IconCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="flex min-h-32 gap-4 rounded-2xl border border-white/10 bg-[#020617]/55 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="text-sm font-bold leading-6 text-cyan-50/78">{item.text}</p>
    </article>
  );
}

function TechPill({ item }) {
  const Icon = item.icon;

  return (
    <span className="inline-flex min-h-10 items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-black text-cyan-50/85">
      <Icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
      {item.name}
    </span>
  );
}

export default function NutriSmartCaseStudy() {
  const project = getProjectBySlug("nutrismart-coach");

  return (
    <main className="relative overflow-hidden bg-[#020617] text-white">
      <Seo
        title="NutriSmart Coach | Caso de estudio Full Stack"
        description="Caso de estudio de NutriSmart Coach, una plataforma Full Stack de nutrición y entrenamiento que integra React, Node.js, Supabase, PostgreSQL, Google Gemini y Capacitor."
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_50%_75%,rgba(59,130,246,0.12),transparent_34%)]" />

      <section className="relative z-10 px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <Link to="/projects" className={secondaryButton}>
            Volver a proyectos
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-16">
            <div>
              <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-cyan-200">
                Proyecto principal
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                NutriSmart Coach
              </h1>
              <p className="mt-5 text-xl font-bold leading-8 text-cyan-100/88">
                Plataforma Full Stack de nutrición y entrenamiento impulsada por
                inteligencia artificial.
              </p>
              <div className="mt-7">
                <TextBlock paragraphs={nutrismartIntro} />
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {nutrismartMainTech.map((tech) => (
                  <TechPill key={tech.name} item={tech} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryButton}
                  aria-label="Abrir demo de NutriSmart Coach en una nueva pestaña"
                >
                  Ver demo
                  <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryButton}
                    aria-label="Abrir repositorio de NutriSmart Coach en una nueva pestaña"
                  >
                    Ver código
                    <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                <Link to="/projects" className={secondaryButton}>
                  Volver a proyectos
                </Link>
              </div>
            </div>

            <CaseStudyMedia
              media={screenshotPlaceholders.hero}
              loading="eager"
              className="mx-auto w-full max-w-[21rem] lg:max-w-[22rem]"
            />
          </div>

          <nav
            aria-label="Índice del caso de estudio"
            className="mt-12 flex flex-wrap gap-2 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3"
          >
            {[
              ["Problema", "#problema"],
              ["Solución", "#solucion"],
              ["Arquitectura", "#arquitectura"],
              ["Retos", "#retos"],
              ["Aprendizajes", "#aprendizajes"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-cyan-50/75 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectFacts.map((fact) => (
            <article key={fact.label} className={panelClass}>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                {fact.label}
              </p>
              <p className="mt-3 text-base font-bold leading-6 text-white">
                {fact.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="problema" className={`${sectionClass} relative z-10 px-6 py-20`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start xl:gap-16">
          <div className="lg:ml-6 xl:ml-10">
            <SectionHeading eyebrow="El problema" title="Registrar hábitos saludables suele generar fricción." />
            <div className="mt-7">
              <TextBlock paragraphs={nutrismartProblem} />
            </div>
          </div>
          <CaseStudyMedia
            media={screenshotPlaceholders.problem}
            className="mx-auto w-full max-w-[19rem] lg:max-w-[20rem]"
          />
        </div>
      </section>

      <section id="solucion" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center xl:gap-20">
          <CaseStudyMedia
            media={screenshotPlaceholders.dashboard}
            className="mx-auto w-full max-w-[17rem] lg:max-w-[18rem]"
          />
          <div>
            <SectionHeading eyebrow="La solución" title="Fotografía, IA, nutrición, rutinas y progreso en un solo flujo." />
            <div className="mt-7">
              <TextBlock paragraphs={nutrismartSolution} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Objetivos" title="Alcance real del producto." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective) => (
              <IconCard key={objective.text} item={objective} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Mi responsabilidad" title="Ownership de extremo a extremo." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {responsibilities.map((group) => (
              <article key={group.title} className={panelClass}>
                <h3 className="text-lg font-black text-white">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-cyan-50/70">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="arquitectura" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Cómo está construido" title="Arquitectura de NutriSmart por capas." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {stackLayers.map((layer) => (
              <article key={layer.title} className={panelClass}>
                <div className="flex flex-wrap gap-2">
                {layer.icons.map((Icon, iconIndex) => (
                    <span
                      key={`${layer.title}-${iconIndex}`}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50/70">
                  {layer.items.join(" · ")}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[1.7rem] border border-cyan-300/15 bg-[#020617]/70 p-5 md:p-8">
            <h3 className="text-2xl font-black text-white">Diagrama de arquitectura</h3>
            <div
              className="mt-7 grid gap-3 text-center"
              aria-label="Usuario, React y Vite, Node.js y Express, Supabase con Auth PostgreSQL y Storage, Google Gemini, resultado nutricional y usuario"
            >
              {architectureFlow.map((node, index) => (
                <div key={`${node}-${index}`}>
                  <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-sm font-black text-cyan-50/85">
                    {node}
                  </div>
                  {node === "Supabase" && (
                    <div className="mx-auto my-3 grid max-w-2xl gap-2 sm:grid-cols-3">
                      {supabaseBranches.map((branch) => (
                        <span
                          key={branch}
                          className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-xs font-black text-emerald-50/85"
                        >
                          {branch}
                        </span>
                      ))}
                    </div>
                  )}
                  {index < architectureFlow.length - 1 && (
                    <div className="mx-auto h-8 w-px bg-cyan-300/30" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-cyan-50/65">
              El flujo conecta la interfaz React con una API en Node.js y Express,
              usa Supabase para autenticación, datos y almacenamiento, y delega el
              análisis nutricional en Google Gemini antes de devolver el resultado al usuario.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Flujo del usuario" title="Del inicio de sesión al historial de progreso." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {userFlow.map((step, index) => (
              <article key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                  Paso {index + 1}
                </p>
                <p className="mt-3 text-sm font-bold leading-6 text-cyan-50/78">
                  {step}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {userFlowMedia.map((media) => (
              <CaseStudyMedia key={media.key} media={media} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Decisiones técnicas" title="Elecciones que sostienen el producto." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {technicalDecisions.map((decision) => {
              const Icon = decision.icon;

              return (
                <article key={decision.name} className={panelClass}>
                  <Icon className="h-8 w-8 text-cyan-300" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">{decision.name}</h3>
                  <p className="mt-3 text-sm font-black text-cyan-100/90">
                    {decision.decision}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-cyan-50/65">
                    {decision.reason}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="retos" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Retos técnicos" title="Problemas técnicos abordados durante el desarrollo." />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {technicalChallenges.map((item) => (
              <article key={item.challenge} className={panelClass}>
                <h3 className="text-xl font-black text-white">{item.challenge}</h3>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                  Decisión o enfoque
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/70">{item.approach}</p>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.22em] text-purple-200">
                  Impacto técnico o de UX
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/70">{item.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aprendizajes" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Lo que aprendí" title="Una visión más completa del desarrollo Full Stack." />
          <div className={panelClass}>
            <TextBlock paragraphs={learnings} />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Roadmap conceptual" title="Cómo evolucionaría el producto.">
            <p>
              Estas mejoras forman parte de una posible evolución del producto y no
              se presentan como funcionalidades disponibles actualmente.
            </p>
          </SectionHeading>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-bold leading-6 text-cyan-50/75">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.03em] text-white md:text-5xl">
            ¿Quieres conocer cómo está construido?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                Ver repositorio
                <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              Probar NutriSmart Coach
              <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <Link to="/projects" className={secondaryButton}>
              Volver a proyectos
            </Link>
            <Link to="/contact" className={secondaryButton}>
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
