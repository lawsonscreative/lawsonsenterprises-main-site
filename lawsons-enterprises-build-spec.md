# Lawsons Enterprises Ltd - Website Build Specification

**Repository:** `lawsonscreative/lawsonsenterprises-main-site`  
**Domain:** lawsonsenterprises.com  
**Framework:** Next.js 14 (App Router)  
**Styling:** Tailwind CSS  
**Deployment:** Vercel

---

## Project Purpose

Build a professional corporate website for Lawsons Enterprises Ltd to serve as:
1. Company presence website
2. Apple Developer Program verification (requires live site)
3. Parent company site showcasing two trading brands
4. Professional credibility for both trading brands

---

## Technical Requirements

### Stack
- Next.js 14.2+ (App Router, not Pages Router)
- TypeScript
- Tailwind CSS 3.4+
- React 18+
- No additional UI libraries (build custom components)

### File Structure
```
lawsonsenterprises-main-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   └── privacy/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── BrandCard.tsx
│   │   └── ContactForm.tsx
│   └── assets/
│       └── logos/
│           ├── logo-primary.svg
│           ├── logo-icon.svg
│           └── logo-wordmark.svg
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

### SEO Requirements
- Proper meta tags on all pages
- Open Graph tags
- Semantic HTML
- Descriptive page titles
- Alt text on all images

### Performance
- Optimize images (use Next.js Image component)
- Lazy load components where appropriate
- Minimal JavaScript bundle
- Fast Time to First Byte

---

## Design System

### Colours
```css
Primary: #27a6ea (Bright cyan - hero brand colour)
Secondary: #1e40af (Deep blue - trust, corporate)
Accent: #0ea5e9 (Lighter cyan variation)
Dark: #1f2937 (Text, dark elements)
Grey: #6b7280 (Secondary text)
Light Grey: #f9fafb (Backgrounds)
White: #ffffff (Cards, clean spaces)
```

### Typography
**Font Family:** Inter (import from Google Fonts)

**Sizes & Weights:**
- H1: 3.5rem (56px), font-weight: 700, line-height: 1.1
- H2: 2.5rem (40px), font-weight: 700, line-height: 1.2
- H3: 1.875rem (30px), font-weight: 600, line-height: 1.3
- H4: 1.5rem (24px), font-weight: 600, line-height: 1.4
- Body: 1.125rem (18px), font-weight: 400, line-height: 1.6
- Small: 1rem (16px), font-weight: 400, line-height: 1.5

### Spacing
Use Tailwind's default spacing scale:
- Section padding: py-20 (5rem / 80px)
- Container max-width: max-w-7xl (1280px)
- Container padding: px-6 (1.5rem / 24px)
- Gap between elements: gap-12 (3rem / 48px)

### Components Style
- Border radius: rounded-lg (0.5rem / 8px)
- Shadows: shadow-lg for cards
- Transitions: transition-all duration-300
- Hover states: hover:scale-105 or hover:opacity-80

---

## Page Content & Structure

### Homepage (`/`)

#### Header Component
```tsx
<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-grey-200 z-50">
  <nav className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      <Logo /> {/* Primary logo */}
      <ul className="flex gap-8">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
</header>
```

#### Hero Section
```
Background: Gradient from #27a6ea to #0ea5e9
Text colour: White
Alignment: Center

Content:
- Badge: "Established 2025" (small, above headline)
- H1: "Lawsons Enterprises Ltd"
- Subheading: "Building Digital Businesses"
- Paragraph: "We create modern digital solutions for the evolving marketplace. From professional websites to custom apparel, we help businesses establish their presence and grow."
- CTA Button: "Explore Our Brands" (link to brands section, smooth scroll)
```

#### Brands Section
```
Background: Light grey (#f9fafb)
Heading: "Our Trading Brands"
Subheading: "Two distinct businesses, one commitment to excellence"

Two brand cards side-by-side (responsive: stack on mobile):

Card 1 - Lawsons Creative
- Icon/Logo representation
- Heading: "Lawsons Creative"
- Description: "Professional website design for small service businesses. Fast, affordable, and modern solutions that help you attract more customers."
- Services: "Website Design • Branding • Digital Presence"
- CTA: "Coming Soon" badge
- Background: White, shadow-lg

Card 2 - Lawsons Studio
- Icon/Logo representation  
- Heading: "Lawsons Studio"
- Description: "Custom fitness apparel and print-on-demand solutions. High-quality designs for studios, athletes, and fitness enthusiasts."
- Services: "Custom Apparel • Studio Partnerships • Print on Demand"
- CTA: "Coming Soon" badge
- Background: White, shadow-lg
```

#### About Preview Section
```
Background: White
Heading: "Who We Are"
Content: "Lawsons Enterprises Ltd is a London-based digital business focused on helping companies establish and grow their online presence. We combine technical expertise with creative design to deliver solutions that work."
CTA: "Learn More About Us" (link to /about)
```

#### Footer Component
```tsx
<footer className="bg-dark text-white">
  <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Company Info */}
      <div>
        <Logo variant="white" />
        <p className="mt-4">Building Digital Businesses</p>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
      
      {/* Contact */}
      <div>
        <h4>Get in Touch</h4>
        <p>hello@lawsonsenterprises.com</p>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="border-t border-grey-700 mt-8 pt-8 flex justify-between">
      <p>© 2025 Lawsons Enterprises Ltd. All rights reserved.</p>
      <div>
        <p>Company Number: 16433965</p>
        <p>VAT: GB495884223</p>
        <p>London, United Kingdom</p>
      </div>
    </div>
  </div>
</footer>
```

---

### About Page (`/about`)

```
Hero Section:
- H1: "About Lawsons Enterprises"
- Subheading: "Building the future of digital business"

Content Sections:

1. Our Story
"Lawsons Enterprises Ltd was founded in 2025 with a clear vision: to help businesses thrive in the digital age. We recognised the growing need for professional, affordable digital solutions and set out to create brands that deliver exactly that."

2. Our Approach
"We believe in quality, speed, and transparency. Whether we're building a website or designing custom apparel, we focus on delivering exceptional results that exceed expectations. Our work is driven by modern technology, creative thinking, and a commitment to our clients' success."

3. Our Trading Brands
Brief overview of Lawsons Creative and Lawsons Studio with links

4. Company Information
Legal details section:
- Registered company name: Lawsons Enterprises Ltd
- Company number: 16433965
- VAT registration: GB495884223
- Registered office: London, United Kingdom
- Established: 2025
```

---

### Contact Page (`/contact`)

```
Hero:
- H1: "Get in Touch"
- Subheading: "We'd love to hear from you"

Two columns (stack on mobile):

Left Column - Contact Information:
- Email: hello@lawsonsenterprises.com
- Company: Lawsons Enterprises Ltd
- Location: London, United Kingdom

Right Column - Contact Form:
Form fields:
- Name (required)
- Email (required)
- Subject (required)
- Message (required, textarea)
- Submit button: "Send Message"

Form styling:
- Clean, minimal design
- Labels above inputs
- Input borders: border-grey-300
- Focus state: border-primary ring-primary
- Button: bg-primary hover:bg-secondary

Note: Form should use FormSubmit.co or similar service for handling (no backend needed)
Action URL: https://formsubmit.co/hello@lawsonsenterprises.com
```

---

### Terms of Service Page (`/terms`)

```
H1: "Terms of Service"
Last updated: November 2025

Content sections:

1. Acceptance of Terms
By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

2. Use of Website
This website is provided for information purposes about Lawsons Enterprises Ltd and our trading brands. You may not use this site for any unlawful purpose.

3. Intellectual Property
All content on this website, including text, graphics, logos, and software, is the property of Lawsons Enterprises Ltd and protected by UK and international copyright laws.

4. Limitation of Liability
Lawsons Enterprises Ltd shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.

5. Links to Third-Party Sites
This website may contain links to third-party websites. We are not responsible for the content or practices of these sites.

6. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of the site following any changes constitutes acceptance of those changes.

7. Governing Law
These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.

8. Contact Information
For questions about these terms, contact us at hello@lawsonsenterprises.com

Company Details:
Lawsons Enterprises Ltd
Company Number: 16433965
VAT: GB495884223
```

---

### Privacy Policy Page (`/privacy`)

```
H1: "Privacy Policy"
Last updated: November 2025

Content sections:

1. Introduction
Lawsons Enterprises Ltd ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.

2. Information We Collect
- Contact information (name, email) when you submit our contact form
- Technical information (IP address, browser type) through website analytics
- Cookies for website functionality and analytics

3. How We Use Your Information
- To respond to your enquiries
- To improve our website and services
- To send updates about our services (with your consent)
- For legal and regulatory compliance

4. Legal Basis for Processing
Under GDPR, we process your data based on:
- Your consent (contact forms, newsletter)
- Legitimate interests (website analytics, security)
- Legal obligations (VAT, company records)

5. Data Sharing
We do not sell or rent your personal information. We may share data with:
- Service providers (hosting, email services)
- Legal authorities when required by law

6. Data Security
We implement appropriate security measures to protect your information from unauthorised access, alteration, or disclosure.

7. Your Rights
Under UK GDPR, you have the right to:
- Access your personal data
- Correct inaccurate data
- Request deletion of your data
- Object to processing
- Data portability
- Withdraw consent

8. Cookies
We use cookies to:
- Keep the website secure
- Understand how you use our website
- Remember your preferences
You can control cookies through your browser settings.

9. Data Retention
We retain your data only as long as necessary for the purposes outlined in this policy or as required by law.

10. Changes to This Policy
We may update this policy periodically. The "Last updated" date will reflect any changes.

11. Contact Us
For privacy-related questions or to exercise your rights:
Email: hello@lawsonsenterprises.com

Company Details:
Lawsons Enterprises Ltd
Company Number: 16433965
VAT: GB495884223
Registered Office: London, United Kingdom
```

---

## Logo Assets

### Primary Logo (logo-primary.svg)
- Abstract symbol (interconnected shapes representing unity/brands) + "Lawsons Enterprises" wordmark
- Colour: #27a6ea for symbol, #1f2937 for text
- Horizontal layout
- Use in header, hero, general branding

### Icon Logo (logo-icon.svg)
- Just the abstract symbol
- Square format
- Use for favicon, social media icons

### Wordmark (logo-wordmark.svg)
- "Lawsons Enterprises" text only
- Use in footer or minimal spaces

All logos should be SVG format for scalability and sharp rendering.

---

## Responsive Design

### Breakpoints (Tailwind default)
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Considerations
- Stack columns vertically
- Reduce heading sizes (H1: 2.5rem on mobile)
- Hamburger menu for navigation
- Touch-friendly button sizes (min 44px)
- Reduce section padding (py-12 instead of py-20)

---

## Development Workflow

1. **Initialize Project**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
   ```

2. **Install Dependencies**
   - Already included in Next.js setup
   - Add any form handling if needed

3. **Configure Tailwind**
   - Add custom colours to tailwind.config.ts
   - Import Inter font from Google Fonts in layout.tsx

4. **Build Components**
   - Start with layout (Header, Footer)
   - Build page components
   - Add interactivity (smooth scroll, form validation)

5. **Content Population**
   - Add all copy from this spec
   - Place logos in correct directories
   - Add favicon

6. **Testing**
   - Test all links
   - Test form submission
   - Test responsive design on multiple devices
   - Check accessibility (semantic HTML, ARIA labels where needed)

7. **SEO Configuration**
   - Add metadata to each page
   - Create sitemap.xml
   - Add robots.txt

8. **Deployment**
   - Push to GitHub
   - Connect to Vercel
   - Configure domain (lawsonsenterprises.com)
   - Test production build

---

## Accessibility Requirements

- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient colour contrast (WCAG AA compliant)
- Focus indicators visible on all interactive elements

---

## Performance Targets

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

---

## Git Workflow

1. Work on feature branches
2. Signed commits: `git commit -S -m "message"`
3. PR to main branch
4. Deploy from main

---

## Apple Developer Program Requirements ✓

This website meets all Apple Developer Program verification requirements:
- ✅ Live website on professional domain
- ✅ Company information clearly displayed (name, registration, VAT)
- ✅ Professional design and layout
- ✅ Contact information provided
- ✅ Terms of Service page
- ✅ Privacy Policy page
- ✅ Legitimate business presence demonstrated

---

## Final Notes

- Keep code clean and well-commented
- Use TypeScript for type safety
- Follow Next.js 14 best practices (Server Components by default)
- Optimize images and assets
- Test thoroughly before deployment
- Ensure fast loading times
- Mobile-first approach

**Priority:** This is a professional business website that will represent Lawsons Enterprises Ltd publicly. Quality and professionalism are paramount.
