// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://albert-sobreo.github.io',
  base: '/portfolio',
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});