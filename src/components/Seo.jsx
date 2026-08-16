import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { localized } from "../utils/localized";

const BASE_URL = "https://portafolio-alexis-chi.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/preview.png`;

const defaultDescription =
  "Portfolio de Alexis Rodriguez, Full Stack Developer con proyectos en React, Node.js, Python, Supabase, PostgreSQL, APIs REST e integracion con inteligencia artificial.";

function normalizePath(pathname) {
  if (!pathname) return "/";

  const nextPath = pathname.startsWith("http")
    ? new URL(pathname).pathname
    : pathname;

  if (nextPath === "/") return "/";

  const normalized = nextPath.replace(/\/+$/, "");
  return normalized || "/";
}

function resolveAbsoluteUrl(url, fallback) {
  if (!url) return fallback;

  try {
    return new URL(url, BASE_URL).toString();
  } catch {
    return fallback;
  }
}

function upsertTag(selector, tagName, attributes) {
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement(tagName);
    Object.entries(attributes).forEach(([name, value]) => {
      tag.setAttribute(name, value);
    });
    document.head.appendChild(tag);
    return tag;
  }

  Object.entries(attributes).forEach(([name, value]) => {
    tag.setAttribute(name, value);
  });

  return tag;
}

export default function Seo({
  title,
  description = defaultDescription,
  canonicalPath,
  image,
  type = "website",
  robots = "index,follow",
}) {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const pageTitle = localized(title, language);
  const pageDescription =
    description === defaultDescription
      ? t("seo.defaultDescription")
      : localized(description, language);
  const pageImage = resolveAbsoluteUrl(image, DEFAULT_IMAGE);
  const currentPath = canonicalPath ?? window.location.pathname;
  const canonicalUrl = new URL(normalizePath(currentPath), BASE_URL).toString();

  useEffect(() => {
    document.title = pageTitle;
    document.documentElement.lang = language?.startsWith("en") ? "en" : "es";

    upsertTag('meta[name="description"]', "meta", { name: "description" }).setAttribute(
      "content",
      pageDescription,
    );

    upsertTag('link[rel="canonical"]', "link", { rel: "canonical" }).setAttribute(
      "href",
      canonicalUrl,
    );

    upsertTag('meta[property="og:title"]', "meta", { property: "og:title" }).setAttribute(
      "content",
      pageTitle,
    );
    upsertTag('meta[property="og:description"]', "meta", { property: "og:description" }).setAttribute(
      "content",
      pageDescription,
    );
    upsertTag('meta[property="og:url"]', "meta", { property: "og:url" }).setAttribute(
      "content",
      canonicalUrl,
    );
    upsertTag('meta[property="og:type"]', "meta", { property: "og:type" }).setAttribute(
      "content",
      type,
    );
    upsertTag('meta[property="og:image"]', "meta", { property: "og:image" }).setAttribute(
      "content",
      pageImage,
    );
    upsertTag('meta[name="robots"]', "meta", { name: "robots" }).setAttribute("content", robots);

    upsertTag('meta[name="twitter:card"]', "meta", { name: "twitter:card" }).setAttribute(
      "content",
      "summary_large_image",
    );
    upsertTag('meta[name="twitter:title"]', "meta", { name: "twitter:title" }).setAttribute(
      "content",
      pageTitle,
    );
    upsertTag(
      'meta[name="twitter:description"]',
      "meta",
      { name: "twitter:description" },
    ).setAttribute("content", pageDescription);
    upsertTag('meta[name="twitter:image"]', "meta", { name: "twitter:image" }).setAttribute(
      "content",
      pageImage,
    );
  }, [canonicalUrl, language, pageDescription, pageImage, pageTitle, robots, type]);

  return null;
}
