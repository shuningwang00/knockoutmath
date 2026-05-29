import { Resend } from "resend";
import { NextResponse } from "next/server";
import { freeTrialLevels } from "@/lib/free-trial";

const ENQUIRY_TO = "contact@knockoutmath.sg";

type FreeTrialPayload = {
  name: string;
  contact: string;
  level: string;
  school: string;
};

function isValidPayload(body: unknown): body is FreeTrialPayload {
  if (!body || typeof body !== "object") return false;
  const { name, contact, level, school } = body as FreeTrialPayload;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof contact === "string" &&
    contact.trim().length > 0 &&
    typeof level === "string" &&
    freeTrialLevels.includes(level as (typeof freeTrialLevels)[number]) &&
    typeof school === "string" &&
    school.trim().length > 0
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
    const level = body.level.trim();
    const school = body.school.trim();

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
      subject: `New free trial request from ${name} (${level})`,
      html: `
        <h2>New free trial request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Level:</strong> ${escapeHtml(level)}</p>
        <p><strong>School:</strong> ${escapeHtml(school)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your request. Please try again or call us at +65 8476 0600." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Free trial API error:", err);
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
