import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This repository deploys as a GitHub Pages project site at /portfolio/.
  base: '/portfolio/',
})
