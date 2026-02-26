# Netlify Deployment Guide

## Files to Deploy

- **`firstdemo.html`** - Main application (production file)
- **`netlify.toml`** - Netlify configuration
- **`GEMINI.md`** - Documentation

## Deployment Steps

### Option 1: GitHub + Netlify (Recommended)

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Netlify will auto-detect the configuration from `netlify.toml`
   - Click "Deploy site"

### Option 2: Drag & Drop (Fastest)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag `firstdemo.html` into the drop zone
3. Done! Your site is live

### Option 3: Netlify CLI

```bash
# Install Netlify CLI (if you don't have it)
npm install -g netlify-cli

# Deploy
netlify deploy --dir=. --prod
```

## What's Deployed

- ✅ Single-page React application
- ✅ All assets via CDN (React, Babel, Tailwind, Google Fonts)
- ✅ Responsive design with mobile support
- ✅ No backend required

## Site Features

- Modern, responsive landing page for Bananafana Preschool
- Spanish immersion preschool branding
- Mobile-first design using Tailwind CSS
- React components for dynamic content

## Troubleshooting

- **Images not showing?** Check that image files referenced in the HTML are included in the deployment.
- **Styles look off?** Ensure CDN links for Tailwind and Google Fonts are accessible.
- **JavaScript errors?** Check browser console for issues with React/Babel CDN links.

## Post-Deployment

After deployment:
1. Visit your Netlify URL
2. Test all interactive features
3. Check mobile responsiveness
4. Verify all links work correctly

Your site will be live at a URL like: `https://your-site-name.netlify.app`
