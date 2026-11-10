# Portfolio

Web personal hecha con [Astro](https://astro.build), CSS nativo y Markdown.

## Ejecutar en local (Docker)

Solo necesitas Docker Desktop; no hace falta instalar Node.js.

```sh
docker compose up        # instala dependencias y arranca en http://localhost:4321
docker compose down      # para el contenedor
```

Los cambios en los archivos se ven al momento en el navegador.

En Docker, el servidor arranca con `--ignore-lock`. Astro suele guardar un bloqueo en `.astro/dev.json` para no lanzar dos servidores a la vez. Ese archivo queda en tu carpeta, sobrevive a los reinicios del contenedor y provocaba el error `Another astro dev server is already running`. En el contenedor solo hay un servidor, así que el bloqueo no hace falta. Si ves ese error tras actualizar desde una versión anterior, puedes borrar `.astro/dev.json` sin problema.

Compilar la web estática (se genera en `dist/`):

```sh
docker compose run --rm web sh -c "npm ci && npm run build"
```

Las dependencias viven en un volumen de Docker (`node_modules`), no en tu carpeta. Si alguna vez quieres reinstalarlas desde cero: `docker compose down -v`.

Local, CI y publicación usan la misma imagen (`node:26-bookworm-slim`) y el mismo `package-lock.json` con `npm ci`.

### Añadir o actualizar una dependencia

El lockfile se genera siempre dentro del contenedor:

```sh
docker compose run --rm web npm install <paquete>
```

## CI y publicación

- **CI** (`.github/workflows/ci.yml`): en cada push y Pull Request a `main` compila la web. No publica nada.
- **Publicación** (`.github/workflows/release.yml`): al publicar una Release en GitHub, compila el código de su tag y lo despliega en GitHub Pages. Las Releases marcadas como *pre-release* se ignoran.

### Configuración de GitHub (una sola vez)

1. **Settings → Pages → Build and deployment → Source:** elige **GitHub Actions**.
2. **Settings → Environments → github-pages → Deployment branches and tags:** añade una regla de tag (por ejemplo `v*`). Por defecto este entorno solo permite desplegar desde `main`, y las Releases se ejecutan desde un tag.

La URL pública y la ruta base (por ejemplo `/portfolio`) no están escritas en el código. El workflow las lee de la configuración de Pages durante la publicación. Si más adelante añades un dominio propio en Settings → Pages, se ajustan solas.

### Publicar una versión

1. Comprueba que la CI de `main` está en verde.
2. En GitHub: **Releases → Draft a new release**, crea un tag nuevo (por ejemplo `v1.0.0`) sobre `main` y pulsa **Publish release**.
3. Sigue el progreso en la pestaña **Actions**. Al terminar, la URL aparece en el entorno `github-pages`.

## Dónde está cada cosa

```
compose.yaml           ← entorno de desarrollo con Docker
.github/workflows/     ← CI (ci.yml) y publicación (release.yml)
src/
  data/site.ts         ← tus datos personales (nombre, bio, email, enlaces)
  content/blog/        ← artículos (.md)
  content/projects/    ← proyectos (.md)
  content.config.ts    ← campos de artículos y proyectos
  pages/               ← una página por archivo (la ruta sale del nombre)
  layouts/Base.astro   ← cabecera, navegación y pie
  styles/global.css    ← todos los estilos (colores y fuentes arriba del todo)
  lib/url.ts           ← url('/ruta/'): úsalo en los enlaces internos para que funcionen en GitHub Pages
```

## Datos personales

Edita `src/data/site.ts`. El nombre, la frase de portada, la página "Sobre mí", el email y los enlaces salen de ahí.

## Añadir un artículo

Crea `src/content/blog/mi-articulo.md`. El nombre del archivo es la URL (`/blog/mi-articulo/`).

```md
---
title: Título del artículo
description: Resumen de una frase.
date: 2026-11-10
---

Texto en Markdown.
```

## Añadir un proyecto

Crea `src/content/projects/mi-proyecto.md`. Se ordenan por año, del más reciente al más antiguo. `url` y `repo` son opcionales.

```md
---
title: Nombre del proyecto
description: Qué es y qué problema resuelve.
year: 2026
tags: [Astro, TypeScript]
url: https://ejemplo.com
repo: https://github.com/usuario/proyecto
---
```

Los tres proyectos y artículos más recientes aparecen también en la portada.
