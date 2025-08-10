"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsTrust() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 bg-[#F8F8F8] relative"
      dir={isRTL ? "rtl" : "ltr"}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="w-16 h-1 bg-[#D49B44] mb-4"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
              {locale === "ar" ? "وعدنا" : "OUR PROMISE"}
            </h3>
          </div>
          <div
            className="text-lg text-[#333333] leading-relaxed"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <p className="mb-4">
              {locale === "ar"
                ? "نحاسب على كل تبرع نستلمه بالتفاصيل. كل دولار يُستخدم لغرضه المقصود — مع الشفافية والتأثير في قلب كل ما نفعله."
                : "We account for every donation received with details. Every dollar is used for its intended purpose — with transparency and impact at the heart of all we do."}
            </p>
            <p className="mb-4">
              {locale === "ar"
                ? "هذه المشاريع دليل على أنه يمكنك الوثوق بنا لتحويل رحمتك إلى تغيير دائم."
                : "These projects are proof that "}
              <span className="font-bold text-[#D49B44]">
                {locale === "ar" ? "يمكنك الوثوق بنا" : "you can trust us"}
              </span>
              {locale === "ar"
                ? " لتحويل رحمتك إلى تغيير دائم."
                : " to turn your compassion into lasting change."}
            </p>
            <p>
              {locale === "ar"
                ? "وهذا مجرد البداية. معاً، يمكننا الوصول إلى مجتمعات أكثر، وشفاء قلوب أكثر، وجذب أرواح أكثر قرباً من الله — قطرة رحمة واحدة في كل مرة."
                : "And this is only the beginning. Together, we can reach many more communities, heal many more hearts, and draw many more souls closer to Allah — one drop of mercy at a time."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
