import { mainBranch } from "@/lib/contact";

export const SITE_URL = "https://www.knockoutmath.sg";

export const WHATSAPP_URL = "https://wa.me/6584760600";

export const FACEBOOK_URL = "https://www.facebook.com/knockoutmath.sg/";
export const INSTAGRAM_URL = "https://www.instagram.com/knockoutmath.sg/";
export const YOUTUBE_URL = "https://www.youtube.com/@KnockoutMathSingapore";
export const GOOGLE_MAPS_URL = mainBranch.mapsHref;

export const socialLinks: SiteLink[] = [
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "YouTube", href: YOUTUBE_URL },
  { label: "Google Maps", href: GOOGLE_MAPS_URL },
];

export type SiteLink = {
  label: string;
  href: string;
};

export const programmeLinks: SiteLink[] = [
  { label: "Schedule", href: "/schedule/" },
  { label: "Lower Secondary Math", href: "/secondary-math-tuition/" },
  {
    label: "Upper Secondary E-Math",
    href: "/secondary-e-math-tuition-o-level/",
  },
  { label: "Upper Secondary A-Math", href: "/upper-secondary-a-math/" },
  { label: "Secondary IP Math", href: "/secondary-ip-math-tuition/" },
  {
    label: "Junior College H2 Math",
    href: "/junior-college-h2-math-tuition/",
  },
];

export const primaryNavLinks: SiteLink[] = [
  { label: "About Us", href: "/about-us/" },
  { label: "Our Tutors", href: "/our-tutors/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const allSitePages: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Tutors", href: "/our-tutors/" },
  { label: "Schedule", href: "/schedule/" },
  { label: "Lower Secondary Math", href: "/secondary-math-tuition/" },
  {
    label: "Upper Secondary E-Math",
    href: "/secondary-e-math-tuition-o-level/",
  },
  { label: "Upper Secondary A-Math", href: "/upper-secondary-a-math/" },
  { label: "Secondary IP Math", href: "/secondary-ip-math-tuition/" },
  {
    label: "Junior College H2 Math",
    href: "/junior-college-h2-math-tuition/",
  },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Free Trial", href: "/free-math-trial/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-conditions/" },
  { label: "Knockout Math", href: "/knockout-math/" },
  {
    label: "Leading Math Tuition Centre",
    href: "/knockout-math-leading-math-tuition-centre/",
  },
  {
    label: "Master Math with Top Tutors",
    href: "/master-math-with-singapores-top-tutors/",
  },
];
