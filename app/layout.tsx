import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/json-ld";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeachingMarquee from "@/components/teaching-marquee";
import WhatsAppButton from "@/components/whatsapp-button";
import { organizationJsonLd } from "@/lib/structured-data";
import { getGooglePlaceRating } from "@/lib/google-reviews";
import { siteOpenGraphDefaults } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Knockout Math",
    template: "%s | Knockout Math",
  },
  description:
    "Math tuition in Bukit Timah for Secondary, IP, and JC students. Helmed by ex-MOE tutors using the KICK Method at Beauty World Centre, Singapore.",
  icons: {
    icon: "/logo-icon-dark.png",
    apple: "/logo-icon-dark.png",
  },
  ...siteOpenGraphDefaults,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const googleRating = await getGooglePlaceRating();

  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-white font-sans text-black antialiased">
        <JsonLd data={organizationJsonLd(googleRating)} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <TeachingMarquee />
          <main className="font-body flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
