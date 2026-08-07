import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";

export default function ExperiencePage() {
  const { t } = useTranslation();
  const technicalExperience = t("experience.technicalItems", {
    returnObjects: true,
  });
  const previousExperience = t("experience.previousItems", {
    returnObjects: true,
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title={t("seo.experience.title")}
        description={t("seo.experience.description")}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            {t("experience.eyebrow")}
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {t("experience.title")}
          </h1>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.07] p-7 backdrop-blur-xl">
            <h2 className="text-3xl font-black text-white">
              {t("experience.technicalTitle")}
            </h2>
            <p className="mt-4 text-sm leading-6 text-cyan-50/60">
              {t("experience.technicalDescription")}
            </p>
            <div className="mt-6 grid gap-4">
              {technicalExperience.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-sm font-black text-cyan-100">{item}</p>
                </div>
              ))}
            </div>
            <Link
              to="/projects"
              className="mt-6 inline-flex rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#020617] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              {t("hero.viewProjects")}
            </Link>
          </section>

          <section className="rounded-[2rem] border border-purple-300/15 bg-white/[0.07] p-7 backdrop-blur-xl">
            <h2 className="text-3xl font-black text-white">
              {t("experience.previousTitle")}
            </h2>
            <p className="mt-4 text-sm leading-6 text-cyan-50/60">
              {t("experience.previousDescription")}
            </p>
            <div className="mt-6 grid gap-4">
              {previousExperience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-lg font-black text-purple-100">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/65">
                    {item.skills.join(", ")}.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.06] p-7 text-center backdrop-blur-xl">
          <h2 className="text-2xl font-black text-white">
            {t("experience.currentOpportunity")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-cyan-50/70">
            {t("experience.availability")}
          </p>
        </div>
      </div>
    </section>
  );
}
