'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#assurance', label: 'Assurance' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-grey-100">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <nav className="flex items-center justify-between h-16 md:h-[72px]">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Lawsons Enterprises home"
            >
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-white font-extrabold text-[13px] tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.2) inset, 0 6px 14px -6px rgba(79,70,229,0.5)',
                }}
              >
                LE
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-extrabold text-grey-950 tracking-tight">
                  Lawsons Enterprises
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-grey-500 mt-1 font-mono">
                  UK · Co. 16433965
                </span>
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-1">
              {NAV.map(({ href, label }) => {
                const active =
                  href === '/'
                    ? pathname === '/'
                    : href.startsWith('/#')
                    ? false
                    : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`px-3 py-2 text-[13.5px] font-semibold rounded-md transition-colors ${
                        active
                          ? 'text-brand-700'
                          : 'text-grey-700 hover:text-grey-950'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://scanposture.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.2) inset, 0 6px 14px -6px rgba(79,70,229,0.5)',
                }}
              >
                Visit ScanPosture
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 -mr-2 text-grey-700"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div className="flex flex-col h-full px-5 py-8">
            <ul className="space-y-1">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xl font-extrabold text-grey-950"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://scanposture.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-4 text-[15px] font-semibold text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
            >
              Visit ScanPosture
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
