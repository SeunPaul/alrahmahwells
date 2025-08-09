"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function WhyJoinUs() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const reasons = [
    {
      titleEn: "Halal‑Certified Mission",
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
      titleEn: "On‑Ground Support",
      titleAr: "الدعم الميداني",
      textEn:
        "Help with community outreach, logistics, or on‑site borehole projects.",
      textAr:
        "ساعد في التواصل المجتمعي، واللوجستيات، أو المشاريع الميدانية للآبار.",
      color: "bg-[#33503d]",
    },
    {
      titleEn: "Faith Ambassadors",
      titleAr: "سفراء الإيمان",
      textEn:
        "Mobilize your mosque, school, or local community to support our cause.",
      textAr: "حرّك مسجدك أو مدرستك أو مجتمعك المحلي لدعم رسالتنا.",
      color: "bg-[#2f4737]",
    },
    {
      titleEn: "Digital Da’wah",
      titleAr: "الدعوة الرقمية",
      textEn:
        "Use your personal social platforms to share our mission and inspire support. Every post may help someone get clean water — and earns you continuous rewards.",
      textAr:
        "استخدم منصاتك الشخصية لنشر رسالتنا وإلهام الدعم. كل منشور قد يكون سبباً لوصول ماءٍ نظيف إلى شخص — ويجري لك الأجر.",
      color: "bg-[#2b3f31]",
    },
  ];

  return (
    <section
      className="py-16 md:py-20 bg-[#0f2b1f] text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold mb-12">
          {locale === "ar" ? "لماذا تنضم إلينا" : "Why Join Us"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((r, idx) => (
            <div key={idx} className="">
              <h3 className="text-xl font-semibold mb-2">
                {locale === "ar" ? r.titleAr : r.titleEn}
              </h3>
              <p className="text-white/80">
                {locale === "ar" ? r.textAr : r.textEn}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-center text-3xl md:text-4xl font-extrabold mb-10">
          {locale === "ar"
            ? "أدوار التطوع التي يمكنك استكشافها"
            : "Volunteer Roles You Can Explore"}
        </h3>

        <div className="space-y-6">
          {roles.map((r, idx) => (
            <div
              key={idx}
              className={`${r.color} rounded-2xl px-6 md:px-10 py-6 md:py-8`}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <h4 className="text-xl md:text-2xl font-semibold">
                  {locale === "ar" ? r.titleAr : r.titleEn}
                </h4>
                <p className="md:col-span-2 text-white/85">
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
