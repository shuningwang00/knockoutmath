import Link from "next/link";
import EnquirySection from "@/components/enquiry-section";
import ProgrammeObjectives from "@/components/schedule/programme-objectives";
import ScheduleView from "@/components/schedule/schedule-view";
import { SCHEDULE_LOCATION } from "@/lib/schedule";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "2026 Class Schedule | Math Tuition Timetable",
  description:
    "View Knockout Math's 2026 class schedule for Primary, Secondary, and JC H2 Math tuition at our Bukit Timah centre. Filter by level, check availability, and book a free trial.",
  path: "/schedule/",
});

export default function SchedulePage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Timetable
          </p>
          <h1 className="font-heading mt-2 text-3xl font-black uppercase leading-tight tracking-tight text-black md:text-5xl">
            2026 Class Schedule
          </h1>
          <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
            Browse our weekly timetable for Primary, Secondary, and JC classes at Knockout Math
            Bukit Timah. Tap any slot to see details or enquire about availability.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={SCHEDULE_LOCATION.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center gap-2 text-sm text-zinc-700 transition hover:text-orange-600 md:text-base"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9ZM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <span className="font-heading font-bold uppercase tracking-wide">{SCHEDULE_LOCATION.name}</span>
                <span className="text-zinc-500"> · Bukit Timah</span>
              </span>
            </Link>
            <Link
              href="/free-math-trial/"
              className="font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600 sm:ml-auto"
            >
              Book free trial
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-8">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <ScheduleView />
        </div>
      </section>

      <ProgrammeObjectives />

      <div id="enquire">
        <EnquirySection />
      </div>
    </div>
  );
}
