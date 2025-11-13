import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Lawsons Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Building the future of digital business
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lawsons Enterprises Ltd was founded in 2025 with a clear vision: to help businesses thrive in
                the digital age. We recognised the growing need for professional, affordable digital solutions
                and set out to create brands that deliver exactly that.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in quality, speed, and transparency. Whether we're building a website or designing
                custom apparel, we focus on delivering exceptional results that exceed expectations. Our work is
                driven by modern technology, creative thinking, and a commitment to our clients' success.
              </p>
            </div>

            {/* Our Trading Brands */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Trading Brands</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lawsons Creative</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Professional website design for small service businesses. Fast, affordable, and modern
                    solutions.
                  </p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 text-gray-600 text-sm font-medium rounded-lg">
                    <span className="flex h-2 w-2 rounded-full bg-gray-400" />
                    Coming Soon
                  </span>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lawsons Studio</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Custom fitness apparel and print-on-demand solutions for studios and athletes.
                  </p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 text-gray-600 text-sm font-medium rounded-lg">
                    <span className="flex h-2 w-2 rounded-full bg-gray-400" />
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Registered Company Name
                  </dt>
                  <dd className="text-lg text-gray-900">Lawsons Enterprises Ltd</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Company Number
                  </dt>
                  <dd className="text-lg text-gray-900">16433965</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    VAT Registration
                  </dt>
                  <dd className="text-lg text-gray-900">GB495884223</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Registered Office
                  </dt>
                  <dd className="text-lg text-gray-900">Kent, United Kingdom</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Established
                  </dt>
                  <dd className="text-lg text-gray-900">2025</dd>
                </div>
              </dl>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
