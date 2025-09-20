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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f5f0] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      <div
        style={{ backgroundImage: "url('/illustrations/eid-transparent.png')" }}
        className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-center"
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
                className="text-xl text-gray-700 leading-relaxed md:leading-[35px]"
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
        <div className="mb-5 sm:mb-20 sm:h-96 relative">
          {/* First Quote Box - Bottom Left */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative sm:absolute left-0 bg-[#F7FBF2] rounded-[20px] p-4 sm:p-10 border-2 border-[#D3B88A] sm:w-[60%] rotate-5 sm:translate-y-[250px] lg:translate-y-[180px] z-10"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute right-[100%] top-[50%] w-48 h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="relative text-base md:text-lg text-center text-secondary-dark font-medium md:font-semibold leading-relaxed">
              <div className="mb-4 sm:mb-8">
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
              </div>
              <div>
                {locale === "ar" ? (
                  <>
                    Who is it that will lend to Allah a good loan which He will
                    multiply for him many times over? - Surah Al-Baqarah (2:245)
                  </>
                ) : (
                  <>
                    مَّن ذَا ٱلَّذِي يُقْرِضُ ٱللَّهَ قَرْضٗا حَسَنٗا
                    فَيُضَٰعِفَهُۥ لَهُۥٓ أَضْعَافٗا كَثِيرَةٗ <br /> — Surah
                    Al-Baqarah (2:245)
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Second Quote Box - Top Right */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative sm:absolute right-0 bg-[#F7FBF2] rounded-[20px] p-4 sm:p-10 border-2 border-[#D3B88A] sm:w-[60%] -rotate-3"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute left-[100%] top-[50%] w-48 h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="relative text-base md:text-lg text-center text-secondary-dark font-medium md:font-semibold leading-relaxed">
              <div className="mb-2 sm:mb-8">
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
                    thanks.&rdquo;
                  </>
                )}
              </div>
              <div>
                {locale === "ar"
                  ? "- سورة الإنسان (٧٦:٨-٩)"
                  : "- Surah Al-Insan (76:8-9)"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
