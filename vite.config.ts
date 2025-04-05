
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Get the repository name for GitHub Pages - defaults to '/' for local development
const getBase = () => {
  // When GitHub Pages builds your site, it sets this environment variable
  // to the repository name that's being deployed
  const repo = process.env.GITHUB_REPOSITORY;
  
  // Only use the repo name as base path when building for production on GitHub Actions
  if (repo && process.env.GITHUB_ACTIONS === 'true') {
    const [, repoName] = repo.split('/');
    return `/${repoName}/`;
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
