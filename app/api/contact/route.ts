import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "christophersfinejewelers@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = String(body.first_name ?? "").trim();
  const lastName = String(body.last_name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
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
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
