import { defineConfig } from 'astro/config';

export default defineConfig({
  // URL pública y ruta base de la web. Solo las define el workflow de
  // publicación (release.yml), que las obtiene de la configuración de
  // GitHub Pages. En local quedan vacías y la web se sirve en "/".
  site: process.env.PAGES_ORIGIN || undefined,
  base: process.env.PAGES_BASE_PATH || undefined,

  vite: {
    server: {
      // Docker en Windows no recibe avisos de cambios en los archivos
      // montados: el sondeo hace que la recarga en caliente funcione.
      watch: { usePolling: true },
    },
  },
});
