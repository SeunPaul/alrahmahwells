"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import React from "react";

export default function SurvivalStorySection() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="pt-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto overflow-hidden pb-1">
        {/* Title */}
        <div className="text-center mb-10">
          <p
            data-aos="fade-up"
            className="font-medium leading-4 w-max py-3 px-6 mx-auto bg-[#EAEDE6] text-[#0E1534] rounded-lg mb-4 flex items-center justify-center"
          >
            <span className="w-3 h-3 bg-primary-light rounded-full mr-3"></span>
            <span>
              {locale === "ar"
                ? "قصة حزينة عن البقاء"
                : "A SAD STORY OF SURVIVAL"}
            </span>
          </p>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-2xl text-gray-700 leading-relaxed text-center font-medium"
          >
            {locale === "ar" ? (
              <>
                في الزوايا المنسية من غرب أفريقيا، يستيقظ الأطفال الصغار قبل
                الفجر– ليس لمطاردة الأحلام، بل لمطاردة البقاء. يمشون أميالاً
                طويلة بأقدام عارية، آملاً في العثور على حتى بركة من الماء القذر.
                يفضلون العيش مع ألم الأمراض المنقولة بالمياه على الموت من العطش.
              </>
            ) : (
              <>
                In the forgotten corners of West Africa, little children wake
                before dawn - <i className="font-normal">not to chase dreams</i>
                ,{" "}
                <span className="text-secondary-dark font-semibold">
                  but to chase survival
                </span>
                . They walk long miles on bare feet, hoping to find even a
                puddle of dirty water. They&apos;d rather live with the pain of
                water-borne diseases than die of thirst.
              </>
            )}
          </p>
        </div>

        {/* Marquee Image Grid */}
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
    </section>
  );
}
