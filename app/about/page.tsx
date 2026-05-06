import Link from 'next/link';
import {
  ShieldCheck,
  Cloud,
  Code2,
  Layers,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  Lock,
  BadgeCheck,
  MapPin,
  Cpu,
  Database,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'About',
  description:
    'About Lawsons Enterprises Ltd — an independent UK product company building cloud control assurance, SaaS platforms and specialist technology services.',
};

const AREAS = [
  {
    Icon: ShieldCheck,
    eyebrow: 'Area 1',
    title: 'Enterprise SaaS & security posture products',
    body:
      'ScanPosture — continuous control assurance for Microsoft 365 and Entra ID, with AWS and selected SaaS coverage on the roadmap. Read-only by default. Framework-aligned. MSP-native.',
  },
  {
    Icon: Cloud,
    eyebrow: 'Area 2',
    title: 'Specialist cloud & remediation services',
    body:
      'Lawsons CloudWorks — senior Microsoft 365, Entra ID, Intune, AWS WorkSpaces, AVD, endpoint and cloud workspace engineering for UK organisations. Available where ScanPosture customers need practical implementation support.',
  },
  {
    Icon: Layers,
    eyebrow: 'Area 3',
    title: 'Platform-backed websites & vertical SaaS',
    body:
      'Lawsons Creative builds public surfaces; Lawsons Platform & Marketing provides reusable infrastructure for regulated and trust-sensitive service businesses. Atlas Physiotherapy Clinic is the first live tenant.',
  },
];

const PRINCIPLES = [
  {
    Icon: Lock,
    title: 'Security and data separation by design',
    body: 'Read-only by default. Operational data isolated from public-facing content. Least-privilege everywhere.',
  },
  {
    Icon: Cpu,
    title: 'Practical systems over theatre',
    body: 'Real, deployable products and services — not slideware. Customer outcomes over vendor pageantry.',
  },
  {
    Icon: BadgeCheck,
    title: 'Clear ownership and auditability',
    body: 'Every change traceable. Every claim defensible. Evidence retained — not just claims made.',
  },
  {
    Icon: Database,
    title: 'Built for real operators',
    body: 'IT teams, MSPs, clinic operators, service businesses — not vanity demos. The product has to work on day one.',
  },
];

export default function About() {
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
            About
          </p>
          <h1
            className="text-grey-950 mb-5"
            style={{
              fontSize: 'clamp(34px, 5.4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-1.6px',
            }}
          >
            An independent UK product company,{' '}
            <em style={{ fontStyle: 'italic', color: '#4F46E5' }}>
              built for serious operators
            </em>
            .
          </h1>
          <p className="text-grey-700 text-[18px] leading-relaxed max-w-[760px]">
            Lawsons Enterprises Ltd builds and operates focused digital
            products, SaaS platforms and specialist technology services. The
            company is small by design — and built to be commercially serious
            from customer one.
          </p>
        </div>
      </section>

      {/* What we build — three areas */}
      <section className="py-14 md:py-16 px-5 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-10 max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
              What we build
            </p>
            <h2
              className="text-grey-950"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-1px',
              }}
            >
              Three connected areas, deliberately scoped.
            </h2>
          </div>

          <div className="space-y-5">
            {AREAS.map(({ Icon, eyebrow, title, body }) => (
              <div
                key={title}
                className="relative rounded-[14px] p-7 md:p-8 bg-white overflow-hidden"
                style={{
                  border: '1px solid #ECEAF5',
                  boxShadow:
                    '0 1px 2px rgba(15,15,18,0.04), 0 18px 40px -22px rgba(79,70,229,0.14)',
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
                <div className="grid md:grid-cols-[44px_1fr] gap-5 md:gap-6 items-start">
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background:
                        'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                      border: '1px solid #A5B4FC',
                    }}
                  >
                    <Icon size={20} style={{ color: '#4338CA' }} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-2">
                      {eyebrow}
                    </p>
                    <h3
                      className="text-grey-950 mb-2.5"
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        letterSpacing: '-0.4px',
                        lineHeight: 1.2,
                      }}
                    >
                      {title}
                    </h3>
                    <p className="text-[14.5px] text-grey-600 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands strip — quick portfolio recap */}
      <section
        className="py-14 md:py-16 px-5"
        style={{
          background:
            'linear-gradient(180deg, #F8F8FA 0%, #EEF2FF 50%, #F8F8FA 100%)',
        }}
      >
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-10 max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
              Operating brands
            </p>
            <h2
              className="text-grey-950"
              style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: 1.15,
                letterSpacing: '-0.8px',
              }}
            >
              Five brands. One operating company.
            </h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-3">
            {[
              {
                Icon: ShieldCheck,
                name: 'ScanPosture',
                cat: 'SaaS Product · Flagship',
                blurb: 'Continuous control assurance for cloud-first organisations.',
                href: 'https://scanposture.com',
                external: true,
              },
              {
                Icon: Cloud,
                name: 'Lawsons CloudWorks',
                cat: 'Specialist Services',
                blurb: 'Microsoft 365, Entra ID, Intune & cloud workspace engineering.',
                href: 'https://www.lawsonscloudworks.co.uk/',
                external: true,
              },
              {
                Icon: Code2,
                name: 'Lawsons Creative',
                cat: 'Web & Digital Systems',
                blurb: 'Premium websites and platform-backed digital systems.',
              },
              {
                Icon: Layers,
                name: 'Lawsons Platform & Marketing',
                cat: 'Platform Infrastructure',
                blurb: 'Reusable SaaS infrastructure for regulated service businesses.',
              },
              {
                Icon: Smartphone,
                name: 'Synced Momentum',
                cat: 'Mobile Product · In development',
                blurb: 'iPhone fitness product, in private development.',
              },
            ].map(({ Icon, name, cat, blurb, href, external }) => {
              const inner = (
                <>
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
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <p className="text-[15px] font-extrabold text-grey-950 tracking-tight">
                        {name}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-700 font-mono">
                        {cat}
                      </p>
                    </div>
                    <p className="text-[13px] text-grey-600 leading-relaxed mt-0.5">
                      {blurb}
                    </p>
                  </div>
                  {href && (
                    <ArrowUpRight
                      size={14}
                      className="flex-shrink-0 text-grey-400 group-hover:text-brand-600 transition-colors"
                      strokeWidth={2.5}
                    />
                  )}
                </>
              );
              const wrapperClass =
                'group flex items-start gap-4 p-5 rounded-[12px] bg-white transition-all hover:-translate-y-0.5';
              const wrapperStyle = {
                border: '1px solid #ECEAF5',
                boxShadow: '0 1px 2px rgba(15,15,18,0.04)',
              };
              return (
                <li key={name}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className={wrapperClass}
                      style={wrapperStyle}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={wrapperClass} style={wrapperStyle}>
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* How we operate — principles */}
      <section className="py-14 md:py-16 px-5 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-10 max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
              How we operate
            </p>
            <h2
              className="text-grey-950"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-1px',
              }}
            >
              The bar applied to every product and service.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PRINCIPLES.map(({ Icon, title, body }) => (
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
                <div className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center flex-shrink-0 mt-0.5"
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
                    <h3
                      className="text-grey-950 mb-1.5"
                      style={{
                        fontSize: '15.5px',
                        fontWeight: 800,
                        letterSpacing: '-0.2px',
                        lineHeight: 1.25,
                      }}
                    >
                      {title}
                    </h3>
                    <p className="text-[13.5px] text-grey-600 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal entity card + closing CTA */}
      <section
        className="py-14 md:py-16 px-5"
        style={{ background: '#F8F8FA' }}
      >
        <div className="max-w-[860px] mx-auto">
          <div
            className="rounded-[16px] p-7 md:p-9 bg-white"
            style={{
              border: '1px solid #ECEAF5',
              boxShadow:
                '0 1px 2px rgba(15,15,18,0.04), 0 18px 40px -22px rgba(79,70,229,0.18)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span
                aria-hidden
                className="inline-flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 11,
                  background:
                    'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                  border: '1px solid #A5B4FC',
                }}
              >
                <BadgeCheck size={16} style={{ color: '#4338CA' }} strokeWidth={2.2} />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono">
                Legal entity
              </p>
            </div>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 font-mono tabular-nums mb-7">
              {[
                ['Registered name', 'Lawsons Enterprises Ltd'],
                ['Jurisdiction', 'England & Wales'],
                ['Company number', '16433965'],
                ['VAT registration', 'GB495884223'],
                ['ICO registration', 'ZC120359'],
                ['Registered office', 'Kent, United Kingdom'],
              ].map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-grey-500">
                    {dt}
                  </dt>
                  <dd className="text-[15px] text-grey-900 mt-1">{dd}</dd>
                </div>
              ))}
            </dl>

            <ul className="space-y-2.5 pt-6 border-t border-grey-100 mb-7">
              {[
                'Active and in good standing — Companies House.',
                'VAT-registered with HMRC.',
                'Registered with the Information Commissioner’s Office (ICO) for UK GDPR.',
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[13.5px] text-grey-700"
                >
                  <CheckCircle2
                    size={15}
                    className="flex-shrink-0 mt-0.5 text-brand-600"
                    strokeWidth={2.3}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-grey-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="inline-flex items-center gap-1.5 text-grey-500">
                <MapPin size={13} />
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] font-mono">
                  Kent · United Kingdom
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-[13.5px] font-semibold text-white rounded-full transition-all hover:-translate-y-0.5 self-start sm:self-auto"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.2) inset, 0 10px 22px -10px rgba(79,70,229,0.5)',
                }}
              >
                Contact Lawsons Enterprises
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
