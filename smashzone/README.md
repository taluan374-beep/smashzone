# SmashZone - Premium Indoor Pickleball Court

A modern, high-performance landing page for SmashZone - a premium indoor Pickleball facility.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Font:** Montserrat

## Design System

### Color Palette
- **Primary:** `#76D713` (Neon Lime Green)
- **Secondary:** `#004D40` (Deep Teal/Dark Green)
- **Background:** `#0F0F0F` (Almost Black), `#1A1A1A` (Dark Grey)
- **Text:** `#FFFFFF` (Headings), `#E5E5E5` (Body text)
- **Accent:** `#00E5FF` (Cyan/Blue)

### Visual Style
- Cyber-sport aesthetic with dark mode default
- Glowing green accents and gradients
- Angular, dynamic lines with shield motifs
- Rounded corners for cards, sharp angles for background dividers

## Page Sections

1. **Hero Section** - Eye-catching introduction with CTAs and stats
2. **USP Section** - Feature cards showcasing facility benefits
3. **How It Works** - 3-step booking process with timeline
4. **Gallery** - Masonry grid with hover effects
5. **Pricing** - Transparent pricing cards with membership highlight
6. **Footer** - Contact info, links, and map placeholder

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Sticky mobile booking button
- ✅ Smooth scroll animations with Framer Motion
- ✅ Interactive hover effects
- ✅ SEO optimized metadata
- ✅ Vietnamese language support

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

The project uses a modular component structure:

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind config
│   ├── layout.tsx       # Root layout with fonts & metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── sections/        # Page sections
│   │   ├── hero-section.tsx
│   │   ├── usp-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── gallery-section.tsx
│   │   ├── pricing-section.tsx
│   │   └── footer-section.tsx
│   ├── shared/          # Reusable components
│   │   ├── header.tsx
│   │   ├── mobile-sticky-button.tsx
│   │   └── motion-wrapper.tsx
│   └── ui/              # Shadcn/ui components
└── lib/
    └── utils.ts         # Utility functions
```

## License

© 2024 SmashZone. All rights reserved.
