# Consultorio Odontologico LAC - Guia de capturas

Este documento define las capturas recomendadas para construir el caso de estudio visual de Consultorio Odontologico LAC. No crear imagenes falsas ni capturas con datos reales.

## Capturas recomendadas

| Seccion | Archivo esperado | Proporcion | Contenido |
|---------|------------------|------------|-----------|
| Hero | `lac-dashboard.webp` | 16:9 | Vista general del dashboard medico con datos ficticios |
| Autenticacion | `lac-login.webp` | 16:9 | Pantalla de acceso sin credenciales visibles |
| Registro | `lac-register.webp` | 16:9 | Formulario de registro de cliente con datos ficticios |
| Recuperacion de contrasena | `lac-password-recovery.webp` | 16:9 | Flujo de nueva contrasena sin exponer correo real |
| Agendar cita | `lac-appointment-form.webp` | 16:9 | Formulario para solicitar una cita |
| Mis citas | `lac-my-appointments.webp` | 16:9 | Listado de citas del cliente con datos ficticios |
| Agenda medica | `lac-doctor-appointments.webp` | 16:9 | Gestion de citas desde el rol medico |
| Panel clinico | `lac-patient-panel.webp` | 16:9 | Listado o busqueda de pacientes sin datos reales |
| Ficha paciente | `lac-clinical-record.webp` | 16:9 | Ficha clinica con campos completados usando datos ficticios |
| Historial | `lac-history.webp` | 16:9 | Historial clinico en modo lectura sin datos identificables |
| Odontograma | `lac-odontogram.webp` | 16:9 | Odontograma con estados de ejemplo |
| Presupuesto | `lac-budget.webp` | 16:9 | Presupuesto con tratamientos y cantidades ficticias |
| Consentimiento informado | `lac-consent.webp` | 16:9 | Documento de consentimiento con datos anonimizados |

## Reglas antes de integrar capturas

1. Exportar en formato WebP.
2. Utilizar un entorno con datos ficticios.
3. Ocultar nombres, correos, telefonos, cedulas y datos medicos reales.
4. No mostrar credenciales, tokens, URLs privadas ni identificadores internos.
5. Mantener capturas limpias y enfocadas en una funcionalidad por imagen.
6. Optimizar los archivos antes de incorporarlos al repositorio.
7. Evitar resoluciones excesivas que aumenten innecesariamente el peso del portfolio.
8. Actualizar la configuracion del caso de estudio cuando cada captura exista.

## Estado

Todas las capturas estan pendientes. Este sprint no incluye generacion, descarga ni integracion de imagenes.
