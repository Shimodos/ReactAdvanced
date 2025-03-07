import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('project')
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
    target: 'es2020' // Изменяем цель с es5 на es2015
  },
  esbuild: {
    // Отключаем трансформацию в ES5
    target: 'es2020'
  }
});
