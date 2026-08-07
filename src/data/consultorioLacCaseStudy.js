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

const tr = (es, en) => ({ es, en });

export const lacImages = {
  hero: {
    src: dashboardImage,
    alt: tr("Dashboard medico de Consultorio Odontologico LAC", "Medical dashboard of Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  problem: {
    src: homeImage,
    alt: tr("Vista inicial de Consultorio Odontologico LAC", "Initial view of Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  solution: {
    src: calendarioImage,
    alt: tr("Agenda de citas de Consultorio Odontologico LAC", "Appointment schedule in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  patient: {
    src: misCitasImage,
    alt: tr("Listado de citas del paciente en Consultorio Odontologico LAC", "Patient appointment list in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  doctor: {
    src: dashboardImage,
    alt: tr("Panel de gestion medica de Consultorio Odontologico LAC", "Medical management panel in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  login: {
    src: loginImage,
    alt: tr("Pantalla de inicio de sesion de Consultorio Odontologico LAC", "Sign-in screen of Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  appointment: {
    src: agendarImage,
    alt: tr("Formulario para agendar cita en Consultorio Odontologico LAC", "Appointment booking form in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  budget: {
    src: presupuestoImage,
    alt: tr("Modulo de presupuesto en Consultorio Odontologico LAC", "Budget module in Consultorio Odontológico LAC"),
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
  { label: tr("Tipo", "Type"), value: tr("Aplicacion web de gestion clinica", "Clinical management web application") },
  { label: "Roles", value: tr("Cliente y medico", "Client and doctor") },
  { label: tr("Datos", "Data"), value: tr("Pacientes, citas, perfiles e informacion clinica", "Patients, appointments, profiles, and clinical information") },
  { label: tr("Autenticacion", "Authentication"), value: tr("Supabase Auth con rutas protegidas", "Supabase Auth with protected routes") },
];

export const lacProblem = [
  tr("La gestion de un consultorio odontologico puede implicar informacion separada entre datos de pacientes, agenda, historial clinico, observaciones, tratamientos y presupuestos.", "Managing a dental clinic can involve information split across patient data, schedules, clinical history, notes, treatments, and budgets."),
  tr("El proyecto aborda esa coordinacion reuniendo los datos operativos y clinicos en una aplicacion web con autenticacion y rutas protegidas.", "The project addresses that coordination by bringing operational and clinical data into a web application with authentication and protected routes."),
];

export const lacSolution = [
  tr("La aplicacion organiza el trabajo en dos areas principales: el cliente puede crear cuenta, iniciar sesion, solicitar una cita y revisar sus citas.", "The application organizes work into two main areas: the client can create an account, sign in, request an appointment, and review appointments."),
  tr("El medico accede a un panel protegido donde puede revisar citas, consultar pacientes, completar fichas clinicas, revisar historiales, trabajar con odontograma y preparar presupuestos.", "The doctor accesses a protected panel to review appointments, consult patients, complete clinical records, review histories, work with an odontogram, and prepare budgets."),
  tr("El valor del producto esta en conectar autenticacion, roles, agenda y datos clinicos dentro de una experiencia unica, evitando que cada proceso quede aislado.", "The product value is in connecting authentication, roles, scheduling, and clinical data within one experience, preventing each process from remaining isolated."),
];

export const roleExperiences = [
  {
    role: tr("Paciente", "Patient"),
    description:
      tr("Una experiencia centrada en acceso, consulta de citas y documentacion asociada al paciente.", "An experience focused on access, appointment review, and patient-related documentation."),
    icon: FaRegUser,
    image: lacImages.patient,
    items: [
      tr("Inicio de sesion", "Sign-in"),
      tr("Recuperacion de contrasena", "Password recovery"),
      tr("Consulta de citas", "Appointment review"),
      tr("Presupuestos", "Budgets"),
      tr("Consentimientos", "Consents"),
    ],
  },
  {
    role: tr("Medico", "Doctor"),
    description:
      tr("Un panel de trabajo para revisar agenda, pacientes e informacion clinica desde rutas protegidas.", "A work panel for reviewing schedule, patients, and clinical information from protected routes."),
    icon: FaUserMd,
    image: lacImages.doctor,
    items: [
      "Dashboard",
      tr("Gestion de pacientes", "Patient management"),
      tr("Agenda", "Schedule"),
      tr("Historial clinico", "Clinical history"),
      tr("Odontograma", "Odontogram"),
      tr("Presupuestos", "Budgets"),
      tr("Consentimientos", "Consents"),
    ],
  },
];

export const mainFlow = [
  "Login",
  "Dashboard",
  tr("Pacientes", "Patients"),
  tr("Ficha clinica", "Clinical record"),
  tr("Odontograma", "Odontogram"),
  tr("Citas", "Appointments"),
  tr("Presupuesto", "Budget"),
  tr("Consentimiento", "Consent"),
];

export const featureCards = [
  {
    title: tr("Autenticacion", "Authentication"),
    text: tr("Registro, login, recuperación de contraseña y sesión con Supabase Auth.", "Registration, login, password recovery, and session handling with Supabase Auth."),
    icon: FaShieldAlt,
  },
  {
    title: tr("Pacientes", "Patients"),
    text: tr("Listado, búsqueda, creación, actualización y eliminación.", "Listing, search, creation, update, and deletion."),
    icon: FaRegUser,
  },
  {
    title: tr("Citas", "Appointments"),
    text: tr("Agenda con validación de fecha, horario y disponibilidad.", "Schedule with date, time, and availability validation."),
    icon: FaCalendarAlt,
  },
  {
    title: tr("Historial", "History"),
    text: tr("Consulta de datos clinicos guardados en modo lectura.", "Read-only review of saved clinical data."),
    icon: FaNotesMedical,
  },
  {
    title: tr("Odontograma", "Odontogram"),
    text: tr("Representación visual de piezas dentales con estados.", "Visual representation of dental pieces with states."),
    icon: FaTeeth,
  },
  {
    title: tr("Consentimientos", "Consents"),
    text: tr("Documento imprimible asociado al procedimiento odontológico.", "Printable document associated with the dental procedure."),
    icon: FaClipboardCheck,
  },
  {
    title: tr("Presupuestos", "Budgets"),
    text: tr("Tratamientos, cantidades, totales, impresión y descarga PDF.", "Treatments, quantities, totals, printing, and PDF download."),
    icon: FaFileInvoiceDollar,
  },
  {
    title: "Dashboard",
    text: tr("Resumen de citas, pacientes y proximas acciones del rol medico.", "Summary of appointments, patients, and upcoming actions for the doctor role."),
    icon: FaTable,
  },
];

export const architectureFlow = [
  tr("Usuario", "User"),
  "React + Vite",
  "React Router",
  "Context API",
  "Supabase Auth",
  "Supabase Database",
  tr("Panel Medico / Paciente", "Doctor / Patient panel"),
];

export const technicalDecisions = [
  {
    name: tr("React y Vite", "React and Vite"),
    icon: SiReact,
    decision: tr("Interfaz SPA organizada por paginas y componentes.", "SPA interface organized by pages and components."),
    reason:
      tr("La aplicacion usa pantallas separadas, componentes clinicos y servicios desacoplados para organizar flujos de cliente y medico.", "The application uses separate screens, clinical components, and decoupled services to organize client and doctor flows."),
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    decision: tr("Separacion de rutas publicas, de cliente y de medico.", "Separation of public, client, and doctor routes."),
    reason:
      tr("Las rutas protegidas permiten diferenciar acceso a citas de cliente y modulos medicos.", "Protected routes make it possible to separate access to client appointments and medical modules."),
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    decision: tr("Autenticacion y persistencia desde un servicio backend gestionado.", "Authentication and persistence from a managed backend service."),
    reason:
      tr("El codigo usa Supabase Auth para sesion y servicios de datos para operar sobre tablas.", "The code uses Supabase Auth for sessions and data services to operate on tables."),
  },
  {
    name: "Context API",
    icon: FaRoute,
    decision: tr("Estado global de usuario, perfil y carga.", "Global state for user, profile, and loading."),
    reason:
      tr("El contexto expone la sesion y el rol que necesitan las rutas protegidas.", "The context exposes the session and role needed by protected routes."),
  },
  {
    name: "Vercel",
    icon: SiVercel,
    decision: tr("Despliegue de SPA con rewrite de rutas internas.", "SPA deployment with internal route rewrites."),
    reason:
      tr("La configuracion de Vercel permite recargar rutas de la aplicacion sin romper la navegacion.", "The Vercel configuration allows application routes to reload without breaking navigation."),
  },
];

export const technicalChallenges = [
  {
    challenge: tr("Sincronizacion entre usuario y perfil", "Synchronization between user and profile"),
    approach:
      tr("El contexto consulta `profiles` y crea un perfil si el usuario autenticado no lo tiene.", "The context queries `profiles` and creates a profile if the authenticated user does not have one."),
    result:
      tr("Las rutas protegidas pueden decidir el acceso usando el rol del perfil.", "Protected routes can decide access using the profile role."),
  },
  {
    challenge: tr("Proteccion por rol", "Role-based protection"),
    approach:
      tr("`ProtectedRoute` recibe roles permitidos y redirige si el usuario no corresponde.", "`ProtectedRoute` receives allowed roles and redirects when the user does not match."),
    result:
      tr("Los modulos de cliente y medico quedan separados dentro de la aplicacion.", "Client and doctor modules remain separated within the application."),
  },
  {
    challenge: tr("Validacion de citas", "Appointment validation"),
    approach:
      tr("La pagina y el servicio validan fecha, horario y disponibilidad por medico, fecha y hora.", "The page and service validate date, time, and availability by doctor, date, and hour."),
    result:
      tr("El sistema evita registrar citas pasadas o bloques ocupados.", "The system prevents past appointments or occupied time blocks from being registered."),
  },
  {
    challenge: tr("Relacion entre usuario, paciente y cita", "Relationship between user, patient, and appointment"),
    approach:
      tr("Al agendar, se busca el paciente por `profile_id` y se crea si no existe.", "When scheduling, the patient is searched by `profile_id` and created if it does not exist."),
    result:
      tr("La cita queda vinculada a cliente, medico y paciente.", "The appointment remains linked to client, doctor, and patient."),
  },
  {
    challenge: tr("Formularios clinicos extensos", "Extensive clinical forms"),
    approach:
      tr("La ficha agrupa datos personales, antecedentes, examen clinico, riesgo, diagnostico, tratamiento y odontograma.", "The record groups personal data, background, clinical exam, risk, diagnosis, treatment, and odontogram."),
    result:
      tr("El historial puede presentar informacion clinica guardada en modo lectura.", "The history can present saved clinical information in read-only mode."),
  },
  {
    challenge: tr("Odontograma interactivo", "Interactive odontogram"),
    approach:
      tr("Los componentes de odontograma y diente separan visualizacion e interaccion por pieza.", "The odontogram and tooth components separate visualization and interaction by piece."),
    result:
      tr("La ficha permite editar estados y el historial puede renderizar el odontograma.", "The record allows states to be edited and the history can render the odontogram."),
  },
];

export const learnings = [
  tr("Este proyecto permite documentar aprendizaje practico en flujos administrativos y clinicos con datos relacionados.", "This project documents practical learning in administrative and clinical flows with related data."),
  tr("El alcance incluye autenticacion, rutas protegidas, formularios extensos, estados de carga y error, sincronizacion entre usuario y perfil, gestion de pacientes y citas, y organizacion de componentes para modulos de negocio concretos.", "The scope includes authentication, protected routes, extensive forms, loading and error states, synchronization between user and profile, patient and appointment management, and component organization for specific business modules."),
  tr("Tambien refuerza la importancia de separar responsabilidades: autenticacion en contexto, validaciones en servicios, pantallas por rol y componentes especializados para ficha, historial, odontograma y presupuesto.", "It also reinforces the importance of separating responsibilities: authentication in context, validations in services, screens by role, and specialized components for record, history, odontogram, and budget."),
];

export const roadmap = [
  tr("Recordatorios para citas", "Appointment reminders"),
  tr("Permisos mas detallados dentro del area medica", "More detailed permissions within the medical area"),
  tr("Informes clinicos o administrativos", "Clinical or administrative reports"),
  tr("Auditoria de cambios en datos sensibles", "Audit trail for changes to sensitive data"),
  tr("Mejoras de accesibilidad en formularios y tablas", "Accessibility improvements in forms and tables"),
  tr("Notificaciones en tiempo real", "Real-time notifications"),
  tr("Agenda visual tipo calendario", "Calendar-style visual schedule"),
  tr("Soporte multi-medico", "Multi-doctor support"),
];

export const secondaryScreens = [
  {
    src: lacFlowOneImage,
    alt: tr("Primera captura del flujo principal de Consultorio Odontologico LAC", "First screenshot of the main flow in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  {
    src: lacFlowTwoImage,
    alt: tr("Segunda captura del flujo principal de Consultorio Odontologico LAC", "Second screenshot of the main flow in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
  {
    src: lacFlowThreeImage,
    alt: tr("Tercera captura del flujo principal de Consultorio Odontologico LAC", "Third screenshot of the main flow in Consultorio Odontológico LAC"),
    fit: "contain",
    position: "top",
  },
];
