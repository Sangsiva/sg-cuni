import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const alt = "SG Corp Uniforms Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title || "Blog Post";
  const category = post?.category || "Insights";

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
            bottom: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,168,92,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#C8A85C",
                textTransform: "uppercase",
                letterSpacing: "2px",
                padding: "6px 16px",
                borderRadius: "100px",
                backgroundColor: "rgba(200,168,92,0.12)",
                border: "1px solid rgba(200,168,92,0.25)",
                display: "flex",
              }}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: "900px",
              display: "flex",
            }}
          >
            {title}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#C8A85C",
              marginTop: "28px",
              display: "flex",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 80px",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderTop: "1px solid rgba(200,168,92,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1.5px solid rgba(200,168,92,0.4)",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#C8A85C" }}>
                SG
              </span>
            </div>
            <span style={{ fontSize: "16px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
              SG Corp Uniforms Blog
            </span>
          </div>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
            sgcorpuniforms.com
          </span>
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
