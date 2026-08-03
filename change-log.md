# Change Log

## 2026-08-03 - Sprint 2 visual

- Pulido visual de Hero, Navbar y Footer sin cambios de arquitectura, rutas ni contenido profesional.
- Unificacion de la jerarquia de CTA del Hero: Ver proyectos como accion principal, Contactar y Ver CV como acciones secundarias.
- Incorporacion de logos oficiales de GitHub y LinkedIn mediante `react-icons/fa`, reutilizando la dependencia existente.
- Ajuste del Navbar con `NavLink`, estados activos mas claros, enlaces sociales accesibles y menu movil con Escape y cierre al navegar.
- Revision del fondo animado del Hero para reducir intensidad visual, respetar `prefers-reduced-motion` y pausar cuando la pestana no esta visible.
- Actualizacion del Footer con disponibilidad profesional visible, enlaces de Email, LinkedIn, GitHub y CV, y retirada de Instagram como canal principal.
- Validacion con `npm run lint`, `npm run build`, servidor local, rutas `/`, `/contact` y `/projects`, capturas responsive reales y comprobacion del PDF del CV.

## 2026-08-03

- Conversion del portfolio de landing con scroll a aplicacion React con rutas reales mediante React Router.
- Nuevas vistas para inicio, proyectos, casos de estudio iniciales, sobre mi, experiencia, tecnologias, contacto y pagina 404.
- Actualizacion del posicionamiento a Full Stack Developer con stack React, Node.js, Python y Supabase.
- Reemplazo de enlaces internos con hash por `Link` y `NavLink`; se conserva la navegacion externa a GitHub, LinkedIn, WhatsApp y CV.
- Configuracion minima de rewrite para Vercel, permitiendo recarga directa de rutas internas con BrowserRouter.
- Validacion con `npm run lint`, `npm run build`, servidor local y revision de rutas en escritorio y movil.

## 2026-08-03 - Fase 0 de contenido

- Auditoria editorial del portfolio para alinear Inicio, Proyectos, Casos de estudio, Tecnologias, Experiencia, Sobre mi, Contacto y Footer.
- Correccion del posicionamiento a Full Stack Developer con stack principal React, Node.js, Python y Supabase.
- Actualizacion de tecnologias y descripciones de proyectos segun evidencias del CV: NutriSmart Coach, Consultorio Odontologico LAC y VHSFlix.
- Reescritura de Experience para separar proyectos tecnicos de experiencia laboral previa y habilidades transferibles.
- Ajuste de About hacia forma de trabajo, resolucion de problemas, UX, estructura tecnica y aprendizaje continuo.
- Simplificacion de Contact y Footer, priorizando Email, LinkedIn, GitHub, CV y disponibilidad profesional.
- Eliminacion de contenido generico visible en casos de estudio y retirada de Instagram como canal principal de contratacion.
- Validacion con `npm run lint`, `npm run build`, revision local de rutas y comprobacion del PDF del CV.
