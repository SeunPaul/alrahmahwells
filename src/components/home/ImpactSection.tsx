"use client";

import { useTranslations, useLocale } from "@/i18n/utils";
import { rtlLocales } from "@/i18n/config";

export default function ImpactSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as any);

  return (
    <section
      className="pt-60 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section - Title and Slogan */}
        <div className="text-center mb-10">
          <p
            data-aos="fade-up"
            className="font-medium leading-4 w-max py-3 px-6 mx-auto bg-[#EAEDE6] text-[#0E1534] rounded-lg mb-4 flex items-center justify-center"
          >
            <span className="w-3 h-3 bg-secondary-light rounded-full mr-3"></span>
            <span>
              {locale === "ar" ? "تأثيرنا بالأرقام" : "OUR IMPACT IN NUMBERS"}
            </span>
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-18">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-bold text-primary-dark mb-8"
          >
            <div className="flex items-center justify-center text-primary-dark text-3xl md:text-5xl lg:text-6xl">
              <span>{locale === "ar" ? "كل قطرة" : "EVERY DROP"}</span>
              <span className="ml-3 text-blue-400 text-3xl md:text-5xl lg:text-6xl">
                💧
              </span>
            </div>
            <div className="mt-2 text-center text-primary-light text-4xl md:text-6xl lg:text-7xl">
              {locale === "ar" ? "قصة أمل" : "A STORY OF HOPE"}
            </div>
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl lg:text-2xl text-primary-dark font-medium max-w-2xl mx-auto text-center"
          >
            {locale === "ar"
              ? "كل رقم تراه هنا ليس مجرد إحصائية - إنه دعاء مستجاب، مجتمع محفوظ."
              : "Every number you see here is not just a statistic - it's a Du'a answered, a community saved."}
          </p>
        </div>

        {/* Middle Section - Statistics */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-16 relative">
          {/* Tag */}
          <span className="absolute left-1/2 -translate-x-1/2 -top-5 z-20 border border-primary-light text-primary-light bg-[#f1f5e8] px-8 py-2 rounded-full md:text-xl font-semibold text-nowrap">
            {locale === "ar"
              ? "أرقام حقيقية، حركة حقيقية"
              : "Real Numbers, Real Movement"}
          </span>

          {/* Statistics Box */}
          <div className="bg-[#f1f5e8] border border-[#C0CFAD] rounded-2xl p-8 pt-12 md:p-12 md:pt-18 relative">
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
              <img
                src="/illustrations/numbers-bg.png"
                alt="Numbers Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 z-10">
              {/* Stat 1: Solar Powered Wells */}
              <div className="text-center">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light mb-2"
                >
                  87
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">
                  {locale === "ar"
                    ? "بئر يعمل بالطاقة الشمسية"
                    : "Solar Powered Well installed"}
                </div>
              </div>

              {/* Stat 2: Communities */}
              <div className="text-center">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light mb-2"
                >
                  73
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">
                  {locale === "ar"
                    ? "مجتمع تم الوصول إليه"
                    : "Communities reached"}
                </div>
              </div>

              {/* Stat 3: Lives Touched */}
              <div className="text-center">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light mb-2"
                >
                  92,000+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">
                  {locale === "ar" ? "حياة تم لمسها" : "Lives touched"}
                </div>
              </div>

              {/* Stat 4: Umrah/Hajj Trips */}
              <div className="text-center">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light mb-2"
                >
                  46
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">
                  {locale === "ar"
                    ? "رحلة عمرة/حج مدعومة"
                    : "Umrah/Hajj trips sponsored"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Impact Photograph */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="aspect-[16/9]">
            <img
              src="/images/home-hero.jpg"
              alt={
                locale === "ar"
                  ? "مجتمع ريفي يشاهد عملية حفر البئر"
                  : "Rural community observing well drilling operation"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
