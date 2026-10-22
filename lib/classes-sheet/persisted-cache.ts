import fs from "fs/promises";
import path from "path";
import type { ClassSlot } from "@/lib/schedule";

export type PersistedClassesSnapshot = {
  slots: ClassSlot[];
  signupOptions: Array<{ id: string; value: string; label: string }>;
  loadedAt: string;
  sheetTitle?: string;
};

function cachePath(): string {
  const local = path.join(process.cwd(), "data", "classes-schedule.snapshot.json");
  if (process.env.CLASSES_CACHE_FILE?.trim()) {
    return process.env.CLASSES_CACHE_FILE.trim();
  }
  if (process.env.VERCEL) {
    return path.join("/tmp", "kom-classes-schedule.snapshot.json");
  }
  return local;
}

export async function readPersistedClassesSnapshot(): Promise<PersistedClassesSnapshot | null> {
  try {
    const raw = await fs.readFile(cachePath(), "utf8");
    const data = JSON.parse(raw) as PersistedClassesSnapshot;
    if (!Array.isArray(data.slots) || data.slots.length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

export async function writePersistedClassesSnapshot(
  snapshot: PersistedClassesSnapshot,
): Promise<void> {
  const file = cachePath();
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(snapshot, null, 2), "utf8");
}
