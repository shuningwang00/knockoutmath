const DEFAULT_ENQUIRY_TO = "contact@knockoutmath.sg";
const DEFAULT_FROM = "Knockout Math <contact@knockoutmath.sg>";

function trimEnv(value: string | undefined) {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.replace(/^["']|["']$/g, "");
}

export function getEnquiryToEmail() {
  return trimEnv(process.env.ENQUIRY_TO) ?? DEFAULT_ENQUIRY_TO;
}

export function getEnquiryFromEmail() {
  return trimEnv(process.env.ENQUIRY_FROM_EMAIL) ?? DEFAULT_FROM;
}

export function getResendApiKey() {
  return trimEnv(process.env.RESEND_API_KEY);
}

export function resendErrorMessage(error: unknown) {
  if (!error || typeof error !== "object") return "Unknown Resend error";
  if ("message" in error && typeof error.message === "string") return error.message;
  return JSON.stringify(error);
}
