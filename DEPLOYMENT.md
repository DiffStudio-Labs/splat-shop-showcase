
# Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `prod` branch.

## How it works

1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered whenever code is pushed to the `prod` branch.
2. It builds the project and deploys it to GitHub Pages.

## Development workflow

1. Make changes to the `main` branch for development.
2. Test your changes locally with `npm run dev`.
3. When ready to deploy:
   ```
   # Switch to prod branch
   git checkout prod
   
   # Merge changes from main
   git merge main
   
   # Push to trigger deployment
   git push origin prod
   ```

## GitHub Pages Setup Required

Before the automatic deployment works, you need to:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select:
   - Source: "GitHub Actions"

The site will be available at: `https://[your-username].github.io/[repository-name]/`

## First-time setup

If this is a new repository, make sure to:

1. Create a `prod` branch: 
   ```
   git checkout -b prod
   git push -u origin prod
   ```
2. Enable GitHub Pages in your repository settings
3. Make your first push to the `prod` branch to trigger the initial deployment

## Troubleshooting

If deployment fails:
- Check the GitHub Actions tab in your repository to see the error logs
- Ensure you've enabled GitHub Pages in your repository settings
- Verify you have the correct permissions set for GitHub Pages deployment
