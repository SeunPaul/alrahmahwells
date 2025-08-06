"use client";

import { useTranslations, getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function DonateHeroSection() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as any);

  return (
    <section
      className="min-h-screen bg-[#4A6B3C] flex items-center justify-center relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-25">
        {/* Vertical lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-[#5A7B4C]"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#5A7B4C]"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-[#5A7B4C]"></div>
        </div>
        {/* Horizontal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-[#5A7B4C]"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#5A7B4C]"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-[#5A7B4C]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Impact Message */}
        <div data-aos="fade-up" className="space-y-4">
          {/* First Line */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#E0DDCB] leading-tight">
            {locale === "ar" ? "تبرع واحد =" : "ONE DONATION ="}
          </h1>

          {/* Second Line */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            {locale === "ar" ? "٢٠٠٠+ حياة متأثرة" : "2000+ LIVES TOUCHED"}
          </h2>
        </div>
      </div>
    </section>
  );
}
