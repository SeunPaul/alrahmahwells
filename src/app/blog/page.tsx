"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function Blog() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === "ar" ? "المدونة" : "Blog"}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {locale === "ar"
              ? "أخبار وتحديثات من مشاريعنا"
              : "News and updates from our projects"}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">
              {locale === "ar"
                ? "محتوى الصفحة قيد التطوير"
                : "Page Content Coming Soon"}
            </h2>
            <p className="text-gray-600">
              {locale === "ar"
                ? "سيتم إضافة محتوى هذه الصفحة قريباً"
                : "This page content will be added soon"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
