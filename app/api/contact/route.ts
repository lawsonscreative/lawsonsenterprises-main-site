import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const TO_ADDRESS = 'hello@lawsonsenterprises.com';
const FROM_ADDRESS = 'Lawsons Enterprises <noreply@scanposture.com>';

const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
  const { name, email, subject, message, website } = body as Record<string, unknown>;

  // Honeypot — silent success on bot submissions.
  if (typeof website === 'string' && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const errors: string[] = [];
  if (typeof name !== 'string' || name.trim().length === 0 || name.length > MAX_NAME) {
    errors.push('name');
  }
  if (
    typeof email !== 'string' ||
    email.length > MAX_EMAIL ||
    !EMAIL_RE.test(email.trim())
  ) {
    errors.push('email');
  }
  if (
    typeof subject !== 'string' ||
    subject.trim().length === 0 ||
    subject.length > MAX_SUBJECT
  ) {
    errors.push('subject');
  }
  if (
    typeof message !== 'string' ||
    message.trim().length === 0 ||
    message.length > MAX_MESSAGE
  ) {
    errors.push('message');
  }
  if (errors.length > 0) {
    return NextResponse.json(
      { error: 'Some fields are missing or invalid.', fields: errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY not set');
    return NextResponse.json(
      { error: 'Email service is not configured. Please email hello@lawsonsenterprises.com directly.' },
      { status: 500 },
    );
  }

  const cleanName = (name as string).trim();
  const cleanEmail = (email as string).trim();
  const cleanSubject = (subject as string).trim();
  const cleanMessage = (message as string).trim();

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0F0F12;max-width:560px;">
      <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#4338CA;margin:0 0 8px;">
        New contact form submission
      </p>
      <h2 style="font-size:20px;font-weight:800;margin:0 0 24px;letter-spacing:-0.5px;">
        ${escapeHtml(cleanSubject)}
      </h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px;font-size:14px;">
        <tr>
          <td style="padding:8px 12px 8px 0;color:#7A7A87;width:90px;vertical-align:top;">From</td>
          <td style="padding:8px 0;color:#0F0F12;font-weight:600;">${escapeHtml(cleanName)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px 8px 0;color:#7A7A87;vertical-align:top;">Email</td>
          <td style="padding:8px 0;">
            <a href="mailto:${escapeHtml(cleanEmail)}" style="color:#4F46E5;text-decoration:none;">${escapeHtml(cleanEmail)}</a>
          </td>
        </tr>
      </table>
      <div style="padding:16px;background:#F8F8FA;border:1px solid #ECEAF5;border-radius:10px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(cleanMessage)}</div>
      <p style="font-size:11px;color:#9D9DA8;margin-top:24px;">
        Sent via lawsonsenterprises.com contact form. Reply directly to respond.
      </p>
    </div>
  `;

  const text = [
    `New contact form submission`,
    ``,
    `Subject: ${cleanSubject}`,
    `From:    ${cleanName} <${cleanEmail}>`,
    ``,
    cleanMessage,
    ``,
    `--`,
    `Sent via lawsonsenterprises.com`,
  ].join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: `${cleanName} <${cleanEmail}>`,
      subject: `[Lawsons Enterprises] ${cleanSubject}`,
      html,
      text,
    });

    if (error) {
      console.error('[contact] Resend error', error);
      return NextResponse.json(
        { error: 'Could not send your message. Please email hello@lawsonsenterprises.com directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[contact] unexpected error', e);
    return NextResponse.json(
      { error: 'Could not send your message. Please email hello@lawsonsenterprises.com directly.' },
      { status: 500 },
    );
  }
}
