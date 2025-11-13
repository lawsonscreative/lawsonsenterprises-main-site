export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: November 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of
              this agreement.
            </p>

            <h2>2. Use of Website</h2>
            <p>
              This website is provided for information purposes about Lawsons Enterprises Ltd and our trading
              brands. You may not use this site for any unlawful purpose.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of
              Lawsons Enterprises Ltd and protected by UK and international copyright laws.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              Lawsons Enterprises Ltd shall not be liable for any direct, indirect, incidental, or consequential
              damages arising from the use of this website.
            </p>

            <h2>5. Links to Third-Party Sites</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the content or
              practices of these sites.
            </p>

            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the site following any
              changes constitutes acceptance of those changes.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:hello@lawsonsenterprises.com">hello@lawsonsenterprises.com</a>
            </p>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Company Details</h3>
              <p className="text-gray-600 mb-1">Lawsons Enterprises Ltd</p>
              <p className="text-gray-600 mb-1">Company Number: 16433965</p>
              <p className="text-gray-600">VAT: GB495884223</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
