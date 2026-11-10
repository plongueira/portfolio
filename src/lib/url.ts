// Antepone la ruta base de la web (por ejemplo "/portfolio" en GitHub Pages).
// En local la base es "/" y los enlaces quedan igual.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string) {
  return base + path;
}
