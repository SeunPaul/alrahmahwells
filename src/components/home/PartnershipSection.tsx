"use client";

import { useTranslations, useLocale } from "@/i18n/utils";
import { rtlLocales } from "@/i18n/config";

export default function PartnershipSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as any);

  return (
    <section
      className="pt-10 pb-60 bg-primary-dark relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <img
        src="/illustrations/eid-transparent.png"
        alt="Partnership Section Background"
        className="absolute w-50 md:w-100 top-0 right-0"
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Title */}
        <div className="flex md:justify-center px-15">
          <h2
            data-aos="fade-up"
            className="text-[44px] md:text-6xl font-bold text-[#C8F4D1] leading-tight mb-4"
          >
            {locale === "ar" ? (
              "لماذا تتعاون معنا؟"
            ) : (
              <>
                Why Partner
                <br />
                With Us?
              </>
            )}
          </h2>
        </div>

        {/* Top Section - Three Cards */}
        <div className="grid md:grid-cols-3 items-end">
          {/* Card 1: 100% Halal Certified */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#459459] md:rounded-tr-[20px] md:h-130 flex flex-col justify-center p-8 xl:pl-20"
          >
            <img
              src="/icons/halal-badge.png"
              alt="Halal Certified"
              className="w-20 mb-8"
            />
            <h3 className="md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {locale === "ar" ? "١٠٠٪ معتمد حلال" : "100% Halal Certified"}
            </h3>
            <p className="text-white leading-relaxed font-medium lg:text-lg">
              {locale === "ar"
                ? "عملياتنا معتمدة حلال، متجذرة في المبادئ الإسلامية للنقاء والصدق والرحمة. عطاؤك محمي - للدنيا والآخرة."
                : "Our operations are halal-certified, rooted in Islamic principles of purity, honesty, and mercy. Your giving is safeguarded - for dunya and akhirah."}
            </p>
          </div>

          {/* Card 2: Every Penny Accounted For */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#B5FFC7] md:rounded-tr-[20px] md:h-115 flex flex-col justify-center p-8"
          >
            <img
              src="/icons/penny-badge.png"
              alt="Penny badge"
              className="w-16 mb-8"
            />
            <h3 className="text-3xl lg:text-4xl font-bold text-[#0D2F2B] mb-3 max-w-80">
              {locale === "ar" ? "كل فلس محسوب" : "Every Penny Accounted For"}
            </h3>
            <p className="text-[#0D2F2B] leading-relaxed font-medium lg:text-lg">
              {locale === "ar"
                ? "نحن نكرم ثقتك. احصل على تقارير واضحة ومفصلة تظهر بالضبط كيف يتم إنفاق تبرعك - لأنك تستحق أن ترى المعجزات التي تصنعها."
                : "We honor your trust. Receive clear, detailed reports showing exactly how your donation is spent - because you deserve to see the miracles you're making happen."}
            </p>
          </div>

          {/* Card 3: From Mercy to Mecca */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-[#EDFFC7] md:rounded-tr-[20px] md:h-110 flex flex-col justify-center p-8 xl:pr-20"
          >
            <img
              src="/icons/mecca-badge.png"
              alt="Mecca badge"
              className="w-14 mb-8"
            />
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1C1C1C] mb-3 max-w-70">
              {locale === "ar"
                ? "من الرحمة إلى مكة - ولاؤك مكافأ"
                : "From Mercy to Mecca - Your Loyalty, Rewarded"}
            </h3>
            <p className="text-[#1C1C1C] leading-relaxed font-medium lg:text-lg">
              {locale === "ar"
                ? "كل عام، نحن نكرم أكبر المتبرعين المخلصين برحلات عمرة وحج مدفوعة بالكامل، بإذن من شركائنا في وكالات السفر السعودية."
                : "Every year, we honor our top consistent donors with fully sponsored Umrah and Hajj trips, courtesy of our Saudi travel agency partners."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Bottom Section - Impact Text Blocks */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid md:grid-cols-2 gap-16 mb-16 bg-[#FFFFFF08] px-2 sm:px-8 lg:px-16 border-l-8 border-r-8 pt-16 lg:pt-20 pb-10 border-b-8 border-[#22572F] rounded-b-[20px]"
        >
          {/* Left Block: Trans-generational Impact */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {locale === "ar"
                ? "تأثير عبر الأجيال"
                : "Trans-generational Impact"}
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {locale === "ar"
                ? "تخيل الجيلين القادمين ينمون بصحة جيدة بسبب عمل رحمة واحد قمت به اليوم، هذا هو مدى تأثير صدقتك."
                : "Imagine the next two generations growing up healthy because of a single act of Mercy you made today, that's how far the impact of your Sadaqah can go."}
            </p>
          </div>

          {/* Right Block: Legacy */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {locale === "ar"
                ? "إرث مكتوب في الحجر وفي القلوب"
                : "A Legacy Written in Stone and in Hearts"}
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {locale === "ar"
                ? "سيتم نقش اسمك على كل بئر تعمل بالطاقة الشمسية ساعدت في إنشائها - شهادة خالدة للرحمة، مرئية على الأرض ومتذكرة في السماوات."
                : "Your name will be engraved on every solar powered well you helped create - a timeless testimony of mercy, visible on earth and remembered in the heavens."}
            </p>
          </div>
        </div>
      </div>

      {/* Image Strip - Bottom Section */}
      <div className="grid grid-cols-3 gap-4 absolute -bottom-30 z-20">
        {/* Image 1: Young girl drinking water */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-[4/3]">
            <img
              src="/images/home-5.jpg"
              alt={
                locale === "ar"
                  ? "طفلة تشرب الماء"
                  : "Young girl drinking water"
              }
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Image 2: Children around water pump */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-[4/3]">
            <img
              src="/images/home-6.jpg"
              alt={
                locale === "ar"
                  ? "أطفال حول مضخة مياه"
                  : "Children around water pump"
              }
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Image 3: Boy drinking from cupped hands */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-[4/3]">
            <img
              src="/images/home-7.jpg"
              alt={
                locale === "ar"
                  ? "طفل يشرب من يديه"
                  : "Boy drinking from cupped hands"
              }
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
