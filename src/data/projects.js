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
    label: "Proyecto principal",
    description:
      "Plataforma Full Stack de nutrición y entrenamiento con IA que analiza comidas mediante fotografías, calcula información nutricional, genera dietas y rutinas personalizadas y permite seguir el progreso del usuario.",
    result:
      "Proyecto Full Stack con frontend en React, API en Node.js y Express, autenticación, datos en Supabase/PostgreSQL, integración con Google Gemini y despliegue web/mobile.",
    proof: ["IA", "Full Stack", "Mobile", "APIs REST"],
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
      projectImage(imagen1, "Panel principal de NutriSmart Coach"),
      projectImage(imagen2, "Vista de análisis nutricional de NutriSmart Coach"),
      projectImage(imagen3, "Pantalla de seguimiento de NutriSmart Coach"),
      projectImage(imagen4, "Vista de dieta personalizada de NutriSmart Coach"),
      projectImage(imagen5, "Resumen de progreso de NutriSmart Coach"),
    ],
  },
  {
    slug: "consultorio-lac",
    title: "Consultorio Odontológico LAC",
    label: "Proyecto Full Stack",
    description:
      "Aplicación web desarrollada para digitalizar la gestión diaria de un consultorio odontológico, centralizando pacientes, citas e historiales mediante una interfaz rápida, intuitiva y conectada a una base de datos.",
    result:
      "Proyecto con React, Vite, Bootstrap, autenticación, PostgreSQL y sincronización de datos en Supabase.",
    proof: ["CRUD", "Autenticación", "PostgreSQL", "Dashboard"],
    visibleTechCount: 4,
    tech: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Autenticación",
      "Bootstrap",
      "Vite",
      "Sincronización de datos",
    ],
    demo: "https://consultorio-odontologico-lac.vercel.app",
    code: "https://github.com/alexisrrh/consultorio-odontologico",
    caseStudyPath: "/projects/consultorio-lac",
    featured: true,
    images: [
      projectImage(home2, "Inicio del Consultorio Odontológico LAC"),
      projectImage(home3, "Sección informativa del Consultorio Odontológico LAC"),
      projectImage(home4, "Vista de servicios del Consultorio Odontológico LAC"),
      projectImage(home1, "Portada del Consultorio Odontológico LAC"),
      projectImage(loginImg, "Inicio de sesión del Consultorio Odontológico LAC"),
      projectImage(dashboardImg, "Dashboard del Consultorio Odontológico LAC"),
      projectImage(calendarioImg, "Calendario de citas del Consultorio Odontológico LAC"),
      projectImage(agendarImg, "Formulario para agendar cita del Consultorio Odontológico LAC"),
      projectImage(homeHorariosImg, "Horarios del Consultorio Odontológico LAC"),
    ],
  },
  {
    slug: "vhsflix",
    title: "VHSFlix",
    label: "Proyecto Full Stack",
    description:
      "Plataforma inspirada en servicios de streaming que consume APIs externas para explorar películas, gestionar autenticación de usuarios y ofrecer una experiencia interactiva desarrollada con React y Flask.",
    result:
      "Proyecto con React, Context API y useReducer en frontend, backend con Python/Flask, autenticación JWT y persistencia mediante SQLAlchemy.",
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
      projectImage(homeImg, "Pantalla principal de VHSFlix"),
      projectImage(favoritosImg, "Vista de favoritos de VHSFlix"),
      projectImage(imagenImg, "Detalle de película en VHSFlix"),
      projectImage(trailerImg, "Vista de trailer en VHSFlix"),
    ],
  },
  {
    slug: "the-real-groom",
    title: "The Real Groom",
    label: "Proyecto frontend",
    description:
      "Experiencia ecommerce para presentar productos de grooming, organizar el catálogo y facilitar la exploración de artículos conectando la interfaz con datos de WooCommerce.",
    result:
      "Proyecto frontend conectado a WooCommerce API, con foco en estructura visual, navegación y adaptación responsive.",
    proof: ["Ecommerce", "Catálogo", "API externa", "Responsive"],
    visibleTechCount: 4,
    tech: ["React", "Tailwind CSS", "WooCommerce API", "UX/UI"],
    demo: "https://the-real-groom.vercel.app",
    code: "https://github.com/ultraxcode-com/the-real-groom",
    images: [
      projectImage(groom1, "Portada de The Real Groom"),
      projectImage(groom2, "Catálogo de The Real Groom"),
      projectImage(groom3, "Detalle de producto de The Real Groom"),
      projectImage(groom4, "Sección comercial de The Real Groom"),
      projectImage(groom5, "Vista de producto de The Real Groom"),
      projectImage(groom6, "Pantalla ecommerce de The Real Groom"),
      projectImage(groom7, "Listado de productos de The Real Groom"),
      projectImage(groom8, "Carrito de The Real Groom"),
      projectImage(groom9, "Vista responsive de The Real Groom"),
    ],
  },
  {
    slug: "priteca",
    title: "Constructora Priteca",
    label: "Proyecto comercial",
    description:
      "Presencia digital para una constructora que necesitaba presentar servicios, mostrar trabajos y dirigir al usuario hacia el contacto de forma clara.",
    result:
      "Landing responsive construida con React, Tailwind CSS y animaciones controladas con Framer Motion.",
    proof: ["Presentación comercial", "Servicios", "Contacto", "Animaciones"],
    visibleTechCount: 3,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://priteca-web.vercel.app/",
    code: "https://github.com/alexisrrh/priteca-web",
    images: [
      projectImage(priteca1Img, "Portada de Constructora Priteca"),
      projectImage(priteca2Img, "Sección de servicios de Constructora Priteca"),
      projectImage(priteca5Img, "Galería de Constructora Priteca"),
      projectImage(priteca4Img, "Vista de proyecto de Constructora Priteca"),
      projectImage(priteca3Img, "Contacto de Constructora Priteca"),
    ],
  },
  {
    slug: "panaderia-ipanema",
    title: "Panadería Ipanema",
    label: "Proyecto comercial",
    description:
      "Interfaz comercial para una panadería que organiza productos, información del negocio y vías de contacto en una experiencia sencilla de consultar.",
    result:
      "Proyecto responsive con React, Tailwind CSS y navegación mediante React Router.",
    proof: ["Productos", "Navegación", "Contacto", "Responsive"],
    visibleTechCount: 3,
    tech: ["React", "Tailwind CSS", "React Router"],
    demo: "https://panaderia-peach.vercel.app/",
    code: "https://github.com/alexisrrh/panaderia-web.git",
    images: [
      projectImage(panaderiaImg, "Portada de Panadería Ipanema"),
      projectImage(panaderia2Img, "Productos de Panadería Ipanema"),
      projectImage(panaderia3Img, "Sección comercial de Panadería Ipanema"),
      projectImage(panaderia4Img, "Detalle visual de Panadería Ipanema"),
      projectImage(panaderia5Img, "Contacto de Panadería Ipanema"),
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
