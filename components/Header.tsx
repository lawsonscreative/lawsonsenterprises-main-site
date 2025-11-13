'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Large and prominent */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">LE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Lawsons</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Enterprises</span>
              </div>
            </Link>

            {/* Desktop Navigation - Moved to right */}
            <div className="flex items-center gap-8">
              <ul className="hidden md:flex items-center space-x-1">
              <li>
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/')
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/about')
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/contact')
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-all duration-300 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="flex flex-col h-full">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">LE</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">Lawsons</span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Enterprises</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-2xl font-semibold text-gray-900 py-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-2xl font-semibold text-gray-900 py-3"
                    onClick={() => setMobileMenuOpen(false)}
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
                className="block w-full px-6 py-4 bg-primary-600 text-white text-center font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
