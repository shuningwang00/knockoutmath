"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";
import { primaryNavLinks, programmeLinks } from "@/lib/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo
            variant="full-dark"
            className="h-8 w-auto object-contain sm:h-9 md:h-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <LinkItem href={primaryNavLinks[0].href} label={primaryNavLinks[0].label} />
          <LinkItem href={primaryNavLinks[1].href} label={primaryNavLinks[1].label} />

          <div
            className="relative"
            onMouseEnter={() => setProgrammesOpen(true)}
            onMouseLeave={() => setProgrammesOpen(false)}
            onFocus={() => setProgrammesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setProgrammesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="font-heading text-sm font-semibold uppercase tracking-[0.08em] text-zinc-800 transition hover:text-black"
              aria-expanded={programmesOpen}
              aria-haspopup="true"
            >
              Programmes
            </button>
            <div
              className={`absolute left-0 top-full z-50 w-72 pt-2 transition ${
                programmesOpen
                  ? "visible opacity-100"
                  : "invisible pointer-events-none opacity-0"
              }`}
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
                {programmeLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-heading block rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-700 hover:bg-zinc-100 hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <LinkItem href={primaryNavLinks[2].href} label={primaryNavLinks[2].label} />
          <LinkItem href={primaryNavLinks[3].href} label={primaryNavLinks[3].label} />

          <Link
            href="/free-math-trial/"
            className="font-heading rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-orange-600"
          >
            Free Trial
          </Link>
        </div>

        <button
          className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-800 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </nav>

      {mobileOpen ? (
        <div className="space-y-2 border-t border-zinc-200 px-4 py-4 md:hidden">
          {[...primaryNavLinks.slice(0, 2), ...programmeLinks, ...primaryNavLinks.slice(2)].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/free-math-trial/"
            onClick={() => setMobileOpen(false)}
            className="font-heading mt-2 block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-bold uppercase tracking-[0.08em] text-white hover:bg-orange-600"
          >
            Free Trial
          </Link>
        </div>
      ) : null}
    </header>
  );
}

function LinkItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-heading text-sm font-semibold uppercase tracking-[0.08em] text-zinc-800 transition hover:text-black"
    >
      {label}
    </Link>
  );
}
