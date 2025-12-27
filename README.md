# SmashZone - Premium Indoor Pickleball Court

A modern, high-performance landing page for SmashZone - a premium indoor Pickleball facility. Optimized for conversions with strategic section placement.

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
- **Accent:** `#00E5FF` (Cyan/Blue)
- **Background:** `#0F0F0F` (Almost Black), `#1A1A1A` (Dark Grey)
- **Text:** `#FFFFFF` (Headings), `#E5E5E5` (Body text)

### Visual Style
- Cyber-sport aesthetic with dark mode default
- Glowing green accents and gradients
- Angular, dynamic lines with shield motifs
- Glassmorphism effects on testimonial cards

## Page Sections (Conversion-Optimized Flow)

1. **Hero Section** - Eye-catching introduction with dual CTAs and key stats
2. **USP Section** - 6 feature cards showcasing quick value propositions
3. **Why Indoor Section** - Pain point solver comparing outdoor vs indoor (key conversion driver)
4. **How It Works** - 3-step booking process to reduce friction
5. **Amenities Section** - 5-star facilities icon grid
6. **Newbie Section** - Beginner-friendly banner to expand audience
7. **Gallery** - Visual social proof with masonry grid
8. **Testimonials** - Glassmorphism review cards with trust indicators
9. **Pricing** - Transparent pricing with "Best Value" membership highlight
10. **Footer** - Enhanced with interactive map, Zalo contact, hotline

## Key Features

- ✅ **Fully responsive** (mobile-first design)
- ✅ **Mobile sticky booking bar** with price teaser (appears after scroll)
- ✅ **Desktop floating CTA button** for large screens
- ✅ **Smooth scroll animations** with Framer Motion
- ✅ **Interactive hover effects** on all cards and buttons
- ✅ **Glassmorphism UI** on testimonial cards
- ✅ **SEO optimized** metadata
- ✅ **Vietnamese language** support

## Conversion Optimization Features

- **Pain Point Solver:** "Why Indoor" section addresses weather concerns
- **Social Proof:** Testimonials with 5-star ratings and trust metrics
- **Beginner Capture:** Dedicated section for newcomers
- **Clear Pricing:** Transparent pricing with highlighted best value
- **Multiple CTAs:** Strategic placement throughout the page
- **Sticky Booking Bar:** Always-visible CTA on mobile devices

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

## Project Structure

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
│   │   ├── why-indoor-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── amenities-section.tsx
│   │   ├── newbie-section.tsx
│   │   ├── gallery-section.tsx
│   │   ├── testimonials-section.tsx
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
