import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";

const STORAGE_KEY = "portfolio-language";
const savedLanguage = localStorage.getItem(STORAGE_KEY) || "es";

document.documentElement.lang = savedLanguage.startsWith("en") ? "en" : "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: savedLanguage,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  const nextLanguage = language?.startsWith("en") ? "en" : "es";
  localStorage.setItem(STORAGE_KEY, nextLanguage);
  document.documentElement.lang = nextLanguage;
});

export default i18n;
