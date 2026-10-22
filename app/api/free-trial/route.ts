import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";
import {
  getClientIp,
  isHoneypotFilled,
  isRateLimited,
  rateLimitErrorMessage,
} from "@/lib/form-spam";
import { freeTrialLevels } from "@/lib/free-trial";

type FreeTrialPayload = {
  name: string;
  contact: string;
  level: string;
  school: string;
  preferredClass?: string;
};

function isValidPayload(body: unknown): body is FreeTrialPayload {
  if (!body || typeof body !== "object") return false;
  const { name, contact, level, school } = body as FreeTrialPayload;
  return (
    typeof name === "string" && name.trim().length > 0 &&
    typeof contact === "string" && contact.trim().length > 0 &&
    typeof level === "string" &&
    freeTrialLevels.includes(level as (typeof freeTrialLevels)[number]) &&
    typeof school === "string" && school.trim().length > 0
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
    const level = body.level.trim();
    const school = body.school.trim();
    const preferredClass = String((body as FreeTrialPayload).preferredClass ?? "").trim();

    const text = [
      "🎯 <b>New Free Trial Request</b>",
      "",
      `👤 <b>Name:</b> ${name}`,
      `📞 <b>Contact:</b> ${contact}`,
      `🎓 <b>Level:</b> ${level}`,
      `🏫 <b>School:</b> ${school}`,
      ...(preferredClass ? [`📅 <b>Preferred class:</b> ${preferredClass}`] : []),
    ].join("\n");

    const result = await sendTelegramMessage(text);

    if (!result.ok) {
      console.error("Telegram error:", result.error);
      return NextResponse.json(
        { error: "Could not send your request. Please WhatsApp us at +65 8476 0600." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Free trial API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
