"use client";

import type { LevelFilter } from "@/lib/schedule";
import { LEVEL_FILTERS } from "@/lib/schedule";

export type ScheduleViewMode = "grid" | "list";

type ScheduleFiltersProps = {
  level: LevelFilter;
  weekendsOnly: boolean;
  viewMode: ScheduleViewMode;
  matchCount: number;
  openCount: number;
  onLevelChange: (level: LevelFilter) => void;
  onWeekendsOnlyChange: (value: boolean) => void;
  onViewModeChange: (mode: ScheduleViewMode) => void;
};

export default function ScheduleFilters({
  level,
  weekendsOnly,
  viewMode,
  matchCount,
  openCount,
  onLevelChange,
  onWeekendsOnlyChange,
  onViewModeChange,
}: ScheduleFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {LEVEL_FILTERS.map((item) => {
            const active = level === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => onLevelChange(item.value)}
                className={`font-heading rounded-full border-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition md:text-sm ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-black hover:text-black"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto">
          <div className="inline-flex rounded-full border border-zinc-300 bg-white p-1">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              className={`font-heading rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
                viewMode === "grid" ? "bg-black text-white" : "text-zinc-600 hover:text-black"
              }`}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              className={`font-heading rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
                viewMode === "list" ? "bg-black text-white" : "text-zinc-600 hover:text-black"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={weekendsOnly}
            onChange={(event) => onWeekendsOnlyChange(event.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500"
          />
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-zinc-700">
            Weekends only
          </span>
        </label>

        <p className="font-body text-sm text-zinc-600">
          <span className="font-semibold text-black">{matchCount}</span>{" "}
          {matchCount === 1 ? "class" : "classes"}
          {openCount < matchCount ? (
            <>
              {" "}
              · <span className="font-semibold text-orange-600">{openCount} open</span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}
