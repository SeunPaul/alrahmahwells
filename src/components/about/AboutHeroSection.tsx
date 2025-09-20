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
      className="min-h-40 bg-primary-dark text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-96 pb-40 sm:pb-50 relative">
        {/* Left Content - Headline */}
        <div className="absolute inset-0 z-30 pt-40 px-4 sm:px-6 lg:px-8">
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-8 w-full sm:w-[400px] md:w-[500px] lg:w-[700px]"
          >
            {locale === "ar" ? (
              <>
                قيادة بالإيمان. معتمد حلال.{" "}
                <span className="block text-[#9CAF88]">محورها الناس.</span>
                تأثير عبر الأجيال
              </>
            ) : (
              <>
                Faith-Led.
                <br /> Halal-Certified.{" "}
                <span className="block text-[#B5FFC7]">
                  People-Centered.
                </span>{" "}
                Trans-generational impact
              </>
            )}
          </h1>
        </div>
        {/* Right Content - Images */}
        {/* Top Image - Color Photo (Women praying) */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className={`absolute overflow-hidden w-[45%] h-[200px] sm:h-[400px] md:w-[40%] md:h-[500px] lg:w-[36%] lg:h-[450px] rounded-2xl -bottom-10 md:-bottom-35 ${
            isRTL ? "left-5" : "right-5"
          } z-20`}
        >
          <img
            src={ASSETS.IMAGES.ABOUT.PRAYING_WOMEN}
            alt={
              locale === "ar"
                ? "نساء يصلين في وضع الجلوس"
                : "Women in prayer posture (jalsa)"
            }
            className="w-full h-full object-cover"
          />
        </div>
        {/* Bottom Image - Black and White Photo (Women standing) */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="absolute overflow-hidden w-[45%] h-[200px] md:w-[50%] md:h-[300px] lg:w-[54%] rounded-2xl -bottom-20 md:-bottom-50 z-20"
        >
          <img
            src={ASSETS.IMAGES.ABOUT.STANDING_WOMEN}
            alt={
              locale === "ar"
                ? "نساء يبتسمن في الهواء الطلق"
                : "Women smiling outdoors"
            }
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
