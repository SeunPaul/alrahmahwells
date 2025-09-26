"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function WhyJoinUs() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const reasons = [
    {
      titleEn: "Halal-Certified Mission",
      titleAr: "مهمة مُعتمدة شرعياً",
      textEn:
        "Work with a charity grounded in Islamic values, certified and fully compliant with faith‑based giving.",
      textAr:
        "اعمل مع مؤسسة خيرية راسخة على القيم الإسلامية، مُعتمدة ومتوافقة تماماً مع العطاء القائم على الإيمان.",
    },
    {
      titleEn: "Your Effort = Sadaaqah Jariyah",
      titleAr: "جهدك = صدقة جارية",
      textEn:
        "Every action you take counts as a reward that echoes long after you're gone.",
      textAr: "كل خطوة تقوم بها تُكتب لك أجراً يمتد طويلاً بعد رحيلك.",
    },
    {
      titleEn: "Be Part of Something Bigger",
      titleAr: "كن جزءاً من شيءٍ أكبر",
      textEn:
        "Join a global network of compassionate Muslims restoring dignity and hope to entire communities.",
      textAr:
        "انضم إلى شبكة عالمية من المسلمين أصحاب الرحمة لإعادة الكرامة والأمل للمجتمعات.",
    },
    {
      titleEn: "Real Impact, Real Feedback",
      titleAr: "أثرٌ حقيقي، وتغذية راجعة حقيقية",
      textEn:
        "See the tangible outcomes of your efforts through detailed updates and impact stories.",
      textAr: "اطّلع على نتائج جهدك الملموسة عبر تحديثات مفصلة وقصص أثر.",
    },
  ];

  const roles = [
    {
      titleEn: "On-Ground Support",
      titleAr: "الدعم الميداني",
      textEn:
        "Help with community outreach, logistics, or on-site borehole projects.",
      textAr:
        "ساعد في التواصل المجتمعي، واللوجستيات، أو المشاريع الميدانية للآبار.",
    },
    {
      titleEn: "Faith Ambassadors",
      titleAr: "سفراء الإيمان",
      textEn:
        "Mobilize your mosque, school, or local community to support our cause.",
      textAr: "حرّك مسجدك أو مدرستك أو مجتمعك المحلي لدعم رسالتنا.",
    },
    {
      titleEn: "Digital Da'wah",
      titleAr: "الدعوة الرقمية",
      textEn:
        "Use your personal social media platforms to share our mission, raise awareness, and inspire your followers to support the cause. Every post you make could be the reason someone gets clean water — and earns you continuous rewards.",
      textAr:
        "استخدم منصاتك الشخصية على وسائل التواصل الاجتماعي لمشاركة رسالتنا، وزيادة الوعي، وإلهام متابعيك لدعم القضية. كل منشور قد يكون سبباً في حصول شخص على ماء نظيف — ويجري لك الأجر المستمر.",
    },
  ];

  return (
    <section
      className="py-16 md:py-20 bg-primary-dark text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-8xl mx-auto pb-30 px-4 sm:px-6 lg:px-8 relative isolate">
        <img
          src="/illustrations/eid-transparent.png"
          alt="Why join us Background"
          className="absolute w-50 md:w-100 -top-15 right-0 -z-10"
        />
        <h2 className="text-center text-5xl md:text-6xl text-[#C8F4D1] font-bold mb-12">
          {locale === "ar" ? "لماذا تنضم إلينا" : "Why Join Us"}
        </h2>

        <div className="max-w-[1280px] mx-auto">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative overflow-x-scroll scrollbar-hide"
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {/* Dashed Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#447650] hidden md:block md:w-320" />

            {/* Entries */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8 relative border-l-2 border-dashed border-[#447650] ml-4 pl-4 md:ml-0 md:pl-0 md:border-none md:w-320">
              {reasons.map((r, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute top-2 -left-7 md:top-6 md:left-2 w-5 h-5 p-0.5 border bg-[#315238] border-[#659A71] rounded-full">
                    <div className="bg-[#659A71] w-full h-full rounded-full z-10" />
                  </div>

                  {/* Content */}
                  <div className="md:mt-15">
                    <h3 className="text-2xl font-bold mb-4">
                      {locale === "ar" ? r.titleAr : r.titleEn}
                    </h3>
                    <p className="text-[#C8F4D1] text-lg font-medium">
                      {locale === "ar" ? r.textAr : r.textEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-center text-4xl md:text-[56px] text-[#C8F4D1] font-bold max-w-150 mx-auto mt-25 mb-10">
          {locale === "ar"
            ? "أدوار التطوع التي يمكنك استكشافها"
            : "Volunteer Roles You Can Explore"}
        </h3>

        <div className=" max-w-5xl mx-auto space-y-6">
          {roles.map((r, idx) => (
            <div
              key={idx}
              className={`bg-[#416148] rounded-2xl px-6 md:px-10 py-6 md:py-8`}
            >
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-center">
                <h4 className="text-2xl md:text-3xl font-bold text-[#C8F4D1]">
                  {locale === "ar" ? r.titleAr : r.titleEn}
                </h4>
                <p className="md:col-span-2 text-white text-lg font-medium">
                  {locale === "ar" ? r.textAr : r.textEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
