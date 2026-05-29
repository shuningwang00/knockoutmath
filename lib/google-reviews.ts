export type GooglePlaceRating = {
  rating: number;
  reviewCount: number;
};

/** Live rating from Google Places API — requires GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID. */
export async function getGooglePlaceRating(): Promise<GooglePlaceRating | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url, { next: { revalidate: 86_400 } });
    if (!response.ok) return null;

    const data = (await response.json()) as {
      status?: string;
      result?: { rating?: number; user_ratings_total?: number };
    };

    if (data.status !== "OK" || !data.result) return null;

    const { rating, user_ratings_total: reviewCount } = data.result;
    if (typeof rating !== "number" || typeof reviewCount !== "number") return null;

    return { rating, reviewCount };
  } catch {
    return null;
  }
}
