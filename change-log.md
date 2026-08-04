# Change Log

## 2026-08-03 - Ajuste visual de tarjetas de proyectos

- Compactacion visual de las tarjetas de proyectos sin modificar rutas, enlaces, carrusel, imagenes ni casos de estudio.
- Descripciones limitadas visualmente para mejorar lectura y equilibrio, manteniendo el texto completo disponible en el DOM.
- Tecnologias visibles reducidas a un maximo de cuatro por tarjeta, con contador explicito `+N tecnologias` cuando hay stack adicional.
- Bloque de capacidades reducido a tres elementos y presentado con jerarquia secundaria para no competir con la descripcion.
- CTAs ajustados a textos compactos: Caso de estudio, Demo y Codigo, con altura tactil minima y sin saltos de linea.
- NutriSmart Coach reforzado como proyecto principal mediante borde y sombra de acento sutiles, sin alterar el grid.
- Validacion con `npm run lint`, `npm run build`, servidor local, rutas `/` y `/projects`, consola y revision responsive en 1440, 1024, 768, 500, 390 y 375 px.

## 2026-08-03 - Sprint 5 NutriSmart case study

- Creacion de una experiencia especifica para `/projects/nutrismart-coach` basada en el documento maestro `src/docs/nutrismart-case-study.md`.
- Mantenimiento de `CaseStudyPage` como fallback generico para Consultorio Odontologico LAC y VHSFlix, evitando cambios en sus casos de estudio.
- Estructuracion del caso NutriSmart con hero, resumen, problema, solucion, objetivos, responsabilidades, arquitectura, flujo de usuario, decisiones, retos, funcionalidades, aprendizajes, roadmap conceptual y CTA final.
- Incorporacion de nueve marcadores profesionales para capturas pendientes sin importar archivos inexistentes ni generar imagenes falsas.
- Documentacion de capturas futuras en `docs/nutrismart-screenshots.md` con nombres, rutas, proporciones y contenido esperado.
- SEO especifico actualizado para la ruta de NutriSmart mediante el sistema existente.
- Validacion con `npm run lint`, `npm run build`, servidor local, rutas relacionadas, SEO, placeholders, enlaces externos, consola y responsive en 1440, 1024, 768, 500, 390 y 375 px.

## 2026-08-03 - Sprint 4 contenido de proyectos

- Reescritura de etiquetas, descripciones y capacidades demostradas en las tarjetas de proyectos para comunicar problema, solucion y stack sin inventar metricas ni funcionalidades.
- NutriSmart Coach queda reforzado como proyecto principal con foco en IA, Full Stack, mobile y APIs REST.
- Consultorio Odontologico LAC y VHSFlix se presentan como proyectos Full Stack con capacidades tecnicas concretas y enlaces a casos de estudio.
- Proyectos secundarios ajustados para explicar la necesidad que resuelven, evitando textos genericos como landing, pagina responsive o sitio web.
- Resumen visual de tecnologias limitado a cinco elementos por tarjeta con contador `+N` cuando corresponde.
- Validacion con `npm run lint`, `npm run build`, servidor local, rutas `/` y `/projects`, enlaces de caso de estudio, demos, codigo y revision responsive.

## 2026-08-03 - Sprint 3 tecnologias

- Rediseno puntual de la pagina `/technologies` para mostrar el stack con tarjetas, logos oficiales, nombres claros y descripciones breves.
- Organizacion del stack en Frontend, Backend, Datos y servicios, y Herramientas y despliegue, manteniendo solo tecnologias respaldadas por CV, proyectos o codigo existente.
- Uso de `react-icons/si` para logos oficiales disponibles y alternativa consistente para SQL mediante icono de base de datos.
- Mantenimiento de la identidad visual existente: fondo oscuro, bordes, radios, sombras y estados hover sutiles sin convertir las tarjetas en enlaces.
- Validacion con `npm run lint`, `npm run build`, servidor local, ruta `/technologies` y revision responsive en 1440, 1024, 768, 500 y 375 px.

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
