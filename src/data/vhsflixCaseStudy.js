import {
  FaCodeBranch,
  FaComments,
  FaDatabase,
  FaExternalLinkAlt,
  FaFilm,
  FaGamepad,
  FaHeart,
  FaKey,
  FaLayerGroup,
  FaLock,
  FaPlayCircle,
  FaRoute,
  FaSearch,
  FaServer,
  FaSyncAlt,
  FaUser,
} from "react-icons/fa";
import {
  SiFlask,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRender,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiYoutube,
} from "react-icons/si";

import searchImage from "../assets/busqueda.png";
import favoritesImage from "../assets/favoritos.png";
import homeImage from "../assets/home.png";
import trailerImage from "../assets/trailer.png";

export const vhsflixImages = {
  hero: {
    src: homeImage,
    alt: "Pantalla principal de VHSFlix con carriles de peliculas",
    fit: "cover",
    position: "top",
  },
  problem: {
    src: searchImage,
    alt: "Busqueda de peliculas en VHSFlix",
    fit: "cover",
    position: "top",
  },
  solution: {
    src: trailerImage,
    alt: "Modal de pelicula con trailer en VHSFlix",
    fit: "cover",
    position: "top",
  },
  favorites: {
    src: favoritesImage,
    alt: "Vista de favoritos guardados en VHSFlix",
    fit: "cover",
    position: "top",
  },
};

export const vhsflixTech = [
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "React Router", icon: SiReactrouter },
  { name: "Context API", icon: FaLayerGroup },
  { name: "useReducer", icon: FaCodeBranch },
  { name: "Flask", icon: SiFlask },
  { name: "JWT", icon: FaKey },
  { name: "SQLAlchemy", icon: FaDatabase },
  { name: "TMDB", icon: FaFilm },
  { name: "YouTube", icon: SiYoutube },
];

export const vhsflixFacts = [
  { label: "Tipo", value: "Aplicacion web Full Stack de streaming" },
  { label: "Frontend", value: "React, Vite, Tailwind CSS y React Router" },
  { label: "Backend", value: "Python, Flask, JWT y SQLAlchemy" },
  { label: "APIs", value: "TMDB, YouTube Data API y servicios REST propios" },
];

export const vhsflixProblem = [
  "VHSFlix parte de una necesidad concreta: construir una experiencia de exploracion de peliculas que no fuera una lista estatica.",
  "El proyecto tenia que demostrar consumo de APIs externas, busqueda, navegacion por categorias, trailers, estado global y datos asociados al usuario.",
  "El reto tecnico estaba en coordinar React, Flask, JWT, TMDB, YouTube y persistencia con SQLAlchemy dentro de una experiencia coherente.",
];

export const vhsflixSolution = [
  "La aplicacion centraliza peliculas populares, categorias y busqueda en una interfaz inspirada en servicios de streaming.",
  "React organiza las pantallas, React Router gestiona la navegacion y Context API con useReducer mantiene peliculas y favoritos disponibles para distintas vistas.",
  "Flask expone una API propia para autenticacion, favoritos, perfil, avatar, recuperacion de contrasena, comentarios y puntuaciones del modo Relax.",
  "TMDB aporta peliculas y trailers, YouTube permite mostrar video y comentarios externos, JWT protege acciones privadas y SQLAlchemy modela usuarios, peliculas, favoritos, comentarios y scores.",
];

export const mainFlow = [
  "Descubrir peliculas",
  "Buscar o filtrar por categoria",
  "Consultar informacion y trailer",
  "Iniciar sesion o registrarse",
  "Guardar favoritos",
  "Gestionar perfil y avatar",
];

export const flowScreens = [
  {
    title: "01 Descubrir peliculas",
    text: "Home con carriles de peliculas populares y categorias cargadas desde TMDB.",
    image: vhsflixImages.hero,
  },
  {
    title: "02 Consultar informacion y trailer",
    text: "Modal de detalle con trailer de YouTube y comentarios vinculados a la pelicula.",
    image: vhsflixImages.solution,
  },
  {
    title: "03 Guardar favoritos y gestionar perfil",
    text: "Favoritos persistidos por usuario y datos asociados a la cuenta.",
    image: vhsflixImages.favorites,
  },
];

export const featureCards = [
  {
    title: "Registro",
    text: "Creacion de usuario desde formulario conectado al backend Flask.",
    icon: FaUser,
  },
  {
    title: "Login",
    text: "Inicio de sesion con token JWT guardado en el cliente.",
    icon: FaLock,
  },
  {
    title: "Recuperacion de contrasena",
    text: "Flujo con token temporal y restablecimiento desde ruta dedicada.",
    icon: FaKey,
  },
  {
    title: "JWT",
    text: "Proteccion de endpoints privados mediante cabecera Authorization.",
    icon: FaKey,
  },
  {
    title: "Perfil",
    text: "Consulta de datos privados del usuario autenticado.",
    icon: FaUser,
  },
  {
    title: "Avatar",
    text: "Actualizacion de avatar persistida desde el perfil.",
    icon: FaUser,
  },
  {
    title: "Favoritos persistentes",
    text: "Alta, lectura y eliminacion de peliculas favoritas por usuario.",
    icon: FaHeart,
  },
  {
    title: "Comentarios",
    text: "Comentarios propios asociados a cada pelicula.",
    icon: FaComments,
  },
  {
    title: "Comentarios de YouTube",
    text: "Lectura de comentarios externos vinculados al video del trailer.",
    icon: SiYoutube,
  },
  {
    title: "Busqueda",
    text: "Filtrado de peliculas por titulo desde el Navbar.",
    icon: FaSearch,
  },
  {
    title: "TMDB",
    text: "Carga de peliculas populares, categorias y videos.",
    icon: FaFilm,
  },
  {
    title: "Trailers",
    text: "Reproduccion de trailers de YouTube dentro del detalle.",
    icon: FaPlayCircle,
  },
  {
    title: "Modo Relax",
    text: "Juego integrado como experiencia adicional dentro de la app.",
    icon: FaGamepad,
  },
  {
    title: "Leaderboard",
    text: "Puntuaciones persistidas y consultadas desde la API.",
    icon: FaDatabase,
  },
];

export const architectureFlow = [
  "Usuario",
  "React + Vite",
  "React Router",
  "Context API + useReducer",
  "Servicios fetch",
  "Flask API",
  "JWT Auth",
  "SQLAlchemy",
  "Render / Vercel",
];

export const externalServices = ["TMDB", "YouTube Data API", "Resend"];

export const architectureLayers = [
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "React Router", "Context API", "useReducer"],
    icon: SiReact,
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "Flask-CORS", "Flask-JWT-Extended", "Flask-Bcrypt"],
    icon: SiFlask,
  },
  {
    title: "Datos",
    items: ["SQLAlchemy", "Modelos relacionales", "Usuarios", "Peliculas", "Favoritos", "Comentarios", "Scores"],
    icon: FaDatabase,
  },
  {
    title: "APIs externas",
    items: ["TMDB", "YouTube Data API", "Resend"],
    icon: FaServer,
  },
  {
    title: "Despliegue",
    items: ["Vercel para frontend", "Render para backend"],
    icon: SiVercel,
  },
];

export const technicalDecisions = [
  {
    name: "React",
    icon: SiReact,
    decision: "Interfaz basada en componentes.",
    reason:
      "Permite organizar home, categorias, busqueda, favoritos, perfil y detalle de pelicula como piezas reutilizables.",
  },
  {
    name: "Context API",
    icon: FaLayerGroup,
    decision: "Estado global compartido.",
    reason:
      "Centraliza peliculas por categoria y favoritos para que distintas vistas trabajen sobre la misma fuente de estado.",
  },
  {
    name: "useReducer",
    icon: FaCodeBranch,
    decision: "Actualizacion predecible del estado.",
    reason:
      "Agrupa acciones para populares, categorias, favoritos cargados desde base de datos y limpieza de favoritos.",
  },
  {
    name: "Flask",
    icon: SiFlask,
    decision: "API propia para usuarios y persistencia.",
    reason:
      "El backend expone endpoints REST para autenticacion, favoritos, comentarios, perfil, recuperacion de contrasena y scores.",
  },
  {
    name: "JWT",
    icon: FaKey,
    decision: "Proteccion de acciones privadas.",
    reason:
      "Los endpoints privados usan token para identificar al usuario en perfil, comentarios, avatar y puntuaciones.",
  },
  {
    name: "SQLAlchemy",
    icon: FaDatabase,
    decision: "Modelo relacional de datos.",
    reason:
      "Define usuarios, peliculas, favoritos, comentarios, tokens de recuperacion y puntuaciones como entidades relacionadas.",
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    decision: "Navegacion declarativa.",
    reason:
      "Separa home, categorias, busqueda, modal, favoritos, login, registro, perfil, reset de contrasena y modo Relax.",
  },
];

export const technicalChallenges = [
  {
    challenge: "Integrar TMDB en varias vistas",
    approach:
      "Cargar populares y categorias desde el contexto y reutilizar esos datos en home, busqueda, categorias y modal.",
    result:
      "La aplicacion mantiene una experiencia de exploracion conectada sin duplicar la carga de datos en cada pantalla.",
  },
  {
    challenge: "Gestionar estado global",
    approach:
      "Usar Context API y useReducer para separar peliculas por categoria, favoritos y limpieza del estado al cambiar de usuario.",
    result:
      "Las paginas pueden compartir peliculas y favoritos desde una estructura comun.",
  },
  {
    challenge: "Autenticacion y sesiones",
    approach:
      "Crear login y registro contra Flask, guardar JWT en localStorage y enviarlo en cabeceras Authorization cuando corresponde.",
    result:
      "Perfil, avatar, comentarios protegidos y scores pueden operar con identidad de usuario.",
  },
  {
    challenge: "Persistencia de favoritos",
    approach:
      "Relacionar usuarios con peliculas guardando primero la pelicula por `tmdb_id` si no existe.",
    result:
      "Los favoritos pueden recuperarse y eliminarse desde la API propia.",
  },
  {
    challenge: "Comunicacion frontend/backend",
    approach:
      "Separar servicios `fetch` para autenticacion, perfil, avatar y favoritos, conectando la SPA con la API desplegada.",
    result:
      "El frontend consume tanto APIs externas como endpoints propios dentro del mismo flujo.",
  },
];

export const proofItems = [
  "React",
  "Flask",
  "Arquitectura Full Stack",
  "Context API",
  "useReducer",
  "JWT",
  "SQLAlchemy",
  "APIs REST",
  "Integracion con APIs externas",
  "Autenticacion",
  "React Router",
  "Persistencia de datos",
];

export const learnings = [
  "VHSFlix permite explicar aprendizaje practico en consumo de APIs externas, estado compartido y separacion entre frontend y backend.",
  "El proyecto conecta datos de TMDB con una API propia, de modo que informacion externa de peliculas puede convivir con datos persistidos del usuario, como favoritos, comentarios, perfil y puntuaciones.",
  "Tambien refuerza decisiones importantes para una aplicacion Full Stack: autenticacion con JWT, modelado relacional con SQLAlchemy, servicios `fetch`, rutas con React Router y despliegue separado de frontend y backend.",
];

export const roadmap = [
  "Sistema de valoraciones.",
  "Recomendaciones personalizadas.",
  "Mejoras de proteccion de rutas en frontend mediante un componente dedicado.",
  "Gestion mas clara de variables de entorno y eliminacion de API keys hardcodeadas en componentes.",
  "Mejoras de accesibilidad en botones con iconos y tarjetas interactivas.",
];

export const deployTech = [
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
  { name: "Python", icon: SiPython },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export const externalIcon = FaExternalLinkAlt;
