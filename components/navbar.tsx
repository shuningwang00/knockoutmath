"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/logo";
import { primaryNavLinks, programmeLinks } from "@/lib/site";

const mobileNavLinks = [
  ...primaryNavLinks.slice(0, 2),
  ...programmeLinks,
  ...primaryNavLinks.slice(2),
];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;

    function getFocusableElements() {
      return Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => !element.hasAttribute("disabled"),
      );
    }

    const focusableElements = getFocusableElements();
    focusableElements[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const elements = getFocusableElements();
      if (elements.length === 0) return;

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/10 bg-[#f6f4ef]/95 backdrop-blur">
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
              <div className="rounded-xl border border-zinc-200 bg-[#f6f4ef] p-2 shadow-lg">
                {programmeLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-heading block rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-700 hover:bg-white/80 hover:text-black"
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
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-800 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </nav>

      {mobileOpen ? (
        <div
          ref={mobileMenuRef}
          className="space-y-2 border-t border-zinc-300/80 bg-[#f6f4ef] px-4 py-4 md:hidden"
        >
          {mobileNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="block rounded-md px-3 py-2 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-zinc-800 hover:bg-white/80"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/free-math-trial/"
            onClick={closeMobileMenu}
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
