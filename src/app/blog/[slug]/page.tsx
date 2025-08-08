import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = "en" as const;
  const isRTL = false;

  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Prepare related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <section className="pt-32 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-rahmah-black mb-8 max-w-2xl leading-relaxed"
          >
            {post.title[locale]}
          </h1>

          {/* Main Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative aspect-[16/6] overflow-hidden rounded-2xl shadow-lg mb-12"
          >
            <img
              src={post.image}
              alt={post.imageAlt[locale]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="prose prose-lg max-w-none"
          >
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
              <span className="bg-primary-light text-white px-3 py-1 rounded-full text-xs font-semibold">
                {post.category[locale]}
              </span>
              <span>By {post.author[locale]}</span>
              <span>•</span>
              <span>
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>

            {/* Blog Content */}
            <div className="text-gray-700 leading-relaxed space-y-6">
              <div className="space-y-8">
                {post.sections.map((section, index) => (
                  <div key={index}>
                    {section.type === "quote" ? (
                      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-light">
                        {section.title && (
                          <h2 className="text-lg font-semibold text-gray-800 italic mb-2">
                            {section.title[locale]}
                          </h2>
                        )}
                        <p className="text-gray-700 leading-relaxed italic">
                          {section.content[locale]}
                        </p>
                      </div>
                    ) : (
                      <>
                        {section.title && (
                          <h2 className="text-xl lg:text-2xl font-bold text-rahmah-black mb-4">
                            {section.title[locale]}
                          </h2>
                        )}
                        <p className="text-gray-700 leading-relaxed">
                          {section.content[locale]}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="w-16 h-1 bg-secondary-light mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
              More news and updates from us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedPosts.map((p) => (
              <BlogCard
                key={p.id}
                post={p}
                locale={locale}
                dir={isRTL ? "rtl" : "ltr"}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
