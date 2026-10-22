"use client";

import type { ClassSlot } from "@/lib/schedule";
import { isDummySlot } from "@/lib/schedule";

type ClassSlotCardProps = {
  slot: ClassSlot;
  compact?: boolean;
  onSelect: (slot: ClassSlot) => void;
};

export default function ClassSlotCard({ slot, compact = false, onSelect }: ClassSlotCardProps) {
  const isDummy = isDummySlot(slot);
  const isFull = !isDummy && slot.status === "full";

  return (
    <button
      type="button"
      onClick={() => onSelect(slot)}
      className={`group relative w-full rounded-lg border-l-4 px-2.5 py-2 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
        isDummy
          ? "cursor-default border-zinc-200 bg-zinc-100/70 opacity-60"
          : isFull
            ? "border-zinc-300 bg-zinc-100/90 hover:bg-zinc-100 hover:shadow-md"
            : "border-orange-500 bg-orange-50 hover:bg-orange-100/80 hover:shadow-md"
      } ${compact ? "min-h-[3.25rem]" : "min-h-[4rem]"}`}
    >
      {isDummy ? (
        <span className="absolute -right-1 -top-2 rounded bg-zinc-400 px-1.5 py-0.5 font-heading text-[0.55rem] font-bold uppercase tracking-wider text-white">
          Dummy
        </span>
      ) : isFull ? (
        <span className="absolute -right-1 -top-2 rotate-6 rounded bg-black px-1.5 py-0.5 font-heading text-[0.55rem] font-bold uppercase tracking-wider text-white">
          Full
        </span>
      ) : null}

      <p
        className={`font-heading text-[0.65rem] font-bold uppercase leading-tight tracking-wide md:text-xs ${
          isDummy || isFull ? "text-zinc-500" : "text-black"
        }`}
      >
        {slot.shortLabel}
      </p>
      {!compact ? (
        <p
          className={`mt-0.5 font-body text-[0.65rem] leading-snug ${
            isDummy || isFull ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {slot.timeLabel}
        </p>
      ) : null}
    </button>
  );
}
