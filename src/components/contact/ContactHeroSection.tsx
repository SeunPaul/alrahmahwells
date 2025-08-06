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
      className="min-h-screen bg-[#f0f5f0] flex items-center justify-center relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Subtle Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute top-20 left-20 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-light rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Headline */}
        <div data-aos="fade-up" className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark leading-tight">
            {locale === "ar" ? (
              <>
                <span className="block">كل قطرة</span>
                <span className="flex items-center justify-center gap-4">
                  تبدأ بمحادثة
                  <img
                    src={ASSETS.ICONS.WATER_DROP}
                    alt="Water Drop"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </span>
              </>
            ) : (
              <>
                <span className="block">EVERY DROP</span>
                <span className="block flex items-center justify-center gap-4">
                  BEGINS WITH A CONVERSATION
                  <img
                    src={ASSETS.ICONS.WATER_DROP}
                    alt="Water Drop"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </span>
              </>
            )}
          </h1>
        </div>

        {/* Descriptive Paragraph */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mb-12 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {locale === "ar" ? (
              <>
                سواء كان لديك سؤال، أو فكرة شراكة، أو دعاء، أو تعهد — نحب أن
                نسمع منك. صوتك مهم بالنسبة لنا لأن كل عمل رحمة يبدأ بقلب إنسان.
              </>
            ) : (
              <>
                Whether you have a question, a partnership idea, a prayer, or a
                pledge – we&apos;d love to hear from you. Your voice matters to
                us because every act of mercy begins with a human heart.
              </>
            )}
          </p>
        </div>

        {/* Contact Us Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center"
        >
          <button className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
            <span className="w-3 h-3 bg-secondary-light rounded-full mr-3"></span>
            {locale === "ar" ? "اتصل بنا" : "CONTACT US"}
          </button>
        </div>
      </div>
    </section>
  );
}
