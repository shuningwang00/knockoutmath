import type {
  ClassSlot,
  DayOfWeek,
  ScheduleLevel,
  ScheduleSubject,
} from "@/lib/schedule";
import { DAY_LABELS } from "@/lib/schedule";

export type SheetClassStatus = "active" | "dummy" | "full";

export type ParsedSheetClass = {
  id: string;
  status: SheetClassStatus;
  day: DayOfWeek;
  label: string;
  shortLabel: string;
  level: ScheduleLevel;
  subject: ScheduleSubject;
  timeLabel: string;
  startMinutes: number;
  endMinutes: number;
  tutor: string;
  slotStatus: "open" | "full" | "dummy";
  programmeHref: string;
  description: string;
  /** For signup dropdowns */
  signupLabel: string;
};

function normHeader(cell: string): string {
  return cell.trim().toLowerCase().replace(/\s+/g, " ");
}

function slugify(parts: string[]): string {
  return parts
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

const HEADER_ALIASES: Record<string, string[]> = {
  status: ["status", "class status", "availability", "state"],
  day: ["day", "weekday", "week day"],
  class: ["class", "class name", "label", "name", "description", "programme"],
  level: ["level", "grade", "year"],
  subject: ["subject", "stream", "course"],
  time: ["time", "time slot", "slot", "timing"],
  tutor: ["tutor", "teacher", "instructor"],
  notes: ["notes", "remark", "remarks"],
};

function findHeader(rows: string[][]): {
  index: number;
  col: Record<string, number>;
} | null {
  for (let i = 0; i < Math.min(rows.length, 15); i++) {
    const line = rows[i] ?? [];
    const normalized = line.map(normHeader);
    const col: Record<string, number> = {};

    for (const [key, aliases] of Object.entries(HEADER_ALIASES)) {
      const idx = normalized.findIndex((h) => aliases.includes(h));
      if (idx >= 0) col[key] = idx;
    }

    if (col.status != null && (col.day != null || col.class != null)) {
      return { index: i, col };
    }
  }
  return null;
}

export function parseDayOfWeek(raw: string): DayOfWeek | null {
  const s = raw.trim().toLowerCase();
  if (!s) return null;
  if (/^mon(day)?$/.test(s) || s === "m") return "mon";
  if (/^tue(s(day)?)?$/.test(s) || s === "tu") return "tue";
  if (/^wed(nesday)?$/.test(s) || s === "w") return "wed";
  if (/^thu(r(s(day)?)?)?$/.test(s) || s === "th") return "thu";
  if (/^fri(day)?$/.test(s) || s === "f") return "fri";
  if (/^sat(urday)?$/.test(s) || s === "sa") return "sat";
  if (/^sun(day)?$/.test(s) || s === "su") return "sun";
  return null;
}

function parseStatus(raw: string, classText: string): SheetClassStatus {
  const s = raw.trim().toLowerCase();
  if (s.includes("dummy") || /dummy/i.test(classText)) return "dummy";
  if (s.includes("full") || s.includes("waitlist")) return "full";
  if (s.includes("active") || s === "open" || s === "yes" || s === "y") {
    return "active";
  }
  if (!s) return "active";
  return "active";
}

function parseTimeRange(raw: string): {
  timeLabel: string;
  startMinutes: number;
  endMinutes: number;
} | null {
  const text = raw.trim();
  if (!text) return null;

  const match = text.match(
    /(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*[-–]\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i,
  );
  if (!match) return null;

  const toMinutes = (
    hour: number,
    minute: number,
    meridiem: string | undefined,
    fallbackMeridiem?: string,
  ) => {
    let h = hour;
    const m = minute;
    const mer = (meridiem || fallbackMeridiem || "").toLowerCase();
    if (mer === "pm" && h < 12) h += 12;
    if (mer === "am" && h === 12) h = 0;
    return h * 60 + m;
  };

  const startMer = match[3];
  const endMer = match[6] || startMer;
  const start = toMinutes(
    Number(match[1]),
    Number(match[2] ?? 0),
    startMer,
    endMer,
  );
  let end = toMinutes(
    Number(match[4]),
    Number(match[5] ?? 0),
    endMer,
    startMer,
  );
  if (end <= start) end += 12 * 60;

  const fmt = (mins: number) => {
    const h24 = Math.floor(mins / 60);
    const m = mins % 60;
    const mer = h24 >= 12 ? "pm" : "am";
    const h12 = h24 % 12 || 12;
    return m ? `${h12}:${String(m).padStart(2, "0")}${mer}` : `${h12}${mer}`;
  };

  const timeLabel = `${fmt(start)} – ${fmt(end)}`;
  return { timeLabel, startMinutes: start, endMinutes: end };
}

function inferLevel(text: string): ScheduleLevel {
  const s = text.toLowerCase();
  if (/\bp\s*6\b|primary\s*6/.test(s)) return "p6";
  if (/\bp\s*5\b|primary\s*5/.test(s)) return "p5";
  if (/\bsec\s*1\b|\bs\s*1\b|secondary\s*1/.test(s)) return "sec1";
  if (/\bsec\s*2\b|\bs\s*2\b|secondary\s*2/.test(s)) return "sec2";
  if (/\bsec\s*3\b|\bs\s*3\b|secondary\s*3/.test(s)) return "sec3";
  if (/\bsec\s*4\b|\bs\s*4\b|secondary\s*4/.test(s)) return "sec4";
  if (/\bjc\s*2\b|\bj\s*2\b|j2\b/.test(s)) return "jc2";
  if (/\bjc\s*1\b|\bj\s*1\b|j1\b|jc\b|junior college/.test(s)) return "jc1";
  return "sec2";
}

function inferSubject(text: string): ScheduleSubject {
  const s = text.toLowerCase();
  if (/h2|a[-\s]?level|jc/.test(s) && /math/.test(s)) return "h2-math";
  if (/a[-\s]?math/.test(s)) return "a-math";
  if (/e[-\s]?math/.test(s)) return "e-math";
  if (/g3|g\s*3/.test(s)) return "g3-math";
  if (/psle|primary|p[56]/.test(s)) return "psle-math";
  return "g3-math";
}

function programmeHref(level: ScheduleLevel, subject: ScheduleSubject): string {
  if (subject === "h2-math" || level === "jc1" || level === "jc2") {
    return "/junior-college-h2-math-tuition/";
  }
  if (subject === "a-math") return "/upper-secondary-a-math/";
  if (subject === "e-math") return "/secondary-e-math-tuition-o-level/";
  if (level === "p5" || level === "p6") return "/contact-us/";
  return "/secondary-math-tuition/";
}

function descriptionFor(level: ScheduleLevel, subject: ScheduleSubject): string {
  if (subject === "h2-math") {
    return "Build deep conceptual understanding to confidently handle the rigour of H2 Math.";
  }
  if (subject === "a-math") {
    return "Develop analytical techniques for higher-order questions and application-style problems.";
  }
  if (subject === "e-math") {
    return "Topical mastery and PRWC-focused practice to sharpen accuracy and build exam confidence.";
  }
  if (level === "p5" || level === "p6") {
    return "Heuristics-first PSLE prep with structured approaches to unfamiliar questions.";
  }
  return "Build strong foundations in algebra, geometry, and number patterns for upper secondary success.";
}

function shortLabelFrom(label: string, level: ScheduleLevel): string {
  const s = label.trim();
  const m = s.match(/\b(S\d|P\d|JC\s*\d)\b/i);
  if (m) return m[0].replace(/\s+/g, " ");
  const map: Record<ScheduleLevel, string> = {
    p5: "P5",
    p6: "P6",
    sec1: "S1",
    sec2: "S2",
    sec3: "S3",
    sec4: "S4",
    jc1: "JC 1",
    jc2: "JC 2",
  };
  return map[level] ?? s.slice(0, 12);
}

export function parseClassesFromSheetRows(rows: string[][]): ParsedSheetClass[] {
  const header = findHeader(rows);
  if (!header) {
    throw new Error(
      'Could not find a header row with "Status" and "Day" or "Class" columns.',
    );
  }

  const parsed: ParsedSheetClass[] = [];

  for (let i = header.index + 1; i < rows.length; i++) {
    const row = rows[i] ?? [];
    const get = (key: string) => {
      const idx = header.col[key];
      return idx == null ? "" : String(row[idx] ?? "").trim();
    };

    const statusRaw = get("status");
    const classText = get("class") || get("level");
    if (!classText && !get("time")) continue;

    const status = parseStatus(statusRaw, classText);
    const dayRaw = get("day");
    const day = parseDayOfWeek(dayRaw);
    if (!day) continue;

    const levelText = [get("level"), classText, get("subject")].filter(Boolean).join(" ");
    const level = inferLevel(levelText);
    const subject = inferSubject(levelText);
    const label =
      classText ||
      `${get("level")} ${get("subject")}`.trim() ||
      "Class";

    const timeParsed = parseTimeRange(get("time"));
    if (!timeParsed) continue;

    const tutor = get("tutor");
    const id = slugify([day, label, timeParsed.timeLabel, tutor]);

    const slotStatus: ParsedSheetClass["slotStatus"] =
      status === "dummy" ? "dummy" : status === "full" ? "full" : "open";

    const signupLabel = `${DAY_LABELS[day]} · ${label} · ${timeParsed.timeLabel}${
      tutor ? ` · ${tutor}` : ""
    }`;

    parsed.push({
      id,
      status,
      day,
      label,
      shortLabel: shortLabelFrom(label, level),
      level,
      subject,
      timeLabel: timeParsed.timeLabel,
      startMinutes: timeParsed.startMinutes,
      endMinutes: timeParsed.endMinutes,
      tutor,
      slotStatus,
      programmeHref: programmeHref(level, subject),
      description: descriptionFor(level, subject),
      signupLabel,
    });
  }

  return parsed;
}

export function toClassSlot(row: ParsedSheetClass): ClassSlot {
  return {
    id: row.id,
    label: row.label,
    shortLabel: row.shortLabel,
    level: row.level,
    subject: row.subject,
    day: row.day,
    startMinutes: row.startMinutes,
    endMinutes: row.endMinutes,
    timeLabel: row.timeLabel,
    status: row.slotStatus,
    programmeHref: row.programmeHref,
    description: row.description,
    tutor: row.tutor || undefined,
    sheetStatus: row.status,
  };
}

export function activeSignupOptions(rows: ParsedSheetClass[]) {
  return rows
    .filter((r) => r.status === "active")
    .map((r) => ({
      id: r.id,
      value: r.signupLabel,
      label: r.signupLabel,
    }));
}
