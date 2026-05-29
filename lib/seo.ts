import type { Metadata } from "next";
import type { ProgrammePageContent } from "@/lib/programme-pages/types";
import { absoluteOgAssetUrl } from "@/lib/og-image-origin";
import { SITE_URL } from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/og/share.png";
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
  const ogImageUrl = absoluteOgAssetUrl(image);

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
          ? { url: ogImageUrl, width: 1200, height: 630, alt: imageAlt }
          : { url: ogImageUrl, alt: imageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

export function programmePageMetadata(programme: ProgrammePageContent): Metadata {
  const imagePath = programmeHeroImage(programme.hero.image);

  return createPageMetadata({
    title: programme.metadata.title,
    description: programme.metadata.description,
    path: programme.slug,
    image: imagePath,
    imageAlt: programme.hero.imageAlt,
  });
}

export const siteOpenGraphDefaults: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Knockout Math",
    images: [
      {
        url: absoluteOgAssetUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteOgAssetUrl(DEFAULT_OG_IMAGE)],
  },
};
