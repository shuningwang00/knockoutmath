import Link from "next/link";
import Logo from "@/components/logo";
import { programmeLinks, WHATSAPP_URL } from "@/lib/site";

const MAIN_BRANCH_ADDRESS =
  "144 Upper Bukit Timah Road, #03-38, Beauty World Centre, Singapore 588177";
const SECOND_BRANCH_ADDRESS =
  "170 Upper Bukit Timah Road, #14-02, Bukit Timah Shopping Centre, Singapore 588179";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAIN_BRANCH_ADDRESS)}`;
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAIN_BRANCH_ADDRESS)}&z=16&output=embed`;

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

          <a
            href={GOOGLE_MAPS_URL}
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
        <p className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-zinc-400 md:px-6">
          © 2026 Knockout Learning Centre. All rights reserved.
        </p>
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
