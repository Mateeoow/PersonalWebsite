# Martin Gayem — Personal Portfolio

A responsive personal portfolio for Martin Gayem, a BS Computer Science student and aspiring software engineer in Manila, Philippines.

The site presents selected web, mobile, and interactive projects alongside Martin's technical stack, education, recognitions, organization experience, and contact links. Its visual direction combines a minimalist editorial layout with developer-focused details, subtle motion, and an electric-lime accent.

## Highlights

- Dark theme by default with a saved light/dark preference
- Responsive layouts for desktop, tablet, and mobile
- Selected projects with source-code and live-demo links
- Searchable quick navigation with `Ctrl/Cmd + K`
- Accessible semantic structure, focus states, and reduced-motion support
- Lightweight scroll reveals and a small keyboard easter egg
- SEO-ready page metadata

## Built With

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4 and custom CSS
- Lucide icons
- Vercel-ready production configuration

## Run Locally

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quality Checks

```bash
npm run lint
npm run build
```

Both commands should complete successfully before publishing changes.

## Project Structure

```text
public/
  martin-gayem.png       Profile photo
src/
  app/
    globals.css          Theme, layout, responsive styles, and visuals
    layout.tsx           Root layout and page metadata
    page.tsx             Portfolio route
  components/
    Portfolio.tsx        Portfolio content and interactions
```

## Deployment

This project is configured for Vercel. Import the GitHub repository in Vercel, keep the detected Next.js settings, and deploy. No environment variables are required.

## Contact

- [GitHub](https://github.com/Mateeoow)
- [LinkedIn](https://www.linkedin.com/in/martin-gayem-70079138b)
- [Email via Gmail](https://mail.google.com/mail/?view=cm&fs=1&to=gayemmartin%40gmail.com&su=Portfolio%20Inquiry)

## Design Reference

The visual direction was inspired by [800k.dev](https://800k.dev/) while keeping the implementation and portfolio content original to Martin.
