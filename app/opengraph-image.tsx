import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const alt = `${PROFILE.name} — Software Development Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0908",
          color: "#ece6da",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -160,
            width: 700,
            height: 700,
            borderRadius: 700,
            background: "radial-gradient(circle, rgba(217,119,87,0.35) 0%, rgba(217,119,87,0) 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: "#8a8278", letterSpacing: 4, textTransform: "uppercase", fontFamily: "monospace" }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#d97757" }} />
          {PROFILE.role} · {PROFILE.company}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: -2 }}>{PROFILE.firstName}</div>
          <div style={{ display: "flex", fontSize: 120, lineHeight: 1.05, letterSpacing: -2 }}>
            <span style={{ color: "#d97757", fontStyle: "italic", marginRight: 28 }}>{PROFILE.middleName}</span>
            {PROFILE.lastName}
            <span style={{ color: "#d97757" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#8a8278", fontFamily: "monospace" }}>
          <span>Distributed backends · AWS · GenAI / RAG</span>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    ),
    size
  );
}
