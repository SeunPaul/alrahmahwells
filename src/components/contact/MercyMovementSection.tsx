"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function MercyMovementSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Islamic Architecture and Stars */}
      <div className="absolute inset-0 opacity-10">
        {/* Mosque Minarets and Domes */}
        <div className="absolute bottom-0 left-10 text-8xl text-primary-light">
          🕌
        </div>
        <div className="absolute bottom-0 right-10 text-7xl text-primary-light">
          🕌
        </div>
        <div className="absolute bottom-20 left-20 text-6xl text-primary-light">
          🗼
        </div>
        <div className="absolute bottom-20 right-20 text-5xl text-primary-light">
          🗼
        </div>
        <div className="absolute bottom-40 left-40 text-4xl text-primary-light">
          🕌
        </div>
        <div className="absolute bottom-40 right-40 text-4xl text-primary-light">
          🕌
        </div>

        {/* Stars */}
        <div className="absolute top-20 left-20 text-2xl text-white">⭐</div>
        <div className="absolute top-40 right-20 text-xl text-white">⭐</div>
        <div className="absolute top-60 left-1/3 text-2xl text-white">⭐</div>
        <div className="absolute top-80 right-1/3 text-xl text-white">⭐</div>
        <div className="absolute top-100 left-1/2 text-2xl text-white">⭐</div>
        <div className="absolute top-120 right-1/2 text-xl text-white">⭐</div>

        {/* Light Rays/Starbursts */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-light to-transparent opacity-20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-light to-transparent opacity-20"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary-light to-transparent opacity-15"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-bl from-primary-light to-transparent opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Top Section - Join the Mercy Movement */}
        <div className="mb-16">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {locale === "ar"
              ? "انضم إلى حركة الرحمة"
              : "Join the Mercy Movement"}
          </h2>

          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            {locale === "ar"
              ? "هل تريد التطوع أو نشر الرسالة في مجتمعك؟"
              : "Want to volunteer or spread the message to your community?"}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex justify-center"
          >
            <button className="bg-[#d4a574] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c19a6b] transition-colors shadow-lg">
              {locale === "ar"
                ? "انضم إلى شبكة المتطوعين"
                : "Join our volunteer network"}
            </button>
          </div>
        </div>

        {/* Bottom Section - Prefer to pray for us instead? */}
        <div>
          <h3
            data-aos="fade-down"
            data-aos-delay="400"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {locale === "ar"
              ? "تفضل أن تدعو لنا بدلاً من ذلك؟"
              : "Prefer to pray for us instead?"}
          </h3>

          <p
            data-aos="fade-down"
            data-aos-delay="500"
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            {locale === "ar"
              ? "حتى دعواتك تقوي مهمتنا. جزاك الله خيراً على نواياك."
              : "Even your du'as strengthen our mission. May Allah reward you for your intentions."}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
              {locale === "ar" ? (
                <>&ldquo;ومن أحيا نفساً فكأنما أحيا الناس جميعاً&rdquo;</>
              ) : (
                <>
                  &ldquo;And whoever saves one life, it is as if he had saved
                  mankind entirely.&rdquo;
                </>
              )}
            </blockquote>
            <cite className="block text-lg text-white/80 mt-4">
              {locale === "ar"
                ? "– سورة المائدة ٥:٣٢"
                : "– Surah Al-Ma'idah 5:32"}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
