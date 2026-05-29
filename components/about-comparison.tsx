import { comparisonRows } from "@/lib/about";

function CheckIcon() {
  return (
    <svg className="mt-1 h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <span className="mt-2 h-px w-3 shrink-0 bg-zinc-300" aria-hidden />
  );
}

function PointList({
  items,
  variant,
}: {
  items: string[];
  variant: "knockout" | "traditional";
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-700 md:text-[0.95rem]">
          {variant === "knockout" ? <CheckIcon /> : <DashIcon />}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutComparison() {
  return (
    <section className="bg-[#f6f4ef] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
            Why We&apos;re Different — And Better
          </h2>
          <p className="font-body mt-4 text-base leading-relaxed text-zinc-700">
            See how Knockout Math compares to traditional math tuition in Singapore.
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="hidden border-b border-zinc-200 md:grid md:grid-cols-2">
            <div className="border-r border-zinc-200 bg-orange-500 px-6 py-5 text-center">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-white md:text-base">
                Knockout Math
              </p>
            </div>
            <div className="bg-black px-6 py-5 text-center">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-white md:text-base">
                Traditional Tuition
              </p>
            </div>
          </div>

          <div className="divide-y divide-zinc-200">
            {comparisonRows.map((row) => (
              <article key={row.label}>
                <div className="hidden border-b border-zinc-200 bg-zinc-50 px-6 py-3.5 md:block">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-black">
                    {row.label}
                  </h3>
                </div>

                <div className="md:grid md:grid-cols-2">
                  <div className="border-b border-zinc-200 bg-orange-50/50 px-5 py-6 md:border-b-0 md:border-r md:px-6 md:py-7">
                    <h3 className="font-heading mb-4 text-sm font-bold uppercase tracking-[0.16em] text-black md:hidden">
                      {row.label}
                    </h3>
                    <p className="font-heading mb-3 text-xs font-bold uppercase tracking-[0.14em] text-orange-500 md:hidden">
                      Knockout Math
                    </p>
                    <PointList items={row.knockout} variant="knockout" />
                  </div>

                  <div className="bg-white px-5 py-6 md:px-6 md:py-7">
                    <p className="font-heading mb-3 text-xs font-bold uppercase tracking-[0.14em] text-black md:hidden">
                      Traditional Tuition
                    </p>
                    <PointList items={row.traditional} variant="traditional" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
