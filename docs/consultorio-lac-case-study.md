# Consultorio Odontologico LAC - Case Study Master

> Documento fuente aprobado para construir el caso de estudio del portfolio.
> No inventar metricas, funcionalidades, clientes ni decisiones no descritas o verificadas aqui.

## Fuentes revisadas

- Portfolio actual: `src/data/projects.js`, `src/pages/CaseStudyPage.jsx`, assets de `src/assets/odontologia/`.
- CV local: `public/Alexis-Rodriguez-Full-Stack-CV.pdf`. La extraccion de texto no esta disponible en el entorno, pero se confirmaron enlaces embebidos a los proyectos mediante `strings`.
- Repositorio confirmado: `https://github.com/alexisrrh/consultorio-odontologico`.
- Codigo inspeccionado en clone temporal: `/tmp/consultorio-odontologico`.
- Documentacion del proyecto: `README.md` y `README.es.md`.
- Configuracion: `package.json`, `vite.config.js`, `vercel.json`, `src/servicios/supabase.js`.
- Modulos principales: rutas, contexto de autenticacion, rutas protegidas, paginas de cliente y medico, servicios de Supabase, ficha clinica, odontograma, historial y presupuesto.

## Tabla de evidencias

| Afirmacion | Evidencia | Archivo o fuente | Confirmada |
|------------|-----------|------------------|------------|
| Es una aplicacion para gestionar una clinica dental | README la define como aplicacion para gestion de clinica dental con pacientes, citas e historial | `/tmp/consultorio-odontologico/README.es.md` | Si |
| Demo publicada | URL de demo declarada en README y portfolio | `README.es.md`, `src/data/projects.js` | Si |
| Repositorio publico | URL declarada en portfolio y clonado correctamente | `src/data/projects.js`, GitHub | Si |
| Roles cliente y medico | Rutas protegidas con `allowedRoles=["cliente"]` y `allowedRoles=["medico"]` | `src/App.jsx`, `src/rutas/ProtectedRoute.jsx` | Si |
| Registro e inicio de sesion | Registro con `supabase.auth.signUp` y login con `signInWithPassword` | `src/servicios/auth.js`, `src/paginas/RegistroCliente.jsx`, `src/paginas/Login.jsx` | Si |
| Recuperacion de contrasena | Reset por email y ruta `/actualizar-password` | `src/servicios/auth.js`, `src/paginas/ActualizarPassword.jsx` | Si |
| Gestion de sesion | `getSession`, `onAuthStateChange` y estado global con Context | `src/context/AuthContext.jsx` | Si |
| Creacion de perfiles | Si falta perfil, inserta en tabla `profiles` con rol por metadata o `cliente` | `src/context/AuthContext.jsx` | Si |
| Proteccion de rutas por rol | Redireccion segun usuario autenticado y rol | `src/rutas/ProtectedRoute.jsx` | Si |
| Gestion de citas de cliente | Cliente puede agendar y consultar sus citas | `src/paginas/AgendarCita.jsx`, `src/paginas/Miscitas.jsx`, `src/servicios/citas.js` | Si |
| Validacion de citas | Valida fecha futura, horario permitido y disponibilidad por medico, fecha y hora | `src/servicios/citas.js`, `src/paginas/AgendarCita.jsx` | Si |
| Dashboard medico | Muestra resumen de citas, pacientes y proximas citas | `src/paginas/DashboardMedico.jsx` | Si |
| Gestion de citas medicas | Permite listar citas y actualizar estados | `src/paginas/CitasMedico.jsx`, `src/servicios/citas.js` | Si |
| Gestion de pacientes | CRUD de pacientes y busqueda | `src/paginas/PanelClinico.jsx`, `src/servicios/api.js`, `src/componentes/BusquedaPaciente.jsx` | Si |
| Historial clinico | Ficha e historial con datos clinicos, antecedentes y observaciones | `src/componentes/FichaPaciente.jsx`, `src/componentes/HistorialPaciente.jsx` | Si |
| Odontograma | Componente visual de dientes con estados y modo lectura | `src/componentes/Odontograma.jsx`, `src/componentes/Diente.jsx` | Si |
| Presupuestos | Modulo de presupuesto con tratamientos, totales, impresion y descarga PDF | `src/componentes/PresupuestoPaciente.jsx` | Si |
| Consentimiento informado | Componente imprimible para consentimiento odontologico | `src/componentes/ConsentimientoInformado.jsx` | Si |
| Supabase Auth y base de datos | Cliente Supabase con variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` | `src/servicios/supabase.js`, README | Si |
| PostgreSQL | Declarado en el portfolio como parte del proyecto; el codigo opera sobre tablas mediante Supabase | `src/data/projects.js`, servicios Supabase | Si |
| React Router | Rutas de aplicacion con `BrowserRouter`, `Routes` y `Route` | `src/App.jsx`, `package.json` | Si |
| Context API | `AuthContext` gestiona usuario, perfil y carga | `src/context/AuthContext.jsx` | Si |
| Vercel | Demo publicada y rewrite SPA configurado | `vercel.json`, README, `src/data/projects.js` | Si |
| Bootstrap | Aparece declarado en el portfolio, pero no esta en `package.json` del repositorio inspeccionado | `src/data/projects.js`, `/tmp/consultorio-odontologico/package.json` | Parcial |
| Pagos | Aparece como mejora futura, no como modulo implementado | `README.es.md` | No |
| Notificaciones en tiempo real | Aparece como mejora futura | `README.es.md` | No |
| Multi-medico | Aparece como mejora futura; el codigo obtiene el primer medico disponible para agendar | `README.es.md`, `src/servicios/perfiles.js` | No |
| Metricas de uso o resultados comerciales | No se encontraron metricas verificables | Fuentes revisadas | No |
| Cliente real o certificacion sanitaria | No hay evidencia suficiente para afirmarlo | Fuentes revisadas | No |

## 1. Resumen del producto

Consultorio Odontologico LAC es una aplicacion web para centralizar flujos habituales de un consultorio dental. Permite a pacientes registrarse, iniciar sesion, agendar citas y consultar sus citas. Para el rol medico, el sistema incluye dashboard, gestion de citas, panel clinico, registro de pacientes, historial clinico, odontograma, presupuestos y consentimiento informado.

La necesidad principal que aborda es reducir la dispersion entre pacientes, citas e informacion clinica dentro de una misma interfaz conectada a Supabase.

El producto contempla dos roles confirmados en el codigo: `cliente` y `medico`.

## 2. El problema

La gestion de un consultorio odontologico puede implicar informacion separada entre datos de pacientes, agenda, historial clinico, observaciones, tratamientos y presupuestos. El proyecto aborda esa coordinacion reuniendo los datos operativos y clinicos en una aplicacion web con autenticacion y rutas protegidas.

No se debe presentar como un sistema sanitario certificado ni como una solucion usada por una clinica real sin evidencia adicional.

## 3. La solucion

La aplicacion organiza el trabajo en dos areas principales. El cliente puede crear cuenta, iniciar sesion, solicitar una cita y revisar sus citas. El medico accede a un panel protegido donde puede revisar citas, consultar pacientes, completar fichas clinicas, revisar historiales, trabajar con odontograma y preparar presupuestos.

El valor del producto esta en conectar autenticacion, roles, agenda y datos clinicos dentro de una experiencia unica, evitando que cada proceso quede aislado.

## 4. Objetivos del proyecto

- Centralizar pacientes y sus datos de contacto.
- Organizar citas con validacion de fecha, horario y disponibilidad.
- Mantener fichas e historiales clinicos consultables.
- Proteger el acceso mediante autenticacion y roles.
- Sincronizar informacion con Supabase.
- Facilitar el trabajo medico desde un panel con acciones principales.
- Permitir que el paciente consulte y gestione sus citas basicas.

## 5. Mi responsabilidad

La autoria se atribuye a Alexis por el repositorio publico enlazado desde su portfolio. Las responsabilidades confirmadas por codigo y documentacion son:

- Construccion de la aplicacion React con Vite.
- Configuracion de rutas publicas y protegidas con React Router.
- Implementacion del contexto de autenticacion y perfil.
- Integracion con Supabase Auth y tablas de datos.
- Desarrollo de formularios para registro, login, citas y datos de paciente.
- Implementacion del panel medico, gestion de citas y panel clinico.
- Implementacion de ficha clinica, historial, odontograma, presupuesto y consentimiento informado.
- Configuracion de despliegue SPA en Vercel mediante rewrite.

Bootstrap aparece declarado en el portfolio, pero el repositorio inspeccionado no lo incluye como dependencia. No se debe usar como evidencia principal salvo que se confirme en el CV o en una version posterior del codigo.

## 6. Funcionalidades confirmadas

### Autenticacion

- Registro de cliente con email, contrasena y nombre.
- Inicio de sesion con Supabase Auth.
- Recuperacion y actualizacion de contrasena.
- Estado global de usuario, perfil y carga mediante `AuthContext`.
- Creacion automatica de perfil si el usuario autenticado no lo tiene.

### Roles y permisos

- Rol `cliente` para rutas de citas del paciente.
- Rol `medico` para dashboard, agenda medica, detalle de paciente y panel clinico.
- Redireccion cuando el usuario no esta autenticado o no tiene el rol permitido.

### Citas

- Agendar cita.
- Consultar mis citas como cliente.
- Consultar citas como medico.
- Cambiar estado de cita desde el area medica.
- Validar fechas no pasadas.
- Validar franjas horarias.
- Evitar solapamiento por medico, fecha y hora.

### Pacientes y panel clinico

- Listado de pacientes.
- Busqueda por nombre o cedula.
- Creacion, actualizacion y eliminacion de pacientes.
- Acceso a ficha, historial y presupuesto desde el panel.

### Historial clinico y odontograma

- Ficha con datos personales, antecedentes, alergias, medicamentos, enfermedades, embarazo, examen clinico, riesgo de caries, diagnostico y tratamiento.
- Odontograma con estados por diente y observaciones.
- Historial en modo lectura.

### Presupuesto y consentimiento

- Presupuesto con tratamientos, dientes, cantidad, precio y subtotal.
- Calculo de total y saldo segun abonado.
- Impresion y descarga en PDF mediante `html2pdf.js`.
- Consentimiento informado imprimible.

## 7. Como esta construido

### Frontend

- React.
- Vite.
- CSS del proyecto.
- React Router.
- Context API para autenticacion.

Bootstrap se mantiene como tecnologia declarada por el portfolio, pero requiere confirmacion adicional porque no aparece como dependencia instalada en el repositorio inspeccionado.

### Datos y servicios

- Supabase.
- Tablas consultadas desde servicios: `profiles`, `pacientes`, `citas`.
- PostgreSQL declarado en el portfolio como base relacional del proyecto.

### Arquitectura y estado

- `AuthProvider` envuelve la aplicacion.
- Las rutas se organizan en `src/App.jsx`.
- Las validaciones y operaciones de datos se separan en `src/servicios/`.
- Los modulos clinicos viven en componentes especificos de `src/componentes/`.

### Autenticacion

- Supabase Auth para registro, login, logout y recuperacion de contrasena.
- Perfil de usuario en tabla `profiles`.
- Rol guardado en metadata de usuario y perfil.
- Rutas protegidas mediante `ProtectedRoute`.

### Despliegue

- Vercel.
- Rewrite SPA en `vercel.json` para recarga de rutas internas.

## 8. Flujo principal del usuario

### Cliente

1. Accede a la aplicacion.
2. Crea una cuenta o inicia sesion.
3. Completa los datos necesarios para agendar.
4. Selecciona fecha, hora y motivo.
5. El sistema valida fecha, horario y disponibilidad.
6. Se crea o reutiliza el paciente vinculado al usuario.
7. Se guarda la cita.
8. El cliente puede consultar sus citas.

### Medico

1. Inicia sesion con rol `medico`.
2. Accede al dashboard medico.
3. Revisa resumen de citas y pacientes.
4. Gestiona citas y cambia estados.
5. Abre la ficha de un paciente.
6. Consulta o actualiza datos clinicos.
7. Revisa historial, odontograma y presupuesto.

## 9. Arquitectura

```text
Usuario
  |
  v
React + Vite
  |
  v
React Router + ProtectedRoute
  |
  v
AuthContext
  |
  v
Supabase Auth
  |
  v
Servicios de datos
  |
  +-- profiles
  +-- pacientes
  +-- citas
  |
  v
Panel cliente / Panel medico / Modulos clinicos
```

Esta arquitectura separa la autenticacion, la proteccion de rutas y las operaciones de datos en capas identificables dentro del codigo.

## 10. Decisiones tecnicas

### React y Vite

Decision: construir la interfaz como SPA con componentes reutilizables.

Motivo demostrable: la aplicacion usa paginas separadas, componentes clinicos y servicios desacoplados para organizar flujos de cliente y medico.

### React Router

Decision: separar rutas publicas, rutas de cliente y rutas de medico.

Motivo demostrable: `src/App.jsx` define rutas protegidas por rol y rutas publicas de acceso, registro y recuperacion.

### Supabase

Decision: usar Supabase para autenticacion y persistencia.

Motivo demostrable: el codigo usa `supabase.auth` para sesion y servicios `.from(...)` para operar con tablas.

### Context API

Decision: centralizar usuario, perfil y estado de carga.

Motivo demostrable: `AuthContext` expone `usuario`, `perfil` y `loading` a las rutas protegidas.

### Vercel

Decision: desplegar como SPA con regla de rewrite.

Motivo demostrable: `vercel.json` redirige cualquier ruta a `/`.

## 11. Retos tecnicos

### Sincronizacion entre usuario y perfil

Reto: Supabase Auth gestiona el usuario, pero la aplicacion necesita un perfil con rol.

Enfoque aplicado: `AuthContext` consulta la tabla `profiles` y crea un perfil si no existe.

Resultado observable: las rutas protegidas pueden decidir acceso usando `perfil.rol`.

### Proteccion por rol

Reto: cliente y medico no deben acceder a los mismos modulos.

Enfoque aplicado: `ProtectedRoute` recibe `allowedRoles` y redirige si el usuario no cumple el rol.

Resultado observable: las rutas de citas del cliente y los modulos medicos estan separadas.

### Validacion de citas

Reto: evitar fechas pasadas, horas fuera de rango y solapamientos.

Enfoque aplicado: la pagina y el servicio validan fecha y hora; el servicio consulta citas existentes por medico, fecha y hora.

Resultado observable: una cita no se inserta si ya existe una cita ocupando el mismo bloque.

### Relacion entre usuario, paciente y cita

Reto: un usuario autenticado debe quedar vinculado a datos de paciente para crear citas.

Enfoque aplicado: `AgendarCita` busca el paciente por `profile_id` y crea uno si no existe.

Resultado observable: la cita guarda `cliente_id`, `medico_id` y `paciente_id`.

### Formularios clinicos extensos

Reto: organizar informacion personal, antecedentes, examen clinico, riesgo, diagnostico, tratamiento y odontograma.

Enfoque aplicado: `FichaPaciente` agrupa secciones y mantiene un estado estructurado para guardar datos clinicos.

Resultado observable: el historial puede mostrar la informacion guardada en modo lectura.

### Odontograma interactivo

Reto: representar piezas dentales y estados clinicos de forma editable y consultable.

Enfoque aplicado: componentes `Odontograma` y `Diente` separan la visualizacion y la interaccion por pieza.

Resultado observable: la ficha permite editar estados y el historial puede renderizar el odontograma en modo lectura.

### Recuperacion de contrasena

Reto: mantener una redireccion correcta al actualizar contrasena.

Enfoque aplicado: `resetPasswordForEmail` usa `VITE_APP_URL` y la ruta `/actualizar-password`.

Resultado observable: existe una pantalla dedicada para introducir y confirmar nueva contrasena.

### Consistencia de reglas de horario

Reto: mantener una unica fuente para las franjas permitidas.

Enfoque aplicado actual: hay validacion en pagina y en servicio.

Resultado observable: el codigo valida horarios, aunque conviene revisar la diferencia entre el limite matinal usado en la pagina y el del servicio.

## 12. Resultado

El proyecto deja implementada una aplicacion funcional para registrar usuarios, proteger rutas por rol, gestionar citas, centralizar pacientes, completar informacion clinica, consultar historiales, trabajar con odontograma y generar presupuestos desde una interfaz web conectada a Supabase.

No hay metricas verificables de uso, rendimiento, negocio o adopcion.

## 13. Lo que aprendi

Este proyecto permite documentar aprendizaje practico en flujos administrativos y clinicos con datos relacionados. El alcance incluye autenticacion, rutas protegidas, formularios extensos, estados de carga y error, sincronizacion entre usuario y perfil, gestion de pacientes y citas, y organizacion de componentes para modulos de negocio concretos.

Tambien refuerza la importancia de separar responsabilidades: autenticacion en contexto, validaciones en servicios, pantallas por rol y componentes especializados para ficha, historial, odontograma y presupuesto.

## 14. Como evolucionaria el producto

Estas mejoras representan posibles evoluciones y no funcionalidades disponibles actualmente.

- Recordatorios para citas.
- Permisos mas detallados dentro del area medica.
- Informes clinicos o administrativos.
- Auditoria de cambios en datos sensibles.
- Mejoras de accesibilidad en formularios y tablas.
- Notificaciones en tiempo real.
- Agenda visual tipo calendario.
- Soporte multi-medico.
- Integracion de pagos, solo si se define como modulo futuro y no como funcionalidad actual.

## Contenido no confirmado y descartado para el caso base

- Facturacion o pagos implementados.
- Odontograma como certificacion clinica o diagnostico automatico.
- Cumplimiento normativo sanitario especifico.
- Multiples clinicas.
- Multiples medicos operativos en agenda.
- Recordatorios automaticos.
- Notificaciones en tiempo real.
- Resultados comerciales o metricas de usuarios.
- Cliente real o uso en produccion por una clinica concreta.
