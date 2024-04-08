import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    outDir: './test/build',
    rollupOptions: {
      input: [
        'assets/script.ts',
      ],
    },
  },
});
