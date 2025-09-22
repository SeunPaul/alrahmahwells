"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function DonateImpactSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const impactPoints = [
    locale === "ar"
      ? "تطفئ عطش آلاف الأشخاص الذين يعيشون في مجتمعات منسية وتنقذهم من الأمراض المميتة."
      : "You quench the thirst of thousands of people living in forgotten communities and save them from deadly diseases.",
    locale === "ar"
      ? "تمكن أعمال العبادة، وتساعد العائلات على أداء الوضوء والعودة إلى الصلاة اليومية بسلام وطهارة."
      : "You enable acts of worship, helping families perform ablution and return to daily prayers with peace and purity.",
    locale === "ar"
      ? "تعيد إشعال القيم الإسلامية، مما يجعل من الممكن للأطفال حضور المدارس الدينية دون عبء البحث عن الماء."
      : "You re-ignite Islamic values, making it possible for children to attend madrasas without the burden of water search.",
    locale === "ar"
      ? "تعيد الإيمان بالله من خلال كونك إجابة لدعاء آلاف المسلمين."
      : "You restore faith in Allah by being the answer to the Du'a of thousands of muslims.",
    locale === "ar"
      ? "تصبح مؤهلاً لعمرة/حج مدعوم بالكامل، بإذن من شركائنا في وكالات السفر السعودية."
      : "You become eligible for a fully sponsored Umrah/Hajj, courtesy of our Saudi travel agency partners.",
    locale === "ar"
      ? "تبني إرثاً في الجنة مع كل بئر كصدقة جارية - تحمل اسمك وتأثيرك لفترة طويلة بعد هذا العالم. إنه توقيعك للرحمة مكتوب على الأرض... ومُذكر في السماوات."
      : "You Build Legacies in Jannah with each well being a flowing charity (şadaqah jāriyah) – carrying your name, and your impact long after this world. It's your signature of mercy written on earth... and remembered in the heavens.",
  ];

  return (
    <section
      className="py-20 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div data-aos="fade-up">
            <div className="mb-6">
              <div className="w-16 h-1 bg-[#D99201] rounded-full mb-6"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
              {locale === "ar" ? (
                <>
                  لكل تبرع تقوم به،
                  <br />
                  هذا ما يحدث
                </>
              ) : (
                <>
                  For every donation
                  <br />
                  you make, this is
                  <br />
                  what happens
                </>
              )}
            </h2>
          </div>

          {/* Right Side - Impact Points */}
          <div data-aos="fade-up" data-aos-delay="200">
            <ul className="space-y-6">
              {impactPoints.map((point, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                  className="flex items-start"
                >
                  <div className="w-3 h-3 bg-[#D99201] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
