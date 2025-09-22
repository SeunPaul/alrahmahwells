"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function ProjectsTrust() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Promise Statement */}

        {/* Title and Content Grid */}
        <div className="grid lg:grid-cols-[3fr_4fr] gap-2 lg:gap-12 items-start">
          {/* Left Column - Title */}
          <div className="relative">
            {/* Orange accent line */}
            <div className="w-34 h-1 bg-secondary-light mb-4"></div>

            {/* Title */}
            <h2
              data-aos="fade-right"
              className="text-3xl md:text-4xl lg:text-[56px] font-bold text-primary-light mb-8"
            >
              {locale === "ar" ? "وعدنا" : "OUR PROMISE"}
            </h2>
          </div>

          {/* Right Column - Promise Statement */}
          <div
            className="text-xl text-[#0D2F2B] leading-relaxed md:leading-[35px]"
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
              <span className="font-bold text-secondary-dark">
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
