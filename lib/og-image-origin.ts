/** Origin for OG/Twitter image URLs — must be fetchable by link preview crawlers. */
export function getOgImageOrigin(): string {
  if (process.env.OG_IMAGE_ORIGIN) {
    return process.env.OG_IMAGE_ORIGIN.replace(/\/$/, "");
  }

  // Before custom DNS cutover, previews shared via *.vercel.app need images on Vercel.
  if (process.env.VERCEL === "1" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.knockoutmath.sg";
}

export function absoluteOgAssetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getOgImageOrigin()}${normalized}`;
}
