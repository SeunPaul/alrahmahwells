"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function Footer() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const getLocalizedPath = (path: string): string => {
    if (locale === "en") return path;
    return `/${locale}${path}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Top Section - Two Content Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Card: Walk with us */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              {locale === "ar"
                ? "امشِ معنا ونحن نخلق معجزات حقيقية"
                : "Walk with us as we create real miracles"}
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {locale === "ar"
                ? "كل مشروع هو شهادة أمل، دليل على أن الله رحيم بالفعل بالمحرومين، ونحن سعداء أن نكون أدوات رحمته لهم. امشِ معنا ونحن نشارك القصص المؤثرة وراء كل معجزة جعلها كل تبرع ممكنة."
                : "Every project is a testimony of hope, a proof that Allah is indeed merciful to the less privileged, and we&apos;re happy to be instruments of His Mercy to them. Walk with us as we share the touching stories behind every Miracle each donation made possible."}
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="example@alrahmah.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white/50"
              />
              <button className="px-6 py-3 bg-secondary-light hover:bg-secondary-dark text-white rounded-lg font-semibold transition-colors">
                {locale === "ar" ? "اشترك" : "Subscribe"}
              </button>
            </div>
          </div>

          {/* Right Card: Prayer Request */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              {locale === "ar"
                ? "تحمل عبئاً لا تستطيع مشاركته؟ دعنا نصلي من أجلك"
                : "Carrying a burden you can&apos;t share? Let us pray for you"}
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {locale === "ar"
                ? "يمكن أن تشعر الحياة بالغموض - عدم اليقين، الألم، أو الصراعات الصامتة التي لا تستطيع شرحها لأي شخص. في آبار الرحمة، نؤمن أنه لا يجب أن يعاني أي روح وحده. أرسل لنا طلبك بخصوصية، سنرفع حاجتك إلى الله في الصلاة، وستحصل على الإجابات التي تبحث عنها خلال 48 ساعة إن شاء الله."
                : "Life can feel overwhelming - uncertainty, pain, or silent struggles you can&apos;t explain to anyone. At Al-Rahmah Wells, we believe no soul should suffer alone. Send us your request privately, we&apos;ll raise your need to Allah in prayer, and you&apos;ll get the answers you seek within 48 hours Inshā' Allāh."}
            </p>
            <button className="px-6 py-3 bg-[#58761b] hover:bg-[#4a6218] text-white rounded-lg font-semibold transition-colors">
              {locale === "ar" ? "أرسل رسالة الآن" : "Send a message now"}
            </button>
          </div>
        </div>

        {/* Middle Section - Main Mission Statement */}
        <div className="text-center mb-16 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 border-2 border-white/30 rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Logo and Name */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-white/40 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-primary-dark">
                {locale === "ar" ? "آبار الرحمة" : "Al-Rahmah Wells"}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {locale === "ar" ? (
                <>
                  نحن نعيد الحياة إلى المجتمعات المنسية، حيث تخلت الحكومات عنها
                  <span className="text-secondary-light block mt-2">
                    - بئر واحد يعمل بالطاقة الشمسية في كل مرة
                  </span>
                </>
              ) : (
                <>
                  We are bringing life back to forgotten communities, where
                  governments have abandoned
                  <span className="text-secondary-light block mt-2">
                    -- one solar-powered well at a time
                  </span>
                </>
              )}
            </h2>

            {/* Sub-heading */}
            <p className="text-xl text-gray-200 mb-8">
              {locale === "ar"
                ? "ساعدنا في جعل هذا الحلم حقيقة"
                : "Help us make this a dream come true"}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getLocalizedPath("/donate") as any}
                className="px-8 py-4 bg-secondary-light hover:bg-secondary-dark text-white rounded-lg font-semibold text-lg transition-colors"
              >
                {locale === "ar" ? "تبرع الآن" : "Donate Now"}
              </Link>
              <Link
                href={getLocalizedPath("/our-impact") as any}
                className="px-8 py-4 bg-white text-primary-dark border-2 border-white rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                {locale === "ar" ? "شاهد تأثيرنا" : "See Our Impact"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Location */}
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                {locale === "ar"
                  ? "جدة، المملكة العربية السعودية"
                  : "Jeddah, Saudi Arabia"}
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <Link
                href={getLocalizedPath("/about-us") as any}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {locale === "ar" ? "من نحن" : "About us"}
              </Link>
              <Link
                href={getLocalizedPath("/volunteer") as any}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {locale === "ar" ? "تطوع" : "Volunteer"}
              </Link>
              <Link
                href={getLocalizedPath("/contact-us") as any}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {locale === "ar" ? "اتصل بنا" : "Contact us"}
              </Link>
              <Link
                href={getLocalizedPath("/blog") as any}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {locale === "ar" ? "المدونة" : "Blog"}
              </Link>
              <Link
                href={getLocalizedPath("/our-projects") as any}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {locale === "ar" ? "مشاريعنا" : "Our Projects"}
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-gray-300 text-sm">
              © {currentYear}{" "}
              {locale === "ar" ? "آبار الرحمة" : "AL-Rahmah Wells"}.{" "}
              {locale === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved."}
            </p>
          </div>

          {/* Large Logo */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
