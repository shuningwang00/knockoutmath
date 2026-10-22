import { google } from "googleapis";

export const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

export type GoogleAuthMethod = "service_account" | "oauth" | "none";

export function getOAuthRedirectUri(): string {
  return (
    process.env.GOOGLE_OAUTH_REDIRECT_URI ??
    "http://localhost:3000/api/auth/google/callback"
  );
}

export function createOAuthClient() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) {
    throw new Error(
      "GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET are required.",
    );
  }
  return new google.auth.OAuth2(clientId, clientSecret, getOAuthRedirectUri());
}

export function getRefreshTokenFromEnv(): string | null {
  return process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim() || null;
}

export async function getGoogleAuthStatus(): Promise<{
  method: GoogleAuthMethod;
  connected: boolean;
}> {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim()) {
    return { method: "service_account", connected: true };
  }
  if (getRefreshTokenFromEnv()) {
    return { method: "oauth", connected: true };
  }
  if (
    process.env.GOOGLE_OAUTH_CLIENT_ID?.trim() &&
    process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim()
  ) {
    return { method: "oauth", connected: false };
  }
  return { method: "none", connected: false };
}

/** Prefer OAuth refresh token (same as kom-billing); service account optional. */
export async function getGoogleAuthClient() {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (json) {
    const credentials = JSON.parse(json) as {
      client_email: string;
      private_key: string;
    };
    return new google.auth.GoogleAuth({
      credentials,
      scopes: [SHEETS_SCOPE],
    });
  }

  const refreshToken = getRefreshTokenFromEnv();
  if (!refreshToken) {
    throw new Error(
      "Google Sheets is not configured. Set GOOGLE_OAUTH_REFRESH_TOKEN in .env.local (copy from kom-billing after Connect Google), or see README.",
    );
  }

  const oauth2 = createOAuthClient();
  oauth2.setCredentials({ refresh_token: refreshToken });
  return oauth2;
}

export function getGoogleAuthUrl(): string {
  const oauth2 = createOAuthClient();
  return oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [SHEETS_SCOPE],
  });
}

export async function exchangeCodeForTokens(code: string) {
  const oauth2 = createOAuthClient();
  const { tokens } = await oauth2.getToken(code);
  if (!tokens.refresh_token) {
    throw new Error(
      "No refresh token returned. Revoke the app at myaccount.google.com/permissions and try again with prompt=consent.",
    );
  }
  return tokens;
}
