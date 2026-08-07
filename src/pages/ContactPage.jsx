import Contact from "../components/Contact";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
      />
      <Contact />
    </>
  );
}
