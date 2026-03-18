import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    logLevel: 'info', // Suppress warnings, only show errors
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(process.cwd(), "./src"),
        },
    },
});