"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function DonateHelpSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 bg-[#1a3f22] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Islamic Illustrations */}
      <div className="absolute inset-0 opacity-10">
        {/* Mosque silhouettes */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <path
              d="M50 10 L60 30 L70 30 L70 80 L30 80 L30 30 L40 30 Z"
              fill="currentColor"
            />
            <circle cx="50" cy="25" r="8" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-20 right-20 w-24 h-24 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <path
              d="M50 10 L60 30 L70 30 L70 80 L30 80 L30 30 L40 30 Z"
              fill="currentColor"
            />
            <circle cx="50" cy="25" r="6" fill="currentColor" />
          </svg>
        </div>

        {/* Stars */}
        <div className="absolute top-16 left-1/4 w-4 h-4 opacity-20">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="absolute top-32 right-1/3 w-3 h-3 opacity-25">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 left-1/3 w-5 h-5 opacity-15">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Light rays */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-white/20 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-white/15 to-transparent transform -rotate-12"></div>
          <div className="absolute top-10 left-1/2 w-px h-20 bg-gradient-to-b from-white/10 to-transparent transform rotate-45"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <div data-aos="fade-up" className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C8F4D1] leading-tight">
            {locale === "ar" ? "ما زلت بحاجة إلى مساعدة؟" : "Still need help?"}
          </h2>
        </div>

        {/* Body Text */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-12">
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
            {locale === "ar" ? (
              <>
                لا تقلق — نحن هنا من أجلك. اضغط على الزر أدناه للدردشة مع فريقنا
                <br />— سنرشدك خلال العملية خطوة بخطوة، إن شاء الله.
              </>
            ) : (
              <>
                Don&apos;t worry — we&apos;re here for you. Click the button
                below to chat with our
                <br />
                team — we&apos;ll walk you through it step by step, in sha
                Allah.
              </>
            )}
          </p>
        </div>

        {/* Call to Action Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <button className="bg-[#D99201] hover:bg-[#B8780D] text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </button>
        </div>
      </div>
    </section>
  );
}
