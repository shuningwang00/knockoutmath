import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeachingMarquee from "@/components/teaching-marquee";
import WhatsAppButton from "@/components/whatsapp-button";
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
  description: "Multiply Confidence. Subtract Fear.",
  icons: {
    icon: "/logo-icon-dark.png",
    apple: "/logo-icon-dark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-white font-sans text-black antialiased">
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
