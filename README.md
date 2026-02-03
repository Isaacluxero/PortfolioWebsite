# Portfolio Website

A modern, sophisticated portfolio website built with React and TypeScript.

## Features

- Clean, minimalist design
- Fully responsive
- Smooth scrolling navigation
- Placeholder sections for showcasing work
- Journey section for education and milestones
- TypeScript for type safety
- Component-based architecture

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Work.tsx
│   ├── Journey.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── styles/           # Component-specific CSS
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Customization

- Update contact information in `src/components/Contact.tsx`
- Add your projects in `src/components/Work.tsx`
- Add your education/achievements in `src/components/Journey.tsx`
- Customize colors in `src/index.css` (CSS variables)
