// Datos personales de la web. Todo lo que aparece sobre ti sale de aquí.
// Sustituye los valores de ejemplo por los tuyos.

export const site = {
  name: 'Tu Nombre',
  role: 'Desarrollador',
  // Frase corta que aparece en grande en la portada.
  tagline: 'Escribe aquí una frase que resuma lo que haces.',
  // Descripción breve para buscadores y para la portada.
  description: 'Una o dos frases sobre ti y tu trabajo.',
  location: '',
  email: 'tu@email.com',

  // Párrafos de la página "Sobre mí".
  about: [
    'Escribe aquí quién eres y a qué te dedicas.',
    'Añade tantos párrafos como necesites: cada elemento de esta lista es un párrafo.',
  ],

  // Enlaces a tus perfiles. Se muestran en Contacto y en el pie de página.
  // Ejemplo: { label: 'GitHub', url: 'https://github.com/tu-usuario' },
  links: [] as { label: string; url: string }[],
};
