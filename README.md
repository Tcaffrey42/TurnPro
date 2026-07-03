# TurnPro Sprint 1 Run 1 - Flat Vercel Fix

This package is intentionally flat to avoid GitHub web-upload folder issues.

Required repo root files:
- index.html
- package.json
- main.jsx
- styles.css
- .npmrc
- .gitignore

Vercel settings:
- Framework: Vite
- Install Command: npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
- Build Command: npm run build
- Output Directory: dist
