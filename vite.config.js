import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/trillo-unibox/',

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
