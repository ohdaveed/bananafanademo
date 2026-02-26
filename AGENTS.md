# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **static single-page React application** (Bananafana Preschool Website Redesign Showcase). There is no build system, package manager, linting, or automated tests. All dependencies (React 18, ReactDOM, Babel Standalone, Tailwind CSS, Google Fonts) are loaded at runtime from CDNs.

### Running the app

Serve the repository root over HTTP on port 4000:

```bash
python3 -m http.server 4000
```

Then open `http://localhost:4000/` in a browser. Internet connectivity is required for CDN scripts to load.

### Key files

- `index.html` — entry point
- `assets/js/app.jsx` — main React app (~1480 lines, single component, in-browser JSX via Babel)
- `assets/css/styles.css` — custom styles (gradients, animations, accessibility)
- `assets/media/` — video and image assets

### Caveats

- There is no `package.json`, no build step, no linter, and no test suite.
- The VS Code workspace file (`bananafanademo.code-workspace`) configures AutoPreview on port 4000.
- JSX transpilation happens in the browser via Babel Standalone — changes to `app.jsx` are picked up on page reload without any build.
