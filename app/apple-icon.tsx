import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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
          borderRadius: 36,
          color: "#0a0908",
          fontSize: 132,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          paddingBottom: 16,
        }}
      >
        f
      </div>
    ),
    size
  );
}
