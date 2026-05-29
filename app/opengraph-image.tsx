import { ImageResponse } from "next/og";

export const alt = "Knockout Math — math tuition in Bukit Timah, Singapore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4ef",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#000",
            }}
          >
            Knockout
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#f97316",
            }}
          >
            Math
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 34,
              fontWeight: 700,
              color: "#18181b",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            Multiply Confidence. Subtract Fear.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 600,
              color: "#52525b",
              lineHeight: 1.4,
            }}
          >
            Secondary · IP · JC · Bukit Timah, Singapore
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: 48,
              height: 6,
              background: "#f97316",
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#71717a",
            }}
          >
            Ex-MOE tutors · KICK Method
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
