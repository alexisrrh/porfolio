import Projects from "../components/Projects";
import Seo from "../components/Seo";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Proyectos | Alexis Rodríguez"
        description="Proyectos de Alexis Rodriguez: NutriSmart Coach, Consultorio Odontológico LAC, VHSFlix y otras aplicaciones con React, APIs, datos e IA."
      />
      <Projects />
    </>
  );
}
