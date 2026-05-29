import { Resend } from "resend";
import { NextResponse } from "next/server";

const ENQUIRY_TO = "contact@knockoutmath.sg";

type EnquiryPayload = {
  name: string;
  contact: string;
  schoolLevel: string;
  message: string;
};

function isValidPayload(body: unknown): body is EnquiryPayload {
  if (!body || typeof body !== "object") return false;
  const { name, contact, schoolLevel, message } = body as EnquiryPayload;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof contact === "string" &&
    contact.trim().length > 0 &&
    typeof schoolLevel === "string" &&
    schoolLevel.trim().length > 0 &&
    typeof message === "string" &&
    message.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 },
      );
    }

    const name = body.name.trim();
    const contact = body.contact.trim();
    const schoolLevel = body.schoolLevel.trim();
    const message = body.message.trim();

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Please email us directly at contact@knockoutmath.sg.",
        },
        { status: 503 },
      );
    }

    const from =
      process.env.ENQUIRY_FROM_EMAIL ?? "Knockout Math Enquiries <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: ENQUIRY_TO,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `New enquiry from ${name} (${schoolLevel})`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
        <p><strong>School level:</strong> ${escapeHtml(schoolLevel)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again or WhatsApp us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
