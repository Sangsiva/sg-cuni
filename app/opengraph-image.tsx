import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SG Corp Uniforms - Custom Corporate Uniforms & Sports T-Shirts Singapore";
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
        {/* Gradient glow - top right */}
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

        {/* Gradient glow - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,168,92,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Gold accent line at top */}
        <div
          style={{
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #C8A85C 0%, #E8D5A0 50%, #C8A85C 100%)",
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
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              border: "2px solid rgba(200,168,92,0.4)",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#C8A85C",
                letterSpacing: "-1px",
              }}
            >
              SG
            </span>
          </div>

          {/* Company name */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            SG Corp Uniforms
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#C8A85C",
              marginTop: "24px",
              marginBottom: "24px",
              borderRadius: "2px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.75)",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: "700px",
              display: "flex",
            }}
          >
            Custom Corporate Uniforms & Sports T-Shirts
          </div>

          {/* Location badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "28px",
              padding: "10px 24px",
              borderRadius: "100px",
              backgroundColor: "rgba(200,168,92,0.12)",
              border: "1px solid rgba(200,168,92,0.25)",
            }}
          >
            <span style={{ fontSize: "16px", color: "#C8A85C", fontWeight: 600 }}>
              Factory-Direct from India
            </span>
            <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.35)" }}>
              •
            </span>
            <span style={{ fontSize: "16px", color: "#C8A85C", fontWeight: 600 }}>
              Delivered to Singapore
            </span>
          </div>
        </div>

        {/* Bottom bar with features */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            padding: "20px 80px",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderTop: "1px solid rgba(200,168,92,0.15)",
          }}
        >
          {["Free Design Mockup", "50pc Minimum Order", "2-4 Week Delivery"].map(
            (feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#C8A85C",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 500,
                  }}
                >
                  {feature}
                </span>
              </div>
            )
          )}
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
    {
      ...size,
    }
  );
}
