import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot field for spam prevention
    if (body.website) {
      return NextResponse.json({ message: "Thank you." });
    }

    if (!body.name || !body.phone || !emailPattern.test(body.email || "")) {
      return NextResponse.json(
        { message: "Please complete the required fields." },
        { status: 400 }
      );
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      return NextResponse.json(
        { message: "Email is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(key);
    const from = process.env.EMAIL_FROM || "IGLOBALAGREECARE <onboarding@resend.dev>";
    const to = process.env.BUSINESS_EMAIL || "iglobalagreecare2040@gmail.com";

    const selectedProduct = body.product || body.reason || "General Inquiry";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #1a2e1f; border: 1px solid #e2ddd3; border-radius: 12px; padding: 24px; background-color: #fdfcf9;">
        <h2 style="color: #0c4d29; margin-top: 0; border-bottom: 2px solid #c8a45d; padding-bottom: 10px;">
          New Website Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; width: 140px; font-weight: bold; color: #0c4d29;">Name:</td>
            <td style="padding: 8px 0;">${safe(body.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0c4d29;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0;">
              <a href="tel:${safe(body.phone)}" style="color: #0c4d29; text-decoration: none; font-weight: bold;">
                ${safe(body.phone)}
              </a>
              &nbsp;|&nbsp;
              <a href="https://wa.me/${safe(String(body.phone).replace(/[^0-9]/g, ""))}" style="color: #16a34a; text-decoration: none;">
                Chat on WhatsApp
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0c4d29;">Email:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${safe(body.email)}" style="color: #0c4d29; text-decoration: none;">
                ${safe(body.email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0c4d29;">Product:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #b45309; background-color: #fef3c7; padding: 4px 8px; border-radius: 4px; display: inline-block;">
              ${safe(selectedProduct)}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0 6px 0; font-weight: bold; color: #0c4d29;" colspan="2">Message:</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 12px; background-color: #f3efe6; border-radius: 8px; white-space: pre-wrap; font-size: 13px;">
              ${safe(body.message || "—")}
            </td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 11px; color: #888; border-top: 1px solid #e2ddd3; padding-top: 12px;">
          Sent from IGLOBALAGREECARE Website Contact Form
        </p>
      </div>
    `;

    const subject = `Website inquiry: ${safe(body.name)} - ${safe(selectedProduct)}`;
    const sent = await resend.emails.send({ from, to, subject, html });

    if (sent.error) {
      throw new Error(sent.error.message);
    }

    return NextResponse.json({ message: "Thank you. Your inquiry has been sent." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Please contact us directly." },
      { status: 500 }
    );
  }
}

function safe(value: unknown) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]!);
}
