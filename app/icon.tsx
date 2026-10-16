import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#d97757",
          borderRadius: 32,
          color: "#0a0908",
          fontSize: 48,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          paddingBottom: 6,
        }}
      >
        f
      </div>
    ),
    size
  );
}
