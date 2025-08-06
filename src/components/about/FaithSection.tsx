"use client";

import { useTranslations, getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function FaithSection() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as any);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Islamic Architecture */}
      <div className="absolute inset-0 opacity-10">
        {/* Mosque Domes */}
        <div className="absolute top-10 left-10 text-8xl text-primary-light">
          🕌
        </div>
        <div className="absolute top-20 right-20 text-6xl text-primary-light">
          🕌
        </div>
        <div className="absolute bottom-20 left-20 text-7xl text-primary-light">
          🕌
        </div>

        {/* Minarets */}
        <div className="absolute top-1/4 left-1/3 text-4xl text-primary-light">
          🗼
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl text-primary-light">
          🗼
        </div>

        {/* Stars */}
        <div className="absolute top-1/3 left-1/2 text-2xl text-primary-light">
          ⭐
        </div>
        <div className="absolute top-2/3 right-1/4 text-xl text-primary-light">
          ⭐
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-2xl text-primary-light">
          ⭐
        </div>

        {/* Light Rays */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-primary-light to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-primary-light to-transparent opacity-20"></div>
        <div className="absolute top-0 left-1/3 w-px h-28 bg-gradient-to-b from-primary-light to-transparent opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            {locale === "ar" ? "ملهمون بإيماننا" : "Inspired by Our Faith"}
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Main Text Block */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-xl text-white/90 leading-relaxed"
            >
              {locale === "ar" ? (
                <>
                  في قلب مؤسسة آبار الرحمة يكمن الإسلام. نحن ملهمون{" "}
                  <span className="font-bold text-white">
                    بمبادئ القرآن في الرحمة والشفقة والصدقة الجارية
                  </span>{" "}
                  — نوع من الصدقة لا يتوقف عن التأثير حتى على الأجيال القادمة،
                  بعد رحيلنا.
                </>
              ) : (
                <>
                  At the soul of Wells of Mercy Foundation is Islam. We are
                  inspired by{" "}
                  <span className="font-bold text-white">
                    Quranic principles of mercy, compassion, and Sadaqah Jariyah
                  </span>{" "}
                  – the kind of charity that never stops impacting even the next
                  generations, after we're gone.
                </>
              )}
            </div>

            {/* Quote */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <blockquote className="text-xl text-white italic mb-4">
                {locale === "ar"
                  ? "أفضل الصدقة إطعام الماء"
                  : "The best charity is giving water to drink."}
              </blockquote>
              <cite className="text-lg text-white/80 flex items-center">
                {locale === "ar" ? "– النبي محمد" : "– Prophet Muhammad"}
                <span className="ml-3 text-2xl">🌸</span>
              </cite>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quote */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <blockquote className="text-xl text-white italic mb-4">
                {locale === "ar"
                  ? "ومن أحيا نفساً فكأنما أحيا الناس جميعاً"
                  : "And whoever saves a life, it will be as if they saved all of humanity."}
              </blockquote>
              <cite className="text-lg text-white/80">
                {locale === "ar" ? "– القرآن ٥:٣٢" : "– Qur'an 5:32"}
              </cite>
            </div>

            {/* Main Text Block */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-xl text-white/90 leading-relaxed"
            >
              {locale === "ar" ? (
                <>
                  كل بئر نبنيها معتمدة حلال. كل تبرع يتم التعامل معه{" "}
                  <span className="font-bold text-white">بالأمانة (الثقة)</span>{" "}
                  و{" "}
                  <span className="font-bold text-white">الإحسان (التميز)</span>
                  . وكل مشروع هو تجسيد للرحمة الإلهية — ينبوع من الأجر لكل من
                  المعطي والمستقبل.
                </>
              ) : (
                <>
                  Every well we build is halal certified. Every donation is
                  handled with{" "}
                  <span className="font-bold text-white">Amanah (trust)</span>{" "}
                  and{" "}
                  <span className="font-bold text-white">
                    Ihsan (excellence)
                  </span>
                  . And every project is a manifestation of divine mercy – a
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
