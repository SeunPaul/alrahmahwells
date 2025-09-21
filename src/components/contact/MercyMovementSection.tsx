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
      {/* Background Pattern - Islamic Architecture */}
      <div
        style={{ backgroundImage: "url('/illustrations/mecca.png')" }}
        className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-center"
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Top Section - Join the Mercy Movement */}
        <div className="mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C8F4D1] mb-6"
          >
            {locale === "ar"
              ? "انضم إلى حركة الرحمة"
              : "Join the Mercy Movement"}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-[#C8F4D1] mb-8"
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
            <button className="bg-secondary-light text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-80 transition-colors cursor-pointer">
              {locale === "ar"
                ? "انضم إلى شبكة المتطوعين"
                : "Join our volunteer network"}
            </button>
          </div>
        </div>

        {/* Bottom Section - Prefer to pray for us instead? */}
        <div>
          <h3
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C8F4D1] mb-6"
          >
            {locale === "ar"
              ? "تفضل أن تدعو لنا بدلاً من ذلك؟"
              : "Prefer to pray for us instead?"}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg md:text-xl text-[#C8F4D1] max-w-3xl mx-auto"
          >
            {locale === "ar"
              ? "حتى دعواتك تقوي مهمتنا. جزاك الله خيراً على نواياك."
              : "Even your du'as strengthen our mission. May Allah reward you for your intentions."}
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="max-w-4xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl text-[#C8F4D1] italic leading-relaxed">
              {locale === "ar" ? (
                <>&ldquo;ومن أحيا نفساً فكأنما أحيا الناس جميعاً&rdquo;</>
              ) : (
                <>
                  &ldquo;And whoever saves one life, it is as if he had saved
                  mankind entirely.&rdquo;
                </>
              )}
            </blockquote>
            <cite className="block text-lg text-[#C8F4D1] mt-4">
              {locale === "ar"
                ? "– سورة المائدة ٥:٣٢"
                : "- Surah Al-Ma'idah 5:32"}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
