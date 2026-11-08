# Ahmed El Sawy — Portfolio

Premium dark developer portfolio built with React, Vite, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Structure

```
src/
  components/   Navbar, Hero, Services, Stats, Experience, Projects, ContactPanel, FAQ, Footer
  styles/       one CSS file per component + global.css + variables.css (design tokens)
  App.jsx
  main.jsx
```

## Customizing

- Colors, fonts, spacing, and radii all live in `src/styles/variables.css`.
- Replace the "AE" placeholder in `Hero.jsx` (`.hero__portrait-placeholder`) with a real photo when ready — swap the `<div>` for an `<img>`.
- Update social links in `ContactPanel.jsx` and `Footer.jsx`.
- Project and experience content is in `Projects.jsx` and `Experience.jsx` as plain arrays — easy to extend.
