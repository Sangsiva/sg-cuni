import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  featured?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  readingTime,
  featured = false,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article
        className={`overflow-hidden rounded-xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover ${
          featured ? "lg:flex lg:gap-8" : ""
        }`}
      >
        <div
          className={`bg-soft-blue ${
            featured ? "aspect-[16/9] lg:aspect-auto lg:w-1/2" : "aspect-[16/9]"
          }`}
        />
        <div className={`p-6 ${featured ? "lg:flex lg:flex-col lg:justify-center lg:w-1/2" : ""}`}>
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
            {category}
          </span>
          <h3
            className={`mt-3 font-semibold text-navy group-hover:text-gold transition-colors ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-light">
            {date} · {readingTime}
          </p>
          <p className="mt-2 text-sm text-slate line-clamp-2">{excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
