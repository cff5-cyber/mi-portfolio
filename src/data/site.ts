export const site = {
  name: 'Carlos Flores Fernández',
  role: 'Desarrollador Web',
  tagline: 'Interfaces limpias, código mantenible y soluciones web modernas.',
  location: 'Fuentes de León, Badajoz',
  email: 'floresfernandezcarlos5@gmail.com',
  phone: '+34 693 57 56 02',
} as const;

export const about = {
  paragraphs: [
    'Técnico Superior en Desarrollo de Aplicaciones Web con especialización en Python y tecnologías web modernas.',
    'Experiencia práctica en agencias digitales y proyectos personales, combinando frontend dinámico con bases sólidas en backend y análisis de datos.',
  ],
} as const;

export const projects = [
  {
    title: 'Nova Store',
    description:
      'E-commerce SPA con catálogo de productos, filtros por categoría, carrito de compra y flujo de pedidos.',
    tags: ['React', 'Vite', 'Tailwind'],
    url: '', // Enlace al proyecto o demo
    github: '', // Enlace al repositorio
  },
  {
    title: 'LÚMINA',
    description:
      'Agenda digital para peluquería: reserva de citas, gestión de servicios y panel de administración.',
    tags: ['React', 'FastAPI', 'MySQL'],
    url: '',
    github: '',
  },
  {
    title: 'Barberia',
    description:
      'Sitio web para barbería local con servicios, galería, reserva de citas y chatbot integrado.',
    tags: ['HTML/CSS', 'JavaScript', 'PWA'],
    url: '',
    github: '',
  },
] as const;

export const skills = [
  'Astro',
  'React',
  'JavaScript',
  'Python',
  'Django',
  'FastAPI',
  'SQL',
  'Git',
  'HTML/CSS',
  'WordPress',
] as const;

export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
] as const;
