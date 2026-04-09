# Sennet Senadheera — Portfolio

Personal portfolio site built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

## Customizing Your Content

### Your Photo
Place your headshot image in `public/` (e.g. `public/headshot.jpg`), then update the `<img>` tags in:
- `src/pages/About.jsx` — replace the placeholder div
- `src/pages/Contact.jsx` — replace the placeholder div

### Your Resume
1. Place your resume PDF in `public/resume.pdf`
2. In `src/pages/Resume.jsx`, change `hasResume` to `true`

### Bio & Contact Info
- **About page text**: Edit `src/pages/About.jsx`
- **Contact details**: Edit the `contactInfo` object at the top of `src/pages/Contact.jsx`
- **Social links in navbar**: Edit the `href` values in `src/components/Navbar.jsx`

### Projects
Edit the `projects` array in `src/pages/Projects.jsx`. Each project has:
- `title` — project name
- `description` — brief description
- `videoEmbed` — paste an iframe embed string (e.g. from YouTube) or leave empty for placeholder

### Colors
All colors are CSS variables in `src/index.css` under `:root`. Key ones:
- `--color-primary` — green accent (tabs, buttons, titles)
- `--color-accent` — red/coral (Contact Me button)
- `--color-bg-teal` — homepage hero background
- `--color-dark` — header background

### Fonts
Loaded from Google Fonts in `index.html`. Change the `<link>` tag and update `--font-heading` / `--font-body` in `src/index.css`.

## Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Netlify, Vercel, GitHub Pages, etc.
