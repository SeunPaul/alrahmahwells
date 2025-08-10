"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsCallToAction() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-16 bg-[#f7f9f2] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="text-8xl text-gray-400">☪</div>
      </div>
      <div className="absolute bottom-10 right-4 opacity-5">
        <div className="text-6xl text-gray-400">🕯️</div>
      </div>
      <div className="absolute top-1/2 right-0 opacity-5">
        <div className="flex flex-col space-y-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
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
