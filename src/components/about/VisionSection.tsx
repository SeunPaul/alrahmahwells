"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function VisionSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f7f4] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Large Crescent Moon */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 text-[20rem] text-primary-light transform -translate-x-1/2 -translate-y-1/2">
          🌙
        </div>
        <div className="absolute top-1/3 right-1/4 text-6xl text-primary-light">
          🕯️
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-5xl text-primary-light">
          🕯️
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vision Statement */}
        <div className="mb-20">
          {/* Title and Content Grid */}
          <div className="grid lg:grid-cols-[3fr_4fr] gap-2 lg:gap-12 items-start">
            {/* Left Column - Title */}
            <div className="relative">
              {/* Orange accent line */}
              <div className="w-34 h-1 bg-secondary-light mb-4"></div>

              {/* Title */}
              <h2
                data-aos="fade-right"
                className="text-3xl md:text-4xl lg:text-[56px] font-bold text-primary-light mb-8"
              >
                {locale === "ar" ? "رؤيتنا" : "OUR VISION"}
              </h2>
            </div>

            {/* Right Column - Vision Statement */}
            <div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-2xl text-gray-700 leading-relaxed"
              >
                {locale === "ar" ? (
                  <>
                    أن نعيش في عالم لا يُحرم فيه أي{" "}
                    <span className="font-bold text-primary-dark">
                      إنسان من الماء
                    </span>{" "}
                    — وهو{" "}
                    <span className="font-bold text-primary-dark">
                      أبسط الحقوق الإلهية
                    </span>{" "}
                    — بسبب مكان ولادته أو بعده عن اهتمام الحكومة.
                  </>
                ) : (
                  <>
                    To live in a world where no{" "}
                    <span className="font-bold text-primary-dark">
                      human is denied water
                    </span>{" "}
                    - the most{" "}
                    <span className="font-bold text-primary-dark">
                      basic of divine rights
                    </span>{" "}
                    - because of where they were born or how far they are from
                    government attention.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Quote Boxes Container */}
        <div className="relative min-h-[600px]">
          {/* First Quote Box - Top Right */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/30 mb-8 lg:mb-0 lg:absolute lg:top-0 lg:right-0 lg:w-[450px]"
          >
            <div className="relative">
              {/* Dashed line connector */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-dashed border-[#d4a574]"></div>

              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                {locale === "ar" ? (
                  <>
                    &ldquo;يُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا
                    وَيَتِيمًا وَأَسِيرًا، إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ
                    اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا&rdquo;
                  </>
                ) : (
                  <>
                    &ldquo;They give food, out of love for Him, to the poor, the
                    orphan, and the captive, [saying] &apos;We feed you for the
                    sake of Allah alone. We seek from you neither reward nor
                    thanks.&apos;&rdquo;
                  </>
                )}
              </blockquote>

              <cite className="text-base text-primary-dark font-semibold">
                {locale === "ar"
                  ? "– سورة الإنسان (٧٦:٨-٩)"
                  : "– Surah Al-Insan (76:8-9)"}
              </cite>
            </div>
          </div>

          {/* Second Quote Box - Bottom Left */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/30 lg:absolute lg:bottom-0 lg:left-0 lg:w-[450px]"
          >
            <div className="relative">
              {/* Dashed line connector */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-dashed border-[#d4a574]"></div>

              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                {locale === "ar" ? (
                  <>
                    &ldquo;مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا
                    فَيُضْعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً&rdquo;
                  </>
                ) : (
                  <>
                    &ldquo;Who is it that will lend to Allah a good loan which
                    He will multiply for him many times over?&rdquo;
                  </>
                )}
              </blockquote>

              {locale === "ar" && (
                <div className="text-3xl text-primary-dark font-arabic mb-6 text-right leading-relaxed">
                  مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضْعِفَهُ
                  لَهُ أَضْعَافًا كَثِيرَةً
                </div>
              )}

              <cite className="text-base text-primary-dark font-semibold">
                {locale === "ar"
                  ? "– سورة البقرة (٢:٢٤٥)"
                  : "– Surah Al-Baqarah (2:245)"}
              </cite>
            </div>
          </div>

          {/* Spacer for mobile layout */}
          <div className="h-[600px] lg:hidden"></div>
        </div>
      </div>
    </section>
  );
}
