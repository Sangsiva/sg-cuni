import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Blog - Insights & Guides | SG Corp Uniforms",
  description: "Tips on corporate uniforms, fabric selection, branding, and team apparel for Singapore businesses.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <>
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Insights &amp; Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Tips on corporate uniforms, fabric selection, branding, and team apparel.
          </p>
        </div>
      </section>

      <section className="container-custom section-gap">
        {featuredPost && (
          <div className="mb-12">
            <BlogCard {...featuredPost} featured />
          </div>
        )}

        {otherPosts.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-slate">Blog posts coming soon.</p>
          </div>
        )}
      </section>

      <CTABanner
        title="Need custom uniforms?"
        subtitle="Get a free quote and design mockup within 24 hours."
      />
    </>
  );
}
