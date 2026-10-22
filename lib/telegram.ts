export function getTelegramConfig() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  return { botToken, chatId };
}

export async function sendTelegramMessage(text: string): Promise<{ ok: boolean; error?: string }> {
  const { botToken, chatId } = getTelegramConfig();

  if (!botToken || !chatId) {
    return { ok: false, error: "Telegram is not configured." };
  }

  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });

  if (!res.ok) {
    const body = await res.text();
    return { ok: false, error: body };
  }

  return { ok: true };
}
