import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-6 text-center py-32">
          {/* Hero Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight">
            Lawsons Enterprises Ltd
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-100 font-medium mb-6">
            Building Digital Businesses
          </p>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-primary-50 max-w-3xl mx-auto mb-12 leading-relaxed">
            We create modern digital solutions for the evolving marketplace. From professional websites to
            custom apparel, we help businesses establish their presence and grow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#brands"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Explore Our Brands
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Brand Cards Section */}
      <section id="brands" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Trading Brands
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Two distinct businesses, one commitment to excellence
            </p>
          </div>

          {/* Brand Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Lawsons Creative Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Icon Container - Professional SVG */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lawsons Creative</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional website design for small service businesses. Fast, affordable, and modern solutions
                that help you attract more customers.
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lawsons Studio</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom fitness apparel and print-on-demand solutions. High-quality designs for studios, athletes,
                and fitness enthusiasts.
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

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Lawsons Enterprises Ltd is a London-based digital business focused on helping companies establish
              and grow their online presence. We combine technical expertise with creative design to deliver
              solutions that work.
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
    </>
  );
}
