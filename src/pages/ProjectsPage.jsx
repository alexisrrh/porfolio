import Projects from "../components/Projects";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
      />
      <Projects />
    </>
  );
}
