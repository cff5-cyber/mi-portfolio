export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Herramientas';
  color: string;
  iconSvg: string;
}

export const techDetails: Record<string, TechItem> = {
  Astro: {
    name: 'Astro',
    category: 'Frontend',
    color: '#FF5D01',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15.5 14h.01M12 14h.01M8.5 14h.01M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.5-.95A8.94 8.94 0 0012 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>`,
  },
  React: {
    name: 'React',
    category: 'Frontend',
    color: '#61DAFB',
    iconSvg: `<ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" stroke-width="1.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`,
  },
  JavaScript: {
    name: 'JavaScript',
    category: 'Frontend',
    color: '#F7DF1E',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 16v-4a2 2 0 114 0v4m-4-2h4m4 2v-6m0 0l2 2m-2-2l-2 2"/>`,
  },
  TypeScript: {
    name: 'TypeScript',
    category: 'Frontend',
    color: '#3178C6',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 9h6m-3 0v9m4-5h3.5M16.5 18h3"/>`,
  },
  Python: {
    name: 'Python',
    category: 'Backend',
    color: '#3776AB',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3c-4 0-4 2-4 4v2h8V7c0-2 0-4-4-4zm-4 8v2c0 2 0 4 4 4s4-2 4-4v-2H8z"/><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/>`,
  },
  Django: {
    name: 'Django',
    category: 'Backend',
    color: '#2BAF74',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11A7 7 0 015 11M12 4v16m-4-8h8"/>`,
  },
  FastAPI: {
    name: 'FastAPI',
    category: 'Backend',
    color: '#009688',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>`,
  },
  Java: {
    name: 'Java',
    category: 'Backend',
    color: '#ED8B00',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 18a5 5 0 0010 0M6 14s2-2 6-2 6 2 6 2M10 3s1 2-2 4c0 0 3-1 4-3M5 21h14"/>`,
  },
  'Spring Boot': {
    name: 'Spring Boot',
    category: 'Backend',
    color: '#6DB33F',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3v18m-7-9a7 7 0 0114 0"/>`,
  },
  PHP: {
    name: 'PHP',
    category: 'Backend',
    color: '#777BB4',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
  },
  Laravel: {
    name: 'Laravel',
    category: 'Backend',
    color: '#FF2D20',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
  },
  SQL: {
    name: 'SQL',
    category: 'Herramientas',
    color: '#336791',
    iconSvg: `<ellipse cx="12" cy="6" rx="8" ry="3" stroke-width="1.8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>`,
  },
  Git: {
    name: 'Git',
    category: 'Herramientas',
    color: '#F05032',
    iconSvg: `<circle cx="6" cy="6" r="2" stroke-width="1.8"/><circle cx="18" cy="18" r="2" stroke-width="1.8"/><circle cx="6" cy="18" r="2" stroke-width="1.8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 8v8M8 6h7a3 3 0 013 3v7"/>`,
  },
  'HTML/CSS': {
    name: 'HTML/CSS',
    category: 'Frontend',
    color: '#E34F26',
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 4l2 16 6 2 6-2 2-16H4zm4 4h8m-8 4h8"/>`,
  },
  WordPress: {
    name: 'WordPress',
    category: 'Herramientas',
    color: '#21759B',
    iconSvg: `<circle cx="12" cy="12" r="9" stroke-width="1.8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.5 9l2.5 8 2-6 2 6 2.5-8"/>`,
  },
};
