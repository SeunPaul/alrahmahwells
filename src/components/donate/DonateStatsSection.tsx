"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function DonateStatsSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-16 bg-[#F5F5DC] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      {/* Background Number Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/illustrations/numbers-bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stats Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Large Number */}
          <div className="text-center lg:text-left">
            <div data-aos="fade-up" className="mb-8">
              <div className="text-[120px] md:text-[160px] lg:text-[200px] font-bold text-[#58761B] leading-none">
                16
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl text-[#58761B] font-medium -mt-4">
                {locale === "ar"
                  ? "قرية أخرى لا تزال تنتظر"
                  : "more villages still wait."}
              </div>
              <div className="text-lg md:text-xl text-gray-700 mt-2">
                {locale === "ar"
                  ? "عطشى. تصلي. تأمل."
                  : "Thirsting. Praying. Hoping."}
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                {locale === "ar" ? (
                  <>
                    في عام 2025، هدفنا هو توفير آبار نظيفة ومحمولة تعمل بالطاقة
                    الشمسية لـ{" "}
                    <span className="font-bold text-primary-dark">
                      20 مجتمعًا مهجورًا
                    </span>{" "}
                    في غرب أفريقيا.
                  </>
                ) : (
                  <>
                    In 2025, our goal is to provide clean, portable,
                    solar-powered wells to{" "}
                    <span className="font-bold text-primary-dark">
                      20 abandoned communities
                    </span>{" "}
                    in West Africa.
                  </>
                )}
              </p>

              <p>
                {locale === "ar" ? (
                  <>حتى الآن، لقد وصلنا إلى 4 فقط.</>
                ) : (
                  <>
                    So far, we&apos;ve touched only{" "}
                    <span className="font-bold text-primary-dark">4</span>.
                  </>
                )}
              </p>

              <p>
                {locale === "ar" ? (
                  <>
                    هذا يعني أن{" "}
                    <span className="font-bold text-primary-dark">
                      16 قرية أخرى
                    </span>{" "}
                    — مليئة بالأطفال وكبار السن والمصلين — الذين زرناهم
                    وقابلناهم ووعدناهم بحل لا يزالون ينتظرون بصبر بأمل كبير
                    لعودتنا، بينما يواصلون الشرب من البرك الموحلة، ويعانون من
                    أمراض مميتة، وغير قادرين على أداء الوضوء الصحيح.
                  </>
                ) : (
                  <>
                    That means{" "}
                    <span className="font-bold text-primary-dark">
                      16 more villages
                    </span>{" "}
                    — filled with children, elders, and worshippers — whom we
                    have visited, interviewed, and promised a solution still
                    wait patiently in high hope for our return, as they continue
                    to drink from muddy ponds, suffer deadly diseases, and
                    unable to make proper ablution.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Prophet Quote */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-4xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-dark mb-4 leading-relaxed">
              {locale === "ar" ? (
                <>
                  &ldquo;إن أحب الأعمال إلى الله التي تجلب الراحة لنفس
                  أخرى.&rdquo;
                </>
              ) : (
                <>
                  &ldquo;The most beloved of deeds to Allah are those that bring
                  relief to another soul.&rdquo;
                </>
              )}
            </blockquote>
            <cite className="text-lg md:text-xl text-gray-600">
              {locale === "ar" ? "— النبي محمد ﷺ" : "— Prophet Muhammad ﷺ"}
            </cite>
          </div>
        </div>

        {/* Quote Boxes */}
        <div className="relative mb-16">
          {/* First Quote Box - Left */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative mb-10 lg:absolute left-0 bg-white rounded-[20px] p-6 lg:p-8 border-2 border-[#D99201] lg:w-[45%] rotate-2 lg:translate-y-8 z-10 shadow-lg"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 1500,
            }}
          >
            <div className="text-base md:text-lg text-center text-[#905A01] font-medium leading-relaxed">
              <div className="mb-4">
                {locale === "ar" ? (
                  <>
                    &ldquo;الرحماء يرحمهم الرحمن. ارحموا من في الأرض يرحمكم من
                    في السماء.&rdquo;
                  </>
                ) : (
                  <>
                    &ldquo;The merciful are shown mercy by The Most Merciful. Be
                    merciful to those on the earth, and the One above the
                    heavens will have mercy upon you.&rdquo;
                  </>
                )}
              </div>
              <div className="text-sm md:text-base">
                {locale === "ar"
                  ? "— سنن الترمذي (١٩٢٤)"
                  : "> — Sunan al-Tirmidhi (1924)"}
              </div>
            </div>
          </div>

          {/* Second Quote Box - Right */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="relative lg:absolute right-0 bg-white rounded-[20px] p-6 lg:p-8 border-2 border-[#D99201] lg:w-[55%] -rotate-1 lg:translate-y-32 shadow-lg"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 1500,
            }}
          >
            <div className="text-base md:text-lg text-center text-[#905A01] font-medium leading-relaxed">
              <div className="mb-4">
                {locale === "ar" ? (
                  <>
                    &ldquo;ليس بمؤمن من بات شبعان وجاره جائع إلى جنبه وهو
                    يعلم.&rdquo;
                  </>
                ) : (
                  <>
                    &ldquo;He is not a believer whose stomach is filled while
                    the neighbor to his side goes hungry.&rdquo;
                  </>
                )}
              </div>
              <div className="text-sm md:text-base">
                {locale === "ar"
                  ? "— سنن الكبرى، البيهقي"
                  : "> — Sunan al-Kubra, Bayhaqi"}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-32 lg:mt-48">
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex flex-wrap justify-center gap-4 lg:gap-6"
          >
            {/* Photo 1 */}
            <div className="transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-48 h-64 lg:w-56 lg:h-72 bg-white p-3 shadow-lg rounded-lg">
                <img
                  src="/images/survival-1.png"
                  alt={
                    locale === "ar"
                      ? "طفل يحمل دلو ماء"
                      : "Child carrying water bucket"
                  }
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 2 */}
            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-48 h-64 lg:w-56 lg:h-72 bg-white p-3 shadow-lg rounded-lg">
                <img
                  src="/images/survival-2.png"
                  alt={
                    locale === "ar"
                      ? "امرأة تجلب الماء"
                      : "Woman fetching water"
                  }
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 3 */}
            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-48 h-64 lg:w-56 lg:h-72 bg-white p-3 shadow-lg rounded-lg">
                <img
                  src="/images/survival-3.png"
                  alt={
                    locale === "ar"
                      ? "أطفال يشربون الماء"
                      : "Children drinking water"
                  }
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 4 */}
            <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-48 h-64 lg:w-56 lg:h-72 bg-white p-3 shadow-lg rounded-lg">
                <img
                  src="/images/survival-4.png"
                  alt={locale === "ar" ? "طفلة تبتسم" : "Smiling child"}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
