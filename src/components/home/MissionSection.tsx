"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function MissionSection() {
  
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const getLocalizedPath = (path: string) => {
    if (locale === "en") return path;
    return `/${locale}${path}`;
  };

  return (
    <section
      className="py-18 px-4 sm:px-6 lg:px-8  bg-[#F0F6E5]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[3fr_4fr] md:gap-28 items-start">
          {/* Left Column - Title */}
          <div className="md:order-1">
            <div className="relative">
              {/* Orange accent line */}
              <div className="w-34 h-1 bg-secondary-light mb-4"></div>

              {/* Title */}
              <h2
                data-aos="fade-right"
                className="text-3xl md:text-4xl lg:text-[56px] font-bold text-primary-light mb-8"
              >
                {locale === "ar" ? "مهمتنا" : "OUR MISSION"}
              </h2>
            </div>
          </div>

          {/* Right Column - Text and Buttons */}
          <div className="md:order-2">
            {/* Descriptive Text */}
            <div className="mb-10">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed"
              >
                {locale === "ar" ? (
                  <>
                    الماء النظيف ليس امتيازاً - إنه حق مقدس منحه الله. لا يجب أن
                    يعاني أي روح أو يهلك بسبب نقصه. من خلال رحمتك وكرمك، نحن
                    نعيد الحياة إلى المجتمعات المنسية، حيث تخلى عنها الحكومات -{" "}
                    <span className="text-secondary-dark font-semibold">
                      بئر واحد يعمل بالطاقة الشمسية في كل مرة
                    </span>
                  </>
                ) : (
                  <>
                    Clean water is not a privilege - it is a sacred right given
                    by Allah. No soul should suffer or perish for the lack of
                    it. Through your mercy and generosity, we are bringing life
                    back to forgotten communities, where governments have
                    abandoned --{" "}
                    <span className="text-secondary-dark font-semibold">
                      one solar-powered well at a time
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={getLocalizedPath("/volunteer") as any}
                className="px-8 py-3 bg-primary-dark text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                {locale === "ar" ? "انضم إلى الحركة" : "Join The Movement"}
              </Link>

              <Link
                href={getLocalizedPath("/our-impact") as any}
                className="px-8 py-3 bg-primary-light text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                {locale === "ar" ? "شاهد تأثيرنا" : "See Our Impact"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
