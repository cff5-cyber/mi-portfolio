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
    title: 'Barbería',
    description:
      'Sitio web para barbería local con servicios, galería, reserva de citas y chatbot integrado.',
    tags: ['React', 'Spring Boot'],
    image: '/images/projects/barberia.png',
    url: 'https://barberia-mzbj.onrender.com', // Enlace al proyecto o demo
    github: '', // Enlace al repositorio
  },
  {
    title: 'Dentista',
    description:
      'Sistema de gestión para clínica dental con control de citas, historiales médicos y base de datos integrada.',
    tags: ['JavaScript', 'FastAPI'],
    image: '/images/projects/dentista.png',
    url: 'https://dentista-i5vh.onrender.com',
    github: '',
  },
  {
    title: 'Gestión Personal',
    description:
      'Plataforma integral para gestión de tareas personales, organización diaria y seguimiento de metas.',
    tags: ['Astro', 'Laravel'],
    image: '/images/projects/gestionPersonal.png',
    url: 'https://gestionpersonal-7ifb.onrender.com',
    github: '',
  },
] as const;

export const skills = [
  'Astro',
  'React',
  'JavaScript',
  'TypeScript',
  'Python',
  'Django',
  'FastAPI',
  'Java',
  'Spring Boot',
  'PHP',
  'Laravel',
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
