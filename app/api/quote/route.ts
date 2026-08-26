import { NextResponse } from "next/server";
import { Resend } from "resend";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ message: "Thank you." });
    if (!body.name || !body.phone || !emailPattern.test(body.email || "")) return NextResponse.json({ message: "Please complete the required fields." }, { status: 400 });
    const key = process.env.RESEND_API_KEY; if (!key) return NextResponse.json({ message: "Email is not configured." }, { status: 503 });
    const resend = new Resend(key); const from = process.env.EMAIL_FROM || "IGLOBALAGREECARE <onboarding@resend.dev>"; const to = process.env.BUSINESS_EMAIL || "iglobalagreecare2040@gmail.com";
    const html = `<h2>New website inquiry</h2><p><b>Name:</b> ${safe(body.name)}</p><p><b>Phone:</b> ${safe(body.phone)}</p><p><b>Email:</b> ${safe(body.email)}</p><p><b>Inquiry reason:</b> ${safe(body.reason || "—")}</p><p><b>Product:</b> ${safe(body.product || "—")}</p><p><b>Message:</b> ${safe(body.message || "—")}</p>`;
    const sent = await resend.emails.send({ from, to, subject: `Website inquiry${body.product ? `: ${safe(body.product)}` : ""}`, html }); if (sent.error) throw new Error(sent.error.message);
    return NextResponse.json({ message: "Thank you. Your inquiry has been sent." });
  } catch (error) { console.error(error); return NextResponse.json({ message: "Please contact us directly." }, { status: 500 }); }
}
function safe(value: unknown) { return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]!); }
