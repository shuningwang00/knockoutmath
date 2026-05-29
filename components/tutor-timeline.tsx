import type { TimelineEntry } from "@/lib/tutors";

export default function TutorTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-orange-500 via-orange-300 to-zinc-200"
        aria-hidden
      />

      <ol className="space-y-6">
        {entries.map((entry, index) => {
          const isLatest = index === entries.length - 1;

          return (
            <li key={entry.year} className="relative flex gap-5 md:gap-6">
              <div className="relative z-10 mt-5 shrink-0">
                <span
                  className={`block h-6 w-6 rounded-full border-[3px] ${
                    isLatest
                      ? "border-orange-500 bg-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.15)]"
                      : "border-black bg-white"
                  }`}
                  aria-hidden
                />
              </div>

              <article
                className={`flex-1 rounded-2xl border px-5 py-5 shadow-sm md:px-6 md:py-6 ${
                  isLatest
                    ? "border-orange-500 bg-gradient-to-br from-orange-50 to-white"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`font-heading inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
                      isLatest ? "bg-orange-500 text-white" : "bg-black text-white"
                    }`}
                  >
                    {entry.year}
                  </span>
                  {isLatest ? (
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                      Current chapter
                    </span>
                  ) : null}
                </div>

                <p className="font-body mt-4 text-base leading-relaxed text-zinc-700">
                  {entry.body}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
