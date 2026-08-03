import { useEffect } from "react";

const defaultDescription =
  "Portfolio de Alexis Rodriguez, Full Stack Developer con proyectos en React, Node.js, Python, Supabase, PostgreSQL, APIs REST e integracion con inteligencia artificial.";

export default function Seo({ title, description = defaultDescription }) {
  useEffect(() => {
    document.title = title;

    let meta = document.getElementsByName("description")[0];
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, [title, description]);

  return null;
}
