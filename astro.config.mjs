// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cff5-cyber.github.io',
  base: '/mi-portfolio',

  vite: {
    plugins: [tailwindcss()]
  }
});