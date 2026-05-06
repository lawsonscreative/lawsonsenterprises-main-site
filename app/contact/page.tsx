import {
  Mail,
  Briefcase,
  Network,
  ShieldAlert,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Lawsons Enterprises Ltd — for procurement, MSP partnership, due-diligence, security disclosure, or product enquiries.',
};

const ROUTES = [
  {
    Icon: Briefcase,
    eyebrow: 'Procurement & due diligence',
    title: 'Buying-side checks',
    body:
      'Verifying the legal entity, registrations, sub-processors, or data residency before signing.',
    cta: { label: 'Email procurement', href: 'mailto:hello@lawsonsenterprises.com?subject=Procurement%20%2F%20due-diligence%20enquiry' },
  },
  {
    Icon: Network,
    eyebrow: 'MSP partnership',
    title: 'ScanPosture for MSPs',
    body:
      'MSP partner enquiries are best handled directly on ScanPosture — managed tenants, branded portals, recurring assurance.',
    cta: { label: 'Visit ScanPosture for MSPs', href: 'https://scanposture.com/msps', external: true },
  },
  {
    Icon: ShieldAlert,
    eyebrow: 'Security disclosure',
    title: 'Responsible disclosure',
    body:
      'Suspected vulnerability in any Lawsons Enterprises product or surface — please mark the subject line clearly.',
    cta: { label: 'Email security', href: 'mailto:hello@lawsonsenterprises.com?subject=Security%20disclosure' },
  },
  {
    Icon: Mail,
    eyebrow: 'General enquiries',
    title: 'Anything else',
    body:
      'Press, partnerships, hiring, or anything that doesn’t fit the categories above.',
    cta: { label: 'Email hello@', href: 'mailto:hello@lawsonsenterprises.com' },
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-[120px] pb-12 md:pt-[150px] md:pb-16 px-5 overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #ECEAF8 0%, #F4F3FB 45%, #F8F8FA 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,70,229,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.08) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 30%, transparent 0%, black 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 30%, transparent 0%, black 90%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            top: '-220px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 720,
            height: 720,
            background:
              'radial-gradient(circle, rgba(129,140,248,0.20) 0%, transparent 62%)',
          }}
        />
        <div className="relative max-w-[1080px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-4">
            Contact
          </p>
          <h1
            className="text-grey-950 mb-5"
            style={{
              fontSize: 'clamp(34px, 5.4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-1.6px',
            }}
          >
            Talk to{' '}
            <em style={{ fontStyle: 'italic', color: '#4F46E5' }}>
              Lawsons Enterprises
            </em>
            .
          </h1>
          <p className="text-grey-700 text-[18px] leading-relaxed max-w-[720px]">
            For procurement and due-diligence checks, MSP partnership enquiries,
            security disclosure, or anything else.
          </p>
        </div>
      </section>

      {/* Routing tiles */}
      <section className="py-14 md:py-16 px-5 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
            Pick the right route
          </p>
          <h2
            className="text-grey-950 mb-8"
            style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              lineHeight: 1.15,
              letterSpacing: '-0.8px',
            }}
          >
            Most enquiries fit one of four routes.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {ROUTES.map(({ Icon, eyebrow, title, body, cta }) => (
              <div
                key={title}
                className="relative rounded-[14px] p-6 bg-white overflow-hidden transition-all hover:-translate-y-0.5"
                style={{
                  border: '1px solid #ECEAF5',
                  boxShadow:
                    '0 1px 2px rgba(15,15,18,0.04), 0 14px 32px -18px rgba(79,70,229,0.16)',
                }}
              >
                <span
                  aria-hidden
                  className="absolute top-0 inset-x-0"
                  style={{
                    height: 2,
                    background:
                      'linear-gradient(90deg, transparent 0%, #818CF8 50%, transparent 100%)',
                  }}
                />
                <div className="flex items-start gap-3 mb-4">
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 11,
                      background:
                        'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                      border: '1px solid #A5B4FC',
                    }}
                  >
                    <Icon size={16} style={{ color: '#4338CA' }} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono">
                      {eyebrow}
                    </p>
                    <h3 className="text-[15.5px] font-extrabold text-grey-950 mt-0.5 leading-tight">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-[13.5px] text-grey-600 leading-relaxed mb-4">
                  {body}
                </p>
                <a
                  href={cta.href}
                  {...(cta.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 hover:text-brand-600"
                >
                  {cta.label}
                  {cta.external ? (
                    <ArrowUpRight size={12} strokeWidth={2.5} />
                  ) : (
                    <ArrowRight size={12} strokeWidth={2.5} />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section
        className="py-14 md:py-16 px-5"
        style={{ background: '#F8F8FA' }}
      >
        <div className="max-w-[1080px] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.05fr] gap-10 md:gap-12 items-stretch">
            {/* Sidebar */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
                Direct
              </p>
              <h2
                className="text-grey-950 mb-5"
                style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.8px',
                }}
              >
                Or send a message.
              </h2>
              <p className="text-grey-700 text-[14.5px] leading-relaxed mb-8">
                Goes to{' '}
                <a
                  href="mailto:hello@lawsonsenterprises.com"
                  className="text-brand-700 font-semibold hover:text-brand-600"
                >
                  hello@lawsonsenterprises.com
                </a>{' '}
                and we respond within 1–2 business days.
              </p>

              <div
                className="rounded-[14px] p-5 mb-5 bg-white"
                style={{
                  border: '1px solid #ECEAF5',
                  boxShadow: '0 1px 2px rgba(15,15,18,0.04)',
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
                  Legal entity
                </p>
                <dl className="text-[13px] font-mono tabular-nums space-y-1.5">
                  {[
                    ['Registered', 'Lawsons Enterprises Ltd'],
                    ['Company No.', '16433965'],
                    ['VAT', 'GB495884223'],
                    ['ICO', 'ZC120359'],
                    ['Office', 'Kent, United Kingdom'],
                  ].map(([dt, dd]) => (
                    <div key={dt} className="flex gap-2">
                      <dt className="text-grey-500 w-[88px] flex-shrink-0">
                        {dt}
                      </dt>
                      <dd className="text-grey-900">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div
                className="rounded-[14px] p-5 bg-white"
                style={{
                  border: '1px solid #ECEAF5',
                  boxShadow: '0 1px 2px rgba(15,15,18,0.04)',
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-2">
                  Response time
                </p>
                <p className="text-[13.5px] text-grey-700 leading-relaxed">
                  We respond within 1–2 business days. For urgent procurement
                  or security matters, indicate this in the subject line.
                </p>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

    </>
  );
}
