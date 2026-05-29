"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";
import { primaryNavLinks, programmeLinks } from "@/lib/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Logo
            variant="icon-dark"
            className="h-9 w-9 object-contain sm:hidden"
            priority
          />
          <span className="hidden rounded-lg bg-black px-2.5 py-1.5 sm:inline-block">
            <Logo
              variant="full-light"
              className="h-8 w-auto object-contain md:h-9"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <LinkItem href={primaryNavLinks[0].href} label={primaryNavLinks[0].label} />
          <LinkItem href={primaryNavLinks[1].href} label={primaryNavLinks[1].label} />

          <div className="group relative">
            <button className="font-semibold text-zinc-800 transition hover:text-black">
              Programmes
            </button>
            <div className="invisible absolute left-0 top-8 w-72 rounded-xl border border-zinc-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {programmeLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <LinkItem href={primaryNavLinks[2].href} label={primaryNavLinks[2].label} />
          <LinkItem href={primaryNavLinks[3].href} label={primaryNavLinks[3].label} />

          <Link
            href="/free-math-trial/"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
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
                className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/free-math-trial/"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-bold text-white hover:bg-orange-600"
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
    <Link href={href} className="font-semibold text-zinc-800 transition hover:text-black">
      {label}
    </Link>
  );
}
