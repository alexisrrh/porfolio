import {
  FaCalendarAlt,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaLock,
  FaNotesMedical,
  FaRegUser,
  FaRoute,
  FaShieldAlt,
  FaTable,
  FaTeeth,
  FaUserMd,
} from "react-icons/fa";
import {
  SiReact,
  SiReactrouter,
  SiSupabase,
  SiVercel,
  SiVite,
} from "react-icons/si";

import agendarImage from "../assets/odontologia/agendarImg.png";
import calendarioImage from "../assets/odontologia/calendario-citas.png";
import dashboardImage from "../assets/odontologia/dashboard.png";
import homeImage from "../assets/odontologia/home2.png";
import loginImage from "../assets/odontologia/login.png";
import misCitasImage from "../assets/odontologia/mis-citas.png";
import presupuestoImage from "../assets/odontologia/presupuesto.png";
import lacFlowOneImage from "../assets/case-studies/lac/lac-1.png";
import lacFlowTwoImage from "../assets/case-studies/lac/lac-2.png";
import lacFlowThreeImage from "../assets/case-studies/lac/lac-3.png";

export const lacImages = {
  hero: {
    src: dashboardImage,
    alt: "Dashboard medico de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  problem: {
    src: homeImage,
    alt: "Vista inicial de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  solution: {
    src: calendarioImage,
    alt: "Agenda de citas de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  patient: {
    src: misCitasImage,
    alt: "Listado de citas del paciente en Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  doctor: {
    src: dashboardImage,
    alt: "Panel de gestion medica de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  login: {
    src: loginImage,
    alt: "Pantalla de inicio de sesion de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  appointment: {
    src: agendarImage,
    alt: "Formulario para agendar cita en Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  budget: {
    src: presupuestoImage,
    alt: "Modulo de presupuesto en Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
};

export const lacTech = [
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "React Router", icon: SiReactrouter },
  { name: "Context API", icon: FaRoute },
  { name: "Supabase Auth", icon: FaLock },
  { name: "Supabase Database", icon: SiSupabase },
  { name: "Vercel", icon: SiVercel },
];

export const lacFacts = [
  { label: "Tipo", value: "Aplicacion web de gestion clinica" },
  { label: "Roles", value: "Cliente y medico" },
  { label: "Datos", value: "Pacientes, citas, perfiles e informacion clinica" },
  { label: "Autenticacion", value: "Supabase Auth con rutas protegidas" },
];

export const lacProblem = [
  "La gestion de un consultorio odontologico puede implicar informacion separada entre datos de pacientes, agenda, historial clinico, observaciones, tratamientos y presupuestos.",
  "El proyecto aborda esa coordinacion reuniendo los datos operativos y clinicos en una aplicacion web con autenticacion y rutas protegidas.",
];

export const lacSolution = [
  "La aplicacion organiza el trabajo en dos areas principales: el cliente puede crear cuenta, iniciar sesion, solicitar una cita y revisar sus citas.",
  "El medico accede a un panel protegido donde puede revisar citas, consultar pacientes, completar fichas clinicas, revisar historiales, trabajar con odontograma y preparar presupuestos.",
  "El valor del producto esta en conectar autenticacion, roles, agenda y datos clinicos dentro de una experiencia unica, evitando que cada proceso quede aislado.",
];

export const roleExperiences = [
  {
    role: "Paciente",
    description:
      "Una experiencia centrada en acceso, consulta de citas y documentacion asociada al paciente.",
    icon: FaRegUser,
    image: lacImages.patient,
    items: [
      "Inicio de sesion",
      "Recuperacion de contrasena",
      "Consulta de citas",
      "Presupuestos",
      "Consentimientos",
    ],
  },
  {
    role: "Medico",
    description:
      "Un panel de trabajo para revisar agenda, pacientes e informacion clinica desde rutas protegidas.",
    icon: FaUserMd,
    image: lacImages.doctor,
    items: [
      "Dashboard",
      "Gestion de pacientes",
      "Agenda",
      "Historial clinico",
      "Odontograma",
      "Presupuestos",
      "Consentimientos",
    ],
  },
];

export const mainFlow = [
  "Login",
  "Dashboard",
  "Pacientes",
  "Ficha clinica",
  "Odontograma",
  "Citas",
  "Presupuesto",
  "Consentimiento",
];

export const featureCards = [
  {
    title: "Autenticacion",
    text: "Registro, login, recuperación de contraseña y sesión con Supabase Auth.",
    icon: FaShieldAlt,
  },
  {
    title: "Pacientes",
    text: "Listado, búsqueda, creación, actualización y eliminación.",
    icon: FaRegUser,
  },
  {
    title: "Citas",
    text: "Agenda con validación de fecha, horario y disponibilidad.",
    icon: FaCalendarAlt,
  },
  {
    title: "Historial",
    text: "Consulta de datos clinicos guardados en modo lectura.",
    icon: FaNotesMedical,
  },
  {
    title: "Odontograma",
    text: "Representación visual de piezas dentales con estados.",
    icon: FaTeeth,
  },
  {
    title: "Consentimientos",
    text: "Documento imprimible asociado al procedimiento odontológico.",
    icon: FaClipboardCheck,
  },
  {
    title: "Presupuestos",
    text: "Tratamientos, cantidades, totales, impresión y descarga PDF.",
    icon: FaFileInvoiceDollar,
  },
  {
    title: "Dashboard",
    text: "Resumen de citas, pacientes y proximas acciones del rol medico.",
    icon: FaTable,
  },
];

export const architectureFlow = [
  "Usuario",
  "React + Vite",
  "React Router",
  "Context API",
  "Supabase Auth",
  "Supabase Database",
  "Panel Medico / Paciente",
];

export const technicalDecisions = [
  {
    name: "React y Vite",
    icon: SiReact,
    decision: "Interfaz SPA organizada por paginas y componentes.",
    reason:
      "La aplicacion usa pantallas separadas, componentes clinicos y servicios desacoplados para organizar flujos de cliente y medico.",
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    decision: "Separacion de rutas publicas, de cliente y de medico.",
    reason:
      "Las rutas protegidas permiten diferenciar acceso a citas de cliente y modulos medicos.",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    decision: "Autenticacion y persistencia desde un servicio backend gestionado.",
    reason:
      "El codigo usa Supabase Auth para sesion y servicios de datos para operar sobre tablas.",
  },
  {
    name: "Context API",
    icon: FaRoute,
    decision: "Estado global de usuario, perfil y carga.",
    reason:
      "El contexto expone la sesion y el rol que necesitan las rutas protegidas.",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    decision: "Despliegue de SPA con rewrite de rutas internas.",
    reason:
      "La configuracion de Vercel permite recargar rutas de la aplicacion sin romper la navegacion.",
  },
];

export const technicalChallenges = [
  {
    challenge: "Sincronizacion entre usuario y perfil",
    approach:
      "El contexto consulta `profiles` y crea un perfil si el usuario autenticado no lo tiene.",
    result:
      "Las rutas protegidas pueden decidir el acceso usando el rol del perfil.",
  },
  {
    challenge: "Proteccion por rol",
    approach:
      "`ProtectedRoute` recibe roles permitidos y redirige si el usuario no corresponde.",
    result:
      "Los modulos de cliente y medico quedan separados dentro de la aplicacion.",
  },
  {
    challenge: "Validacion de citas",
    approach:
      "La pagina y el servicio validan fecha, horario y disponibilidad por medico, fecha y hora.",
    result:
      "El sistema evita registrar citas pasadas o bloques ocupados.",
  },
  {
    challenge: "Relacion entre usuario, paciente y cita",
    approach:
      "Al agendar, se busca el paciente por `profile_id` y se crea si no existe.",
    result:
      "La cita queda vinculada a cliente, medico y paciente.",
  },
  {
    challenge: "Formularios clinicos extensos",
    approach:
      "La ficha agrupa datos personales, antecedentes, examen clinico, riesgo, diagnostico, tratamiento y odontograma.",
    result:
      "El historial puede presentar informacion clinica guardada en modo lectura.",
  },
  {
    challenge: "Odontograma interactivo",
    approach:
      "Los componentes de odontograma y diente separan visualizacion e interaccion por pieza.",
    result:
      "La ficha permite editar estados y el historial puede renderizar el odontograma.",
  },
];

export const learnings = [
  "Este proyecto permite documentar aprendizaje practico en flujos administrativos y clinicos con datos relacionados.",
  "El alcance incluye autenticacion, rutas protegidas, formularios extensos, estados de carga y error, sincronizacion entre usuario y perfil, gestion de pacientes y citas, y organizacion de componentes para modulos de negocio concretos.",
  "Tambien refuerza la importancia de separar responsabilidades: autenticacion en contexto, validaciones en servicios, pantallas por rol y componentes especializados para ficha, historial, odontograma y presupuesto.",
];

export const roadmap = [
  "Recordatorios para citas",
  "Permisos mas detallados dentro del area medica",
  "Informes clinicos o administrativos",
  "Auditoria de cambios en datos sensibles",
  "Mejoras de accesibilidad en formularios y tablas",
  "Notificaciones en tiempo real",
  "Agenda visual tipo calendario",
  "Soporte multi-medico",
];

export const secondaryScreens = [
  {
    src: lacFlowOneImage,
    alt: "Primera captura del flujo principal de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  {
    src: lacFlowTwoImage,
    alt: "Segunda captura del flujo principal de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
  {
    src: lacFlowThreeImage,
    alt: "Tercera captura del flujo principal de Consultorio Odontologico LAC",
    fit: "contain",
    position: "top",
  },
];
