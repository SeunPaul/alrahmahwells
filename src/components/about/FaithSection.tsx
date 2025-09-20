"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function FaithSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="pt-10 pb-20 md:pt-20 px-4 sm:px-6 lg:px-8 bg-primary-dark relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Islamic Architecture */}
      <div
        style={{ backgroundImage: "url('/illustrations/mecca.png')" }}
        className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-center"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-16 md:mb-20">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C8F4D1] mb-8"
          >
            {locale === "ar" ? "ملهمون بإيماننا" : "Inspired by Our Faith"}
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="text-xl md:text-2xl space-y-8">
            {/* Main Text Block */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-[#C8F4D1] leading-relaxed"
            >
              {locale === "ar" ? (
                <>
                  في قلب مؤسسة آبار الرحمة يكمن الإسلام. نحن ملهمون{" "}
                  <span className="font-bold">
                    بمبادئ القرآن في الرحمة والشفقة والصدقة الجارية
                  </span>{" "}
                  — نوع من الصدقة لا يتوقف عن التأثير حتى على الأجيال القادمة،
                  بعد رحيلنا.
                </>
              ) : (
                <>
                  At the soul of Wells of Mercy Foundation is Islam. We are
                  inspired by{" "}
                  <span className="font-bold">
                    Quranic principles of mercy, compassion, and Sadaqah Jariyah
                  </span>{" "}
                  – the kind of charity that never stops impacting even the next
                  generations, after we&apos;re gone.
                </>
              )}
            </div>

            {/* Quote */}
            <div data-aos="fade-right" data-aos-delay="300">
              <div className="text-white italic font-bold">
                {locale === "ar"
                  ? "أفضل الصدقة إطعام الماء"
                  : "The best charity is giving water to drink.” — Prophet ﷺ Muhammad"}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-xl md:text-2xl space-y-8">
            {/* Quote */}
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="text-white italic font-bold">
                {locale === "ar"
                  ? "ومن أحيا نفساً فكأنما أحيا الناس جميعاً - القرآن ٥:٣٢"
                  : "And whoever saves a life, it will be as if they saved all of humanity. - Qur'an 5:32"}
              </div>
            </div>

            {/* Main Text Block */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-[#C8F4D1] leading-relaxed"
            >
              {locale === "ar" ? (
                <>
                  كل بئر نبنيها معتمدة حلال. كل تبرع يتم التعامل معه{" "}
                  <span className="font-bold">بالأمانة (الثقة)</span> و{" "}
                  <span className="font-bold">الإحسان (التميز)</span>. وكل مشروع
                  هو تجسيد للرحمة الإلهية — ينبوع من الأجر لكل من المعطي
                  والمستقبل.
                </>
              ) : (
                <>
                  Every well we build is halal certified. Every donation is
                  handled with <span className="font-bold">Amanah (trust)</span>{" "}
                  and <span className="font-bold">Ihsan (excellence)</span>. And
                  every project is a manifestation of divine mercy - a
                  wellspring of reward for both the giver and the receiver.
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
