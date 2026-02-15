import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SG Corp Uniforms - Custom Corporate Uniforms Singapore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1B2A4A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #C8A85C 0%, #E8D5A0 50%, #C8A85C 100%)",
            display: "flex",
          }}
        />

        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,168,92,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
              display: "flex",
            }}
          >
            SG Corp Uniforms
          </div>

          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#C8A85C",
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
            }}
          />

          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              display: "flex",
            }}
          >
            Custom Corporate Uniforms & Sports T-Shirts · Singapore
          </div>
        </div>

        {/* Gold accent line at bottom */}
        <div
          style={{
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #C8A85C 0%, #E8D5A0 50%, #C8A85C 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
