'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Lock,
  Cpu,
  BadgeCheck,
  Cloud,
  Code2,
  Layers,
  Smartphone,
  Wrench,
  ScanLine,
  Sparkles,
  CheckCircle2,
  Building2,
  Database,
  type LucideIcon,
} from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.fade-section').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO
          Lilac gradient + grid overlay + radial glow, mirroring the
          ScanPosture family. Eyebrow chip = legal entity reassurance.
         ───────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-[140px] pb-20 md:pt-[180px] md:pb-28 px-5 overflow-hidden text-center"
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
              'radial-gradient(ellipse 70% 55% at 50% 40%, transparent 0%, black 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 55% at 50% 40%, transparent 0%, black 90%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            top: '-160px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 880,
            height: 880,
            background:
              'radial-gradient(circle, rgba(129,140,248,0.22) 0%, transparent 62%)',
          }}
        />

        <div className="relative max-w-[1080px] mx-auto">
          <div
            className="hero-headline inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full text-[11px] font-bold font-mono uppercase tracking-[0.08em]"
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(79,70,229,0.18)',
              backdropFilter: 'blur(6px)',
              color: '#4338CA',
            }}
          >
            <ShieldCheck size={13} strokeWidth={2.4} />
            <span>Registered in England &amp; Wales · Co. 16433965</span>
          </div>

          <h1
            className="hero-headline font-extrabold text-grey-950 mb-7"
            style={{
              fontSize: 'clamp(34px, 6.0vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-2.0px',
            }}
          >
            An independent UK product company building{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: '#4F46E5',
              }}
            >
              control assurance for cloud-first organisations
            </em>
            .
          </h1>

          <p
            className="hero-sub max-w-[760px] mx-auto mb-9"
            style={{ fontSize: '18.5px', color: '#36364A', lineHeight: 1.65 }}
          >
            Lawsons Enterprises Ltd builds and operates ScanPosture — a
            continuous control assurance platform for Microsoft 365 today, with
            AWS and selected SaaS coverage on the roadmap — alongside
            specialist cloud remediation, platform-backed websites, and vertical
            SaaS for regulated service businesses.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-white rounded-full transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.2) inset, 0 12px 28px -10px rgba(79,70,229,0.5)',
              }}
            >
              Explore the portfolio
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-grey-800 rounded-full bg-white border border-grey-200 hover:border-grey-300 transition-all"
              style={{
                boxShadow: '0 1px 2px rgba(15,15,18,0.04)',
              }}
            >
              Contact Lawsons Enterprises
            </Link>
          </div>

          {/* Hero trust strip — 4 chips, mono labels */}
          <div className="hero-trust grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[920px] mx-auto">
            {[
              {
                Icon: ScanLine,
                eyebrow: 'Read-only',
                text: '201 checks · 9 control domains',
              },
              {
                Icon: MapPin,
                eyebrow: 'Data residency',
                text: 'UK end-to-end · London region',
              },
              {
                Icon: Sparkles,
                eyebrow: 'Intelligence',
                text: 'AI narrative layer live',
              },
              {
                Icon: BadgeCheck,
                eyebrow: 'Registered',
                text: 'ICO ZC120359 · VAT GB495884223',
              },
            ].map(({ Icon, eyebrow, text }) => (
              <div
                key={eyebrow}
                className="flex items-center gap-3 px-4 py-3 rounded-[12px] text-left"
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  border: '1px solid rgba(79,70,229,0.14)',
                  backdropFilter: 'blur(6px)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 20px -12px rgba(79,70,229,0.18)',
                }}
              >
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background:
                      'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                    border: '1px solid #A5B4FC',
                  }}
                >
                  <Icon size={14} style={{ color: '#4338CA' }} strokeWidth={2.3} />
                </span>
                <div className="min-w-0">
                  <p
                    className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-brand-700 font-mono leading-tight"
                  >
                    {eyebrow}
                  </p>
                  <p className="text-[12.5px] font-semibold text-grey-900 leading-tight mt-0.5">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PORTFOLIO
          ScanPosture given visual primacy — full-width flagship card.
          Other four sit in a 2x2 grid below.
         ───────────────────────────────────────────────────────────── */}
      <section
        id="portfolio"
        className="fade-section relative py-20 md:py-28 px-5 bg-white"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 md:mb-16 max-w-[760px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
              Portfolio
            </p>
            <h2
              className="text-grey-950 mb-5"
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: 1.1,
                letterSpacing: '-1.2px',
              }}
            >
              Five focused brands, one operating company.
            </h2>
            <p className="text-grey-600 text-[16px] leading-relaxed">
              Lawsons Enterprises operates a deliberate set of brands across
              SaaS products, specialist services, and platform-backed digital
              systems.
            </p>
          </div>

          {/* Flagship — ScanPosture */}
          <a
            href="https://scanposture.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-[20px] overflow-hidden mb-6 transition-all hover:-translate-y-0.5"
            style={{
              background:
                'linear-gradient(135deg, #1A1A21 0%, #2E2E38 50%, #312E81 100%)',
              boxShadow:
                '0 1px 0 rgba(255,255,255,0.06) inset, 0 28px 60px -28px rgba(79,70,229,0.5)',
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(165,180,252,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,0.4) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage:
                  'radial-gradient(ellipse 60% 80% at 80% 50%, black 0%, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 60% 80% at 80% 50%, black 0%, transparent 75%)',
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full"
              style={{
                top: -180,
                right: -180,
                width: 540,
                height: 540,
                background:
                  'radial-gradient(circle, rgba(129,140,248,0.32) 0%, transparent 62%)',
              }}
            />

            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 p-8 md:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] font-mono"
                    style={{
                      background: 'rgba(165,180,252,0.18)',
                      border: '1px solid rgba(165,180,252,0.32)',
                      color: '#C7D2FE',
                    }}
                  >
                    <Sparkles size={10} strokeWidth={2.4} />
                    Flagship · SaaS Product
                  </span>
                </div>

                <h3
                  className="text-white mb-3"
                  style={{
                    fontSize: 'clamp(28px, 3.4vw, 40px)',
                    lineHeight: 1.1,
                    letterSpacing: '-1px',
                  }}
                >
                  ScanPosture
                </h3>
                <p
                  className="text-[18px] mb-2"
                  style={{ color: '#A5B4FC', fontWeight: 500 }}
                >
                  Continuous control assurance for cloud-first organisations.
                </p>
                <p
                  className="text-[14.5px] leading-relaxed mb-7 max-w-[520px]"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
                >
                  Read-only assessment across Microsoft 365 and Entra ID today,
                  with AWS and selected SaaS coverage on the roadmap. Built
                  for IT teams and MSPs who need defensible posture evidence
                  without enterprise complexity.
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold"
                  style={{ color: '#C7D2FE' }}
                >
                  Visit ScanPosture
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              {/* Stat panel */}
              <div
                className="rounded-[14px] p-5 md:p-6"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.14em] font-mono mb-4"
                  style={{ color: '#A5B4FC' }}
                >
                  Live platform state
                </p>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {[
                    { v: '201', l: 'Read-only checks' },
                    { v: '15', l: 'Categories' },
                    { v: '9', l: 'Control domains' },
                    { v: '5', l: 'Frameworks' },
                  ].map(({ v, l }) => (
                    <div key={l}>
                      <dt
                        className="text-[10px] font-bold uppercase tracking-[0.12em] font-mono"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        {l}
                      </dt>
                      <dd
                        className="text-white font-extrabold mt-0.5 tabular-nums"
                        style={{
                          fontSize: '32px',
                          letterSpacing: '-1px',
                        }}
                      >
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div
                  className="mt-5 pt-4 text-[11px] leading-relaxed"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.62)',
                  }}
                >
                  Cyber Essentials · GDPR · ISO 27001 · NIST · CAF.
                  Microsoft 365 live · AWS scanner in development.
                </div>
              </div>
            </div>
          </a>

          {/* Supporting brands — 2x2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <BrandCard
              eyebrow="Specialist Services"
              title="Lawsons CloudWorks"
              tagline="Microsoft 365, Entra ID, Intune & cloud workspace expertise."
              body="Hands-on remediation and engineering for UK organisations — Microsoft 365 hardening, Entra ID, Intune, AWS WorkSpaces, AVD, endpoint and cloud workspace work. Available where ScanPosture customers need practical implementation support, separately from the SaaS product."
              status="Live"
              statusColor="emerald"
              href="https://www.lawsonscloudworks.co.uk/"
              external
              Icon={Cloud}
            />
            <BrandCard
              eyebrow="Web & Digital Systems"
              title="Lawsons Creative"
              tagline="Premium websites and platform-backed digital systems."
              body="Builds the public surface for ScanPosture, Lawsons CloudWorks, Atlas Physiotherapy Clinic and others. Not brochure sites — websites engineered alongside operational platforms when the business case demands it."
              status="Live"
              statusColor="emerald"
              Icon={Code2}
            />
            <BrandCard
              eyebrow="Platform Infrastructure"
              title="Lawsons Platform & Marketing"
              tagline="Reusable SaaS infrastructure for regulated service businesses."
              body="Two layers: Lawsons Platform handles the operational backend, Lawsons Marketing handles the public-facing growth surface. Designed to separate operational records from public content and marketing workflows. Atlas Physiotherapy Clinic is the first live tenant."
              status="In production"
              statusColor="brand"
              Icon={Layers}
            />
            <BrandCard
              eyebrow="Mobile Product"
              title="Synced Momentum"
              tagline="An iPhone fitness product."
              body="In private development. Not the main commercial story — included here for portfolio completeness."
              status="In development"
              statusColor="amber"
              Icon={Smartphone}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ASSURANCE — ScanPosture × CloudWorks relationship
         ───────────────────────────────────────────────────────────── */}
      <section
        id="assurance"
        className="fade-section relative py-20 md:py-28 px-5"
        style={{
          background:
            'linear-gradient(180deg, #F8F8FA 0%, #EEF2FF 50%, #F8F8FA 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.18) 50%, transparent 100%)',
          }}
        />
        <div className="max-w-[1080px] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.05fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
                Product × Services
              </p>
              <h2
                className="text-grey-950 mb-5"
                style={{
                  fontSize: 'clamp(28px, 3.6vw, 40px)',
                  lineHeight: 1.1,
                  letterSpacing: '-1.2px',
                }}
              >
                Product-led assurance,{' '}
                <em style={{ fontStyle: 'italic', color: '#4F46E5' }}>
                  practical remediation when needed
                </em>
                .
              </h2>
              <p className="text-grey-700 text-[15.5px] leading-relaxed mb-5">
                ScanPosture helps organisations understand their Microsoft 365
                and Entra ID posture, prioritise remediation, and monitor drift
                over time. Where customers need hands-on support to resolve
                findings, Lawsons CloudWorks provides senior engineering
                expertise.
              </p>
              <p className="text-grey-500 text-[13.5px] leading-relaxed italic">
                ScanPosture remains a SaaS product. Lawsons CloudWorks support
                is optional and separate.
              </p>
            </div>

            <div
              className="rounded-[16px] p-7 md:p-8 bg-white"
              style={{
                border: '1px solid #ECEAF5',
                boxShadow:
                  '0 1px 2px rgba(15,15,18,0.04), 0 18px 44px -22px rgba(79,70,229,0.18)',
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-5">
                How they fit together
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: ScanLine,
                    title: 'ScanPosture identifies posture gaps',
                    body: 'Continuous read-only assessment across identity, privileged access, applications, collaboration, logging and device controls.',
                  },
                  {
                    Icon: BadgeCheck,
                    title: 'Findings are framework-aligned',
                    body: 'Each check ties to Cyber Essentials, GDPR, ISO 27001, NIST and CAF — the report is the source of truth, not the dashboard.',
                  },
                  {
                    Icon: Wrench,
                    title: 'CloudWorks remediates if asked',
                    body: 'Senior Microsoft 365, Entra ID, Intune and cloud workspace engineering — engaged separately, with no requirement to use ScanPosture.',
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3.5">
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 9,
                        background:
                          'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                        border: '1px solid #A5B4FC',
                      }}
                    >
                      <Icon size={14} style={{ color: '#4338CA' }} strokeWidth={2.3} />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-grey-950 mb-0.5">
                        {title}
                      </p>
                      <p className="text-[13px] text-grey-600 leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PLATFORM-BACKED WEB SYSTEMS
         ───────────────────────────────────────────────────────────── */}
      <section className="fade-section relative py-20 md:py-28 px-5 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
                Platform-backed web
              </p>
              <h2
                className="text-grey-950 mb-5"
                style={{
                  fontSize: 'clamp(28px, 3.6vw, 40px)',
                  lineHeight: 1.1,
                  letterSpacing: '-1.2px',
                }}
              >
                Beyond brochure websites.
              </h2>
              <p className="text-grey-700 text-[15.5px] leading-relaxed mb-5">
                Lawsons Creative builds public-facing websites backed by
                reusable platform infrastructure where the business case
                demands it. For Atlas Physiotherapy Clinic, Lawsons Platform
                and Lawsons Marketing separate operational workflows from
                public-facing reviews, content and practitioner profiles.
              </p>
              <p className="text-grey-500 text-[13.5px] leading-relaxed">
                Designed to separate operational records from public-facing
                content and marketing workflows.
              </p>
            </div>

            <div
              className="rounded-[16px] p-7 md:p-8"
              style={{
                background:
                  'linear-gradient(180deg, #FFFFFF 0%, #FBFAFF 100%)',
                border: '1px solid #ECEAF5',
                boxShadow:
                  '0 1px 2px rgba(15,15,18,0.04), 0 18px 40px -22px rgba(79,70,229,0.12)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    background:
                      'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                    border: '1px solid #A5B4FC',
                  }}
                >
                  <Building2 size={15} style={{ color: '#4338CA' }} strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono">
                    First live tenant
                  </p>
                  <p className="text-[15px] font-extrabold text-grey-950 mt-0.5">
                    Atlas Physiotherapy Clinic
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-[13.5px] text-grey-700 leading-relaxed">
                {[
                  'Public-facing site for reviews, content and practitioner profiles.',
                  'Operational backend for clinical records and workflows — kept separate by design.',
                  'Tenant model that other regulated service businesses can adopt.',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="flex-shrink-0 mt-0.5 text-brand-600"
                      strokeWidth={2.3}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. OPERATING PRINCIPLES
         ───────────────────────────────────────────────────────────── */}
      <section
        className="fade-section relative py-20 md:py-28 px-5"
        style={{ background: '#F8F8FA' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 max-w-[680px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-3">
              How we build
            </p>
            <h2
              className="text-grey-950 mb-4"
              style={{
                fontSize: 'clamp(28px, 3.6vw, 40px)',
                lineHeight: 1.1,
                letterSpacing: '-1.2px',
              }}
            >
              Operating principles.
            </h2>
            <p className="text-grey-600 text-[15.5px] leading-relaxed">
              The bar applied to every product and service the company
              operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                Icon: Lock,
                title: 'Security and data separation by design',
                body: 'Read-only by default. Operational data kept isolated from public-facing content. Least-privilege everywhere.',
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
            ].map(({ Icon, title, body }) => (
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
                <div
                  className="w-11 h-11 rounded-[11px] flex items-center justify-center mb-4"
                  style={{
                    background:
                      'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
                    border: '1px solid #A5B4FC',
                  }}
                >
                  <Icon size={18} style={{ color: '#4338CA' }} strokeWidth={2.2} />
                </div>
                <h3 className="text-[15px] font-extrabold text-grey-950 mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-[13px] text-grey-600 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CLOSING — Contact
         ───────────────────────────────────────────────────────────── */}
      <section className="fade-section relative py-20 md:py-28 px-5 overflow-hidden bg-white">
        <div className="max-w-[860px] mx-auto text-center">
          <h2
            className="text-grey-950 mb-5"
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-1.2px',
            }}
          >
            Talk to the company behind ScanPosture.
          </h2>
          <p className="text-grey-600 text-[16px] leading-relaxed max-w-[600px] mx-auto mb-8">
            For procurement, MSP partnership, due-diligence checks, or to ask
            about anything Lawsons Enterprises operates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-white rounded-full transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.2) inset, 0 12px 28px -10px rgba(79,70,229,0.5)',
              }}
            >
              Get in touch
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:hello@lawsonsenterprises.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-grey-800 rounded-full bg-white border border-grey-200 hover:border-grey-300 transition-all"
              style={{
                boxShadow: '0 1px 2px rgba(15,15,18,0.04)',
              }}
            >
              hello@lawsonsenterprises.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   Brand card — supporting (non-flagship) brand tile.
   ════════════════════════════════════════════════════════════════ */

type StatusColor = 'emerald' | 'brand' | 'amber';

const STATUS_STYLES: Record<
  StatusColor,
  { bg: string; border: string; color: string; dot: string }
> = {
  emerald: {
    bg: 'rgba(16,185,129,0.10)',
    border: 'rgba(16,185,129,0.28)',
    color: '#047857',
    dot: '#10B981',
  },
  brand: {
    bg: 'rgba(79,70,229,0.10)',
    border: 'rgba(79,70,229,0.24)',
    color: '#4338CA',
    dot: '#6366F1',
  },
  amber: {
    bg: 'rgba(217,119,6,0.10)',
    border: 'rgba(217,119,6,0.28)',
    color: '#B45309',
    dot: '#D97706',
  },
};

function BrandCard({
  eyebrow,
  title,
  tagline,
  body,
  status,
  statusColor,
  Icon,
  href,
  external,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  body: string;
  status: string;
  statusColor: StatusColor;
  Icon: LucideIcon;
  href?: string;
  external?: boolean;
}) {
  const s = STATUS_STYLES[statusColor];
  const inner = (
    <>
      <span
        aria-hidden
        className="absolute top-0 inset-x-0"
        style={{
          height: 2,
          background:
            'linear-gradient(90deg, transparent 0%, #4F46E5 50%, transparent 100%)',
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,107,232,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
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
            <Icon size={16} style={{ color: '#4338CA' }} strokeWidth={2.2} />
          </span>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono">
            {eyebrow}
          </p>
        </div>
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] font-mono"
          style={{
            background: s.bg,
            border: `1px solid ${s.border}`,
            color: s.color,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: s.dot }}
          />
          {status}
        </span>
      </div>

      <h3
        className="relative text-grey-950 mb-2"
        style={{
          fontSize: '22px',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h3>
      <p
        className="relative text-[14.5px] mb-3"
        style={{ color: '#4F46E5', fontWeight: 600 }}
      >
        {tagline}
      </p>
      <p className="relative text-[13.5px] text-grey-600 leading-relaxed">
        {body}
      </p>

      {href && (
        <span
          className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700"
        >
          Visit {title}
          <ArrowUpRight size={12} strokeWidth={2.5} />
        </span>
      )}
    </>
  );

  const className =
    'group relative block rounded-[16px] p-7 bg-white overflow-hidden transition-all hover:-translate-y-0.5';
  const style = {
    border: '1px solid #ECEAF5',
    boxShadow:
      '0 1px 2px rgba(15,15,18,0.04), 0 18px 40px -22px rgba(79,70,229,0.18)',
  };

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={className}
        style={style}
      >
        {inner}
      </a>
    );
  }
  return (
    <div className={className} style={style}>
      {inner}
    </div>
  );
}
