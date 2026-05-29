"use client";

import { useMemo, useState } from "react";
import ClassSlotDetail from "@/components/schedule/class-slot-detail";
import ScheduleFilters, { type ScheduleViewMode } from "@/components/schedule/schedule-filters";
import ScheduleGrid from "@/components/schedule/schedule-grid";
import ScheduleList from "@/components/schedule/schedule-list";
import {
  classSlots,
  countOpenSlots,
  filterSlots,
  type ClassSlot,
  type LevelFilter,
} from "@/lib/schedule";

export default function ScheduleView() {
  const [level, setLevel] = useState<LevelFilter>("all");
  const [weekendsOnly, setWeekendsOnly] = useState(false);
  const [viewMode, setViewMode] = useState<ScheduleViewMode>("grid");
  const [selectedSlot, setSelectedSlot] = useState<ClassSlot | null>(null);

  const filteredSlots = useMemo(
    () => filterSlots(classSlots, level, weekendsOnly),
    [level, weekendsOnly],
  );

  const openCount = countOpenSlots(filteredSlots);

  return (
    <>
      <div className="rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-4 shadow-sm md:p-6">
        <div className="mb-5 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3">
          <p className="font-body text-sm leading-relaxed text-sky-900">
            <span className="font-heading font-bold uppercase tracking-wide">Tip:</span> Filter by
            level or tap any class to see details, book a free trial, or enquire about waitlisted
            slots.
          </p>
        </div>

        <ScheduleFilters
          level={level}
          weekendsOnly={weekendsOnly}
          viewMode={viewMode}
          matchCount={filteredSlots.length}
          openCount={openCount}
          onLevelChange={setLevel}
          onWeekendsOnlyChange={setWeekendsOnly}
          onViewModeChange={setViewMode}
        />

        <div className="mt-6">
          {viewMode === "grid" ? (
            <ScheduleGrid slots={filteredSlots} onSelect={setSelectedSlot} />
          ) : (
            <ScheduleList slots={filteredSlots} onSelect={setSelectedSlot} />
          )}
        </div>
      </div>

      <ClassSlotDetail slot={selectedSlot} onClose={() => setSelectedSlot(null)} />
    </>
  );
}
