'use client';

import Link from 'next/link';

export default function Hero() {
  const scrollToBrands = () => {
    const brandsSection = document.getElementById('brands');
    if (brandsSection) {
      brandsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
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
          <button
            onClick={scrollToBrands}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Brands
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

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
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
