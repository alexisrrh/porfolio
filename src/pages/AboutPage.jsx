import About from "../components/About";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        canonicalPath="/about"
      />
      <About />
    </>
  );
}
