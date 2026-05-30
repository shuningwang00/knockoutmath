import Link from "next/link";
import FadeIn from "@/components/fade-in";
import type { SampleNoteCategory } from "@/lib/resources";
import { hasSampleNotes, sampleNoteCategories } from "@/lib/resources";

function DocumentIcon() {
  return (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 1 0-1.09-1.03l-2.955 3.129V2.75Z" />
      <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
    </svg>
  );
}

function CategoryCard({ category }: { category: SampleNoteCategory }) {
  const downloadableNotes = category.notes.filter((note) => note.fileUrl);

  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-100 bg-[#f6f4ef] px-5 py-5">
        <div className="flex items-start gap-3">
          <DocumentIcon />
          <div>
            <h3 className="font-heading text-lg font-black uppercase tracking-tight text-black">
              {category.title}
            </h3>
            <p className="font-body mt-2 text-sm leading-relaxed text-zinc-700">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        {downloadableNotes.length > 0 ? (
          <ul className="space-y-3">
            {downloadableNotes.map((note) => (
              <li key={note.id}>
                <a
                  href={note.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-orange-500 hover:bg-orange-50/40"
                >
                  <div>
                    <p className="font-heading text-sm font-bold text-black group-hover:text-orange-600">
                      {note.title}
                    </p>
                    {note.description ? (
                      <p className="font-body mt-1 text-sm text-zinc-600">{note.description}</p>
                    ) : null}
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-wide text-orange-500">
                    <DownloadIcon />
                    PDF
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-body rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-6 text-center text-sm leading-relaxed text-zinc-600">
            Sample notes for this programme are being prepared. Check back soon.
          </p>
        )}

        <Link
          href={category.programmeHref}
          className="font-heading mt-auto pt-5 text-sm font-bold uppercase tracking-[0.08em] text-orange-500 transition hover:text-orange-600"
        >
          View programme →
        </Link>
      </div>
    </article>
  );
}

export default function SampleNotesSection() {
  return (
    <section id="sample-notes" className="section-y scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <header className="max-w-3xl">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Sample notes
            </p>
            <h2 className="font-heading mt-3 text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
              See how we teach
            </h2>
            <p className="font-body mt-4 text-base leading-relaxed text-zinc-700 md:text-lg">
              Browse sample materials by programme to preview how our tutors structure notes,
              worked examples, and practice questions.
            </p>
          </header>
        </FadeIn>

        {!hasSampleNotes() ? (
          <FadeIn delay={80}>
            <p className="mt-6 max-w-3xl rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
              We&apos;re uploading sample notes programme by programme. Browse the categories
              below — new PDFs will appear here as they become available.
            </p>
          </FadeIn>
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sampleNoteCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 60}>
              <CategoryCard category={category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
