"use client";

import { useEffect, useState } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import FallingIcons from "@/components/ui/FallingIcons";

export default function DonateHeroSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const itemsEn = [
    "2000+ Lives Touched",
    "20+ Years Legacy",
    "Sponsored Umrah/Hajj",
    "Jannah Earned",
  ];

  const itemsAr = [
    "٢٠٠٠+ حياة متأثرة",
    "أكثر من ٢٠ سنة من الإرث",
    "عُمرة/حَج مكفولان",
    "الجنة تُنال",
  ];

  const items = locale === "ar" ? itemsAr : itemsEn;

  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsExiting(false);
      }, 800);
      return () => clearTimeout(timeout);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section
      className="bg-gradient-to-t from-[#1A3F22] to-[#58761B] flex items-center justify-center relative overflow-hidden pt-42 pb-20 md:pb-32 md:pt-54"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Animated falling Islamic icons */}
      <FallingIcons />

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#EFDBB3]">
            {locale === "ar" ? "تبرع واحد =" : "ONE DONATION ="}
          </h1>
          {/* Second Line */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-500 ease-out ${
              isExiting
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {items[index]}
          </h1>
        </div>
      </div>
    </section>
  );
}
