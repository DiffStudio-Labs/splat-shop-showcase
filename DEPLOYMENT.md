
# Deployment to GitHub Pages with Custom Domain

This project is configured to automatically deploy to GitHub Pages with a custom domain when changes are pushed to the `prod` branch.

## How it works

1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered whenever code is pushed to the `prod` branch.
2. It builds the project and deploys it to GitHub Pages.
3. The CNAME file is automatically copied to the build directory to maintain the custom domain configuration.

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
4. Under "Custom domain", ensure your domain is configured correctly

The site will be available at: `https://diffstudio.co`

## Troubleshooting

If deployment fails or the site shows a blank page:

1. Make sure your GitHub Pages is configured to use GitHub Actions (not branch deployment)
2. Check the GitHub Actions tab in your repository to see the error logs
3. Ensure you've enabled GitHub Pages in your repository settings
4. Verify you have the correct permissions set for GitHub Pages deployment
5. Check the browser console for any JavaScript errors that might be preventing the site from loading
6. Verify the CNAME file is correctly set up with your domain
7. Make sure your DNS settings point to GitHub Pages servers:
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - OR CNAME record pointing to your-username.github.io
