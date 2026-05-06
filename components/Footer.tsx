import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grey-100 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-white font-extrabold text-[13px] tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                }}
              >
                LE
              </span>
              <span className="text-[15px] font-extrabold text-grey-950 tracking-tight">
                Lawsons Enterprises Ltd
              </span>
            </div>
            <p className="text-[14px] text-grey-600 leading-relaxed max-w-[380px]">
              An independent UK product company building cloud control assurance,
              SaaS platforms, and specialist technology services.
            </p>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-grey-500 font-mono">
              Get in touch
            </p>
            <a
              href="mailto:hello@lawsonsenterprises.com"
              className="mt-1 inline-block text-[14px] font-semibold text-brand-700 hover:text-brand-600"
            >
              hello@lawsonsenterprises.com
            </a>
          </div>

          {/* Brands */}
          <div className="col-span-1 md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-grey-500 font-mono mb-4">
              Brands
            </p>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href="https://scanposture.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-grey-800 hover:text-brand-700"
                >
                  ScanPosture
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.lawsonscloudworks.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-grey-800 hover:text-brand-700"
                >
                  Lawsons CloudWorks
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-grey-800">Lawsons Creative</span>
              </li>
              <li>
                <span className="text-grey-800">Lawsons Platform &amp; Marketing</span>
              </li>
              <li>
                <span className="text-grey-500">Synced Momentum (in development)</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-grey-500 font-mono mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/about" className="text-grey-800 hover:text-brand-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-grey-800 hover:text-brand-700">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-grey-500 font-mono mt-8 mb-4">
              Legal
            </p>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/privacy" className="text-grey-800 hover:text-brand-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-grey-800 hover:text-brand-700">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal entity */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-grey-500 font-mono mb-4">
              Legal entity
            </p>
            <dl className="text-[12.5px] text-grey-700 space-y-2 font-mono tabular-nums">
              <div>
                <dt className="text-grey-500 text-[10.5px] uppercase tracking-[0.1em]">
                  Registered
                </dt>
                <dd className="text-grey-800">England &amp; Wales</dd>
              </div>
              <div>
                <dt className="text-grey-500 text-[10.5px] uppercase tracking-[0.1em]">
                  Company No.
                </dt>
                <dd className="text-grey-800">16433965</dd>
              </div>
              <div>
                <dt className="text-grey-500 text-[10.5px] uppercase tracking-[0.1em]">
                  VAT
                </dt>
                <dd className="text-grey-800">GB495884223</dd>
              </div>
              <div>
                <dt className="text-grey-500 text-[10.5px] uppercase tracking-[0.1em]">
                  ICO
                </dt>
                <dd className="text-grey-800">ZC120359</dd>
              </div>
              <div>
                <dt className="text-grey-500 text-[10.5px] uppercase tracking-[0.1em]">
                  Office
                </dt>
                <dd className="text-grey-800">Kent, UK</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-grey-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[12px] text-grey-500">
            © {year} Lawsons Enterprises Ltd. All rights reserved.
          </p>
          <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-grey-400">
            Built in the UK
          </p>
        </div>
      </div>
    </footer>
  );
}
