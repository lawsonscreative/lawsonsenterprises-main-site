import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lawsonsenterprises.com'),
  title: {
    default: 'Lawsons Enterprises Ltd — Cloud Control Assurance, SaaS Platforms & Specialist Technology Services',
    template: '%s — Lawsons Enterprises Ltd',
  },
  description:
    'Lawsons Enterprises Ltd is a UK product company building and operating focused digital products, SaaS platforms and specialist technology services — including ScanPosture, Lawsons CloudWorks and Lawsons Creative.',
  alternates: { canonical: 'https://lawsonsenterprises.com' },
  openGraph: {
    title: 'Lawsons Enterprises Ltd',
    description:
      'UK product company building cloud control assurance, SaaS platforms and specialist technology services.',
    url: 'https://lawsonsenterprises.com',
    siteName: 'Lawsons Enterprises',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawsons Enterprises Ltd',
    description:
      'UK product company building cloud control assurance, SaaS platforms and specialist technology services.',
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lawsons Enterprises Ltd',
  url: 'https://lawsonsenterprises.com',
  legalName: 'Lawsons Enterprises Ltd',
  email: 'hello@lawsonsenterprises.com',
  foundingLocation: { '@type': 'Country', name: 'United Kingdom' },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Kent',
    addressCountry: 'GB',
  },
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'CompanyHouseNumber', value: '16433965' },
    { '@type': 'PropertyValue', propertyID: 'VATID', value: 'GB495884223' },
    { '@type': 'PropertyValue', propertyID: 'ICORegistration', value: 'ZC120359' },
  ],
  brand: [
    { '@type': 'Brand', name: 'ScanPosture', url: 'https://scanposture.com' },
    { '@type': 'Brand', name: 'Lawsons CloudWorks', url: 'https://www.lawsonscloudworks.co.uk' },
    { '@type': 'Brand', name: 'Lawsons Creative' },
    { '@type': 'Brand', name: 'Lawsons Platform' },
    { '@type': 'Brand', name: 'Synced Momentum' },
  ],
  sameAs: ['https://scanposture.com', 'https://www.lawsonscloudworks.co.uk'],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
