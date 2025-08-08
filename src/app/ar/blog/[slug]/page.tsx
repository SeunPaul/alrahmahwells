import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArabicBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = "ar" as const;
  const isRTL = true;

  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <section className="pt-32 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-rahmah-black mb-8"
          >
            {post.title[locale] || post.title.en}
          </h1>

          {/* Main Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative aspect-[16/6] overflow-hidden rounded-2xl shadow-lg mb-12"
          >
            <img
              src={post.image}
              alt={post.imageAlt[locale] || post.imageAlt.en}
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
                {post.category[locale] || post.category.en}
              </span>
              <span>بواسطة {post.author[locale] || post.author.en}</span>
              <span>•</span>
              <span>
                {new Date(post.publishedDate).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readTime} دقيقة للقراءة</span>
            </div>

            {/* Blog Content */}
            <div className="text-gray-700 leading-relaxed space-y-6">
              <div className="space-y-8">
                {post.sections.map((section, index) => (
                  <div key={index}>
                    {section.type === "quote" ? (
                      <div className="bg-gray-50 p-6 rounded-xl border-r-4 border-primary-light">
                        {section.title && (
                          <h2 className="text-lg font-semibold text-gray-800 italic mb-2">
                            {section.title[locale] || section.title.en}
                          </h2>
                        )}
                        <p className="text-gray-700 leading-relaxed italic">
                          {section.content[locale] || section.content.en}
                        </p>
                      </div>
                    ) : (
                      <>
                        {section.title && (
                          <h2 className="text-xl lg:text-2xl font-bold text-rahmah-black mb-4">
                            {section.title[locale] || section.title.en}
                          </h2>
                        )}
                        <p className="text-gray-700 leading-relaxed">
                          {section.content[locale] || section.content.en}
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

      {/* (Optional) Related section can be added mirroring English page */}

      <div className="mt-12 pt-8 border-t border-gray-200 mx-4 sm:mx-6 lg:mx-8">
        <Link
          href="/ar/blog"
          className="inline-flex items-center text-primary-light hover:text-primary-dark font-semibold transition-colors duration-200"
        >
          <span className="ml-2">←</span>
          العودة إلى المدونة
        </Link>
      </div>
    </div>
  );
}
