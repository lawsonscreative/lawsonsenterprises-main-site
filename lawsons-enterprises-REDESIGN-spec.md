# Lawsons Enterprises Ltd - REDESIGN Specification
## Professional Modern Corporate Website

**Version:** 2.0 (Complete Redesign)  
**Repository:** `lawsonscreative/lawsonsenterprises-main-site`  
**Framework:** Next.js 14 (App Router)  
**Styling:** Tailwind CSS  

---

## Design Philosophy

**Target:** Modern, professional, impressive corporate website that showcases web design capabilities  
**Vibe:** Contemporary, confident, polished - the kind of site that makes people want to hire you  
**Inspiration:** Stripe, Linear, Vercel - clean, modern, sophisticated  
**NOT:** Template-looking, flat, 2005-era design

---

## Critical Design Principles

1. **Visual Hierarchy** - Clear distinction between primary, secondary, and tertiary elements
2. **Depth & Dimension** - Subtle shadows, gradients, and layering to add sophistication
3. **Whitespace** - Generous spacing, never cramped
4. **Typography** - Strong contrast between heading sizes
5. **Interaction** - Smooth transitions, clear hover states, active navigation indicators
6. **Polish** - Every detail matters - this represents a web design company

---

## Design System

### Colour Palette

```javascript
// Primary Colours
primary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#27a6ea',  // Main brand colour
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
}

// Neutrals
gray: {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
}

// Accent
accent: {
  blue: '#1e40af',
  cyan: '#0ea5e9',
}
```

### Typography

**Font:** Inter (Google Fonts)  
**Weights needed:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Type Scale:**
```css
Hero Heading (H1):     4.5rem (72px), font-weight: 700, line-height: 1.1, letter-spacing: -0.02em
Page Heading (H1):     3rem (48px), font-weight: 700, line-height: 1.1, letter-spacing: -0.01em
Section Heading (H2):  2.25rem (36px), font-weight: 700, line-height: 1.2
Subsection (H3):       1.5rem (24px), font-weight: 600, line-height: 1.3
Card Heading (H4):     1.25rem (20px), font-weight: 600, line-height: 1.4
Body Large:            1.125rem (18px), font-weight: 400, line-height: 1.7
Body Regular:          1rem (16px), font-weight: 400, line-height: 1.6
Body Small:            0.875rem (14px), font-weight: 400, line-height: 1.5
```

**Responsive Typography:**
- Mobile: Reduce heading sizes by 30%
- Tablet: Reduce heading sizes by 15%

### Spacing System

Use Tailwind's spacing scale consistently:
```
xs:  0.25rem (4px)
sm:  0.5rem (8px)
md:  1rem (16px)
lg:  1.5rem (24px)
xl:  2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
5xl: 8rem (128px)
```

**Section Spacing:**
- Desktop: py-20 (5rem / 80px) or py-24 (6rem / 96px)
- Mobile: py-12 (3rem / 48px) or py-16 (4rem / 64px)

### Shadows

```css
subtle:   0 1px 2px 0 rgb(0 0 0 / 0.05)
small:    0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
medium:   0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
large:    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
xl:       0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
2xl:      0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Border Radius

```css
small:    0.25rem (4px)
medium:   0.5rem (8px)
large:    0.75rem (12px)
xl:       1rem (16px)
2xl:      1.5rem (24px)
full:     9999px (pill shape)
```

### Transitions

All interactive elements should have smooth transitions:
```css
transition-all duration-300 ease-in-out
```

Hover states should be subtle but noticeable:
- Scale: hover:scale-[1.02]
- Opacity: hover:opacity-90
- Shadow: hover:shadow-xl

---

## Component Specifications

### Header / Navigation

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO - Large]              [Nav Items]    [CTA Btn]  │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**

```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
  <nav className="container mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo - LARGE */}
      <Link href="/" className="flex items-center space-x-3">
        <Image 
          src="/logos/logo-icon.svg" 
          width={48} 
          height={48} 
          alt="Lawsons Enterprises"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">Lawsons</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Enterprises</span>
        </div>
      </Link>
      
      {/* Navigation */}
      <ul className="hidden md:flex items-center space-x-1">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/contact" label="Contact" />
      </ul>
      
      {/* CTA Button */}
      <Link 
        href="/contact"
        className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-all duration-300 hover:shadow-lg"
      >
        Get in Touch
      </Link>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden">
        {/* Hamburger icon */}
      </button>
    </div>
  </nav>
</header>

{/* NavItem Component with Active State */}
const NavItem = ({ href, label, isActive }) => (
  <li>
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
        ${isActive 
          ? 'bg-primary-50 text-primary-600' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }
      `}
    >
      {label}
    </Link>
  </li>
);
```

**Key Points:**
- Logo is 48px tall (icon) + text - MUCH larger than current
- Navigation items have clear hover states (background change)
- Active page has distinct styling (bg-primary-50, text-primary-600)
- Header has subtle backdrop blur for modern feel
- Sticky header with slight transparency
- CTA button stands out with rounded-full style

---

### Homepage Hero Section

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         [Badge]                                         │
│                                                         │
│         MASSIVE HEADLINE                                │
│         Supporting tagline text                         │
│                                                         │
│         Paragraph explaining what we do                 │
│                                                         │
│         [Primary CTA]  [Secondary CTA]                  │
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**

```tsx
<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
    {/* Subtle Pattern Overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }} />
  </div>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
      <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
      Established 2025
    </div>
    
    {/* Hero Heading */}
    <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight">
      Lawsons Enterprises Ltd
    </h1>
    
    {/* Tagline */}
    <p className="text-2xl lg:text-3xl text-primary-100 font-medium mb-6">
      Building Digital Businesses
    </p>
    
    {/* Description */}
    <p className="text-lg lg:text-xl text-primary-50 max-w-3xl mx-auto mb-12 leading-relaxed">
      We create modern digital solutions for the evolving marketplace. From professional 
      websites to custom apparel, we help businesses establish their presence and grow.
    </p>
    
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="#brands"
        className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        Explore Our Brands
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
      
      <Link
        href="/contact"
        className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
      >
        Get in Touch
      </Link>
    </div>
  </div>
  
  {/* Decorative Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
    </svg>
  </div>
</section>
```

**Key Points:**
- Full viewport height (85vh) for impact
- Large, bold typography - 6xl/7xl/8xl heading
- Gradient background with subtle pattern for depth
- Animated badge for modern touch
- Two CTAs with different styles (primary solid, secondary outline)
- Wave divider for smooth transition to next section
- Responsive text sizes

---

### Brand Cards Section

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                    Section Heading                       │
│                    Subheading text                       │
│                                                          │
│   ┌────────────────┐      ┌────────────────┐           │
│   │  [Icon/Visual] │      │  [Icon/Visual] │           │
│   │                │      │                │           │
│   │ Lawsons        │      │ Lawsons        │           │
│   │ Creative       │      │ Studio         │           │
│   │                │      │                │           │
│   │ Description    │      │ Description    │           │
│   │                │      │                │           │
│   │ Services list  │      │ Services list  │           │
│   │                │      │                │           │
│   │ [Badge]        │      │ [Badge]        │           │
│   └────────────────┘      └────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**

```tsx
<section id="brands" className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Our Trading Brands
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Two distinct businesses, one commitment to excellence
      </p>
    </div>
    
    {/* Brand Cards Grid */}
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Lawsons Creative Card */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Icon Container - NO EMOJIS */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Lawsons Creative
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Professional website design for small service businesses. Fast, affordable, 
          and modern solutions that help you attract more customers.
        </p>
        
        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
            Website Design
          </span>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
            Branding
          </span>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
            Digital Presence
          </span>
        </div>
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
          <span className="flex h-2 w-2 rounded-full bg-gray-400" />
          Coming Soon
        </div>
      </div>
      
      {/* Lawsons Studio Card */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Icon Container */}
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Lawsons Studio
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Custom fitness apparel and print-on-demand solutions. High-quality designs 
          for studios, athletes, and fitness enthusiasts.
        </p>
        
        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full">
            Custom Apparel
          </span>
          <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full">
            Studio Partnerships
          </span>
          <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full">
            Print on Demand
          </span>
        </div>
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
          <span className="flex h-2 w-2 rounded-full bg-gray-400" />
          Coming Soon
        </div>
      </div>
    </div>
  </div>
</section>
```

**Key Points:**
- **NO EMOJI ICONS** - Use proper SVG icons in gradient containers
- Cards have hover effects (lift up, shadow increases)
- Icon containers have gradient backgrounds and scale on hover
- Service tags are pill-shaped with brand colours
- Status badges are subtle and professional
- Generous padding and spacing
- Rounded corners (2xl = 24px)

---

### About Preview Section

```tsx
<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Who We Are
      </h2>
      
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Lawsons Enterprises Ltd is a London-based digital business focused on helping 
        companies establish and grow their online presence. We combine technical expertise 
        with creative design to deliver solutions that work.
      </p>
      
      <Link
        href="/about"
        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
      >
        Learn More About Us
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</section>
```

---

### Footer

```tsx
<footer className="bg-gray-900 text-gray-300">
  <div className="container mx-auto px-6 py-16">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Brand Column */}
      <div className="md:col-span-2">
        <div className="flex items-center space-x-3 mb-4">
          <Image 
            src="/logos/logo-icon.svg" 
            width={40} 
            height={40} 
            alt="Lawsons Enterprises"
            className="brightness-0 invert"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">Lawsons</span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Enterprises</span>
          </div>
        </div>
        <p className="text-gray-400 mb-6 max-w-md">
          Building Digital Businesses
        </p>
        <p className="text-sm text-gray-500">
          Lawsons Enterprises Ltd<br/>
          London, United Kingdom
        </p>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
        <a 
          href="mailto:hello@lawsonsenterprises.com"
          className="text-primary-400 hover:text-primary-300 transition-colors"
        >
          hello@lawsonsenterprises.com
        </a>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © 2025 Lawsons Enterprises Ltd. All rights reserved.
        </p>
        
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>Company Number: 16433965</p>
          <p>VAT: GB495884223</p>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**Key Points:**
- Dark but sophisticated (not just black)
- Logo inverted to white
- Clear hierarchy with headings
- Hover states on links
- Company details in bottom bar
- Proper spacing and organization

---

## About Page Hero

```tsx
<section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        About Lawsons Enterprises
      </h1>
      <p className="text-2xl text-gray-600 font-medium">
        Building the future of digital business
      </p>
    </div>
  </div>
</section>
```

**Key Points:**
- Subtle gradient background (not flat blue)
- Large heading with proper spacing
- Centered, professional layout

---

## Contact Page

### Hero
```tsx
<section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Get in Touch
      </h1>
      <p className="text-xl text-gray-600">
        We'd love to hear from you
      </p>
    </div>
  </div>
</section>
```

### Contact Form

```tsx
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Contact Information
          </h2>
          
          {/* Email */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Email
            </h3>
            <a 
              href="mailto:hello@lawsonsenterprises.com"
              className="text-xl text-primary-600 hover:text-primary-700 transition-colors"
            >
              hello@lawsonsenterprises.com
            </a>
          </div>
          
          {/* Company */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Company
            </h3>
            <p className="text-gray-900 font-medium">Lawsons Enterprises Ltd</p>
            <p className="text-gray-600">Company Number: 16433965</p>
            <p className="text-gray-600">VAT: GB495884223</p>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Location
            </h3>
            <p className="text-gray-900">London, United Kingdom</p>
          </div>
          
          {/* Response Time Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
            <p className="text-gray-600 text-sm">
              We typically respond to all enquiries within 1-2 business days. 
              For urgent matters, please indicate this in your message subject line.
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
          </h2>
          
          <form action="https://formsubmit.co/hello@lawsonsenterprises.com" method="POST" className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="How can we help?"
              />
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about your enquiry..."
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Key Points:**
- Form is in a card with shadow (elevated)
- Proper input styling with focus states (ring)
- Left column has structured information
- Response time note in subtle background box
- Large, clear submit button

---

## Responsive Considerations

### Mobile (<768px)
- Stack all columns vertically
- Reduce heading sizes by 30%
- Navigation becomes hamburger menu
- Padding reduced (py-12 instead of py-24)
- Brand cards stack vertically
- Contact form takes full width

### Tablet (768px - 1024px)
- Two-column layouts where applicable
- Reduce heading sizes by 15%
- Maintain most desktop features
- Adjust spacing slightly

### Desktop (>1024px)
- Full layout as specified
- Maximum container width: 1280px (max-w-7xl)
- Generous spacing throughout

---

## Mobile Navigation

```tsx
{/* Mobile Menu - Only shown when hamburger clicked */}
<div className="md:hidden fixed inset-0 z-40 bg-white" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
  <div className="flex flex-col h-full">
    {/* Header with Close Button */}
    <div className="flex items-center justify-between p-6 border-b border-gray-100">
      <Logo />
      <button onClick={() => setMobileMenuOpen(false)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    {/* Nav Items */}
    <nav className="flex-1 px-6 py-8">
      <ul className="space-y-4">
        <li>
          <Link 
            href="/" 
            className="block text-2xl font-semibold text-gray-900 py-3"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className="block text-2xl font-semibold text-gray-900 py-3"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="block text-2xl font-semibold text-gray-900 py-3"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    
    {/* CTA at Bottom */}
    <div className="p-6 border-t border-gray-100">
      <Link
        href="/contact"
        className="block w-full px-6 py-4 bg-primary-600 text-white text-center font-semibold rounded-lg"
      >
        Get in Touch
      </Link>
    </div>
  </div>
</div>
```

---

## Active Navigation State

**Implementation:**
```tsx
// Use Next.js usePathname hook
'use client';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  return (
    <ul className="flex items-center space-x-1">
      <NavItem href="/" label="Home" isActive={pathname === '/'} />
      <NavItem href="/about" label="About" isActive={pathname === '/about'} />
      <NavItem href="/contact" label="Contact" isActive={pathname === '/contact'} />
    </ul>
  );
};
```

---

## Animation Examples

### Fade In on Scroll
```tsx
// Install framer-motion: npm install framer-motion

import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      key={item}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## SEO Configuration

### Metadata
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Lawsons Enterprises Ltd | Building Digital Businesses',
  description: 'Professional website design and custom fitness apparel. Helping businesses establish and grow their digital presence in London, UK.',
  keywords: 'web design, website development, custom apparel, print on demand, London, UK',
  authors: [{ name: 'Lawsons Enterprises Ltd' }],
  openGraph: {
    title: 'Lawsons Enterprises Ltd',
    description: 'Building Digital Businesses',
    url: 'https://lawsonsenterprises.com',
    siteName: 'Lawsons Enterprises',
    locale: 'en_GB',
    type: 'website',
  },
};
```

---

## Performance Optimizations

1. **Images:**
   - Use Next.js Image component
   - SVG for logos (already scalable)
   - Lazy load below-the-fold images

2. **Fonts:**
   - Use next/font for automatic optimization
   - Preload critical fonts

3. **Code Splitting:**
   - Next.js handles automatically
   - Use dynamic imports for heavy components

4. **CSS:**
   - Tailwind purges unused CSS automatically
   - No custom CSS files needed

---

## Deployment Checklist

- [ ] All pages render correctly
- [ ] Navigation active states work
- [ ] Forms submit successfully
- [ ] Mobile menu functions properly
- [ ] All links work
- [ ] Images load properly
- [ ] SEO metadata configured
- [ ] Favicon set
- [ ] Domain connected
- [ ] SSL certificate active
- [ ] Google Search Console setup
- [ ] Analytics installed (optional)

---

## Critical Success Factors

1. **Logo must be large and prominent** - 48px icon + text
2. **Navigation must show active page** - bg-primary-50 for active
3. **Hero must be impactful** - Large text, gradient, proper spacing
4. **Brand cards must look professional** - NO emojis, proper icons, shadows
5. **Everything must feel modern** - 2024/2025 design standards
6. **Mobile must work perfectly** - Responsive at all breakpoints
7. **Interactions must be smooth** - Transitions on everything
8. **Visual hierarchy must be clear** - Strong contrast between elements

---

## What NOT to Do

❌ Small logos  
❌ Flat, solid colour backgrounds everywhere  
❌ Emoji icons (🎨💪)  
❌ Cramped navigation  
❌ No active states  
❌ Generic, template-looking cards  
❌ Poor typography hierarchy  
❌ Missing hover states  
❌ Ugly form styling  
❌ 2005-era design patterns  

---

## Summary

This specification provides pixel-perfect detail for building a modern, professional corporate website. Every component has exact styling, spacing, and behaviour defined. Follow this specification exactly, and the result will be a impressive, contemporary website that properly represents a web design company.

**If in doubt:** Look at modern SaaS websites like Stripe, Vercel, or Linear for inspiration on clean, professional design.
