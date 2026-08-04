# NutriSmart Coach — Case Study Master

> Documento fuente aprobado para construir el caso de estudio del portfolio.
> No inventar métricas, funcionalidades ni decisiones no descritas aquí.

CASE STUDY MASTER
NutriSmart Coach
NutriSmart Coach
Plataforma Full Stack de nutrición y entrenamiento impulsada por inteligencia artificial

NutriSmart Coach es una plataforma diseñada para ayudar a las personas a mejorar sus hábitos alimenticios y su condición física mediante inteligencia artificial.

La aplicación permite analizar comidas a partir de una fotografía, calcular información nutricional, generar dietas y rutinas de entrenamiento personalizadas y realizar un seguimiento continuo del progreso del usuario desde una única plataforma.

El objetivo no era desarrollar únicamente un analizador de alimentos, sino crear una herramienta que reuniera en un solo lugar distintas funcionalidades relacionadas con la nutrición, el entrenamiento y el seguimiento personal.

El problema

Muchas personas quieren mejorar su alimentación o alcanzar un objetivo físico, pero mantener un seguimiento constante suele resultar complicado.

Las aplicaciones tradicionales obligan al usuario a introducir manualmente cada alimento, buscar productos en bases de datos o utilizar herramientas diferentes para controlar la dieta, el entrenamiento y el progreso.

Este proceso consume tiempo, genera fricción y hace que muchas personas abandonen el seguimiento después de pocos días.

Además, conocer únicamente las calorías de una comida no siempre es suficiente para tomar mejores decisiones. Los usuarios también necesitan entender el equilibrio nutricional de cada plato y recibir recomendaciones adaptadas a sus objetivos.

La solución

NutriSmart Coach reúne estas necesidades en una única plataforma.

El usuario solo necesita tomar una fotografía de su comida para que la aplicación la analice mediante inteligencia artificial y obtenga información nutricional relevante.

A partir de ese análisis, la plataforma puede generar recomendaciones personalizadas, crear planes de alimentación y proponer rutinas de entrenamiento adaptadas al objetivo del usuario, además de registrar toda la información para facilitar el seguimiento de su evolución.

El propósito del producto es reducir el esfuerzo necesario para mantener hábitos saludables y ofrecer una experiencia sencilla, rápida y personalizada.

Objetivos del proyecto

Durante el desarrollo definí varios objetivos principales:

Simplificar el registro de comidas mediante fotografías.
Automatizar el análisis nutricional utilizando inteligencia artificial.
Generar dietas adaptadas a los objetivos del usuario.
Crear rutinas de entrenamiento personalizadas.
Centralizar el seguimiento del progreso en una única aplicación.
Ofrecer una experiencia consistente tanto en web como en dispositivos móviles.
Mi responsabilidad

Desarrollé el proyecto de principio a fin, participando en todas las fases del producto.

Entre mis responsabilidades estuvieron:

Diseño de la arquitectura de la aplicación.
Desarrollo del frontend con React.
Desarrollo del backend con Node.js y Express.
Integración con Supabase y PostgreSQL.
Implementación de autenticación y gestión de usuarios.
Integración con Google Gemini para el análisis nutricional y la generación de recomendaciones.
Desarrollo de la aplicación móvil mediante Capacitor.
Despliegue de la aplicación en Vercel y Render.
Diseño y mejora continua de la experiencia de usuario.
Cómo está construido
Frontend
React
Vite
Tailwind CSS
Context API
Backend
Node.js
Express
Base de datos
Supabase
PostgreSQL
Inteligencia artificial
Google Gemini
Aplicación móvil
Capacitor
Infraestructura
Vercel
Render
Flujo del usuario
El usuario inicia sesión.
Toma una fotografía de la comida o selecciona una imagen.
La imagen se optimiza antes de enviarse al servidor.
La API procesa la solicitud.
Google Gemini analiza la imagen.
Se calcula la información nutricional.
Se generan recomendaciones, dietas o rutinas cuando corresponde.
El resultado se almacena en Supabase.
El usuario puede consultar su historial y seguir su progreso.
Decisiones técnicas
React

Elegí React por su arquitectura basada en componentes, que facilita el mantenimiento, la reutilización de código y la evolución del producto.

Node.js y Express

Permitieron construir una API sencilla y flexible para centralizar la lógica de negocio y la comunicación con los distintos servicios.

Supabase

Se utilizó para unificar autenticación, base de datos PostgreSQL y almacenamiento de archivos, reduciendo la complejidad de la infraestructura.

Google Gemini

Se integró para interpretar imágenes y generar respuestas contextualizadas relacionadas con nutrición, alimentación y entrenamiento.

Capacitor

Permitió reutilizar gran parte del código de la aplicación web para ofrecer una experiencia móvil con acceso a funcionalidades nativas como la cámara.

Retos técnicos

Durante el desarrollo surgieron varios retos interesantes:

Integrar el análisis de imágenes mediante IA manteniendo tiempos de respuesta adecuados.
Optimizar el tamaño de las fotografías antes del envío para reducir consumo de recursos.
Diseñar un flujo que funcionara correctamente tanto en navegador como en Android.
Gestionar la autenticación de usuarios y la persistencia de datos de forma segura.
Coordinar frontend, backend e inteligencia artificial sin comprometer la experiencia de usuario.
Adaptar la interfaz para facilitar el uso desde dispositivos móviles.
Funcionalidades principales
Análisis nutricional mediante fotografías.
Cálculo automático de calorías y macronutrientes.
Generación de dietas personalizadas.
Generación de rutinas de entrenamiento.
Historial de análisis.
Seguimiento del progreso.
Autenticación de usuarios.
Aplicación web y móvil.
Integración con inteligencia artificial.
Lo que aprendí

NutriSmart Coach me permitió consolidar una visión más completa del desarrollo Full Stack.

Además de construir interfaces y APIs, tuve que tomar decisiones relacionadas con arquitectura, experiencia de usuario, integración de inteligencia artificial, despliegue y adaptación a dispositivos móviles.

El proyecto reforzó mi capacidad para abordar un producto desde una perspectiva global, entendiendo cómo interactúan el frontend, el backend, la base de datos y los servicios externos para ofrecer una experiencia coherente al usuario.

Próximas mejoras

Si continuara evolucionando NutriSmart Coach, las siguientes funcionalidades serían prioritarias:

Integración con dispositivos y wearables para sincronizar actividad física.
Planificación semanal automática de comidas y entrenamientos.
Recomendaciones más personalizadas basadas en el historial del usuario.
Estadísticas avanzadas sobre nutrición y rendimiento.
Nuevas capacidades de inteligencia artificial con mayor contexto del usuario.
Compartir el progreso con nutricionistas o entrenadores.