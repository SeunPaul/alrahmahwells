"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsIntro() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section className="py-16 bg-[#F0F6E5]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {locale === "ar"
            ? "في الزوايا المنسية من غرب أفريقيا، جلبت تبرعاتكم أكثر من الماء النظيف - جلبت الحياة والكرامة والإيمان والأمل."
            : "Across the forgotten corners of West Africa, your donations have brought more than just clean water – they have brought life, dignity, faith, and hope."}
        </p>
        <p
          className="text-lg md:text-xl text-gray-700"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          {locale === "ar"
            ? "أدناه 7 مشاريع حقيقية أكملناها، بفضل سخاء أشخاص مثلك. كل واحد منها دليل على أن كل قطرة ماء، وكل فلس تبرعت به، وكل دعاء دعوته، مهم – ويغير الحياة إلى الأبد."
            : "Below are 7 real projects we've completed, thanks to the generosity of people like you. Each one stands as proof that every drop of water, every penny given, and every prayer made, counts – and changes lives forever."}
          <span className="text-primary-light font-semibold">
            {locale === "ar"
              ? " ويغير الحياة إلى الأبد."
              : " and changes lives forever."}
          </span>
        </p>
      </div>
    </section>
  );
}
