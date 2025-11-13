import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-500">LE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Lawsons</span>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Enterprises
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">Building Digital Businesses</p>
            <p className="text-sm text-gray-500">
              Lawsons Enterprises Ltd
              <br />
              Kent, United Kingdom
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
  );
}
