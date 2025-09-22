"use client";

import { useLocale } from "@/i18n/utils";

export default function VersesStrip() {
  const locale = useLocale();
  return (
    <section className="py-10 bg-[#fff] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      <div
        style={{ backgroundImage: "url('/illustrations/mecca.png')" }}
        className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-center"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Boxes Container */}
        <div className="mb-5 sm:mb-20 sm:h-96 relative">
          {/* First Quote Box - Bottom Left */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="relative mb-10 sm:absolute left-0 bg-[#fff] rounded-[20px] p-4 sm:p-10 border-2 border-[#C0D793] sm:w-[60%] rotate-5 sm:translate-y-[200px] lg:translate-y-[150px] z-10"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute right-[100%] top-[50%] w-48 h-1 border-b-3 border-[#C0D793] border-dashed" />
            <div className="relative text-base md:text-lg text-center text-primary-light font-medium md:font-semibold leading-relaxed">
              <div className="mb-4 sm:mb-8">
                {locale === "ar" ? (
                  <>
                    إِنَّ ٱلۡمُصَّدِّقِينَ وَٱلۡمُصَّدِّقَـٰتِ وَأَقۡرَضُواْ
                    ٱللَّهَ قَرۡضًا حَسَنًا يُضَـٰعَفُ لَهُمۡ وَلَهُمۡ أَجۡرٞ
                    كَرِيمٞ
                  </>
                ) : (
                  <>
                    &ldquo;Indeed, those who give charity, men and women… it
                    will be multiplied for them, and they will have a noble
                    reward.&rdquo;
                  </>
                )}
              </div>
              <div>
                {locale === "ar" ? (
                  <>
                    Indeed, those who give charity, men and women… it will be
                    multiplied for them, and they will have a noble reward.
                    <br />— Surah Al-Hadid (57:18)
                  </>
                ) : (
                  <>
                    إِنَّ ٱلۡمُصَّدِّقِينَ وَٱلۡمُصَّدِّقَـٰتِ وَأَقۡرَضُواْ
                    ٱللَّهَ قَرۡضًا حَسَنًا يُضَـٰعَفُ لَهُمۡ وَلَهُمۡ أَجۡرٞ
                    كَرِيمٞ
                    <br />— Surah Al-Hadid (57:18)
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Second Quote Box - Top Right */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="relative sm:absolute right-0 bg-[#fff] rounded-[20px] p-4 sm:p-10 border-2 border-[#C0D793] sm:w-[60%] -rotate-3"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute left-[100%] top-[50%] w-48 h-1 border-b-3 border-[#C0D793] border-dashed" />
            <div className="relative text-base md:text-lg text-center text-primary-light font-medium md:font-semibold leading-relaxed">
              <div className="mb-2 sm:mb-8">
                {locale === "ar" ? (
                  <>
                    إِنَّ ٱللَّهَ مَعَ ٱلَّذِينَ ٱتَّقَوا۟ وَٱلَّذِينَ هُم
                    مُّحْسِنُونَ
                  </>
                ) : (
                  <>&ldquo;Indeed, Allah is with those who do good.&rdquo;</>
                )}
              </div>
              <div>
                {locale === "ar" ? (
                  <>
                    Indeed, Allah is with those who do good.
                    <br /> — Surah An-Nahl (16:128)
                  </>
                ) : (
                  <>
                    إِنَّ ٱللَّهَ مَعَ ٱلَّذِينَ ٱتَّقَوا۟ وَٱلَّذِينَ هُم
                    مُّحْسِنُونَ
                    <br /> — Surah An-Nahl (16:128)
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
