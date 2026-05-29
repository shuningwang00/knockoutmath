"use client";

import ClassSlotCard from "@/components/schedule/class-slot-card";
import type { ClassSlot } from "@/lib/schedule";
import { DAY_LABELS, DAY_ORDER, slotsByDay } from "@/lib/schedule";

type ScheduleListProps = {
  slots: ClassSlot[];
  onSelect: (slot: ClassSlot) => void;
};

export default function ScheduleList({ slots, onSelect }: ScheduleListProps) {
  const grouped = slotsByDay(slots);
  const daysWithSlots = DAY_ORDER.filter((day) => (grouped.get(day)?.length ?? 0) > 0);

  if (daysWithSlots.length === 0) {
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
    <div className="space-y-4">
      {daysWithSlots.map((day) => {
        const daySlots = grouped.get(day) ?? [];
        return (
          <section key={day} className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <header className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 md:px-5">
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-black md:text-base">
                {DAY_LABELS[day]}
              </h3>
              <span className="font-body text-xs text-zinc-500 md:text-sm">
                {daySlots.length} {daySlots.length === 1 ? "class" : "classes"}
              </span>
            </header>

            <ul className="divide-y divide-zinc-100">
              {daySlots.map((slot) => (
                <li key={slot.id} className="p-3 md:p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-heading text-sm font-bold uppercase tracking-wide text-black md:text-base">
                        {slot.label}
                      </p>
                      <p className="font-body mt-1 text-sm text-zinc-600">{slot.timeLabel}</p>
                    </div>
                    <div className="w-full sm:w-48">
                      <ClassSlotCard slot={slot} onSelect={onSelect} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
