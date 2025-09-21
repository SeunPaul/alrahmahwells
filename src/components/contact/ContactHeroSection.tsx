"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/constants/assets";

export default function ContactHeroSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="pt-40 pb-10 px-4 sm:px-6 lg:px-8 relative isolate bg-[#F0F6E5]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-10">
          <p
            data-aos="fade-up"
            className="font-semibold leading-4 w-max py-3 px-6 mx-auto bg-[#EAEDE6] text-[#0E1534] rounded-lg mb-4 flex items-center justify-center space-x-3"
          >
            <span className="w-3 h-3 bg-secondary-light rounded-full"></span>
            <span>{locale === "ar" ? "تواصل معنا" : "CONTACT US"}</span>
          </p>
        </div>
        <div className="mb-18">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-bold text-primary-dark mb-4 md:mb-10"
          >
            <div className="flex items-center justify-center text-primary-dark text-3xl md:text-5xl lg:text-6xl">
              <span>{locale === "ar" ? "كل قطرة" : "EVERY DROP"}</span>
              <span className="ml-3 text-blue-400 text-3xl md:text-5xl lg:text-6xl">
                💧
              </span>
            </div>
            <div className="mt-2 text-center text-primary-light text-4xl md:text-6xl lg:text-7xl">
              {locale === "ar" ? "تبدأ بمحادثة" : "BEGINS WITH A CONVERSATION"}
            </div>
          </div>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl lg:text-2xl text-primary-dark font-medium text-center"
          >
            {locale === "ar"
              ? "سواء كان لديك سؤال، أو فكرة شراكة، أو دعاء، أو تعهد — نحب أن نسمع منك. صوتك مهم بالنسبة لنا لأن كل عمل رحمة يبدأ بقلب إنسان."
              : "Whether you have a question, a partnership idea, a prayer, or a pledge — we'd love to hear from you. Your voice matters to us because every act of mercy begins with a human heart."}
          </p>
        </div>
      </div>
    </section>
  );
}
