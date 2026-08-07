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

const tr = (es, en) => ({ es, en });

export const vhsflixImages = {
  hero: {
    src: homeImage,
    alt: tr("Pantalla principal de VHSFlix con carriles de peliculas", "Main VHSFlix screen with movie rows"),
    fit: "cover",
    position: "top",
  },
  problem: {
    src: searchImage,
    alt: tr("Busqueda de peliculas en VHSFlix", "Movie search in VHSFlix"),
    fit: "cover",
    position: "top",
  },
  solution: {
    src: trailerImage,
    alt: tr("Modal de pelicula con trailer en VHSFlix", "Movie modal with trailer in VHSFlix"),
    fit: "cover",
    position: "top",
  },
  favorites: {
    src: favoritesImage,
    alt: tr("Vista de favoritos guardados en VHSFlix", "Saved favorites view in VHSFlix"),
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
  { label: tr("Tipo", "Type"), value: tr("Aplicacion web Full Stack de streaming", "Full Stack streaming web application") },
  { label: "Frontend", value: tr("React, Vite, Tailwind CSS y React Router", "React, Vite, Tailwind CSS, and React Router") },
  { label: "Backend", value: tr("Python, Flask, JWT y SQLAlchemy", "Python, Flask, JWT, and SQLAlchemy") },
  { label: "APIs", value: tr("TMDB, YouTube Data API y servicios REST propios", "TMDB, YouTube Data API, and custom REST services") },
];

export const vhsflixProblem = [
  tr("VHSFlix parte de una necesidad concreta: construir una experiencia de exploracion de peliculas que no fuera una lista estatica.", "VHSFlix starts from a concrete need: building a movie exploration experience that was more than a static list."),
  tr("El proyecto tenia que demostrar consumo de APIs externas, busqueda, navegacion por categorias, trailers, estado global y datos asociados al usuario.", "The project had to demonstrate external API consumption, search, category navigation, trailers, global state, and user-related data."),
  tr("El reto tecnico estaba en coordinar React, Flask, JWT, TMDB, YouTube y persistencia con SQLAlchemy dentro de una experiencia coherente.", "The technical challenge was coordinating React, Flask, JWT, TMDB, YouTube, and persistence with SQLAlchemy inside a coherent experience."),
];

export const vhsflixSolution = [
  tr("La aplicacion centraliza peliculas populares, categorias y busqueda en una interfaz inspirada en servicios de streaming.", "The application centralizes popular movies, categories, and search in an interface inspired by streaming services."),
  tr("React organiza las pantallas, React Router gestiona la navegacion y Context API con useReducer mantiene peliculas y favoritos disponibles para distintas vistas.", "React organizes the screens, React Router manages navigation, and Context API with useReducer keeps movies and favorites available across views."),
  tr("Flask expone una API propia para autenticacion, favoritos, perfil, avatar, recuperacion de contrasena, comentarios y puntuaciones del modo Relax.", "Flask exposes a custom API for authentication, favorites, profile, avatar, password recovery, comments, and Relax mode scores."),
  tr("TMDB aporta peliculas y trailers, YouTube permite mostrar video y comentarios externos, JWT protege acciones privadas y SQLAlchemy modela usuarios, peliculas, favoritos, comentarios y scores.", "TMDB provides movies and trailers, YouTube enables video and external comments, JWT protects private actions, and SQLAlchemy models users, movies, favorites, comments, and scores."),
];

export const mainFlow = [
  tr("Descubrir peliculas", "Discover movies"),
  tr("Buscar o filtrar por categoria", "Search or filter by category"),
  tr("Consultar informacion y trailer", "Review information and trailer"),
  tr("Iniciar sesion o registrarse", "Sign in or register"),
  tr("Guardar favoritos", "Save favorites"),
  tr("Gestionar perfil y avatar", "Manage profile and avatar"),
];

export const flowScreens = [
  {
    title: tr("01 Descubrir peliculas", "01 Discover movies"),
    text: tr("Explora películas populares y por categorías obtenidas desde TMDB. La interfaz permite navegar rápidamente por el catálogo y acceder al detalle de cada título.", "Explore popular movies and category-based results obtained from TMDB. The interface makes it quick to browse the catalog and open each title's detail view."),
    image: vhsflixImages.hero,
  },
  {
    title: tr("02 Consultar informacion y trailer", "02 Review information and trailer"),
    text: tr("Accede a la ficha completa de la película con sinopsis, tráiler integrado desde YouTube y comentarios relacionados para conocer más antes de añadirla a favoritos.", "Open the full movie detail with synopsis, YouTube trailer integration, and related comments before adding it to favorites."),
    image: vhsflixImages.solution,
  },
  {
    title: tr("03 Guardar favoritos y gestionar perfil", "03 Save favorites and manage profile"),
    text: tr("Guarda películas favoritas de forma persistente, administra tu perfil y sincroniza la información del usuario mediante autenticación JWT y la API desarrollada en Flask.", "Save favorite movies persistently, manage your profile, and synchronize user information through JWT authentication and the Flask API."),
    image: vhsflixImages.favorites,
  },
];

export const featureCards = [
  {
    title: tr("Registro", "Registration"),
    text: tr("Creacion de usuario desde formulario conectado al backend Flask.", "User creation from a form connected to the Flask backend."),
    icon: FaUser,
  },
  {
    title: "Login",
    text: tr("Inicio de sesion con token JWT guardado en el cliente.", "Login with a JWT token stored on the client."),
    icon: FaLock,
  },
  {
    title: tr("Recuperacion de contrasena", "Password recovery"),
    text: tr("Flujo con token temporal y restablecimiento desde ruta dedicada.", "Flow with temporary token and reset from a dedicated route."),
    icon: FaKey,
  },
  {
    title: "JWT",
    text: tr("Proteccion de endpoints privados mediante cabecera Authorization.", "Protection of private endpoints through the Authorization header."),
    icon: FaKey,
  },
  {
    title: tr("Perfil", "Profile"),
    text: tr("Consulta de datos privados del usuario autenticado.", "Review private data for the authenticated user."),
    icon: FaUser,
  },
  {
    title: "Avatar",
    text: tr("Actualizacion de avatar persistida desde el perfil.", "Avatar update persisted from the profile."),
    icon: FaUser,
  },
  {
    title: tr("Favoritos persistentes", "Persistent favorites"),
    text: tr("Alta, lectura y eliminacion de peliculas favoritas por usuario.", "Create, read, and delete favorite movies by user."),
    icon: FaHeart,
  },
  {
    title: tr("Comentarios", "Comments"),
    text: tr("Comentarios propios asociados a cada pelicula.", "Custom comments associated with each movie."),
    icon: FaComments,
  },
  {
    title: tr("Comentarios de YouTube", "YouTube comments"),
    text: tr("Lectura de comentarios externos vinculados al video del trailer.", "Read external comments linked to the trailer video."),
    icon: SiYoutube,
  },
  {
    title: tr("Busqueda", "Search"),
    text: tr("Filtrado de peliculas por titulo desde el Navbar.", "Filter movies by title from the Navbar."),
    icon: FaSearch,
  },
  {
    title: "TMDB",
    text: tr("Carga de peliculas populares, categorias y videos.", "Load popular movies, categories, and videos."),
    icon: FaFilm,
  },
  {
    title: "Trailers",
    text: tr("Reproduccion de trailers de YouTube dentro del detalle.", "Play YouTube trailers inside the detail view."),
    icon: FaPlayCircle,
  },
  {
    title: tr("Modo Relax", "Relax mode"),
    text: tr("Juego integrado como experiencia adicional dentro de la app.", "Integrated game as an additional in-app experience."),
    icon: FaGamepad,
  },
  {
    title: "Leaderboard",
    text: tr("Puntuaciones persistidas y consultadas desde la API.", "Scores persisted and queried from the API."),
    icon: FaDatabase,
  },
];

export const architectureFlow = [
  tr("Usuario", "User"),
  "React + Vite",
  "React Router",
  "Context API + useReducer",
  tr("Servicios fetch", "Fetch services"),
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
    title: tr("Datos", "Data"),
    items: ["SQLAlchemy", tr("Modelos relacionales", "Relational models"), tr("Usuarios", "Users"), tr("Peliculas", "Movies"), tr("Favoritos", "Favorites"), tr("Comentarios", "Comments"), "Scores"],
    icon: FaDatabase,
  },
  {
    title: tr("APIs externas", "External APIs"),
    items: ["TMDB", "YouTube Data API", "Resend"],
    icon: FaServer,
  },
  {
    title: tr("Despliegue", "Deployment"),
    items: [tr("Vercel para frontend", "Vercel for frontend"), tr("Render para backend", "Render for backend")],
    icon: SiVercel,
  },
];

export const technicalDecisions = [
  {
    name: "React",
    icon: SiReact,
    decision: tr("Interfaz basada en componentes.", "Component-based interface."),
    reason:
      tr("Permite organizar home, categorias, busqueda, favoritos, perfil y detalle de pelicula como piezas reutilizables.", "It makes it possible to organize home, categories, search, favorites, profile, and movie detail as reusable pieces."),
  },
  {
    name: "Context API",
    icon: FaLayerGroup,
    decision: tr("Estado global compartido.", "Shared global state."),
    reason:
      tr("Centraliza peliculas por categoria y favoritos para que distintas vistas trabajen sobre la misma fuente de estado.", "It centralizes movies by category and favorites so different views can work from the same state source."),
  },
  {
    name: "useReducer",
    icon: FaCodeBranch,
    decision: tr("Actualizacion predecible del estado.", "Predictable state updates."),
    reason:
      tr("Agrupa acciones para populares, categorias, favoritos cargados desde base de datos y limpieza de favoritos.", "It groups actions for popular movies, categories, favorites loaded from the database, and favorites cleanup."),
  },
  {
    name: "Flask",
    icon: SiFlask,
    decision: tr("API propia para usuarios y persistencia.", "Custom API for users and persistence."),
    reason:
      tr("El backend expone endpoints REST para autenticacion, favoritos, comentarios, perfil, recuperacion de contrasena y scores.", "The backend exposes REST endpoints for authentication, favorites, comments, profile, password recovery, and scores."),
  },
  {
    name: "JWT",
    icon: FaKey,
    decision: tr("Proteccion de acciones privadas.", "Protection of private actions."),
    reason:
      tr("Los endpoints privados usan token para identificar al usuario en perfil, comentarios, avatar y puntuaciones.", "Private endpoints use a token to identify the user in profile, comments, avatar, and scores."),
  },
  {
    name: "SQLAlchemy",
    icon: FaDatabase,
    decision: tr("Modelo relacional de datos.", "Relational data model."),
    reason:
      tr("Define usuarios, peliculas, favoritos, comentarios, tokens de recuperacion y puntuaciones como entidades relacionadas.", "It defines users, movies, favorites, comments, recovery tokens, and scores as related entities."),
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    decision: tr("Navegacion declarativa.", "Declarative navigation."),
    reason:
      tr("Separa home, categorias, busqueda, modal, favoritos, login, registro, perfil, reset de contrasena y modo Relax.", "It separates home, categories, search, modal, favorites, login, registration, profile, password reset, and Relax mode."),
  },
];

export const technicalChallenges = [
  {
    challenge: tr("Integrar TMDB en varias vistas", "Integrating TMDB across several views"),
    approach:
      tr("Cargar populares y categorias desde el contexto y reutilizar esos datos en home, busqueda, categorias y modal.", "Load popular movies and categories from context and reuse that data in home, search, categories, and modal."),
    result:
      tr("La aplicacion mantiene una experiencia de exploracion conectada sin duplicar la carga de datos en cada pantalla.", "The application keeps a connected exploration experience without duplicating data loading on each screen."),
  },
  {
    challenge: tr("Gestionar estado global", "Managing global state"),
    approach:
      tr("Usar Context API y useReducer para separar peliculas por categoria, favoritos y limpieza del estado al cambiar de usuario.", "Use Context API and useReducer to separate movies by category, favorites, and state cleanup when the user changes."),
    result:
      tr("Las paginas pueden compartir peliculas y favoritos desde una estructura comun.", "Pages can share movies and favorites from a common structure."),
  },
  {
    challenge: tr("Autenticacion y sesiones", "Authentication and sessions"),
    approach:
      tr("Crear login y registro contra Flask, guardar JWT en localStorage y enviarlo en cabeceras Authorization cuando corresponde.", "Create login and registration against Flask, store JWT in localStorage, and send it in Authorization headers when needed."),
    result:
      tr("Perfil, avatar, comentarios protegidos y scores pueden operar con identidad de usuario.", "Profile, avatar, protected comments, and scores can operate with user identity."),
  },
  {
    challenge: tr("Persistencia de favoritos", "Favorites persistence"),
    approach:
      tr("Relacionar usuarios con peliculas guardando primero la pelicula por `tmdb_id` si no existe.", "Relate users with movies by first saving the movie by `tmdb_id` if it does not exist."),
    result:
      tr("Los favoritos pueden recuperarse y eliminarse desde la API propia.", "Favorites can be retrieved and deleted from the custom API."),
  },
  {
    challenge: tr("Comunicacion frontend/backend", "Frontend/backend communication"),
    approach:
      tr("Separar servicios `fetch` para autenticacion, perfil, avatar y favoritos, conectando la SPA con la API desplegada.", "Separate `fetch` services for authentication, profile, avatar, and favorites, connecting the SPA with the deployed API."),
    result:
      tr("El frontend consume tanto APIs externas como endpoints propios dentro del mismo flujo.", "The frontend consumes both external APIs and custom endpoints within the same flow."),
  },
];

export const proofItems = [
  "React",
  "Flask",
  tr("Arquitectura Full Stack", "Full Stack architecture"),
  "Context API",
  "useReducer",
  "JWT",
  "SQLAlchemy",
  "APIs REST",
  tr("Integracion con APIs externas", "External API integration"),
  tr("Autenticacion", "Authentication"),
  "React Router",
  tr("Persistencia de datos", "Data persistence"),
];

export const learnings = [
  tr("VHSFlix permite explicar aprendizaje practico en consumo de APIs externas, estado compartido y separacion entre frontend y backend.", "VHSFlix helps explain practical learning in external API consumption, shared state, and separation between frontend and backend."),
  tr("El proyecto conecta datos de TMDB con una API propia, de modo que informacion externa de peliculas puede convivir con datos persistidos del usuario, como favoritos, comentarios, perfil y puntuaciones.", "The project connects TMDB data with a custom API, so external movie information can coexist with persisted user data such as favorites, comments, profile, and scores."),
  tr("Tambien refuerza decisiones importantes para una aplicacion Full Stack: autenticacion con JWT, modelado relacional con SQLAlchemy, servicios `fetch`, rutas con React Router y despliegue separado de frontend y backend.", "It also reinforces important decisions for a Full Stack application: JWT authentication, relational modeling with SQLAlchemy, `fetch` services, React Router routes, and separate frontend/backend deployment."),
];

export const roadmap = [
  tr("Sistema de valoraciones.", "Rating system."),
  tr("Recomendaciones personalizadas.", "Personalized recommendations."),
  tr("Mejoras de proteccion de rutas en frontend mediante un componente dedicado.", "Route protection improvements in the frontend through a dedicated component."),
  tr("Gestion mas clara de variables de entorno y eliminacion de API keys hardcodeadas en componentes.", "Clearer environment variable management and removal of hardcoded API keys from components."),
  tr("Mejoras de accesibilidad en botones con iconos y tarjetas interactivas.", "Accessibility improvements in icon buttons and interactive cards."),
];

export const deployTech = [
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
  { name: "Python", icon: SiPython },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export const externalIcon = FaExternalLinkAlt;
