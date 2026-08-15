import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";

const projectPaths = {
  "NutriSmart Coach": "/projects/nutrismart-coach",
  "Consultorio Odontológico LAC": "/projects/consultorio-lac",
  "LAC Dental Clinic": "/projects/consultorio-lac",
  LAC: "/projects/consultorio-lac",
  VHSFlix: "/projects/vhsflix",
};

function ProjectChips({ projects }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {projects.map((project) => {
        const path = projectPaths[project] ?? "/projects";

        return (
          <Link
            key={project}
            to={path}
            className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-black text-cyan-50/80 transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {project}
          </Link>
        );
      })}
    </div>
  );
}

function FlowSteps({ flow }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#020617]/45 p-4">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300/85">
        {flow.project}
      </p>
      <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {flow.steps.map((step, index) => (
          <li key={`${flow.project}-${step}`} className="flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-cyan-50/78">
              {step}
            </span>
            {index < flow.steps.length - 1 && (
              <span className="hidden text-cyan-300/55 sm:inline" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ExperienceBlock({ area, index, labels }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_18px_60px_rgba(34,211,238,0.11),0_10px_36px_rgba(168,85,247,0.08)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_88%_80%,rgba(168,85,247,0.11),transparent_34%)] opacity-70 transition group-hover:opacity-100" />

      <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-black tracking-[0.34em] text-cyan-300/85">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">
            {area.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-cyan-50/68 md:text-base">
            {area.description}
          </p>

          {area.projects?.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-purple-200/70">
                {labels.demonstratedIn}
              </p>
              <ProjectChips projects={area.projects} />
            </div>
          )}
        </div>

        <div className="grid gap-5">
          {area.capabilities?.length > 0 && (
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300/85">
                {labels.appliedCapabilities}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {area.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-6 text-cyan-50/75"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.55)]"
                      aria-hidden="true"
                    />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {area.evidence?.length > 0 && (
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-purple-200/70">
                {labels.evidence}
              </p>
              <div className="mt-4 grid gap-3">
                {area.evidence.map((item) => (
                  <div
                    key={item.project}
                    className="rounded-2xl border border-purple-300/12 bg-purple-300/[0.06] px-4 py-3"
                  >
                    <p className="text-sm font-black text-purple-100">
                      {item.project}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cyan-50/68">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {area.flows?.length > 0 && (
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300/85">
                {labels.productFlows}
              </p>
              <div className="mt-4 grid gap-4">
                {area.flows.map((flow) => (
                  <FlowSteps key={flow.project} flow={flow} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  const { t } = useTranslation();
  const appliedAreas = t("experience.appliedAreas", {
    returnObjects: true,
  });
  const labels = t("experience.labels", {
    returnObjects: true,
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title={t("seo.experience.title")}
        description={t("seo.experience.description")}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.17),transparent_30%),radial-gradient(circle_at_82%_32%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.12),transparent_36%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            {t("experience.eyebrow")}
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {t("experience.title")}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-cyan-50/72 md:text-lg">
            {t("experience.subtitle")}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-cyan-100/50">
            {t("experience.disclaimer")}
          </p>
        </div>

        <div className="mt-16 grid gap-7">
          {appliedAreas.map((area, index) => (
            <ExperienceBlock
              key={area.title}
              area={area}
              index={index}
              labels={labels}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.06] p-7 text-center backdrop-blur-xl">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-cyan-50/70">
            {t("experience.projectsCtaText")}
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex min-h-12 items-center rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-black text-[#020617] transition hover:-translate-y-1 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            {t("experience.projectsCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
