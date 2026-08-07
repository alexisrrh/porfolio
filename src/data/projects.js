import homeImg from "../assets/home.png";
import favoritosImg from "../assets/favoritos.png";
import imagenImg from "../assets/imagen.png";
import trailerImg from "../assets/trailer.png";

import agendarImg from "../assets/odontologia/agendarImg.png";
import calendarioImg from "../assets/odontologia/calendario-citas.png";
import dashboardImg from "../assets/odontologia/dashboard.png";
import home4 from "../assets/odontologia/home4.png";
import home1 from "../assets/odontologia/home1.png";
import home3 from "../assets/odontologia/home3.png";
import homeHorariosImg from "../assets/odontologia/home-horarios.png";
import loginImg from "../assets/odontologia/login.png";
import home2 from "../assets/odontologia/home2.png";

import priteca1Img from "../assets/priteca/priteca.png";
import priteca2Img from "../assets/priteca/priteca1.png";
import priteca3Img from "../assets/priteca/priteca2.png";
import priteca4Img from "../assets/priteca/priteca3.png";
import priteca5Img from "../assets/priteca/priteca4.png";

import panaderiaImg from "../assets/panaderia/panaderia1.png";
import panaderia2Img from "../assets/panaderia/panaderia2.png";
import panaderia3Img from "../assets/panaderia/panaderia3.png";
import panaderia4Img from "../assets/panaderia/panaderia4.png";
import panaderia5Img from "../assets/panaderia/panaderia5.png";

import groom1 from "../assets/groom/groom1.png";
import groom2 from "../assets/groom/groom2.png";
import groom3 from "../assets/groom/groom3.png";
import groom4 from "../assets/groom/groom4.png";
import groom5 from "../assets/groom/groom5.png";
import groom6 from "../assets/groom/groom6.png";
import groom7 from "../assets/groom/groom7.png";
import groom8 from "../assets/groom/groom8.png";
import groom9 from "../assets/groom/groom9.png";

import imagen1 from "../assets/nutrismartcoach/imagen1.png";
import imagen2 from "../assets/nutrismartcoach/imagen2.png";
import imagen3 from "../assets/nutrismartcoach/imagen3.png";
import imagen4 from "../assets/nutrismartcoach/imagen4.png";
import imagen5 from "../assets/nutrismartcoach/imagen5.png";

const projectImage = (src, alt, options = {}) => ({
  src,
  alt,
  fit: options.fit ?? "cover",
  position: options.position ?? "top",
});

export const projects = [
  {
    slug: "nutrismart-coach",
    title: "NutriSmart Coach",
    label: { es: "Proyecto principal", en: "Main project" },
    description: {
      es: "Plataforma Full Stack de nutrición y entrenamiento con IA que analiza comidas mediante fotografías, calcula información nutricional, genera dietas y rutinas personalizadas y permite seguir el progreso del usuario.",
      en: "Full Stack nutrition and training platform with AI that analyzes meals from photos, calculates nutritional information, generates personalized diets and routines, and tracks user progress.",
    },
    result: {
      es: "Proyecto Full Stack con frontend en React, API en Node.js y Express, autenticación, datos en Supabase/PostgreSQL, integración con Google Gemini y despliegue web/mobile.",
      en: "Full Stack project with a React frontend, Node.js and Express API, authentication, Supabase/PostgreSQL data, Google Gemini integration, and web/mobile deployment.",
    },
    proof: [{ es: "IA", en: "AI" }, "Full Stack", "Mobile", "APIs REST"],
    visibleTechCount: 4,
    tech: [
      "React",
      "Node.js",
      "Supabase",
      "Google Gemini",
      "PostgreSQL",
      "Capacitor",
      "Vite",
      "Tailwind CSS",
      "Express",
      "APIs REST",
      "Render",
      "Vercel",
    ],
    demo: "https://www.nutrismartcoach.com",
    code: "https://github.com/alexisrrh/Nutri-smart-coach",
    caseStudyPath: "/projects/nutrismart-coach",
    featured: true,
    images: [
      projectImage(imagen1, {
        es: "Panel principal de NutriSmart Coach",
        en: "Main dashboard of NutriSmart Coach",
      }),
      projectImage(imagen2, {
        es: "Vista de análisis nutricional de NutriSmart Coach",
        en: "Nutritional analysis view in NutriSmart Coach",
      }),
      projectImage(imagen3, {
        es: "Pantalla de seguimiento de NutriSmart Coach",
        en: "Tracking screen in NutriSmart Coach",
      }),
      projectImage(imagen4, {
        es: "Vista de dieta personalizada de NutriSmart Coach",
        en: "Personalized diet view in NutriSmart Coach",
      }),
      projectImage(imagen5, {
        es: "Resumen de progreso de NutriSmart Coach",
        en: "Progress summary in NutriSmart Coach",
      }),
    ],
  },
  {
    slug: "consultorio-lac",
    title: "Consultorio Odontológico LAC",
    label: { es: "Proyecto Full Stack", en: "Full Stack project" },
    description: {
      es: "Aplicación web desarrollada para digitalizar la gestión diaria de un consultorio odontológico, centralizando pacientes, citas e historiales mediante una interfaz rápida, intuitiva y conectada a una base de datos.",
      en: "Web application built to digitize daily dental clinic management, centralizing patients, appointments, and records through a fast, intuitive interface connected to a database.",
    },
    result: {
      es: "Proyecto con React, Vite, Bootstrap, autenticación, PostgreSQL y sincronización de datos en Supabase.",
      en: "Project with React, Vite, Bootstrap, authentication, PostgreSQL, and data synchronization in Supabase.",
    },
    proof: [
      "CRUD",
      { es: "Autenticación", en: "Authentication" },
      "PostgreSQL",
      "Dashboard",
    ],
    visibleTechCount: 4,
    tech: [
      "React",
      "Supabase",
      "PostgreSQL",
      { es: "Autenticación", en: "Authentication" },
      "Bootstrap",
      "Vite",
      { es: "Sincronización de datos", en: "Data synchronization" },
    ],
    demo: "https://consultorio-odontologico-lac.vercel.app",
    code: "https://github.com/alexisrrh/consultorio-odontologico",
    caseStudyPath: "/projects/consultorio-lac",
    featured: true,
    images: [
      projectImage(home2, { es: "Inicio del Consultorio Odontológico LAC", en: "Home page of Consultorio Odontológico LAC" }),
      projectImage(home3, { es: "Sección informativa del Consultorio Odontológico LAC", en: "Informational section of Consultorio Odontológico LAC" }),
      projectImage(home4, { es: "Vista de servicios del Consultorio Odontológico LAC", en: "Services view of Consultorio Odontológico LAC" }),
      projectImage(home1, { es: "Portada del Consultorio Odontológico LAC", en: "Landing view of Consultorio Odontológico LAC" }),
      projectImage(loginImg, { es: "Inicio de sesión del Consultorio Odontológico LAC", en: "Sign-in screen of Consultorio Odontológico LAC" }),
      projectImage(dashboardImg, { es: "Dashboard del Consultorio Odontológico LAC", en: "Dashboard of Consultorio Odontológico LAC" }),
      projectImage(calendarioImg, { es: "Calendario de citas del Consultorio Odontológico LAC", en: "Appointment calendar of Consultorio Odontológico LAC" }),
      projectImage(agendarImg, { es: "Formulario para agendar cita del Consultorio Odontológico LAC", en: "Appointment booking form in Consultorio Odontológico LAC" }),
      projectImage(homeHorariosImg, { es: "Horarios del Consultorio Odontológico LAC", en: "Opening hours in Consultorio Odontológico LAC" }),
    ],
  },
  {
    slug: "vhsflix",
    title: "VHSFlix",
    label: { es: "Proyecto Full Stack", en: "Full Stack project" },
    description: {
      es: "Plataforma inspirada en servicios de streaming que consume APIs externas para explorar películas, gestionar autenticación de usuarios y ofrecer una experiencia interactiva desarrollada con React y Flask.",
      en: "Streaming-inspired platform that consumes external APIs to explore movies, manage user authentication, and deliver an interactive experience built with React and Flask.",
    },
    result: {
      es: "Proyecto con React, Context API y useReducer en frontend, backend con Python/Flask, autenticación JWT y persistencia mediante SQLAlchemy.",
      en: "Project with React, Context API and useReducer on the frontend, Python/Flask backend, JWT authentication, and persistence through SQLAlchemy.",
    },
    proof: ["APIs", "Flask", "JWT", "React"],
    visibleTechCount: 4,
    tech: [
      "React",
      "Flask",
      "JWT",
      "Python",
      "Context API",
      "Tailwind CSS",
      "useReducer",
      "SQLAlchemy",
      "TMDB",
      "YouTube",
    ],
    demo: "https://vhsflix.vercel.app",
    code: "https://github.com/alexisrrh/proyecto-Peliculas",
    caseStudyPath: "/projects/vhsflix",
    featured: true,
    images: [
      projectImage(homeImg, { es: "Pantalla principal de VHSFlix", en: "Main screen of VHSFlix" }),
      projectImage(favoritosImg, { es: "Vista de favoritos de VHSFlix", en: "Favorites view in VHSFlix" }),
      projectImage(imagenImg, { es: "Detalle de película en VHSFlix", en: "Movie detail in VHSFlix" }),
      projectImage(trailerImg, { es: "Vista de trailer en VHSFlix", en: "Trailer view in VHSFlix" }),
    ],
  },
  {
    slug: "the-real-groom",
    title: "The Real Groom",
    label: { es: "Proyecto frontend", en: "Frontend project" },
    description: {
      es: "Experiencia ecommerce para presentar productos de grooming, organizar el catálogo y facilitar la exploración de artículos conectando la interfaz con datos de WooCommerce.",
      en: "Ecommerce experience for presenting grooming products, organizing the catalog, and making product exploration easier by connecting the interface with WooCommerce data.",
    },
    result: {
      es: "Proyecto frontend conectado a WooCommerce API, con foco en estructura visual, navegación y adaptación responsive.",
      en: "Frontend project connected to WooCommerce API, focused on visual structure, navigation, and responsive adaptation.",
    },
    proof: ["Ecommerce", { es: "Catálogo", en: "Catalog" }, { es: "API externa", en: "External API" }, "Responsive"],
    visibleTechCount: 4,
    tech: ["React", "Tailwind CSS", "WooCommerce API", "UX/UI"],
    demo: "https://the-real-groom.vercel.app",
    code: "https://github.com/ultraxcode-com/the-real-groom",
    images: [
      projectImage(groom1, { es: "Portada de The Real Groom", en: "Landing view of The Real Groom" }),
      projectImage(groom2, { es: "Catálogo de The Real Groom", en: "Catalog of The Real Groom" }),
      projectImage(groom3, { es: "Detalle de producto de The Real Groom", en: "Product detail in The Real Groom" }),
      projectImage(groom4, { es: "Sección comercial de The Real Groom", en: "Commercial section of The Real Groom" }),
      projectImage(groom5, { es: "Vista de producto de The Real Groom", en: "Product view in The Real Groom" }),
      projectImage(groom6, { es: "Pantalla ecommerce de The Real Groom", en: "Ecommerce screen in The Real Groom" }),
      projectImage(groom7, { es: "Listado de productos de The Real Groom", en: "Product listing in The Real Groom" }),
      projectImage(groom8, { es: "Carrito de The Real Groom", en: "Cart in The Real Groom" }),
      projectImage(groom9, { es: "Vista responsive de The Real Groom", en: "Responsive view of The Real Groom" }),
    ],
  },
  {
    slug: "priteca",
    title: "Constructora Priteca",
    label: { es: "Proyecto comercial", en: "Commercial project" },
    description: {
      es: "Presencia digital para una constructora que necesitaba presentar servicios, mostrar trabajos y dirigir al usuario hacia el contacto de forma clara.",
      en: "Digital presence for a construction company that needed to present services, showcase work, and guide users clearly toward contact.",
    },
    result: {
      es: "Landing responsive construida con React, Tailwind CSS y animaciones controladas con Framer Motion.",
      en: "Responsive landing page built with React, Tailwind CSS, and animations controlled with Framer Motion.",
    },
    proof: [{ es: "Presentación comercial", en: "Commercial presentation" }, { es: "Servicios", en: "Services" }, { es: "Contacto", en: "Contact" }, { es: "Animaciones", en: "Animations" }],
    visibleTechCount: 3,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://priteca-web.vercel.app/",
    code: "https://github.com/alexisrrh/priteca-web",
    images: [
      projectImage(priteca1Img, { es: "Portada de Constructora Priteca", en: "Landing view of Constructora Priteca" }),
      projectImage(priteca2Img, { es: "Sección de servicios de Constructora Priteca", en: "Services section of Constructora Priteca" }),
      projectImage(priteca5Img, { es: "Galería de Constructora Priteca", en: "Gallery of Constructora Priteca" }),
      projectImage(priteca4Img, { es: "Vista de proyecto de Constructora Priteca", en: "Project view of Constructora Priteca" }),
      projectImage(priteca3Img, { es: "Contacto de Constructora Priteca", en: "Contact section of Constructora Priteca" }),
    ],
  },
  {
    slug: "panaderia-ipanema",
    title: "Panadería Ipanema",
    label: { es: "Proyecto comercial", en: "Commercial project" },
    description: {
      es: "Interfaz comercial para una panadería que organiza productos, información del negocio y vías de contacto en una experiencia sencilla de consultar.",
      en: "Commercial interface for a bakery that organizes products, business information, and contact channels in an easy-to-browse experience.",
    },
    result: {
      es: "Proyecto responsive con React, Tailwind CSS y navegación mediante React Router.",
      en: "Responsive project with React, Tailwind CSS, and navigation through React Router.",
    },
    proof: [{ es: "Productos", en: "Products" }, { es: "Navegación", en: "Navigation" }, { es: "Contacto", en: "Contact" }, "Responsive"],
    visibleTechCount: 3,
    tech: ["React", "Tailwind CSS", "React Router"],
    demo: "https://panaderia-peach.vercel.app/",
    code: "https://github.com/alexisrrh/panaderia-web.git",
    images: [
      projectImage(panaderiaImg, { es: "Portada de Panadería Ipanema", en: "Landing view of Panadería Ipanema" }),
      projectImage(panaderia2Img, { es: "Productos de Panadería Ipanema", en: "Products in Panadería Ipanema" }),
      projectImage(panaderia3Img, { es: "Sección comercial de Panadería Ipanema", en: "Commercial section of Panadería Ipanema" }),
      projectImage(panaderia4Img, { es: "Detalle visual de Panadería Ipanema", en: "Visual detail of Panadería Ipanema" }),
      projectImage(panaderia5Img, { es: "Contacto de Panadería Ipanema", en: "Contact section of Panadería Ipanema" }),
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
