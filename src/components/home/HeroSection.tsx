"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function HeroSection() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const getLocalizedPath = (path: string) => {
    if (locale === "en") return path;
    return `/${locale}${path}`;
  };

  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-30"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/home-hero.jpg')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[40px] md:text-6xl lg:text-[85px] font-bold text-white mb-6 leading-tight whitespace-pre-line"
        >
          {locale === "ar"
            ? "يمشون أميالاً لجلب دلو من المرض"
            : "They walk miles to fetch a bucket of disease"}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg leading-6 max-w-xl md:text-2xl lg:text-2xl md:leading-8 text-white/90 mb-12 lg:max-w-2xl mx-auto whitespace-pre-line font-medium"
        >
          {locale === "ar"
            ? "لهم، الماء النظيف رفاهية، حلم لا يمكن أن يتحقق إلا بفعل رحمتك"
            : "To them, clean water is a luxury, a dream only your act of mercy can bring to life."}
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex justify-center items-center"
        >
          <Link
            href={getLocalizedPath("/donate") as any}
            className="px-24 py-4 bg-[#DCE5C8] text-primary-light rounded-full text-lg font-semibold hover:bg-[#e8e8d0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {locale === "ar" ? "تبرع الآن" : "Donate Now"}
          </Link>
        </div>
      </div>
    </section>
  );
}
