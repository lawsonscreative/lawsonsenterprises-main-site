'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'error'; message: string };

const FIELD_INPUT_CLASS =
  'w-full px-4 py-3 text-[14.5px] bg-white border border-grey-200 rounded-[10px] focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all placeholder:text-grey-400';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [fieldErrors, setFieldErrors] = useState<Set<string>>(new Set());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      subject: String(data.get('subject') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      website: String(data.get('website') ?? ''),
    };

    setStatus({ kind: 'sending' });
    setFieldErrors(new Set());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
        fields?: string[];
      };

      if (!res.ok) {
        if (body.fields) setFieldErrors(new Set(body.fields));
        setStatus({
          kind: 'error',
          message: body.error ?? 'Something went wrong sending your message.',
        });
        return;
      }

      setStatus({ kind: 'sent' });
      form.reset();
    } catch {
      setStatus({
        kind: 'error',
        message:
          'Could not reach the server. Please email hello@lawsonsenterprises.com directly.',
      });
    }
  }

  if (status.kind === 'sent') {
    return (
      <div
        className="h-full rounded-[16px] p-8 md:p-10 bg-white text-center flex flex-col items-center justify-center"
        style={{
          border: '1px solid #ECEAF5',
          boxShadow:
            '0 1px 2px rgba(15,15,18,0.04), 0 18px 40px -22px rgba(79,70,229,0.18)',
          minHeight: 480,
        }}
        aria-live="polite"
      >
        <div
          className="w-14 h-14 mb-6 inline-flex items-center justify-center rounded-[14px]"
          style={{
            background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
            border: '1px solid #6EE7B7',
          }}
        >
          <CheckCircle2 size={26} style={{ color: '#047857' }} strokeWidth={2.3} />
        </div>
        <h3
          className="text-grey-950 mb-3"
          style={{
            fontSize: '24px',
            fontWeight: 800,
            letterSpacing: '-0.5px',
          }}
        >
          Message sent.
        </h3>
        <p className="text-grey-600 text-[14.5px] leading-relaxed max-w-[380px]">
          Thanks — we&apos;ll respond within 1–2 business days. For urgent
          matters, follow up to{' '}
          <a
            href="mailto:hello@lawsonsenterprises.com"
            className="text-brand-700 font-semibold"
          >
            hello@lawsonsenterprises.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: 'idle' })}
          className="mt-7 text-[13px] font-semibold text-brand-700 hover:text-brand-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div
      className="h-full rounded-[16px] p-7 md:p-8 bg-white"
      style={{
        border: '1px solid #ECEAF5',
        boxShadow:
          '0 1px 2px rgba(15,15,18,0.04), 0 18px 40px -22px rgba(79,70,229,0.12)',
      }}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 font-mono mb-5">
        Send a message
      </p>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Honeypot — visible to bots, hidden from humans + a11y tree. */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          <label htmlFor="website">
            Website (leave blank)
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        {(
          [
            { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', autoComplete: 'email' },
            { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', autoComplete: 'off' },
          ] as const
        ).map(({ id, label, type, placeholder, autoComplete }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-[12px] font-bold uppercase tracking-[0.1em] text-grey-700 font-mono mb-2"
            >
              {label} <span className="text-brand-600">*</span>
            </label>
            <input
              type={type}
              id={id}
              name={id}
              required
              placeholder={placeholder}
              autoComplete={autoComplete}
              className={`${FIELD_INPUT_CLASS} ${
                fieldErrors.has(id) ? 'border-red-400 ring-2 ring-red-100' : ''
              }`}
              disabled={status.kind === 'sending'}
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="message"
            className="block text-[12px] font-bold uppercase tracking-[0.1em] text-grey-700 font-mono mb-2"
          >
            Message <span className="text-brand-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us more about your enquiry..."
            className={`${FIELD_INPUT_CLASS} resize-none ${
              fieldErrors.has('message') ? 'border-red-400 ring-2 ring-red-100' : ''
            }`}
            disabled={status.kind === 'sending'}
          />
        </div>

        {status.kind === 'error' && (
          <div
            role="alert"
            className="flex items-start gap-2.5 px-4 py-3 rounded-[10px] text-[13px] leading-relaxed"
            style={{
              background: '#FEF2F2',
              border: '1px solid #FCA5A5',
              color: '#991B1B',
            }}
          >
            <AlertCircle
              size={15}
              className="flex-shrink-0 mt-0.5"
              strokeWidth={2.3}
            />
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status.kind === 'sending'}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-white rounded-full transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
          style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.2) inset, 0 12px 28px -10px rgba(79,70,229,0.5)',
          }}
        >
          {status.kind === 'sending' ? (
            <>
              <Loader2 size={15} className="animate-spin" strokeWidth={2.5} />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight size={15} strokeWidth={2.5} />
            </>
          )}
        </button>

        <p className="text-[11px] text-grey-500 leading-relaxed">
          Submitting sends an email to hello@lawsonsenterprises.com via Resend.
          We don&apos;t store form data on this site.
        </p>
      </form>
    </div>
  );
}
