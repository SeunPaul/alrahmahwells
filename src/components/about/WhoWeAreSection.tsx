"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/constants/assets";

export default function WhoWeAreSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f5f0] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Mosque and Crescent Silhouettes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-6xl text-primary-light">
          🕌
        </div>
        <div className="absolute top-20 right-20 text-4xl text-primary-light">
          ☪
        </div>
        <div className="absolute top-32 right-32 text-5xl text-primary-light">
          🕌
        </div>
        <div className="absolute bottom-10 right-10 text-4xl text-primary-light">
          ☪
        </div>
        <div className="absolute bottom-20 right-20 text-5xl text-primary-light">
          🕌
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Content */}
        <div className="mb-16">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-[#9CAF88] text-primary-dark rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary-light rounded-full mr-2"></span>
              {locale === "ar" ? "تعرف علينا" : "LEARN ABOUT US"}
            </span>
          </div>

          {/* Title and Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div>
              <h2
                data-aos="fade-right"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-8"
              >
                {locale === "ar" ? "من نحن" : "WHO WE ARE"}
              </h2>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg text-gray-700 leading-relaxed"
              >
                {locale === "ar" ? (
                  <>
                    ولدت من قلب مسلم متدين ومسافر عالمي سار في الطرق حيث{" "}
                    <span className="font-semibold text-primary-dark">
                      تتوقف الحضارة ويبدأ البقاء
                    </span>
                    ، ولدت &ldquo;مؤسسة آبار الرحمة&rdquo; بعد أن شهدت مباشرة
                    العطش والمعاناة التي لا يمكن تصورها لأولئك الذين نسيهم
                    العالم ولم تلمسهم الرحمة.
                  </>
                ) : (
                  <>
                    Born from the heart of a devoted Muslim and global traveler
                    who has walked the paths where{" "}
                    <span className="font-semibold text-primary-dark">
                      civilization stops and survival begins
                    </span>
                    , &apos;Al-Rahmah Wells Foundation&apos; was birthed after
                    witnessing first-hand the unimaginable thirst and suffering
                    of those forgotten by the world and untouched by mercy.
                  </>
                )}
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-lg text-gray-700 leading-relaxed"
              >
                {locale === "ar" ? (
                  <>
                    <span className="font-semibold text-primary-dark">
                      مؤسسة آبار الرحمة
                    </span>{" "}
                    هي منظمة إنسانية غير ربحية مدفوعة بالإيمان ومكرسة لتوفير{" "}
                    <span className="font-semibold text-primary-dark">
                      مياه نظيفة وقابلة للشرب من آبار تعمل بالطاقة الشمسية
                    </span>{" "}
                    لأكثر{" "}
                    <span className="font-semibold text-primary-dark">
                      المجتمعات المهملة والمتروكة في أفريقيا وما بعدها
                    </span>
                    .
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-primary-dark">
                      Al-Rahmah Wells Foundation
                    </span>{" "}
                    is a faith-driven, humanitarian non-profit organization
                    committed to delivering{" "}
                    <span className="font-semibold text-primary-dark">
                      clean, portable, solar-powered borehole water
                    </span>{" "}
                    to the most{" "}
                    <span className="font-semibold text-primary-dark">
                      neglected and abandoned communities across Africa and
                      beyond
                    </span>
                    .
                  </>
                )}
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-lg text-gray-700 leading-relaxed"
              >
                {locale === "ar" ? (
                  <>
                    في القرى الصامتة في شرق وغرب أفريقيا — حيث تمشي النساء
                    والأطفال{" "}
                    <span className="font-semibold text-primary-dark">
                      أميالاً طويلة للحصول على دلو من الماء الراكد والمصاب
                    </span>
                    ، وتعيش العائلات مع آلام{" "}
                    <span className="font-semibold text-primary-dark">
                      الأمراض المنقولة بالمياه التي يمكن تجنبها
                    </span>{" "}
                    — رأينا أكثر من مجرد فقر. رأينا{" "}
                    <span className="font-semibold text-primary-dark">
                      أمة في حاجة
                    </span>
                    .
                  </>
                ) : (
                  <>
                    In the silent villages of East and West Africa — where women
                    and children trek{" "}
                    <span className="font-semibold text-primary-dark">
                      long miles for a bucket of stagnant and infected water
                    </span>
                    , and families live with the agony of{" "}
                    <span className="font-semibold text-primary-dark">
                      avoidable water-borne diseases
                    </span>{" "}
                    — we saw more than just poverty. We saw an{" "}
                    <span className="font-semibold text-primary-dark">
                      ummah in need
                    </span>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="aspect-[16/9]">
            <img
              src={ASSETS.IMAGES.HOME.HOME_3}
              alt={
                locale === "ar"
                  ? "عملية حفر بئر في مجتمع ريفي"
                  : "Borehole drilling operation in rural community"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
