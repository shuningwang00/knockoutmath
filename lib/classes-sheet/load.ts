import { getClassesCacheSeconds } from "@/lib/classes-sheet/config";
import { fetchClassesSheetRows } from "@/lib/classes-sheet/google";
import {
  readPersistedClassesSnapshot,
  writePersistedClassesSnapshot,
} from "@/lib/classes-sheet/persisted-cache";
import {
  activeSignupOptions,
  parseClassesFromSheetRows,
  toClassSlot,
  type ParsedSheetClass,
} from "@/lib/classes-sheet/parser";
import type { ClassSlot, ScheduleLevel, ScheduleSubject } from "@/lib/schedule";
import { classSlots as builtInFallbackSlots, DAY_LABELS, signupSlots } from "@/lib/schedule";

export type ClassesSheetPayload = {
  slots: ClassSlot[];
  signupOptions: Array<{ id: string; value: string; label: string }>;
  loadedAt: string;
  source: "sheet" | "snapshot" | "fallback" | "billing-app";
  sheetTitle?: string;
  error?: string;
};

let memoryCache: { at: number; payload: ClassesSheetPayload } | null = null;

function payloadFromSnapshot(
  snapshot: Awaited<ReturnType<typeof readPersistedClassesSnapshot>>,
): ClassesSheetPayload {
  return {
    slots: snapshot!.slots,
    signupOptions: snapshot!.signupOptions,
    loadedAt: snapshot!.loadedAt,
    source: "snapshot",
    sheetTitle: snapshot!.sheetTitle,
  };
}

async function loadFromSnapshotOrBuiltIn(
  errorMessage: string,
): Promise<ClassesSheetPayload> {
  const snapshot = await readPersistedClassesSnapshot();
  if (snapshot) {
    const payload = payloadFromSnapshot(snapshot);
    payload.error = errorMessage;
    return payload;
  }

  return {
    slots: builtInFallbackSlots,
    signupOptions: [],
    loadedAt: new Date().toISOString(),
    source: "fallback",
    error: errorMessage,
  };
}

function resolveProgrammeHref(level: ScheduleLevel, subject: ScheduleSubject): string {
  if (subject === "h2-math" || level === "jc1" || level === "jc2") {
    return "/junior-college-h2-math-tuition/";
  }
  if (subject === "a-math") return "/upper-secondary-a-math/";
  if (subject === "e-math") return "/secondary-e-math-tuition-o-level/";
  if (level === "p5" || level === "p6") return "/contact-us/";
  return "/secondary-math-tuition/";
}

async function loadFromBillingApp(billingAppUrl: string): Promise<ClassesSheetPayload> {
  const res = await fetch(`${billingAppUrl}/api/public/schedule`, {
    next: { revalidate: getClassesCacheSeconds() },
  });
  if (!res.ok) throw new Error(`Billing app returned ${res.status}`);

  const data = (await res.json()) as {
    slots: Omit<ClassSlot, "programmeHref">[];
    loadedAt: string;
  };

  const slots: ClassSlot[] = data.slots.map((s) => ({
    ...s,
    programmeHref: resolveProgrammeHref(s.level as ScheduleLevel, s.subject as ScheduleSubject),
    description: s.description ?? "",
  }));

  const active = signupSlots(slots);
  const signupOptions = active.map((slot) => ({
    id: slot.id,
    value: slot.id,
    label: `${DAY_LABELS[slot.day]} · ${slot.label} · ${slot.timeLabel}`,
  }));

  return {
    slots,
    signupOptions,
    loadedAt: data.loadedAt,
    source: "billing-app",
  };
}

/**
 * Loads classes for the public schedule.
 * If BILLING_APP_URL is set, fetches from the billing app's public API.
 * Otherwise falls back to Google Sheets (GOOGLE_OAUTH_REFRESH_TOKEN required).
 * On any failure, serves the last persisted snapshot or built-in slots.
 */
export async function loadClassesFromSheet(): Promise<ClassesSheetPayload> {
  const ttl = getClassesCacheSeconds() * 1000;
  if (memoryCache && Date.now() - memoryCache.at < ttl) {
    return memoryCache.payload;
  }

  const billingAppUrl = process.env.BILLING_APP_URL?.replace(/\/$/, "");

  if (billingAppUrl) {
    try {
      const payload = await loadFromBillingApp(billingAppUrl);
      memoryCache = { at: Date.now(), payload };
      return payload;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load from billing app";
      console.error("[classes-sheet] billing app fetch failed:", message);
      const payload = await loadFromSnapshotOrBuiltIn(message);
      memoryCache = { at: Date.now(), payload };
      return payload;
    }
  }

  // Fallback: Google Sheets
  try {
    const { rows, sheetTitle } = await fetchClassesSheetRows();
    const parsed = parseClassesFromSheetRows(rows);
    const slots = parsed.map(toClassSlot);
    const signupOptions = activeSignupOptions(parsed);
    const loadedAt = new Date().toISOString();

    await writePersistedClassesSnapshot({
      slots,
      signupOptions,
      loadedAt,
      sheetTitle,
    });

    const payload: ClassesSheetPayload = {
      slots,
      signupOptions,
      loadedAt,
      source: "sheet",
      sheetTitle,
    };
    memoryCache = { at: Date.now(), payload };
    return payload;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load classes sheet";
    console.error("[classes-sheet]", message);

    const payload = await loadFromSnapshotOrBuiltIn(message);
    memoryCache = { at: Date.now(), payload };
    return payload;
  }
}

export function calendarSlotsFromParsed(parsed: ParsedSheetClass[]): ClassSlot[] {
  return parsed.map(toClassSlot);
}
