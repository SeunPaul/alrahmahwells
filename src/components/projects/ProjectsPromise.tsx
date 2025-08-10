"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import Link from "next/link";

export default function ProjectsPromise() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 bg-[#0f2b1f] text-white relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl">☪</div>
        <div className="absolute top-40 right-20 text-4xl">⭐</div>
        <div className="absolute bottom-20 left-40 text-5xl">☪</div>
        <div className="absolute bottom-40 right-40 text-3xl">⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {locale === "ar"
            ? "كن أداة رحمة الله. ابنِ إرثاً يعيش بعدك"
            : "Be an instrument of Allah's Mercy. Build a legacy that outlives you"}
        </h2>
        <p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          {locale === "ar"
            ? "كن جزءاً من هذه الرحمة. كن جزءاً من هذا الإرث."
            : "Be a part of this mercy. Be a part of this legacy."}
        </p>

        <Link
          href={locale === "ar" ? "/ar/donate" : "/donate"}
          className="inline-block bg-[#D49B44] hover:bg-[#B8860B] text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-300"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          {locale === "ar" ? "تبرع الآن" : "Donate Now"}
        </Link>
      </div>
    </section>
  );
}
