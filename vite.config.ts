
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Get the base for GitHub Pages deployment
const getBase = () => {
  // When deploying to a custom domain, we should use '/' as the base
  // Check if CNAME file exists, which indicates a custom domain
  if (process.env.GITHUB_ACTIONS === 'true') {
    return '/'; // When using a custom domain, we want the base to be '/'
  }
  
  // Default path for local development
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBase(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
