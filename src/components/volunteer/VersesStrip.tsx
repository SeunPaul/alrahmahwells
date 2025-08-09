"use client";

import { useLocale } from "@/i18n/utils";

export default function VersesStrip() {
  const locale = useLocale();
  return (
    <section className="py-16 md:py-20 bg-[#f4f7ec] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white/80 border border-[#dfe8cf] rounded-2xl p-6 md:p-8 shadow-sm rotate-[-3deg]">
            <p className="text-gray-700">
              {locale === "ar"
                ? "فويلٌ للمصلين الذين هم عن صلاتهم ساهون الذين هم يراؤون ويمنعون الماعون"
                : "Woe to those who pray, but are heedless of their prayer — those who make a show [of worship] and refuse small kindnesses."}
            </p>
            <p className="mt-4 text-sm text-gray-600">
              {locale === "ar"
                ? "— سورة الماعون (7:4)"
                : "— Surah Al‑Ma‘ūn (107:4‑7)"}
            </p>
          </div>

          <div className="bg-white/80 border border-[#dfe8cf] rounded-2xl p-6 md:p-8 shadow-sm rotate-[2deg]">
            <p className="text-gray-700">
              {locale === "ar"
                ? "وأقيموا الصلاة وآتوا الزكاة وأطيعوا الرسول لعلكم تُرحمون"
                : "And establish prayer and give zakah and obey the Messenger — that you may receive mercy."}
            </p>
            <p className="mt-4 text-sm text-gray-600">
              {locale === "ar"
                ? "— سورة النور (24:56)"
                : "— Surah An‑Nur (24:56)"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
