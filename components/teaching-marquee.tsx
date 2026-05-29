const MARQUEE_TEXT =
  "PRIMARY • SECONDARY • IP • JC • PSLE • O-LEVEL • A-LEVEL";

function MarqueeSegment() {
  return (
    <span className="flex shrink-0 items-center gap-4 px-4">
      <span className="text-orange-500">WE TEACH</span>
      <span>{MARQUEE_TEXT}</span>
      <span className="text-orange-500" aria-hidden>
        •
      </span>
    </span>
  );
}

export default function TeachingMarquee() {
  return (
    <div
      className="overflow-hidden border-b border-orange-500/30 bg-black py-3 text-white"
      aria-label="Programmes we teach: Primary, Secondary, IP, JC, PSLE, O-Level, A-Level"
    >
      <div className="marquee-track flex w-max text-sm font-bold uppercase tracking-[0.14em] md:text-base">
        <div className="marquee-group flex shrink-0">
          <MarqueeSegment />
          <MarqueeSegment />
        </div>
        <div className="marquee-group flex shrink-0" aria-hidden>
          <MarqueeSegment />
          <MarqueeSegment />
        </div>
      </div>
    </div>
  );
}
