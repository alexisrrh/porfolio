import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { localized } from "../utils/localized";

const defaultDescription =
  "Portfolio de Alexis Rodriguez, Full Stack Developer con proyectos en React, Node.js, Python, Supabase, PostgreSQL, APIs REST e integracion con inteligencia artificial.";

export default function Seo({ title, description = defaultDescription }) {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const pageTitle = localized(title, language);
  const pageDescription =
    description === defaultDescription
      ? t("seo.defaultDescription")
      : localized(description, language);

  useEffect(() => {
    document.title = pageTitle;
    document.documentElement.lang = language?.startsWith("en") ? "en" : "es";

    let meta = document.getElementsByName("description")[0];
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", pageDescription);
  }, [language, pageDescription, pageTitle]);

  return null;
}
