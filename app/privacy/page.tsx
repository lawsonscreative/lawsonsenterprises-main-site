export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: November 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Introduction</h2>
            <p>
              Lawsons Enterprises Ltd ("we", "our", "us") is committed to protecting your privacy. This policy
              explains how we collect, use, and protect your personal information.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>Contact information (name, email) when you submit our contact form</li>
              <li>Technical information (IP address, browser type) through website analytics</li>
              <li>Cookies for website functionality and analytics</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries</li>
              <li>To improve our website and services</li>
              <li>To send updates about our services (with your consent)</li>
              <li>For legal and regulatory compliance</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>Under GDPR, we process your data based on:</p>
            <ul>
              <li>Your consent (contact forms, newsletter)</li>
              <li>Legitimate interests (website analytics, security)</li>
              <li>Legal obligations (VAT, company records)</li>
            </ul>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell or rent your personal information. We may share data with service providers (hosting,
              email services) and legal authorities when required by law.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information from unauthorised access,
              alteration, or disclosure.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              We use cookies to keep the website secure, understand how you use our website, and remember your
              preferences. You can control cookies through your browser settings.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We retain your data only as long as necessary for the purposes outlined in this policy or as
              required by law.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this policy periodically. The "Last updated" date will reflect any changes.</p>

            <h2>11. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, email us at{' '}
              <a href="mailto:hello@lawsonsenterprises.com">hello@lawsonsenterprises.com</a>
            </p>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Company Details</h3>
              <p className="text-gray-600 mb-1">Lawsons Enterprises Ltd</p>
              <p className="text-gray-600 mb-1">Company Number: 16433965</p>
              <p className="text-gray-600 mb-1">VAT: GB495884223</p>
              <p className="text-gray-600">Registered Office: London, United Kingdom</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
