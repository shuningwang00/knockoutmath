import type { Metadata } from "next";
import type { ProgrammePageContent } from "@/lib/programme-pages/types";
import { SITE_URL } from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/opengraph-image";
export const DEFAULT_OG_IMAGE_ALT =
  "Knockout Math — math tuition for Secondary, IP, and JC students in Bukit Timah";

type PageMetadataInput = {
  /** Page title without the site suffix — layout template adds "| Knockout Math". */
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

function fullTitle(title: string) {
  return title.includes("Knockout Math") ? title : `${title} | Knockout Math`;
}

function programmeHeroImage(cardImage: string) {
  return cardImage.replace("/programmes/", "/programmes/heroes/");
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogTitle = fullTitle(title);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_SG",
      url: canonical,
      siteName: "Knockout Math",
      title: ogTitle,
      description,
      images: [
        image === DEFAULT_OG_IMAGE
          ? { url: image, width: 1200, height: 630, alt: imageAlt }
          : { url: image, alt: imageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

export function programmePageMetadata(programme: ProgrammePageContent): Metadata {
  return createPageMetadata({
    title: programme.metadata.title,
    description: programme.metadata.description,
    path: programme.slug,
    image: programmeHeroImage(programme.hero.image),
    imageAlt: programme.hero.imageAlt,
  });
}

export const siteOpenGraphDefaults: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Knockout Math",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE_ALT }],
  },
};
