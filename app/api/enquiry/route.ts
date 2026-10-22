import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";
import {
  getClientIp,
  isHoneypotFilled,
  isRateLimited,
  rateLimitErrorMessage,
} from "@/lib/form-spam";

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
    typeof name === "string" && name.trim().length > 0 &&
    typeof contact === "string" && contact.trim().length > 0 &&
    typeof schoolLevel === "string" && schoolLevel.trim().length > 0 &&
    typeof message === "string" && message.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (isHoneypotFilled(body)) return NextResponse.json({ success: true });

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json({ error: rateLimitErrorMessage }, { status: 429 });
    }

    if (!isValidPayload(body)) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    const name = body.name.trim();
    const contact = body.contact.trim();
    const schoolLevel = body.schoolLevel.trim();
    const message = body.message.trim();

    const text = [
      "📬 <b>New Website Enquiry</b>",
      "",
      `👤 <b>Name:</b> ${name}`,
      `📞 <b>Contact:</b> ${contact}`,
      `🎓 <b>Level:</b> ${schoolLevel}`,
      `💬 <b>Message:</b> ${message}`,
    ].join("\n");

    const result = await sendTelegramMessage(text);

    if (!result.ok) {
      console.error("Telegram error:", result.error);
      return NextResponse.json(
        { error: "Could not send your message. Please WhatsApp us at +65 8476 0600." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
