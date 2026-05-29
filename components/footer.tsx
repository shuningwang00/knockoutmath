import Link from "next/link";
import Logo from "@/components/logo";
import { mainBranch } from "@/lib/contact";
import { programmeLinks, socialLinks, WHATSAPP_URL } from "@/lib/site";

const MAP_EMBED_URL = mainBranch.mapEmbedUrl;

const footerProgrammes = programmeLinks.filter((item) => item.href !== "/schedule/");

export default function Footer() {
  return (
    <footer className="font-body border-t border-zinc-200 bg-black text-zinc-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <Logo variant="full-light" className="h-11 w-auto object-contain" />
          <p className="mt-3 text-sm font-semibold text-zinc-300">
            Helmed by ex-MOE Tutors
          </p>

          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Knockout Math on ${link.label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-orange-500 hover:text-orange-400"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>

          <a
            href={mainBranch.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-5 block max-w-sm overflow-hidden rounded-xl border border-zinc-700 transition hover:border-orange-500"
            aria-label="Open Knockout Math location in Google Maps"
          >
            <iframe
              src={MAP_EMBED_URL}
              title="Map preview — Knockout Math at Beauty World Centre"
              className="pointer-events-none h-40 w-full border-0 grayscale-[20%] transition group-hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-center gap-2 border-t border-zinc-800 bg-zinc-900/90 px-3 py-2.5 text-xs font-semibold text-white transition group-hover:text-orange-400">
              <MapPinIcon />
              <span>View on Google Maps</span>
            </div>
          </a>
        </div>

        <div className="space-y-4 text-sm text-zinc-300">
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-white">
            Contact Us
          </h2>

          <OpeningHours />

          <ContactItem icon={<WhatsAppIcon />}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-orange-400"
            >
              +65 8476 0600
            </a>
          </ContactItem>

          <ContactItem icon={<EmailIcon />}>
            <a
              href="mailto:contact@knockoutmath.sg"
              className="transition hover:text-orange-400"
            >
              contact@knockoutmath.sg
            </a>
          </ContactItem>

          <ContactItem icon={<LocationIcon />}>
            <p>
              <span className="font-semibold text-white">[ Main Branch ]</span>
              <br />
              144 Upper Bukit Timah Road, #03-38, Beauty World Centre, Singapore 588177
            </p>
          </ContactItem>

          <ContactItem icon={<LocationIcon />}>
            <p>
              170 Upper Bukit Timah Road, #14-02, Bukit Timah Shopping Centre, Singapore
              588179
            </p>
          </ContactItem>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-white">
            Our Programmes
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-2">
            {footerProgrammes.map((programme) => (
              <Link
                key={programme.href}
                href={programme.href}
                className="text-sm text-zinc-300 transition hover:text-orange-400"
              >
                {programme.label}
              </Link>
            ))}
            <Link
              href="/schedule/"
              className="text-sm text-zinc-300 transition hover:text-orange-400"
            >
              Class Schedule
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© 2026 Knockout Learning Centre. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy-policy/" className="transition hover:text-orange-400">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions/" className="transition hover:text-orange-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const openingHoursRows = [
  { day: "Mon - Fri", time: "3:00 - 8:00p.m." },
  { day: "Weekends", time: "9:00 - 6:00p.m." },
  { day: "Wed", time: "Closed" },
] as const;

function OpeningHours() {
  return (
    <div>
      <p className="font-semibold text-white">Opening Hours:</p>
      <table className="mt-2 border-separate border-spacing-y-1">
        <tbody>
          {openingHoursRows.map((row) => (
            <tr key={row.day}>
              <th
                scope="row"
                className="w-[5.75rem] pr-6 text-left font-normal text-zinc-300"
              >
                {row.day}
              </th>
              <td className="whitespace-nowrap text-left text-zinc-300 tabular-nums">
                {row.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-white">{icon}</span>
      <div className="min-w-0 leading-relaxed">{children}</div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function MapPinIcon() {
  return <LocationIcon />;
}

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Facebook":
      return <FacebookIcon />;
    case "Instagram":
      return <InstagramIcon />;
    case "YouTube":
      return <YouTubeIcon />;
    case "Google Maps":
      return <GoogleMapsIcon />;
    default:
      return null;
  }
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
