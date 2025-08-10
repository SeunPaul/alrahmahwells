"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsHero() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white pt-36 pb-20 md:pb-32 md:pt-48"
      style={{
        backgroundImage: "url('/images/projects-hero.jpg')",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {locale === "ar" ? (
              <>
                من العطش إلى الرحمة: 7 مشاريع أعادت الحياة إلى المجتمعات المنسية
              </>
            ) : (
              <>
                From Thirst to Mercy: 7 Projects That Brought Life Back to
                Forgotten Communities
              </>
            )}
          </h1>
          <p
            className="text-lg md:text-xl max-w-xl md:max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {locale === "ar"
              ? "مع كل نظام مياه محمول نبنيه، وكل مرض نعالجه، وكل قرآن نهديه - تبدأ فصول جديدة من الأمل. إليك ما جعلته رحمتك ممكناً..."
              : "With every portable water system built, every disease treated, and every Quran gifted  a new chapter of hope begins. Here's what your compassion has made possible..."}
          </p>
        </div>
      </div>
    </section>
  );
}
