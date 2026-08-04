import {
  FaBrain,
  FaCamera,
  FaChartLine,
  FaDumbbell,
  FaExternalLinkAlt,
  FaImage,
  FaLock,
  FaMobileAlt,
  FaUtensils,
} from "react-icons/fa";
import {
  SiCapacitor,
  SiExpress,
  SiGooglegemini,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import nutrismartAnalysisImage from "../assets/case-studies/nutrismart/nutrismart-analysis.jpeg";
import nutrismartCameraImage from "../assets/case-studies/nutrismart/nutrismart-hero.png";
import nutrismartDashboardImage from "../assets/case-studies/nutrismart/nutrismart-dashboard.jpeg";
import nutrismartDietImage from "../assets/case-studies/nutrismart/nutrismart-diet.jpeg";
import nutrismartHeroImage from "../assets/case-studies/nutrismart/nutrismart-hero.png";
import nutrismartProblemImage from "../assets/case-studies/nutrismart/nutrismart-problem.png";
import nutrismartWorkoutImage from "../assets/case-studies/nutrismart/nutrismart-workout.jpeg";

const screenshotBasePath = "src/assets/case-studies/nutrismart";

export const nutrismartMainTech = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Google Gemini", icon: SiGooglegemini },
  { name: "Capacitor", icon: SiCapacitor },
];

export const nutrismartIntro = [
  "NutriSmart Coach es una plataforma diseñada para ayudar a las personas a mejorar sus hábitos alimenticios y su condición física mediante inteligencia artificial.",
  "La aplicación permite analizar comidas a partir de una fotografía, calcular información nutricional, generar dietas y rutinas de entrenamiento personalizadas y realizar un seguimiento continuo del progreso del usuario desde una única plataforma.",
  "El objetivo no era desarrollar únicamente un analizador de alimentos, sino crear una herramienta que reuniera en un solo lugar distintas funcionalidades relacionadas con la nutrición, el entrenamiento y el seguimiento personal.",
];

export const nutrismartProblem = [
  "Muchas personas quieren mejorar su alimentación o alcanzar un objetivo físico, pero mantener un seguimiento constante suele resultar complicado.",
  "Las aplicaciones tradicionales obligan al usuario a introducir manualmente cada alimento, buscar productos en bases de datos o utilizar herramientas diferentes para controlar la dieta, el entrenamiento y el progreso.",
  "Este proceso consume tiempo, genera fricción y hace que muchas personas abandonen el seguimiento después de pocos días.",
  "Además, conocer únicamente las calorías de una comida no siempre es suficiente para tomar mejores decisiones. Los usuarios también necesitan entender el equilibrio nutricional de cada plato y recibir recomendaciones adaptadas a sus objetivos.",
];

export const nutrismartSolution = [
  "NutriSmart Coach reúne estas necesidades en una única plataforma.",
  "El usuario solo necesita tomar una fotografía de su comida para que la aplicación la analice mediante inteligencia artificial y obtenga información nutricional relevante.",
  "A partir de ese análisis, la plataforma puede generar recomendaciones personalizadas, crear planes de alimentación y proponer rutinas de entrenamiento adaptadas al objetivo del usuario, además de registrar toda la información para facilitar el seguimiento de su evolución.",
  "El propósito del producto es reducir el esfuerzo necesario para mantener hábitos saludables y ofrecer una experiencia sencilla, rápida y personalizada.",
];

export const screenshotPlaceholders = {
  hero: {
    key: "hero",
    title: "HERO NUTRISMART",
    text: "Captura pendiente: vista principal de NutriSmart Coach",
    filename: "nutrismart-hero.png",
    path: `${screenshotBasePath}/nutrismart-hero.png`,
    alt: "Vista principal de NutriSmart Coach",
    src: nutrismartHeroImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  problem: {
    key: "problem",
    title: "PROBLEMA / REGISTRO MANUAL",
    text: "Captura pendiente: experiencia previa al análisis o pantalla de registro",
    filename: "nutrismart-problem.png",
    path: `${screenshotBasePath}/nutrismart-problem.png`,
    alt: "Experiencia previa al análisis o pantalla de registro",
    src: nutrismartProblemImage,
    aspect: "823 / 1350",
    fit: "contain",
    position: "top",
  },
  dashboard: {
    key: "dashboard",
    title: "SOLUCIÓN / DASHBOARD",
    text: "Captura pendiente: vista principal del dashboard",
    filename: "nutrismart-dashboard.jpeg",
    path: `${screenshotBasePath}/nutrismart-dashboard.jpeg`,
    alt: "Dashboard principal de NutriSmart Coach",
    src: nutrismartDashboardImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  analysis: {
    key: "analysis",
    title: "SOLUCIÓN / ANÁLISIS IA",
    text: "Captura pendiente: resultado del análisis nutricional",
    filename: "nutrismart-analysis.jpeg",
    path: `${screenshotBasePath}/nutrismart-analysis.jpeg`,
    alt: "Resultado del análisis nutricional de una comida en NutriSmart Coach",
    src: nutrismartAnalysisImage,
    aspect: "1004 / 2048",
    fit: "contain",
    position: "top",
  },
  camera: {
    key: "camera",
    title: "CÁMARA",
    text: "Captura pendiente: captura de comida con cámara",
    filename: "nutrismart-hero.png",
    path: `${screenshotBasePath}/nutrismart-hero.png`,
    alt: "Captura de comida con cámara",
    src: nutrismartCameraImage,
    aspect: "672 / 1324",
    fit: "contain",
    position: "top",
  },
  result: {
    key: "result",
    title: "RESULTADO",
    text: "Captura pendiente: información nutricional generada",
    filename: "nutrismart-result.webp",
    path: `${screenshotBasePath}/nutrismart-result.webp`,
    alt: "Información nutricional generada",
    aspect: "9 / 16",
  },
  history: {
    key: "history",
    title: "HISTORIAL",
    text: "Captura pendiente: historial de análisis",
    filename: "nutrismart-history.webp",
    path: `${screenshotBasePath}/nutrismart-history.webp`,
    alt: "Historial de análisis de NutriSmart Coach",
    aspect: "9 / 16",
  },
  diet: {
    key: "diet",
    title: "DIETA",
    text: "Captura pendiente: dieta personalizada generada con IA",
    filename: "nutrismart-diet.jpeg",
    path: `${screenshotBasePath}/nutrismart-diet.jpeg`,
    alt: "Dieta personalizada generada con inteligencia artificial en NutriSmart Coach",
    src: nutrismartDietImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  workout: {
    key: "workout",
    title: "RUTINA",
    text: "Captura pendiente: rutina de entrenamiento personalizada",
    filename: "nutrismart-workout.jpeg",
    path: `${screenshotBasePath}/nutrismart-workout.jpeg`,
    alt: "Rutina de entrenamiento personalizada en NutriSmart Coach",
    src: nutrismartWorkoutImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  progress: {
    key: "progress",
    title: "PROGRESO",
    text: "Captura pendiente: seguimiento del progreso",
    filename: "nutrismart-hero.png",
    path: `${screenshotBasePath}/nutrismart-hero.png`,
    alt: "Seguimiento del progreso en NutriSmart Coach",
    aspect: "16 / 10",
  },
};

export const projectFacts = [
  { label: "Rol", value: "Full Stack Developer" },
  { label: "Tipo", value: "Producto propio" },
  { label: "Estado", value: "Demo publicada" },
  { label: "Plataformas", value: "Web y móvil" },
  { label: "Stack principal", value: "React · Node.js · Supabase · PostgreSQL · Google Gemini · Capacitor" },
  { label: "Responsabilidad", value: "Desarrollo de extremo a extremo" },
];

export const objectives = [
  { text: "Simplificar el registro mediante fotografías.", icon: FaCamera },
  { text: "Automatizar el análisis nutricional.", icon: FaBrain },
  { text: "Generar dietas personalizadas.", icon: FaUtensils },
  { text: "Crear rutinas de entrenamiento.", icon: FaDumbbell },
  { text: "Centralizar el progreso.", icon: FaChartLine },
  { text: "Funcionar en web y móvil.", icon: FaMobileAlt },
];

export const responsibilities = [
  {
    title: "Producto y arquitectura",
    items: ["Diseño de la arquitectura.", "Visión global del flujo."],
  },
  {
    title: "Frontend",
    items: ["React.", "Experiencia de usuario.", "Responsive."],
  },
  {
    title: "Backend y datos",
    items: ["Node.js.", "Express.", "Supabase.", "PostgreSQL.", "Autenticación."],
  },
  {
    title: "Inteligencia artificial",
    items: ["Google Gemini.", "Análisis y generación de contenido."],
  },
  {
    title: "Mobile y despliegue",
    items: ["Capacitor.", "Vercel.", "Render.", "Experiencia móvil."],
  },
];

export const stackLayers = [
  { title: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Context API"], icons: [SiReact, SiVite, SiTailwindcss] },
  { title: "Backend", items: ["Node.js", "Express"], icons: [SiNodedotjs, SiExpress] },
  { title: "Datos", items: ["Supabase", "PostgreSQL"], icons: [SiSupabase, SiPostgresql] },
  { title: "Inteligencia artificial", items: ["Google Gemini"], icons: [SiGooglegemini] },
  { title: "Mobile", items: ["Capacitor"], icons: [SiCapacitor] },
  { title: "Infraestructura", items: ["Vercel", "Render"], icons: [SiVercel, SiRender] },
];

export const architectureFlow = [
  "Usuario",
  "React + Vite",
  "Node.js + Express",
  "Supabase",
  "Google Gemini",
  "Resultado nutricional",
  "Usuario",
];

export const supabaseBranches = ["Auth", "PostgreSQL", "Storage"];

export const userFlow = [
  "Iniciar sesión.",
  "Tomar una fotografía o elegir una imagen.",
  "Optimizar la imagen.",
  "Enviar la solicitud a la API.",
  "Analizar con Google Gemini.",
  "Calcular información nutricional.",
  "Generar recomendaciones cuando corresponda.",
  "Guardar el resultado.",
  "Consultar historial y progreso.",
];

export const technicalDecisions = [
  {
    name: "React",
    icon: SiReact,
    decision: "Frontend basado en componentes.",
    reason: "Facilita el mantenimiento, la reutilización de código y la evolución del producto.",
  },
  {
    name: "Node.js y Express",
    icon: SiNodedotjs,
    decision: "API central para la lógica de negocio.",
    reason: "Permitieron construir una API sencilla y flexible para centralizar la lógica de negocio y la comunicación con los distintos servicios.",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    decision: "Autenticación, datos y almacenamiento en un mismo servicio.",
    reason: "Se utilizó para unificar autenticación, base de datos PostgreSQL y almacenamiento de archivos, reduciendo la complejidad de la infraestructura.",
  },
  {
    name: "Google Gemini",
    icon: SiGooglegemini,
    decision: "IA para interpretar imágenes y generar contenido.",
    reason: "Se integró para interpretar imágenes y generar respuestas contextualizadas relacionadas con nutrición, alimentación y entrenamiento.",
  },
  {
    name: "Capacitor",
    icon: SiCapacitor,
    decision: "Adaptación móvil reutilizando código web.",
    reason: "Permitió reutilizar gran parte del código de la aplicación web para ofrecer una experiencia móvil con acceso a funcionalidades nativas como la cámara.",
  },
];

export const technicalChallenges = [
  {
    challenge: "Análisis de imágenes con IA.",
    approach: "Integrar Google Gemini en el flujo de análisis nutricional.",
    impact: "La aplicación conecta captura, backend e IA en una experiencia única.",
  },
  {
    challenge: "Tiempos de respuesta.",
    approach: "Mantener un flujo que procese la solicitud sin romper la experiencia de usuario.",
    impact: "El usuario recibe una respuesta dentro del mismo recorrido de análisis.",
  },
  {
    challenge: "Optimización de fotografías.",
    approach: "Optimizar el tamaño de las imágenes antes de enviarlas al servidor.",
    impact: "Reduce consumo de recursos en el envío y procesamiento.",
  },
  {
    challenge: "Funcionamiento web y Android.",
    approach: "Diseñar un flujo compatible con navegador y aplicación móvil mediante Capacitor.",
    impact: "La misma base del producto puede usarse en web y móvil.",
  },
  {
    challenge: "Autenticación y persistencia.",
    approach: "Gestionar usuarios y datos con Supabase y PostgreSQL.",
    impact: "Permite guardar resultados, historial y progreso del usuario.",
  },
  {
    challenge: "Coordinación frontend, backend e IA.",
    approach: "Centralizar la comunicación en la API y conectar servicios externos sin exponer la complejidad al usuario.",
    impact: "El flujo técnico queda organizado detrás de una experiencia simple.",
  },
  {
    challenge: "Experiencia móvil.",
    approach: "Adaptar la interfaz para facilitar el uso desde dispositivos móviles.",
    impact: "El análisis mediante cámara encaja con el contexto de uso del producto.",
  },
];

export const features = [
  { text: "Análisis mediante fotografías.", icon: FaCamera },
  { text: "Calorías y macronutrientes.", icon: FaChartLine },
  { text: "Dietas personalizadas.", icon: FaUtensils },
  { text: "Rutinas de entrenamiento.", icon: FaDumbbell },
  { text: "Historial.", icon: FaImage },
  { text: "Seguimiento del progreso.", icon: FaChartLine },
  { text: "Autenticación.", icon: FaLock },
  { text: "Web y móvil.", icon: FaMobileAlt },
  { text: "Integración con IA.", icon: FaBrain },
];

export const learnings = [
  "NutriSmart Coach me permitió consolidar una visión más completa del desarrollo Full Stack.",
  "Además de construir interfaces y APIs, tuve que tomar decisiones relacionadas con arquitectura, experiencia de usuario, integración de inteligencia artificial, despliegue y adaptación a dispositivos móviles.",
  "El proyecto reforzó mi capacidad para abordar un producto desde una perspectiva global, entendiendo cómo interactúan el frontend, el backend, la base de datos y los servicios externos para ofrecer una experiencia coherente al usuario.",
];

export const roadmap = [
  "Integración con dispositivos y wearables para sincronizar actividad física.",
  "Planificación semanal automática de comidas y entrenamientos.",
  "Recomendaciones más personalizadas basadas en el historial del usuario.",
  "Estadísticas avanzadas sobre nutrición y rendimiento.",
  "Nuevas capacidades de inteligencia artificial con mayor contexto del usuario.",
  "Compartir el progreso con nutricionistas o entrenadores.",
];

export const externalIcon = FaExternalLinkAlt;
