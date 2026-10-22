import { loadClassesFromSheet } from "@/lib/classes-sheet/load";
import { DAY_LABELS, signupSlots } from "@/lib/schedule";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const purpose = searchParams.get("purpose");

  const data = await loadClassesFromSheet();

  if (purpose === "signup") {
    const active = signupSlots(data.slots);
    return NextResponse.json({
      options: active.map((slot) => ({
        id: slot.id,
        value: slot.id,
        label: `${DAY_LABELS[slot.day]} · ${slot.label} · ${slot.timeLabel}`,
      })),
      loadedAt: data.loadedAt,
      source: data.source,
      error: data.error,
    });
  }

  return NextResponse.json({
    slots: data.slots,
    signupOptions: data.signupOptions,
    loadedAt: data.loadedAt,
    source: data.source,
    sheetTitle: data.sheetTitle,
    error: data.error,
  });
}
