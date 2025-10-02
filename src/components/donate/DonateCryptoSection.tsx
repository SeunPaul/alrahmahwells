"use client";

import { useState } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import CryptoDonationForm from "./CryptoDonationForm";

interface DonateCryptoSectionProps {
  onDonateClick?: () => void;
}

export default function DonateCryptoSection({
  onDonateClick,
}: DonateCryptoSectionProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);
  const [showCryptoForm, setShowCryptoForm] = useState(false);

  const reasons = [
    {
      title:
        locale === "ar"
          ? "الوصول العالمي بدون حدود"
          : "Global Reach Without Borders",
      description:
        locale === "ar"
          ? "تزيل العملات المشفرة حواجز الجغرافيا وتبادل العملات والأنظمة المصرفية. سواء كنت في الشرق الأوسط، أوروبا، آسيا أو أفريقيا، تصل تبرعاتك إلينا فوراً وبدون حدود - لا تأخير مصرفي، لا وسطاء، لا رسوم إضافية."
          : "Crypto removes the barriers of geography, currency exchange, and banking systems. Whether you're in the Middle East, Europe, Asia or Africa, your donation reaches us instantly and without limits - no bank delays, no middlemen, no extra charges.",
    },
    {
      title:
        locale === "ar"
          ? "الحرية من الفساد والرسوم المخفية"
          : "Freedom from Corruption & Hidden Cuts",
      description:
        locale === "ar"
          ? "الأنظمة التقليدية غالباً ما تأتي مع أيدي كثيرة في الوعاء - رسوم، وسطاء، وأحياناً حتى فساد. مع العملات المشفرة، تذهب تبرعاتك مباشرة إلى القضية، وليس إلى جيوب الأطراف الثالثة."
          : "Traditional systems often come with too many hands in the pot - fees, intermediaries, and sometimes even corruption. With crypto, your donation goes straight to the cause, not into the pockets of third parties.",
    },
    {
      title:
        locale === "ar"
          ? "الشفافية والمساءلة التي لا مثيل لها"
          : "Unmatched Transparency & Accountability",
      description:
        locale === "ar"
          ? "كل معاملة مسجلة على البلوك تشين – عامة، قابلة للتتبع، ومقاومة للتلاعب. ستعرف متى تصل تبرعاتك وكيف تُستخدم. هذه مساءلة لا يستطيع أي نظام تقليدي أن يضاهيها."
          : "Every transaction is recorded on the blockchain - public, traceable, and tamper-proof. You'll know when your donation lands and how it's used. That's accountability no traditional system can match.",
    },
    {
      title:
        locale === "ar" ? "السرعة التي تنقذ الأرواح" : "Speed That Saves Lives",
      description:
        locale === "ar"
          ? "في حالات الطوارئ، يمكن للتأخير أن يكلف أرواحاً. تصل العملات المشفرة في دقائق، وليس أياماً. هذا يعني أنه يمكننا حفر بئر، إرسال فريق، أو تقديم إغاثة في الوقت المناسب تماماً."
          : "In emergencies, delays can cost lives. Crypto arrives in minutes, not days. It means we can dig a borehole, send a team, or provide relief right when it's needed most.",
    },
    {
      title:
        locale === "ar"
          ? "إنه المستقبل - ونحن نستخدمه للخير"
          : "It's the Future - and We're Using It for Good",
      description:
        locale === "ar"
          ? "كثير من الناس يرون العملات المشفرة مجرد تقنية. نحن نراها أداة للرحمة. طريقة لمحاربة الظلم، تجاوز البيروقراطية، وتمكين الناس العاديين من إحداث تأثير بدون تأخير."
          : "Many people see crypto as just tech. We see it as a tool for mercy. A way to fight injustice, bypass bureaucracy, and empower everyday people to make impact without delay.",
    },
  ];

  return (
    <section
      className="py-20 bg-[#1a3f22] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/illustrations/lines.png')",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-start">
            {/* Left Side - Main Title */}
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {locale === "ar"
                  ? "لماذا نقبل فقط تبرعات العملات المشفرة"
                  : "Why We Only Accept Crypto Donations"}
              </h2>
            </div>

            {/* Right Side - Introduction */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg md:text-xl text-[#C8F4D1] leading-relaxed">
                {locale === "ar" ? (
                  <>
                    في مؤسسة آبار الرحمة، مهمتنا عاجلة - وحاجتنا للعمل بسرعة
                    أيضاً. اخترنا العملات المشفرة لأنها تسمح لنا بالتحرك بسرعة
                    أكبر، والوصول إلى أبعد، والبقاء شفافين تماماً. إليك لماذا
                    تبنينا هذه التقنية القوية:
                  </>
                ) : (
                  <>
                    At Al-Rahmah Wells Charity, our mission is urgent - and so
                    is our need to act fast. We chose cryptocurrency because it
                    allows us to move faster, reach farther, and stay fully
                    transparent. Here&apos;s why we&apos;ve embraced this
                    powerful technology:
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Reasons Cards */}
        <div className="space-y-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              className="bg-[#2a4f32] rounded-2xl p-8 hover:bg-[#2f5a37] transition-colors duration-300"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Title */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#C8F4D1] mb-4">
                    {reason.title}
                  </h3>
                </div>

                {/* Right Column - Description */}
                <div>
                  <p className="text-lg text-white leading-relaxed">
                    {reason.description.split("**").map((part, partIndex) =>
                      partIndex % 2 === 1 ? (
                        <strong
                          key={partIndex}
                          className="text-[#D99201] font-semibold"
                        >
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Statement and CTA */}
        <div className="text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Statement */}
            <div data-aos="fade-up" data-aos-delay="800" className="mb-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    لم نختار العملات المشفرة لأنها موضة. اخترناها لأنها تعطينا
                    القوة للعمل بسرعة، والبقاء صادقين، والخدمة بشكل أفضل.
                  </>
                ) : (
                  <>
                    We didn&apos;t choose crypto because it&apos;s trendy. We
                    chose it because it gives us power to act fast, stay honest,
                    and serve better.
                  </>
                )}
              </h3>
            </div>

            {/* Support Text */}
            <div data-aos="fade-up" data-aos-delay="900" className="mb-12">
              <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
                {locale === "ar" ? (
                  <>
                    إذا لم تستخدم العملات المشفرة من قبل، لا تقلق - لقد جعلنا
                    الأمر سهلاً عليك. وإذا كان لديك أسئلة، نحن هنا للمساعدة.
                    مستعد للعطاء؟
                  </>
                ) : (
                  <>
                    If you&apos;ve never used crypto before, don&apos;t worry –
                    we&apos;ve made it easy for you. And if you still have
                    questions, we&apos;re here to help. Ready to give?
                  </>
                )}
              </p>
            </div>

            {/* Call to Action Button */}
            <div data-aos="fade-up" data-aos-delay="1000">
              <button
                onClick={() => {
                  if (onDonateClick) {
                    onDonateClick();
                  } else {
                    setShowCryptoForm(true);
                  }
                }}
                className="bg-[#D99201] hover:bg-[#B8780D] text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {locale === "ar"
                  ? "تبرع بالعملات المشفرة الآن"
                  : "Donate In Crypto Now"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Donation Form Modal */}
      {showCryptoForm && (
        <CryptoDonationForm onClose={() => setShowCryptoForm(false)} />
      )}
    </section>
  );
}
