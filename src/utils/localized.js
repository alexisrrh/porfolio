export const localized = (value, language) => {
  if (typeof value === "string") return value;

  const lang = language?.startsWith("en") ? "en" : "es";

  return value?.[lang] ?? value?.es ?? "";
};
