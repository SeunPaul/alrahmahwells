"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function DonateHeroSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="bg-gradient-to-t from-[#1A3F22] to-[#58761B] flex items-center justify-center relative overflow-hidden pt-42 pb-20 md:pb-32 md:pt-54"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/illustrations/lines.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Impact Message */}
        <div data-aos="fade-up" className="space-y-4">
          {/* First Line */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#EFDBB3] leading-[0.5]">
            {locale === "ar" ? "تبرع واحد =" : "ONE DONATION ="}
          </h1>
          {/* Second Line */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {locale === "ar" ? "٢٠٠٠+ حياة متأثرة" : "2000+ LIVES TOUCHED"}
          </h1>
        </div>
      </div>
    </section>
  );
}
