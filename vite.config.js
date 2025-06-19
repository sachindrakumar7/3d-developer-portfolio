import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3d-developer-portfolio/', // your GitHub repo name
  plugins: [react()],
});
