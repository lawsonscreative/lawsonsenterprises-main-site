import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lawsons Enterprises Ltd | Building Digital Businesses',
  description:
    'Professional website design and custom fitness apparel. Helping businesses establish and grow their digital presence in London, UK.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
