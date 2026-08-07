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
const tr = (es, en) => ({ es, en });

export const nutrismartMainTech = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Google Gemini", icon: SiGooglegemini },
  { name: "Capacitor", icon: SiCapacitor },
];

export const nutrismartIntro = [
  tr("NutriSmart Coach es una plataforma diseñada para ayudar a las personas a mejorar sus hábitos alimenticios y su condición física mediante inteligencia artificial.", "NutriSmart Coach is a platform designed to help people improve their eating habits and physical condition through artificial intelligence."),
  tr("La aplicación permite analizar comidas a partir de una fotografía, calcular información nutricional, generar dietas y rutinas de entrenamiento personalizadas y realizar un seguimiento continuo del progreso del usuario desde una única plataforma.", "The application analyzes meals from a photo, calculates nutritional information, generates personalized diets and training routines, and continuously tracks user progress from one platform."),
  tr("El objetivo no era desarrollar únicamente un analizador de alimentos, sino crear una herramienta que reuniera en un solo lugar distintas funcionalidades relacionadas con la nutrición, el entrenamiento y el seguimiento personal.", "The goal was not only to build a food analyzer, but to create a tool that brings nutrition, training, and personal tracking features into one place."),
];

export const nutrismartProblem = [
  tr("Muchas personas quieren mejorar su alimentación o alcanzar un objetivo físico, pero mantener un seguimiento constante suele resultar complicado.", "Many people want to improve their nutrition or reach a fitness goal, but keeping consistent tracking is often difficult."),
  tr("Las aplicaciones tradicionales obligan al usuario a introducir manualmente cada alimento, buscar productos en bases de datos o utilizar herramientas diferentes para controlar la dieta, el entrenamiento y el progreso.", "Traditional applications force users to manually enter each food, search databases, or use separate tools to manage diet, training, and progress."),
  tr("Este proceso consume tiempo, genera fricción y hace que muchas personas abandonen el seguimiento después de pocos días.", "That process takes time, creates friction, and leads many people to stop tracking after only a few days."),
  tr("Además, conocer únicamente las calorías de una comida no siempre es suficiente para tomar mejores decisiones. Los usuarios también necesitan entender el equilibrio nutricional de cada plato y recibir recomendaciones adaptadas a sus objetivos.", "Also, knowing only the calories in a meal is not always enough to make better decisions. Users also need to understand each dish's nutritional balance and receive recommendations adapted to their goals."),
];

export const nutrismartSolution = [
  tr("NutriSmart Coach reúne estas necesidades en una única plataforma.", "NutriSmart Coach brings these needs together in one platform."),
  tr("El usuario solo necesita tomar una fotografía de su comida para que la aplicación la analice mediante inteligencia artificial y obtenga información nutricional relevante.", "The user only needs to take a photo of a meal so the application can analyze it with artificial intelligence and return relevant nutritional information."),
  tr("A partir de ese análisis, la plataforma puede generar recomendaciones personalizadas, crear planes de alimentación y proponer rutinas de entrenamiento adaptadas al objetivo del usuario, además de registrar toda la información para facilitar el seguimiento de su evolución.", "From that analysis, the platform can generate personalized recommendations, create meal plans, propose training routines adapted to the user's goal, and store the information to make progress tracking easier."),
  tr("El propósito del producto es reducir el esfuerzo necesario para mantener hábitos saludables y ofrecer una experiencia sencilla, rápida y personalizada.", "The product's purpose is to reduce the effort required to maintain healthy habits and provide a simple, fast, personalized experience."),
];

export const screenshotPlaceholders = {
  hero: {
    key: "hero",
    title: "HERO NUTRISMART",
    text: tr("Captura pendiente: vista principal de NutriSmart Coach", "Pending screenshot: main view of NutriSmart Coach"),
    filename: "nutrismart-hero.png",
    path: `${screenshotBasePath}/nutrismart-hero.png`,
    alt: tr("Vista principal de NutriSmart Coach", "Main view of NutriSmart Coach"),
    src: nutrismartHeroImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  problem: {
    key: "problem",
    title: tr("PROBLEMA / REGISTRO MANUAL", "PROBLEM / MANUAL TRACKING"),
    text: tr("Captura pendiente: experiencia previa al análisis o pantalla de registro", "Pending screenshot: experience before analysis or registration screen"),
    filename: "nutrismart-problem.png",
    path: `${screenshotBasePath}/nutrismart-problem.png`,
    alt: tr("Experiencia previa al análisis o pantalla de registro", "Experience before analysis or registration screen"),
    src: nutrismartProblemImage,
    aspect: "823 / 1350",
    fit: "contain",
    position: "top",
  },
  dashboard: {
    key: "dashboard",
    title: tr("SOLUCIÓN / DASHBOARD", "SOLUTION / DASHBOARD"),
    text: tr("Captura pendiente: vista principal del dashboard", "Pending screenshot: main dashboard view"),
    filename: "nutrismart-dashboard.jpeg",
    path: `${screenshotBasePath}/nutrismart-dashboard.jpeg`,
    alt: tr("Dashboard principal de NutriSmart Coach", "Main dashboard of NutriSmart Coach"),
    src: nutrismartDashboardImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  analysis: {
    key: "analysis",
    title: tr("SOLUCIÓN / ANÁLISIS IA", "SOLUTION / AI ANALYSIS"),
    text: tr("Captura pendiente: resultado del análisis nutricional", "Pending screenshot: nutritional analysis result"),
    filename: "nutrismart-analysis.jpeg",
    path: `${screenshotBasePath}/nutrismart-analysis.jpeg`,
    alt: tr("Resultado del análisis nutricional de una comida en NutriSmart Coach", "Nutritional analysis result for a meal in NutriSmart Coach"),
    src: nutrismartAnalysisImage,
    aspect: "1004 / 2048",
    fit: "contain",
    position: "top",
  },
  camera: {
    key: "camera",
    title: tr("CÁMARA", "CAMERA"),
    text: tr("Captura pendiente: captura de comida con cámara", "Pending screenshot: meal capture with camera"),
    filename: "nutrismart-hero.png",
    path: `${screenshotBasePath}/nutrismart-hero.png`,
    alt: tr("Captura de comida con cámara", "Meal capture with camera"),
    src: nutrismartCameraImage,
    aspect: "672 / 1324",
    fit: "contain",
    position: "top",
  },
  result: {
    key: "result",
    title: tr("RESULTADO", "RESULT"),
    text: tr("Captura pendiente: información nutricional generada", "Pending screenshot: generated nutritional information"),
    filename: "nutrismart-result.webp",
    path: `${screenshotBasePath}/nutrismart-result.webp`,
    alt: tr("Información nutricional generada", "Generated nutritional information"),
    aspect: "9 / 16",
  },
  history: {
    key: "history",
    title: tr("HISTORIAL", "HISTORY"),
    text: tr("Captura pendiente: historial de análisis", "Pending screenshot: analysis history"),
    filename: "nutrismart-history.webp",
    path: `${screenshotBasePath}/nutrismart-history.webp`,
    alt: tr("Historial de análisis de NutriSmart Coach", "Analysis history in NutriSmart Coach"),
    aspect: "9 / 16",
  },
  diet: {
    key: "diet",
    title: tr("DIETA", "DIET"),
    text: tr("Captura pendiente: dieta personalizada generada con IA", "Pending screenshot: personalized diet generated with AI"),
    filename: "nutrismart-diet.jpeg",
    path: `${screenshotBasePath}/nutrismart-diet.jpeg`,
    alt: tr("Dieta personalizada generada con inteligencia artificial en NutriSmart Coach", "Personalized diet generated with artificial intelligence in NutriSmart Coach"),
    src: nutrismartDietImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  workout: {
    key: "workout",
    title: tr("RUTINA", "ROUTINE"),
    text: tr("Captura pendiente: rutina de entrenamiento personalizada", "Pending screenshot: personalized training routine"),
    filename: "nutrismart-workout.jpeg",
    path: `${screenshotBasePath}/nutrismart-workout.jpeg`,
    alt: tr("Rutina de entrenamiento personalizada en NutriSmart Coach", "Personalized training routine in NutriSmart Coach"),
    src: nutrismartWorkoutImage,
    aspect: "943 / 2048",
    fit: "contain",
    position: "top",
  },
  progress: {
    key: "progress",
    title: tr("PROGRESO", "PROGRESS"),
    text: tr("Captura pendiente: seguimiento del progreso", "Pending screenshot: progress tracking"),
    filename: "nutrismart-hero.png",
    path: `${screenshotBasePath}/nutrismart-hero.png`,
    alt: tr("Seguimiento del progreso en NutriSmart Coach", "Progress tracking in NutriSmart Coach"),
    aspect: "16 / 10",
  },
};

export const projectFacts = [
  { label: tr("Rol", "Role"), value: "Full Stack Developer" },
  { label: tr("Tipo", "Type"), value: tr("Producto propio", "Own product") },
  { label: tr("Estado", "Status"), value: tr("Demo publicada", "Published demo") },
  { label: tr("Plataformas", "Platforms"), value: tr("Web y móvil", "Web and mobile") },
  { label: tr("Stack principal", "Main stack"), value: "React · Node.js · Supabase · PostgreSQL · Google Gemini · Capacitor" },
  { label: tr("Responsabilidad", "Responsibility"), value: tr("Desarrollo de extremo a extremo", "End-to-end development") },
];

export const objectives = [
  { text: tr("Simplificar el registro mediante fotografías.", "Simplify tracking through photos."), icon: FaCamera },
  { text: tr("Automatizar el análisis nutricional.", "Automate nutritional analysis."), icon: FaBrain },
  { text: tr("Generar dietas personalizadas.", "Generate personalized diets."), icon: FaUtensils },
  { text: tr("Crear rutinas de entrenamiento.", "Create training routines."), icon: FaDumbbell },
  { text: tr("Centralizar el progreso.", "Centralize progress tracking."), icon: FaChartLine },
  { text: tr("Funcionar en web y móvil.", "Work on web and mobile."), icon: FaMobileAlt },
];

export const responsibilities = [
  {
    title: tr("Producto y arquitectura", "Product and architecture"),
    items: [tr("Diseño de la arquitectura.", "Architecture design."), tr("Visión global del flujo.", "Global view of the flow.")],
  },
  {
    title: "Frontend",
    items: ["React.", tr("Experiencia de usuario.", "User experience."), "Responsive."],
  },
  {
    title: tr("Backend y datos", "Backend and data"),
    items: ["Node.js.", "Express.", "Supabase.", "PostgreSQL.", tr("Autenticación.", "Authentication.")],
  },
  {
    title: tr("Inteligencia artificial", "Artificial intelligence"),
    items: ["Google Gemini.", tr("Análisis y generación de contenido.", "Content analysis and generation.")],
  },
  {
    title: tr("Mobile y despliegue", "Mobile and deployment"),
    items: ["Capacitor.", "Vercel.", "Render.", tr("Experiencia móvil.", "Mobile experience.")],
  },
];

export const stackLayers = [
  { title: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Context API"], icons: [SiReact, SiVite, SiTailwindcss] },
  { title: "Backend", items: ["Node.js", "Express"], icons: [SiNodedotjs, SiExpress] },
  { title: tr("Datos", "Data"), items: ["Supabase", "PostgreSQL"], icons: [SiSupabase, SiPostgresql] },
  { title: tr("Inteligencia artificial", "Artificial intelligence"), items: ["Google Gemini"], icons: [SiGooglegemini] },
  { title: "Mobile", items: ["Capacitor"], icons: [SiCapacitor] },
  { title: tr("Infraestructura", "Infrastructure"), items: ["Vercel", "Render"], icons: [SiVercel, SiRender] },
];

export const architectureFlow = [
  tr("Usuario", "User"),
  "React + Vite",
  "Node.js + Express",
  "Supabase",
  "Google Gemini",
  tr("Resultado nutricional", "Nutritional result"),
  tr("Usuario", "User"),
];

export const supabaseBranches = ["Auth", "PostgreSQL", "Storage"];

export const userFlow = [
  tr("Iniciar sesión.", "Sign in."),
  tr("Tomar una fotografía o elegir una imagen.", "Take a photo or choose an image."),
  tr("Optimizar la imagen.", "Optimize the image."),
  tr("Enviar la solicitud a la API.", "Send the request to the API."),
  tr("Analizar con Google Gemini.", "Analyze with Google Gemini."),
  tr("Calcular información nutricional.", "Calculate nutritional information."),
  tr("Generar recomendaciones cuando corresponda.", "Generate recommendations when appropriate."),
  tr("Guardar el resultado.", "Save the result."),
  tr("Consultar historial y progreso.", "Review history and progress."),
];

export const technicalDecisions = [
  {
    name: "React",
    icon: SiReact,
    decision: tr("Frontend basado en componentes.", "Component-based frontend."),
    reason: tr("Facilita el mantenimiento, la reutilización de código y la evolución del producto.", "It makes maintenance, code reuse, and product evolution easier."),
  },
  {
    name: tr("Node.js y Express", "Node.js and Express"),
    icon: SiNodedotjs,
    decision: tr("API central para la lógica de negocio.", "Central API for business logic."),
    reason: tr("Permitieron construir una API sencilla y flexible para centralizar la lógica de negocio y la comunicación con los distintos servicios.", "They made it possible to build a simple, flexible API to centralize business logic and communication with the different services."),
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    decision: tr("Autenticación, datos y almacenamiento en un mismo servicio.", "Authentication, data, and storage in one service."),
    reason: tr("Se utilizó para unificar autenticación, base de datos PostgreSQL y almacenamiento de archivos, reduciendo la complejidad de la infraestructura.", "It was used to unify authentication, the PostgreSQL database, and file storage, reducing infrastructure complexity."),
  },
  {
    name: "Google Gemini",
    icon: SiGooglegemini,
    decision: tr("IA para interpretar imágenes y generar contenido.", "AI to interpret images and generate content."),
    reason: tr("Se integró para interpretar imágenes y generar respuestas contextualizadas relacionadas con nutrición, alimentación y entrenamiento.", "It was integrated to interpret images and generate contextual responses related to nutrition, diet, and training."),
  },
  {
    name: "Capacitor",
    icon: SiCapacitor,
    decision: tr("Adaptación móvil reutilizando código web.", "Mobile adaptation by reusing web code."),
    reason: tr("Permitió reutilizar gran parte del código de la aplicación web para ofrecer una experiencia móvil con acceso a funcionalidades nativas como la cámara.", "It made it possible to reuse much of the web application code to provide a mobile experience with access to native features such as the camera."),
  },
];

export const technicalChallenges = [
  {
    challenge: tr("Análisis de imágenes con IA.", "AI image analysis."),
    approach: tr("Integrar Google Gemini en el flujo de análisis nutricional.", "Integrate Google Gemini into the nutritional analysis flow."),
    impact: tr("La aplicación conecta captura, backend e IA en una experiencia única.", "The application connects capture, backend, and AI in a single experience."),
  },
  {
    challenge: tr("Tiempos de respuesta.", "Response times."),
    approach: tr("Mantener un flujo que procese la solicitud sin romper la experiencia de usuario.", "Maintain a flow that processes the request without breaking the user experience."),
    impact: tr("El usuario recibe una respuesta dentro del mismo recorrido de análisis.", "The user receives a response within the same analysis journey."),
  },
  {
    challenge: tr("Optimización de fotografías.", "Photo optimization."),
    approach: tr("Optimizar el tamaño de las imágenes antes de enviarlas al servidor.", "Optimize image size before sending it to the server."),
    impact: tr("Reduce consumo de recursos en el envío y procesamiento.", "It reduces resource consumption during upload and processing."),
  },
  {
    challenge: tr("Funcionamiento web y Android.", "Web and Android operation."),
    approach: tr("Diseñar un flujo compatible con navegador y aplicación móvil mediante Capacitor.", "Design a flow compatible with browser and mobile application through Capacitor."),
    impact: tr("La misma base del producto puede usarse en web y móvil.", "The same product base can be used on web and mobile."),
  },
  {
    challenge: tr("Autenticación y persistencia.", "Authentication and persistence."),
    approach: tr("Gestionar usuarios y datos con Supabase y PostgreSQL.", "Manage users and data with Supabase and PostgreSQL."),
    impact: tr("Permite guardar resultados, historial y progreso del usuario.", "It allows results, history, and user progress to be saved."),
  },
  {
    challenge: tr("Coordinación frontend, backend e IA.", "Frontend, backend, and AI coordination."),
    approach: tr("Centralizar la comunicación en la API y conectar servicios externos sin exponer la complejidad al usuario.", "Centralize communication in the API and connect external services without exposing complexity to the user."),
    impact: tr("El flujo técnico queda organizado detrás de una experiencia simple.", "The technical flow remains organized behind a simple experience."),
  },
  {
    challenge: tr("Experiencia móvil.", "Mobile experience."),
    approach: tr("Adaptar la interfaz para facilitar el uso desde dispositivos móviles.", "Adapt the interface to make it easier to use from mobile devices."),
    impact: tr("El análisis mediante cámara encaja con el contexto de uso del producto.", "Camera-based analysis fits the product's usage context."),
  },
];

export const features = [
  { text: tr("Análisis mediante fotografías.", "Photo-based analysis."), icon: FaCamera },
  { text: tr("Calorías y macronutrientes.", "Calories and macronutrients."), icon: FaChartLine },
  { text: tr("Dietas personalizadas.", "Personalized diets."), icon: FaUtensils },
  { text: tr("Rutinas de entrenamiento.", "Training routines."), icon: FaDumbbell },
  { text: tr("Historial.", "History."), icon: FaImage },
  { text: tr("Seguimiento del progreso.", "Progress tracking."), icon: FaChartLine },
  { text: tr("Autenticación.", "Authentication."), icon: FaLock },
  { text: tr("Web y móvil.", "Web and mobile."), icon: FaMobileAlt },
  { text: tr("Integración con IA.", "AI integration."), icon: FaBrain },
];

export const learnings = [
  tr("NutriSmart Coach me permitió consolidar una visión más completa del desarrollo Full Stack.", "NutriSmart Coach helped me consolidate a more complete view of Full Stack development."),
  tr("Además de construir interfaces y APIs, tuve que tomar decisiones relacionadas con arquitectura, experiencia de usuario, integración de inteligencia artificial, despliegue y adaptación a dispositivos móviles.", "Beyond building interfaces and APIs, I had to make decisions related to architecture, user experience, AI integration, deployment, and mobile adaptation."),
  tr("El proyecto reforzó mi capacidad para abordar un producto desde una perspectiva global, entendiendo cómo interactúan el frontend, el backend, la base de datos y los servicios externos para ofrecer una experiencia coherente al usuario.", "The project strengthened my ability to approach a product from a global perspective, understanding how frontend, backend, database, and external services interact to deliver a coherent user experience."),
];

export const roadmap = [
  tr("Integración con dispositivos y wearables para sincronizar actividad física.", "Integration with devices and wearables to synchronize physical activity."),
  tr("Planificación semanal automática de comidas y entrenamientos.", "Automatic weekly meal and training planning."),
  tr("Recomendaciones más personalizadas basadas en el historial del usuario.", "More personalized recommendations based on user history."),
  tr("Estadísticas avanzadas sobre nutrición y rendimiento.", "Advanced statistics on nutrition and performance."),
  tr("Nuevas capacidades de inteligencia artificial con mayor contexto del usuario.", "New artificial intelligence capabilities with more user context."),
  tr("Compartir el progreso con nutricionistas o entrenadores.", "Share progress with nutritionists or trainers."),
];

export const externalIcon = FaExternalLinkAlt;
