import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getProjectBySlug } from "../data/projects";
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
  return (
    <div className="space-y-5 text-base leading-8 text-slate-200/75">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
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
        alt={image.alt}
        loading={loading}
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
  const Icon = feature.icon;

  return (
    <article className={shellClass}>
      <Icon className="h-7 w-7 text-fuchsia-200" aria-hidden="true" />
      <h3 className="mt-5 text-lg font-black text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-200/70">{feature.text}</p>
    </article>
  );
}

export default function VHSFlixCaseStudy() {
  const project = getProjectBySlug("vhsflix");

  return (
    <main className="relative overflow-hidden bg-[#020617] text-white">
      <Seo
        title="VHSFlix | Caso de estudio Full Stack"
        description="Caso de estudio de VHSFlix, aplicacion Full Stack con React, Flask, JWT, SQLAlchemy, TMDB, YouTube, Vercel y Render."
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(217,70,239,0.16),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0),rgba(24,5,29,0.76)_55%,rgba(2,6,23,1))]" />

      <section className="relative z-10 px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <Link to="/projects" className={secondaryButton}>
            Volver a proyectos
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.04fr] lg:items-center xl:gap-16">
            <div>
              <p className="inline-flex rounded-full border border-fuchsia-200/25 bg-fuchsia-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-fuchsia-100">
                Proyecto Full Stack
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                VHSFlix
              </h1>
              <p className="mt-6 text-xl font-bold leading-8 text-fuchsia-50/88">
                Plataforma inspirada en servicios de streaming que combina
                exploracion de peliculas, autenticacion, favoritos persistentes y
                consumo de APIs externas.
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
                  aria-label="Abrir demo de VHSFlix en una nueva pestaña"
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
                    aria-label="Abrir repositorio de VHSFlix en una nueva pestaña"
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

            <StudyImage image={vhsflixImages.hero} loading="eager" />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {vhsflixFacts.map((fact) => (
              <article key={fact.label} className={shellClass}>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
                  {fact.label}
                </p>
                <p className="mt-3 text-sm font-bold leading-6 text-slate-100/88">
                  {fact.value}
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
              eyebrow="El problema"
              title="Explorar peliculas exige coordinar APIs, rutas y datos de usuario."
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
              eyebrow="La solucion"
              title="Una experiencia de streaming conectada a una API propia."
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
            eyebrow="Flujo principal"
            title="De la exploracion al dato persistido."
          />

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-fuchsia-200/12 bg-[#100719]/72 p-5">
            <ol className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
              {mainFlow.map((step, index) => (
                <li
                  key={step}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-black text-white">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {flowScreens.map((screen) => (
           <article
  key={screen.title}
  className="flex h-full flex-col rounded-[1.5rem] border border-fuchsia-200/12 bg-white/[0.055] p-4 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl"
>
                <h3 className="text-lg font-black text-white">{screen.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200/70">
                  {screen.text}
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
            eyebrow="Funcionalidades"
            title="Funciones reales conectadas entre interfaz, API y base de datos."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="arquitectura" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Arquitectura"
            title="Frontend React, API Flask y servicios externos conectados."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article key={layer.title} className={shellClass}>
                  <Icon className="h-8 w-8 text-fuchsia-200" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200/70">
                    {layer.items.join(" · ")}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-fuchsia-200/12 bg-[#100719]/78 p-5 md:p-8">
            <div
              className="grid gap-3 text-center"
              aria-label="Usuario, React y Vite, React Router, Context API y useReducer, servicios fetch, Flask API, JWT Auth, SQLAlchemy, Render y Vercel"
            >
              {architectureFlow.map((node, index) => (
                <div key={node}>
                  <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-black text-slate-50/88">
                    {node}
                  </div>
                  {node === "Servicios fetch" && (
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
              La aplicacion combina una SPA en React con una API Flask propia,
              datos relacionales mediante SQLAlchemy, autenticacion JWT y consumo
              de servicios externos para peliculas, trailers, comentarios y email.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Decisiones tecnicas"
            title="Elecciones justificadas por el codigo."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {technicalDecisions.map((decision) => {
              const Icon = decision.icon;

              return (
                <article key={decision.name} className={shellClass}>
                  <Icon className="h-8 w-8 text-fuchsia-200" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {decision.name}
                  </h3>
                  <p className="mt-3 text-sm font-black text-fuchsia-50/88">
                    {decision.decision}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200/68">
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
          <SectionHeading
            eyebrow="Retos tecnicos"
            title="Problemas propios de una app conectada a APIs y datos de usuario."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {technicalChallenges.map((item) => (
              <article key={item.challenge} className={shellClass}>
                <h3 className="text-xl font-black text-white">
                  {item.challenge}
                </h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
                  Enfoque aplicado
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/72">
                  {item.approach}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
                  Resultado observable
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/72">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Que demuestra"
            title="Capacidades tecnicas visibles en el proyecto."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {proofItems.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4"
              >
                <p className="text-sm font-black text-slate-100/88">✓ {item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aprendizajes" className={`${sectionClass} relative z-10 px-6 py-16`}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Lo que aprendi"
            title="Conectar experiencia de usuario, APIs y persistencia."
          />
          <div className={shellClass}>
            <TextBlock paragraphs={learnings} />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proximos pasos"
            title="Mejoras realistas, no funcionalidades actuales."
          >
            <p>
              Estas mejoras representan posibles evoluciones del producto y no
              funcionalidades disponibles actualmente.
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {roadmap.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-5"
              >
                <p className="text-sm font-bold leading-6 text-slate-100/78">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[1.7rem] border border-fuchsia-200/18 bg-fuchsia-200/10 p-8 text-center backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.03em] text-white md:text-5xl">
            Una app Full Stack para explorar peliculas y datos de usuario.
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
              Ver demo
              <ExternalIcon className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
            </a>
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
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
      </section>
    </main>
  );
}
