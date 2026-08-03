import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";
import TechnologiesPage from "../pages/TechnologiesPage";
import ContactPage from "../pages/ContactPage";
import CaseStudyPage from "../pages/CaseStudyPage";
import NotFoundPage from "../pages/NotFoundPage";

export function AppRoutes() {
  return (
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
  );
}
