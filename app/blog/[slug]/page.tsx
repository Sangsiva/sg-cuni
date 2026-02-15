import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import CTABanner from "@/components/shared/CTABanner";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | SG Corp Uniforms Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "SG Corp Uniforms",
    },
    publisher: {
      "@type": "Organization",
      name: "SG Corp Uniforms",
      url: "https://sgcorpuniforms.com",
    },
    mainEntityOfPage: `https://sgcorpuniforms.com/blog/${params.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sgcorpuniforms.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://sgcorpuniforms.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article>
        <section className="bg-navy py-16 lg:py-24">
          <div className="container-custom text-center">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1 text-sm font-medium text-gold">
              {post.category}
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/50">
              {post.date} · {post.readingTime}
            </p>
          </div>
        </section>

        <div className="container-custom py-16">
          <div className="mx-auto max-w-3xl [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-navy [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-slate [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-slate [&_li]:mb-1 [&_strong]:text-navy [&_a]:text-gold [&_a]:hover:underline">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <CTABanner
        title="Need custom uniforms?"
        subtitle="Get a free quote and design mockup within 24 hours."
      />
    </>
  );
}
