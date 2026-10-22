import { getGoogleAuthUrl } from "@/lib/google/auth";
import { NextResponse } from "next/server";

/** One-time: open this URL to obtain a refresh token for .env.local */
export async function GET() {
  try {
    return NextResponse.redirect(getGoogleAuthUrl());
  } catch (err) {
    const message = err instanceof Error ? err.message : "OAuth not configured";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
