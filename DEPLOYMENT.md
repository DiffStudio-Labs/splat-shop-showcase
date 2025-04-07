
# Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

## How it works

1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered whenever code is pushed to the `main` branch.
2. It builds the project and deploys it to GitHub Pages.
3. The application is configured to work with the repository name as the base path.

## Development workflow

1. Make changes to the `main` branch for development and testing.
2. The GitHub Actions workflow will automatically deploy your changes to GitHub Pages when you push to the `main` branch.

## GitHub Pages Setup Required

Before the automatic deployment works, you need to:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select:
   - Source: "GitHub Actions"

The site will be available at: `https://diffstudio-labs.github.io/splat-shop-showcase/`

## Troubleshooting

If deployment fails or the site shows a blank page:

1. Make sure your GitHub Pages is configured to use GitHub Actions (not branch deployment)
2. Check the GitHub Actions tab in your repository to see the error logs
3. Ensure you've enabled GitHub Pages in your repository settings
4. Verify you have the correct permissions set for GitHub Pages deployment
5. Check the browser console for any JavaScript errors that might be preventing the site from loading
6. Verify the application correctly uses the base path (import.meta.env.BASE_URL) for routing

## Local Testing with Base Path

To test how the site will work with the base path locally:

```
# Run with the base path that matches your repository name
npm run dev -- --base=/splat-shop-showcase/
```

This simulates how the application will behave when deployed to GitHub Pages.
