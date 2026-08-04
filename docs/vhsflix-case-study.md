# VHSFlix - Case Study Master

> Documento fuente para construir el caso de estudio del portfolio.
> No inventar metricas, usuarios, clientes, resultados comerciales ni funcionalidades no verificadas aqui.

## Fuentes inspeccionadas

- Portfolio actual: `src/data/projects.js`.
- Proyecto local: `../proyecto-Peliculas`.
- Repositorio confirmado: `https://github.com/alexisrrh/proyecto-Peliculas.git`.
- Documentacion del proyecto: `README.md` y `README.es.md`.
- Frontend: `package.json`, `src/main.jsx`, `src/App.jsx`, `src/routes/appRoutes.jsx`, `src/context/AppContext.jsx`, `src/context/appReducer.jsx`, `src/services/auth.services.js`, paginas y componentes principales.
- Backend: `Back/app.py`, `Back/models.py`, `Back/requirements.txt`, `Back/Pipfile`, `Back/migrations`.
- Configuracion: `.env` y `Back/.env` revisados solo por nombres de variables, sin documentar valores.
- Assets disponibles: `src/assets/home.png`, `src/assets/busqueda.png`, `src/assets/trailer.png`, `src/assets/favoritos.png`.

## Tabla de evidencias

| Afirmacion | Evidencia | Archivo o fuente | Confirmada |
|------------|-----------|------------------|------------|
| VHSFlix es una aplicacion web inspirada en plataformas de streaming para explorar peliculas. | README describe una aplicacion tipo Netflix para explorar peliculas y ver trailers. | `../proyecto-Peliculas/README.es.md` | Si |
| El frontend esta construido con React y Vite. | Dependencias y scripts de Vite/React. | `../proyecto-Peliculas/package.json`, `src/main.jsx` | Si |
| Usa React Router. | `BrowserRouter`, `Routes`, `Route`, `Navigate`, `Link` y rutas declaradas. | `src/App.jsx`, `src/routes/appRoutes.jsx`, `src/componentes/Navbar.jsx` | Si |
| Usa Context API y useReducer para estado global. | `AppProvider` envuelve la app y usa `useReducer(appReducer, initialState)`. | `src/main.jsx`, `src/context/AppContext.jsx`, `src/context/appReducer.jsx` | Si |
| Consume TMDB para peliculas populares y categorias. | Fetch a endpoints de TMDB para populares, accion, comedia, terror y animadas. | `src/context/AppContext.jsx` | Si |
| Consume TMDB para trailers. | Fetch a `/movie/{id}/videos` y render de iframe de YouTube. | `src/componentes/Modal.jsx`, componentes `Peliculas*` | Si |
| Hay busqueda de peliculas. | Ruta `/search/:texto?` y filtrado local por titulo sobre peliculas cargadas. | `src/pages/Busqueda.jsx`, `src/componentes/Navbar.jsx` | Si |
| Hay categorias de peliculas. | Rutas `/populares`, `/accion`, `/terror`, `/comedia`, `/animadas`. | `src/routes/appRoutes.jsx`, `src/pages/Categorias.jsx` | Si |
| Hay favoritos persistidos por usuario. | Servicios POST/GET/DELETE contra `/users/{user_id}/favoritos` y `/favorite/{id}`. | `src/services/auth.services.js`, `Back/app.py`, `Back/models.py` | Si |
| Existe autenticacion propia con backend Flask y JWT. | Endpoints `/signup`, `/login`, `/private`; `flask-jwt-extended`; almacenamiento de token en `localStorage`. | `Back/app.py`, `src/componentes/LogIn.jsx`, `src/services/auth.services.js` | Si |
| Las contrasenas se guardan hasheadas. | Uso de `flask_bcrypt` y `generate_password_hash`. | `Back/app.py` | Si |
| Existen rutas que requieren JWT en backend. | Decorador `@jwt_required()` en comentarios, perfil privado, avatar y scores. | `Back/app.py` | Si |
| No hay un componente formal de ruta protegida en frontend. | Las rutas se declaran directamente y el control se hace con token/localStorage y redirecciones. | `src/routes/appRoutes.jsx`, `src/pages/Categorias.jsx`, `src/componentes/Portada.jsx`, `src/pages/Perfil.jsx` | Si |
| Existe perfil de usuario y actualizacion de avatar. | Pagina `/usuario/:id`, endpoint `/private` y `/update-avatar`. | `src/pages/Perfil.jsx`, `Back/app.py` | Si |
| Existe recuperacion de contrasena. | Vistas de recuperar/restablecer clave y endpoints `/forgot-password`, `/reset-password`. | `src/componentes/RecuperarContraseña.jsx`, `src/componentes/ResetPassword.jsx`, `Back/app.py`, `Back/models.py` | Si |
| El backend usa SQLAlchemy y una base relacional. | Modelos `User`, `Pelicula`, `Favorito`, `ArcadeScore`, `PasswordResetToken`, `Comentario`. | `Back/models.py` | Si |
| El backend esta preparado para PostgreSQL. | `SQLALCHEMY_DATABASE_URI`, conversion `postgres://` a `postgresql://`, dependencia `psycopg2-binary`. | `Back/app.py`, `Back/requirements.txt` | Si |
| Existe integracion con YouTube para comentarios externos. | Endpoint `/youtube/comments/<video_id>` usa YouTube Data API mediante `requests`. | `Back/app.py`, `src/componentes/Modal.jsx` | Si |
| Existe sistema de comentarios propio por pelicula. | Modelo `Comentario` y endpoints GET/POST `/movies/<tmdb_id>/comments`. | `Back/models.py`, `Back/app.py`, `src/componentes/Modal.jsx` | Si |
| Existe modo Relax con juego y puntuaciones. | Ruta `/relax`, endpoint `/scores` GET/POST y modelo `ArcadeScore`. | `src/pages/Relax.jsx`, `Back/app.py`, `Back/models.py` | Si |
| El frontend esta desplegado en Vercel. | URL del portfolio y rewrite para SPA. | `src/data/projects.js`, `../proyecto-Peliculas/vercel.json` | Si |
| El backend usa Render. | URL `https://proyecto-peliculas-1-iiml.onrender.com` en codigo y proxy de Vite. | `src/pages/Perfil.jsx`, `src/pages/Relax.jsx`, `vite.config.js` | Si |
| Hay roles de usuario diferenciados. | No se encontraron campos ni rutas de roles. | Codigo revisado | No |
| Hay sistema de valoraciones de peliculas. | README lo lista como mejora futura, no como funcionalidad implementada. | `README.es.md` | No |
| Hay recomendaciones personalizadas. | README lo lista como mejora futura, no como funcionalidad implementada. | `README.es.md` | No |
| Hay cliente real o usuarios reales demostrados. | No hay evidencia documental o de codigo. | Fuentes revisadas | No |

## 1. Resumen del producto

VHSFlix es una aplicacion web inspirada en servicios de streaming para explorar peliculas, consultar categorias, buscar titulos, ver trailers y gestionar favoritos asociados a una cuenta de usuario.

El proyecto combina un frontend en React con un backend en Flask. La interfaz consume datos externos de TMDB, muestra trailers mediante YouTube y utiliza una API propia para autenticacion, favoritos, perfil, comentarios, recuperacion de contrasena y puntuaciones del modo Relax.

No hay evidencia de cliente real, usuarios reales o metricas de uso. Debe presentarse como proyecto tecnico Full Stack.

## 2. El problema

El proyecto aborda una necesidad concreta de producto: crear una experiencia de exploracion de peliculas que vaya mas alla de una lista estatica. La aplicacion necesita cargar datos externos, organizar titulos por categorias, permitir busqueda, abrir detalles con trailer y conservar informacion asociada al usuario.

Desde el punto de vista tecnico, el reto esta en coordinar datos de APIs externas, estado global de React, autenticacion con JWT y persistencia backend para favoritos y comentarios.

## 3. La solucion

VHSFlix centraliza la exploracion de peliculas en una interfaz con estetica de streaming. La pagina principal carga peliculas populares y categorias desde TMDB, el usuario puede buscar titulos, abrir un modal de detalle, reproducir trailers y gestionar favoritos.

La autenticacion permite registrar usuarios, iniciar sesion, consultar perfil privado, actualizar avatar y recuperar contrasena. El backend Flask expone endpoints REST y persiste datos con SQLAlchemy. Algunas acciones, como publicar comentarios o guardar puntuaciones, requieren JWT en el backend.

## 4. Objetivos del proyecto

- Construir una interfaz de exploracion de peliculas con React.
- Consumir TMDB para peliculas populares, categorias y videos.
- Gestionar estado global con Context API y useReducer.
- Implementar autenticacion con backend propio.
- Persistir usuarios, peliculas, favoritos, comentarios y puntuaciones.
- Integrar trailers y comentarios externos vinculados a YouTube.
- Desplegar frontend y conectar con API remota.

## 5. Mi responsabilidad

La autoria confirmada en el portfolio y en el repositorio apunta a Alexis Rodriguez como responsable del proyecto dentro de su portfolio.

Responsabilidades respaldadas por el codigo:

- Frontend con React, Vite, Tailwind CSS y React Router.
- Estado global con Context API y useReducer.
- Consumo de TMDB desde la capa de estado y componentes.
- Interfaz de categorias, busqueda, favoritos, detalle de pelicula, login, registro, perfil y recuperacion de contrasena.
- Backend con Flask, SQLAlchemy, Flask-JWT-Extended y Flask-Bcrypt.
- Endpoints REST para autenticacion, favoritos, peliculas, comentarios, avatar, recuperacion de contrasena y puntuaciones.
- Conexion entre frontend y backend mediante servicios `fetch`.
- Configuracion de despliegue frontend en Vercel y backend remoto en Render.

No afirmar "desarrollo de extremo a extremo" si se quiere ser mas prudente; una formulacion segura es "desarrollo Full Stack del proyecto tecnico".

## 6. Funcionalidades confirmadas

### Exploracion de peliculas

La aplicacion carga peliculas populares y categorias desde TMDB: accion, comedia, terror y animadas. La pagina principal muestra carriles horizontales con tarjetas de peliculas.

Evidencia: `src/context/AppContext.jsx`, componentes `PeliculasPopulares`, `PeliculasAccion`, `PeliculasComedia`, `PeliculasTerror`, `PeliculasAnimadas`.

### Busqueda

La busqueda se controla desde el Navbar y navega a `/search/:texto?`. La pagina filtra localmente los datos ya cargados por titulo.

Evidencia: `src/componentes/Navbar.jsx`, `src/pages/Busqueda.jsx`.

### Detalle y trailer

Cada pelicula puede abrir un modal en `/modal/:id`. El modal consulta videos de TMDB y muestra un trailer de YouTube cuando existe.

Evidencia: `src/componentes/Modal.jsx`.

### Autenticacion

El usuario puede registrarse e iniciar sesion. El backend valida email y contrasena, hashea contrasenas con Bcrypt y devuelve un JWT que el frontend guarda en `localStorage`.

Evidencia: `src/componentes/Registro.jsx`, `src/componentes/LogIn.jsx`, `src/services/auth.services.js`, `Back/app.py`.

### Favoritos

El usuario puede agregar, listar y eliminar favoritos. El backend relaciona usuarios con peliculas mediante el modelo `Favorito`.

Evidencia: `src/services/auth.services.js`, `src/pages/Favoritos.jsx`, `Back/models.py`, `Back/app.py`.

### Perfil y avatar

La pagina de perfil consulta datos privados usando token y permite seleccionar un avatar de una lista predefinida, guardandolo en el backend.

Evidencia: `src/pages/Perfil.jsx`, endpoint `/private`, endpoint `/update-avatar`.

### Recuperacion de contrasena

Existe flujo de solicitar recuperacion por email y restablecer contrasena mediante token. El backend genera tokens temporales y marca el token como usado despues del cambio.

Evidencia: `src/componentes/RecuperarContraseña.jsx`, `src/componentes/ResetPassword.jsx`, `Back/app.py`, `Back/models.py`.

### Comentarios

El modal combina comentarios propios de VHSFlix y comentarios obtenidos desde YouTube. Publicar comentarios propios requiere JWT en el backend.

Evidencia: `src/componentes/Modal.jsx`, modelo `Comentario`, endpoints `/movies/<tmdb_id>/comments` y `/youtube/comments/<video_id>`.

### Modo Relax

Existe una ruta `/relax` con un juego integrado y leaderboard. Guardar puntuacion requiere token JWT en el backend.

Evidencia: `src/pages/Relax.jsx`, modelo `ArcadeScore`, endpoints `/scores`.

## 7. Como esta construido

### Frontend

- React.
- Vite.
- Tailwind CSS.
- React Router.
- Context API.
- useReducer.

### Backend

- Python.
- Flask.
- Flask-CORS.
- Flask-JWT-Extended.
- Flask-Bcrypt.
- Flask-SQLAlchemy.
- Flask-Migrate.

### Datos

- SQLAlchemy como ORM.
- Base relacional configurada mediante `SQLALCHEMY_DATABASE_URI`.
- Soporte de PostgreSQL confirmado por configuracion y dependencia `psycopg2-binary`.
- Modelos: `User`, `Pelicula`, `Favorito`, `Comentario`, `PasswordResetToken`, `ArcadeScore`.

### APIs externas

- TMDB para peliculas, categorias y videos.
- YouTube Data API para comentarios externos de videos.
- Resend para envio de email de recuperacion, segun endpoint `/forgot-password`.

### Despliegue

- Frontend preparado para Vercel con rewrite SPA.
- Backend remoto en Render, identificado por URL usada en frontend y proxy de Vite.

## 8. Flujo principal del usuario

1. Entrar en la pagina principal.
2. Explorar peliculas populares o categorias.
3. Buscar una pelicula desde el Navbar.
4. Abrir una pelicula.
5. Ver el trailer y la informacion principal.
6. Iniciar sesion o registrarse cuando la accion lo requiere.
7. Agregar peliculas a favoritos.
8. Consultar y eliminar favoritos.
9. Acceder al perfil y actualizar avatar.
10. Recuperar contrasena si es necesario.

## 9. Arquitectura

Usuario

↓

React + Vite

↓

React Router

↓

Context API + useReducer

↓

Servicios `fetch`

↓

Flask API

├── JWT Auth

├── SQLAlchemy

├── Favoritos

├── Comentarios

├── Perfil / Avatar

└── Scores

↓

APIs externas: TMDB, YouTube Data API y Resend

## 10. Decisiones tecnicas

### React Router

Decision: usar rutas para separar home, categorias, favoritos, perfil, login, registro, busqueda, modal de pelicula, reset de contrasena y modo Relax.

Motivo verificable: la estructura de `src/routes/appRoutes.jsx` organiza vistas con rutas declarativas y redirecciones.

### Context API y useReducer

Decision: centralizar peliculas por categoria y favoritos en estado global.

Motivo verificable: `AppContext.jsx` carga peliculas desde TMDB y despacha acciones hacia `appReducer.jsx`.

### Flask como API backend

Decision: separar la autenticacion, persistencia y operaciones de usuario en una API propia.

Motivo verificable: `Back/app.py` define endpoints REST y conecta modelos SQLAlchemy.

### JWT

Decision: proteger endpoints privados con tokens.

Motivo verificable: `/private`, creacion de comentarios, actualizacion de avatar y guardado de scores usan `@jwt_required()`.

### SQLAlchemy

Decision: modelar usuarios, peliculas, favoritos, comentarios, tokens de reset y scores con ORM.

Motivo verificable: `Back/models.py` define tablas y relaciones.

### Vercel y Render

Decision: separar despliegue de frontend y backend.

Motivo verificable: `vercel.json` contiene rewrite SPA y el frontend consume un backend remoto en Render.

## 11. Retos tecnicos

### Coordinacion entre TMDB, estado global y rutas

Reto: cargar peliculas por categorias y hacer que distintas paginas y modales puedan reutilizar esos datos.

Enfoque aplicado: `AppContext.jsx` carga datos al iniciar la app y `appReducer.jsx` los separa por categoria.

Resultado observable: Home, categorias, busqueda y modal leen datos desde el mismo estado global.

### Persistencia de favoritos

Reto: conectar peliculas externas de TMDB con favoritos propios de cada usuario.

Enfoque aplicado: al agregar favorito, el backend crea o reutiliza una pelicula por `tmdb_id` y despues crea la relacion `Favorito`.

Resultado observable: los favoritos se consultan desde `/users/<user_id>/favoritos` y se eliminan desde `/favorite/<favorito_id>`.

### Autenticacion y sesiones

Reto: gestionar inicio de sesion, token JWT y acceso a datos privados.

Enfoque aplicado: backend con Flask-JWT-Extended, frontend con token en `localStorage` y cabecera `Authorization`.

Resultado observable: perfil privado, comentarios protegidos, avatar y scores usan token.

### Recuperacion de contrasena

Reto: permitir restablecer contrasena sin exponer credenciales.

Enfoque aplicado: token temporal en `PasswordResetToken`, validacion de expiracion y estado `used`.

Resultado observable: flujo `/recuperarContraseña` y `/reset-password/:token`.

### Integracion de comentarios

Reto: mostrar comentarios propios junto a comentarios externos de YouTube.

Enfoque aplicado: el modal consulta el backend para comentarios VHSFlix y para comentarios de YouTube por `video_id`.

Resultado observable: la UI combina ambas fuentes y etiqueta el origen.

### Juego y leaderboard

Reto: integrar una experiencia adicional con puntuaciones persistidas sin salir de la aplicacion.

Enfoque aplicado: pagina `/relax`, comunicacion por `postMessage` desde el juego embebido y endpoints `/scores`.

Resultado observable: el juego obtiene ranking y guarda puntuaciones autenticadas.

## 12. Resultado

El proyecto deja implementada una aplicacion Full Stack donde el usuario puede explorar peliculas, buscar titulos, ver trailers, registrarse, iniciar sesion, gestionar favoritos, consultar perfil, actualizar avatar, recuperar contrasena, publicar comentarios propios y usar un modo Relax con puntuaciones.

No documentar resultados comerciales ni metricas porque no existen evidencias.

## 13. Lo que aprendi

Este proyecto permite explicar aprendizaje practico en:

- Consumo de APIs externas desde React.
- Gestion de estado compartido con Context API y useReducer.
- Separacion entre frontend y backend.
- Autenticacion con JWT.
- Modelado de entidades relacionadas con SQLAlchemy.
- Sincronizacion entre datos externos de peliculas y datos propios de usuario.
- Manejo de formularios de login, registro y recuperacion.
- Integracion de servicios externos como YouTube Data API y Resend.
- Despliegue separado de frontend y backend.

## 14. Como evolucionaria el producto

Mejoras futuras respaldadas o coherentes con la documentacion del README:

- Sistema de valoraciones.
- Recomendaciones personalizadas.
- Autoplay de trailers al hacer hover como mejora planificada del README; revisar porque existe una implementacion parcial de preview en componentes de peliculas.
- Persistencia y refinamiento de favoritos como area ya implementada que puede seguir mejorandose.
- Mejoras de proteccion de rutas en frontend mediante un componente dedicado.
- Gestion mas clara de variables de entorno y eliminacion de API keys hardcodeadas en componentes.
- Mejora de accesibilidad en botones con iconos y tarjetas interactivas.

Estas mejoras representan posibles evoluciones y no funcionalidades disponibles actualmente, salvo donde el codigo ya muestra una implementacion parcial.

## Contenido no confirmado o descartado

- No hay evidencia de cliente real.
- No hay metricas de uso, rendimiento o conversion.
- No hay roles diferenciados.
- No hay sistema de pagos.
- No hay suscripciones.
- No hay reproductor propio de peliculas completas.
- No hay recomendaciones personalizadas implementadas.
- No hay sistema de valoraciones implementado.
- No hay evidencia de cumplimiento legal especifico sobre contenido multimedia.
