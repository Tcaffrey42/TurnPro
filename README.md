# TurnPro Sprint 1 - Run 1 Vercel No-Lock

This package is intentionally shipped WITHOUT package-lock.json because the previous lockfile contained private/internal registry URLs that can cause Vercel to hang during dependency install.

## Vercel settings
- Framework: Vite
- Install Command: npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
- Build Command: npm run build
- Output Directory: dist

## Important
Do not commit node_modules, dist, or package-lock.json for this deploy pass.
Use Vercel: Redeploy -> Clear Build Cache and Redeploy.
