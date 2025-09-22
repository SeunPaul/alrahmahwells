"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsIntro() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-lg md:text-xl text-[#0D2F2B] font-medium mb-6 leading-loose"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {locale === "ar"
            ? "في الزوايا المنسية من غرب أفريقيا، جلبت تبرعاتكم أكثر من الماء النظيف - جلبت الحياة والكرامة والإيمان والأمل."
            : "Across the forgotten corners of West Africa, your donations have brought more than just clean water – they have brought life, dignity, faith, and hope."}
        </p>
        <p
          className="text-lg md:text-xl text-[#0D2F2B] font-medium leading-loose"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          {locale === "ar"
            ? "أدناه 7 مشاريع حقيقية أكملناها، بفضل سخاء أشخاص مثلك. كل واحد منها دليل على أن كل قطرة ماء، وكل فلس تبرعت به، وكل دعاء دعوته، مهم - ويغير الحياة إلى الأبد."
            : "Below are 7 real projects we've completed, thanks to the generosity of people like you. Each one stands as proof that every drop of water, every penny given, and every prayer made, counts – and changes lives forever."}
          <span className="text-secondary-dark font-semibold">
            {locale === "ar"
              ? " ويغير الحياة إلى الأبد."
              : " and changes lives forever."}
          </span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-15 px-4 sm:px-6 lg:px-8">
        {/* Quote Boxes Container */}
        <div className="mb-5 sm:h-56 relative">
          {/* Second Quote Box - Top Right */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative sm:absolute right-0 bg-[#F0F6E5] rounded-[20px] p-4 sm:p-10 border-2 border-[#D3B88A] sm:w-[60%] -rotate-3"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute right-[100%] top-[50%] w-full h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="absolute left-[100%] top-[50%] w-48 h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="relative text-base md:text-lg text-center text-secondary-dark font-medium md:font-semibold leading-relaxed">
              <div className="mb-2 sm:mb-8">
                {locale === "ar" ? (
                  <>
                    أَرَأَيْتَ ٱلَّذِي يُكَذِّبُ بِٱلدِّينِ • فَذَٰلِكَ ٱلَّذِي
                    يَدُعُّ ٱلۡيَتِيمَ • وَلَا يَحُضُّ عَلَىٰ طَعَامِ
                    ٱلۡمِسۡكِينِ
                  </>
                ) : (
                  <>
                    &ldquo;Have you seen the one who denies the religion? It is
                    he who repels the orphan and does not encourage feeding the
                    poor.&rdquo;
                  </>
                )}
              </div>
              <div>
                {locale === "ar" ? (
                  <>
                    &ldquo;Have you seen the one who denies the religion? It is
                    he who repels the orphan and does not encourage feeding the
                    poor.
                    <br /> — Surah Al-Māʿūn (107:1-3)&rdquo;
                  </>
                ) : (
                  <>
                    أَرَأَيْتَ ٱلَّذِي يُكَذِّبُ بِٱلدِّينِ • فَذَٰلِكَ ٱلَّذِي
                    يَدُعُّ ٱلۡيَتِيمَ • وَلَا يَحُضُّ عَلَىٰ طَعَامِ
                    ٱلۡمِسۡكِينِ <br /> — Surah Al-Māʿūn (107:1-3)
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
