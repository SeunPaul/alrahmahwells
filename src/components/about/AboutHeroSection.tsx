"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/constants/assets";

export default function AboutHeroSection() {
  const pathname = usePathname();
  
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="min-h-screen bg-primary-dark text-white flex items-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Headline */}
          <div className="lg:order-1">
            <h1
              data-aos="fade-right"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            >
              {locale === "ar" ? (
                <>
                  <span className="block">قيادة بالإيمان.</span>
                  <span className="block">معتمد حلال.</span>
                  <span className="block text-[#9CAF88]">محورها الناس.</span>
                  <span className="block">تأثير عبر الأجيال</span>
                </>
              ) : (
                <>
                  <span className="block">Faith-Led.</span>
                  <span className="block">Halal-Certified.</span>
                  <span className="block text-[#9CAF88]">People-Centered.</span>
                  <span className="block">Trans-generational impact</span>
                </>
              )}
            </h1>
          </div>

          {/* Right Content - Images */}
          <div className="lg:order-2 space-y-6">
            {/* Top Image - Color Photo (Women praying) */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[4/3]">
                <img
                  src={ASSETS.IMAGES.HOME.HOME_1}
                  alt={
                    locale === "ar"
                      ? "نساء يصلين في وضع الجلوس"
                      : "Women in prayer posture (jalsa)"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Image - Black and White Photo (Women standing) */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[4/3]">
                <img
                  src={ASSETS.IMAGES.HOME.HOME_2}
                  alt={
                    locale === "ar"
                      ? "نساء يبتسمن في الهواء الطلق"
                      : "Women smiling outdoors"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
