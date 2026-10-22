import { exchangeCodeForTokens } from "@/lib/google/auth";
import { NextResponse } from "next/server";

/**
 * After Google sign-in, shows the refresh token to paste into GOOGLE_OAUTH_REFRESH_TOKEN.
 * Dev/setup only — not linked from the public site.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return new NextResponse(`Google error: ${error}`, { status: 400 });
  }
  if (!code) {
    return new NextResponse("Missing code.", { status: 400 });
  }

  try {
    const tokens = await exchangeCodeForTokens(code);
    const refresh = tokens.refresh_token ?? "";

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Google Sheets token</title></head>
<body style="font-family:system-ui;max-width:40rem;margin:2rem auto;padding:0 1rem">
  <h1>Google Sheets connected</h1>
  <p>Add this to <strong>kom-website</strong> and <strong>kom-billing</strong> <code>.env.local</code> and Vercel:</p>
  <pre style="background:#f4f4f5;padding:1rem;overflow:auto;font-size:12px">GOOGLE_OAUTH_REFRESH_TOKEN=${refresh}</pre>
  <p>You can reuse the same <code>GOOGLE_OAUTH_CLIENT_ID</code> and <code>GOOGLE_OAUTH_CLIENT_SECRET</code> as kom-billing.</p>
  <p>Restart <code>npm run dev</code>, then open <a href="/schedule/">/schedule/</a>.</p>
</body></html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Token exchange failed";
    return new NextResponse(message, { status: 500 });
  }
}
