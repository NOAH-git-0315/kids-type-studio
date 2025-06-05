import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kids-type-studio/',
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  }
})
