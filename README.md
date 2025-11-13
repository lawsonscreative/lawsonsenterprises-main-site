# Lawsons Enterprises Ltd - Corporate Website

Professional corporate website for Lawsons Enterprises Ltd, showcasing our two trading brands: Lawsons Creative and Lawsons Studio.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Font:** Inter (Google Fonts)

## Project Structure

```
lawsonsenterprises-main-site/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── terms/
│   │   └── page.tsx        # Terms of Service
│   └── privacy/
│       └── page.tsx        # Privacy Policy
├── components/
│   ├── Header.tsx          # Navigation with active states
│   └── Footer.tsx          # Footer component
├── public/
│   └── logos/              # Logo assets
└── tailwind.config.ts      # Tailwind config with custom colors
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

✅ Modern, professional design  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Navigation with active page indicators  
✅ SEO optimized with metadata  
✅ Contact form integration  
✅ Smooth animations and transitions  
✅ GDPR-compliant privacy policy  
✅ Apple Developer Program verification ready  

## Deployment

### Deploy to Vercel

1. Push code to GitHub:
```bash
git add .
git commit -S -m "Initial commit: Professional corporate website"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy
5. Add custom domain: `lawsonsenterprises.com`

### DNS Configuration

Add these records in your domain registrar:

**A Record:**
- Name: `@`
- Value: `76.76.21.21`

**CNAME Record:**
- Name: `www`
- Value: `cname.vercel-dns.com`

## Design System

### Colors

- **Primary:** #27a6ea (cyan)
- **Primary variations:** 50-900 scale
- **Gray:** Tailwind default scale

### Typography

- **Font:** Inter (Google Fonts)
- **Sizes:** 14px - 72px (responsive)
- **Weights:** 400, 500, 600, 700

### Components

- Large, prominent logo (48px)
- Navigation with hover and active states
- Gradient hero sections
- Professional brand cards with SVG icons
- Shadow-elevated cards with hover effects

## Company Information

- **Legal Name:** Lawsons Enterprises Ltd
- **Company Number:** 16433965
- **VAT:** GB495884223
- **Location:** London, United Kingdom
- **Email:** hello@lawsonsenterprises.com

## Trading Brands

### Lawsons Creative
Professional website design for small service businesses.

### Lawsons Studio
Custom fitness apparel and print-on-demand solutions.

## License

© 2025 Lawsons Enterprises Ltd. All rights reserved.
