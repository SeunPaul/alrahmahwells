"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function Blog() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 "
          >
            <span className="text-primary-dark">
              {locale === "ar" ? "اطلع على آخر" : "Check out our latest"}
            </span>
            <br />
            <span className="text-primary-light">
              {locale === "ar" ? "الأخبار والتحديثات" : "news and updates"}
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            {locale === "ar"
              ? "من قصص النجاح الملهمة إلى التقارير التفصيلية من الميدان، اكتشف كيف يدعمك يحول الأرواح - قرية واحدة، بئر واحد، دعاء مستجاب واحد في كل مرة. ابق متصلاً بالتأثير الذي تصنعه، برحمة الله."
              : "From inspiring success stories to detailed field reports, discover how your support is transforming lives – one village, one borehole, one answered prayer at a time. Stay connected to the impact you're making, by Allah's mercy."}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
              >
                <BlogCard
                  post={post}
                  locale={locale as "en" | "ar"}
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
    </div>
  );
}
