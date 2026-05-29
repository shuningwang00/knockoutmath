export const SITE_URL = "https://www.knockoutmath.sg";

export type SiteLink = {
  label: string;
  href: string;
};

export const programmeLinks: SiteLink[] = [
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
  { label: "Schedule", href: "/schedule/" },
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
];
