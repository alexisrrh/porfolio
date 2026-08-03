import About from "../components/About";
import Seo from "../components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Sobre mí | Alexis Rodríguez"
        description="Forma de trabajo de Alexis Rodriguez como desarrollador Full Stack: UX, estructura técnica, APIs, datos e inteligencia artificial."
      />
      <About />
    </>
  );
}
