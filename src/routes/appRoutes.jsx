import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "../pages/Home";

const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ExperiencePage = lazy(() => import("../pages/ExperiencePage"));
const TechnologiesPage = lazy(() => import("../pages/TechnologiesPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const CaseStudyPage = lazy(() => import("../pages/CaseStudyPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function RouteFallback() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#020617] px-6 py-32 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 text-cyan-100/70">
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
        <span className="text-xs font-black uppercase tracking-[0.32em]">{t("common.loading")}</span>
      </div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
