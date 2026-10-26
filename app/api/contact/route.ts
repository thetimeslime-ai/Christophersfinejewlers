import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "christophersfinejewelers@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const SEND_FAILED_MESSAGE = `We couldn't send your message just now. Please try again, or email us at ${CONTACT_EMAIL}.`;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Names go into the email subject, so collapse any line breaks.
  const firstName = String(body.first_name ?? "").replace(/\s+/g, " ").trim();
  const lastName = String(body.last_name ?? "").replace(/\s+/g, " ").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Hidden spam-trap field: people never see it, so a value means a bot. Pretend success.
  if (String(body.website ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 });
  }
  if (email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (firstName.length > MAX_NAME_LENGTH || lastName.length > MAX_NAME_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Your message is too long. Please shorten it and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: SEND_FAILED_MESSAGE }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  const { error } = await resend.emails.send({
    from: "Christopher's Fine Jewelers <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Jewelry Inquiry – ${fullName}`,
    text: `Name: ${fullName}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json({ error: SEND_FAILED_MESSAGE }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
