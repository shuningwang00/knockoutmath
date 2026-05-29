"use client";

import ClassSlotCard from "@/components/schedule/class-slot-card";
import type { ClassSlot, DayOfWeek, TimeBand } from "@/lib/schedule";
import { DAY_LABELS, DAY_ORDER, TIME_BANDS, slotsForCell } from "@/lib/schedule";

type ScheduleGridProps = {
  slots: ClassSlot[];
  onSelect: (slot: ClassSlot) => void;
};

function dayClassCount(slots: ClassSlot[], day: DayOfWeek) {
  return slots.filter((slot) => slot.day === day).length;
}

export default function ScheduleGrid({ slots, onSelect }: ScheduleGridProps) {
  const visibleBands = TIME_BANDS.filter((band) =>
    DAY_ORDER.some((day) => slotsForCell(slots, day, band).length > 0),
  );

  if (slots.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white px-6 py-12 text-center">
        <p className="font-heading text-lg font-bold uppercase tracking-wide text-zinc-500">
          No classes match your filters
        </p>
        <p className="font-body mt-2 text-sm text-zinc-500">Try selecting a different level or clearing the weekend filter.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
      <div className="min-w-[52rem]">
        <div className="grid grid-cols-[5.5rem_repeat(7,minmax(0,1fr))] border-b border-zinc-200 bg-zinc-50">
          <div className="border-r border-zinc-200 px-2 py-3" />
          {DAY_ORDER.map((day) => (
            <div key={day} className="border-r border-zinc-200 px-2 py-3 text-center last:border-r-0">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-black md:text-sm">
                {DAY_LABELS[day]}
              </p>
              <p className="font-body mt-0.5 text-[0.65rem] text-zinc-500 md:text-xs">
                {dayClassCount(slots, day)} {dayClassCount(slots, day) === 1 ? "class" : "classes"}
              </p>
            </div>
          ))}
        </div>

        {visibleBands.map((band) => (
          <GridRow key={band.id} band={band} slots={slots} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

function GridRow({
  band,
  slots,
  onSelect,
}: {
  band: TimeBand;
  slots: ClassSlot[];
  onSelect: (slot: ClassSlot) => void;
}) {
  return (
    <div className="grid grid-cols-[5.5rem_repeat(7,minmax(0,1fr))] border-b border-zinc-100 last:border-b-0">
      <div className="border-r border-zinc-200 bg-zinc-50/80 px-2 py-3">
        <p className="font-heading text-[0.6rem] font-bold uppercase leading-tight tracking-wide text-zinc-600 md:text-[0.65rem]">
          {band.label}
        </p>
      </div>

      {DAY_ORDER.map((day) => {
        const cellSlots = slotsForCell(slots, day, band);
        return (
          <div
            key={day}
            className="min-h-[4.5rem] border-r border-zinc-100 p-1.5 last:border-r-0"
          >
            {cellSlots.length > 0 ? (
              <div className={`flex h-full gap-1 ${cellSlots.length > 1 ? "flex-row" : "flex-col"}`}>
                {cellSlots.map((slot) => (
                  <ClassSlotCard
                    key={slot.id}
                    slot={slot}
                    compact={cellSlots.length > 1}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            ) : (
              <div className="h-full rounded-md border border-dashed border-transparent" aria-hidden />
            )}
          </div>
        );
      })}
    </div>
  );
}
