"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsCallToAction() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-16 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Quote Boxes Container */}
        <div className="sm:h-96 relative">
          {/* First Quote Box - Bottom Left */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative sm:absolute left-0 bg-[#F7FBF2] rounded-[20px] p-4 sm:p-10 border-2 border-[#D3B88A] sm:w-[60%] rotate-3 z-10"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute right-[100%] top-[50%] w-48 h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="absolute left-[100%] top-[50%] w-full h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="relative text-base md:text-lg text-center text-secondary-dark font-medium md:font-semibold leading-relaxed">
              <div className="mb-4 sm:mb-8">
                {locale === "ar" ? (
                  <>
                    مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا
                    فَيُضْعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً
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
                    &ldquo;Who is it that will lend to Allah a good loan which
                    He will multiply for him many times over?&rdquo; <br />-
                    Surah Al-Baqarah (2:245)
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
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p
          className="text-2xl md:text-3xl text-gray-700 italic mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {locale === "ar"
            ? "ومع ذلك... آلاف آخرون ما زالوا ينتظرون."
            : "And yet... thousands more still wait."}
        </p>

        <div className="space-y-4 text-lg md:text-xl text-gray-700 text-left">
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            {locale === "ar"
              ? "الآن، في الزوايا المنسية من غرب أفريقيا، ما زالت أمهات لا حصر لهن يصلين من أجل مياه نظيفة."
              : "Right now, in forgotten corners of West Africa, countless mothers still pray for clean water."}
          </p>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            {locale === "ar"
              ? "أطفال لا حصر لهم ما زالوا يستيقظون كل يوم متسائلين إذا كانوا سيبقون على قيد الحياة بعد رشفة أخرى."
              : "Countless children still wake up each day wondering if they will survive another sip."}
          </p>
          <p
            className="text-center font-semibold"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {locale === "ar"
              ? "لكن يمكنك أن تكون إجابة لدعائهم."
              : "But you can be the answer to their Du'a."}
          </p>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
            {locale === "ar"
              ? "بتبرعك القادم، يمكن بناء بئر آخر. يمكن إنقاذ حياة أخرى. يمكن لمجتمع آخر أن يفرح – ويتذكرك في صلواتهم، طويلاً بعد رحيلك."
              : "With your next donation, another well can be built. Another life can be saved. Another community can rejoice – and remember you in their prayers, long after you are gone."}
          </p>
        </div>
      </div>
    </section>
  );
}
