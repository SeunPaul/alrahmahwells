"use client";

import React, { useState, useEffect, useRef } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

// Custom hook for counting animation with intersection observer
function useCountUp(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);

            const timer = setTimeout(() => {
              const startTime = Date.now();
              const startValue = 0;

              const updateCount = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(
                  startValue + (end - startValue) * easeOutQuart
                );

                setCount(currentCount);

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  setCount(end);
                }
              };

              requestAnimationFrame(updateCount);
            }, delay);

            return () => clearTimeout(timer);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Start slightly before the element comes into view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, delay, hasStarted]);

  return { count, elementRef };
}

export default function DonateStatsSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  // Use the custom hook for smooth counting animation
  const { count, elementRef } = useCountUp(16, 2000, 0);

  return (
    <section
      className="pb-16 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stats Content */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-2 mb-16">
          {/* Left Side - Large Number */}
          <div className="text-left">
            <div data-aos="fade-up" className="mb-8">
              <div
                ref={elementRef}
                className="text-[100px] lg:text-[120px] font-bold text-primary-light leading-none"
              >
                {count}
              </div>
              <div className="text-xl md:text-2xl text-[#0D2F2B] font-semibold">
                {locale === "ar"
                  ? "قرية أخرى لا تزال تنتظر"
                  : "more villages still wait."}
              </div>
              <div className="text-xl md:text-2xl text-[#0D2F2B] font-semibold">
                {locale === "ar"
                  ? "عطشى. تصلي. تأمل."
                  : "Thirsting. Praying. Hoping."}
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-2 md:space-y-6 text-lg md:text-xl text-[#0D2F2B] leading-loose">
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
                    solar-powered wells to 20{" "}
                    <span className="font-bold text-primary-dark">
                      abandoned communities
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

              <p className="font-bold">
                {locale === "ar" ? (
                  <>
                    &ldquo;إن أحب الأعمال إلى الله التي تجلب الراحة لنفس
                    أخرى.&rdquo; — النبي محمد ﷺ
                  </>
                ) : (
                  <>
                    &ldquo;The most beloved of deeds to Allah are those that
                    bring relief to another soul.&rdquo; — Prophet Muhammad ﷺ
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
            className="relative sm:absolute left-0 bg-[#F7FBF2] rounded-[20px] p-4 sm:py-8 sm:px-10 border-2 border-[#D3B88A] sm:w-[60%] rotate-[2deg] sm:translate-y-[200px] lg:translate-y-[160px] z-10"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute right-[100%] top-[50%] w-48 h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="text-base md:text-lg text-center text-secondary-dark font-medium md:font-semibold leading-relaxed">
              <div className="mb-8">
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

          {/* Second Quote Box - Top Right */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative sm:absolute right-0 bg-[#F7FBF2] rounded-[20px] p-4 sm:py-8 sm:px-10 border-2 border-[#D3B88A] sm:w-[60%] -rotate-3"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: 2000,
            }}
          >
            <div className="absolute left-[100%] top-[50%] w-48 h-1 border-b-3 border-[#D3B88A] border-dashed" />
            <div className="text-base md:text-lg text-center text-secondary-dark font-medium md:font-semibold leading-relaxed">
              <div className="mb-8">
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
        </div>

        {/* Marquee Image Grid */}
        <div className="max-w-6xl mx-auto overflow-hidden mt-8 pb-1">
          <div data-aos="fade-up" data-aos-delay="400">
            <div
              className="flex gap-2 items-center max-w-none animate-marquee"
              style={{
                animation: "marquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {/* Repeat images twice for seamless marquee */}
              {[...Array(2)].map((_, idx) => (
                <React.Fragment key={idx}>
                  {/* Image 1 - Child with container on head */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/survival-1.png"
                      alt={
                        locale === "ar"
                          ? "طفل يحمل حاوية على رأسه"
                          : "Child carrying container on head"
                      }
                      className="h-80 sm:h-100"
                    />
                  </div>
                  {/* Image 2 - Child in water */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/survival-2.png"
                      alt={locale === "ar" ? "طفل في الماء" : "Child in water"}
                      className="h-90 sm:h-120"
                    />
                  </div>
                  {/* Image 3 - Two children with basins */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/survival-3.png"
                      alt={
                        locale === "ar"
                          ? "طفلان يحملان أحواض"
                          : "Two children carrying basins"
                      }
                      className="h-90 sm:h-120"
                    />
                  </div>
                  {/* Image 4 - Child with metal pot */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/survival-4.png"
                      alt={
                        locale === "ar"
                          ? "طفل يحمل وعاء معدني"
                          : "Child carrying metal pot"
                      }
                      className="h-80 sm:h-100"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
            {/* Marquee animation keyframes */}
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
