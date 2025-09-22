"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function DonateCryptoGuideSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const steps = [
    {
      number: "01",
      title:
        locale === "ar"
          ? "اختر محفظة العملات المشفرة الخاصة بك (إذا لم تكن تملك واحدة بعد)"
          : "Choose your crypto wallet (if you don't have one yet)",
      description:
        locale === "ar"
          ? "تحتاج إلى محفظة عملات مشفرة لإرسال العملات المشفرة - فكر فيها كحساب مصرفي رقمي."
          : "You need a crypto wallet to send crypto - think of it like a digital bank account.",
      recommendations:
        locale === "ar"
          ? ["Binance", "Trust Wallet", "Coinbase"]
          : ["Binance", "Trust Wallet", "Coinbase"],
      instructions:
        locale === "ar"
          ? "قم بتحميل أي منها واتبع تعليمات الإعداد السهلة (تماماً مثل إنشاء حساب بريد إلكتروني)."
          : "Download any of them and follow the easy setup instructions (just like creating an email account).",
    },
    {
      number: "02",
      title:
        locale === "ar" ? "اشتر العملات المشفرة بسهولة" : "Buy crypto easily",
      description:
        locale === "ar"
          ? "داخل تطبيق محفظة العملات المشفرة، يمكنك شراء العملات المشفرة باستخدام بطاقتك المصرفية أو عملتك المحلية."
          : "Inside your crypto wallet app, you can buy crypto with your bank card or local currency.",
      recommendations:
        locale === "ar"
          ? ["USDT (Tether) - مستقر وآمن", "BTC (Bitcoin)", "ETH (Ethereum)"]
          : [
              "USDT (Tether) - stable and safe",
              "BTC (Bitcoin)",
              "ETH (Ethereum)",
            ],
      tip:
        locale === "ar"
          ? "نصيحة: USDT هو الأكثر ملاءمة للمبتدئين لأن قيمته مستقرة - $1 من USDT = $1 من التبرع."
          : "Tip: USDT is the most beginner-friendly because its value is stable - $1 of USDT = $1 of donation.",
    },
    {
      number: "03",
      title: locale === "ar" ? "عد إلى هنا وتبرع!" : "Come back and donate!",
      description:
        locale === "ar"
          ? "الآن ببساطة عد إلى صفحة التبرع الخاصة بنا، اختر عملتك المشفرة، وأرسل تبرعك."
          : "Now simply return to our Donate page, select your crypto, and send your donation.",
      assurance:
        locale === "ar"
          ? "تصل إلينا خلال دقائق، آمنة ومضمونة."
          : "It reaches us within minutes, safe and secure.",
    },
  ];

  const safetyPoints = [
    locale === "ar"
      ? "نستخدم NOWPayments، معالج تبرعات موثوق عالمياً"
      : "We use NOWPayments, a world-trusted donation processor",
    locale === "ar"
      ? "لا وسطاء أو بنوك تؤخر أو تمنع تبرعك"
      : "No middlemen or banks delaying or blocking your donation",
    locale === "ar"
      ? "شفافية كاملة - يمكنك تتبع تبرعك على البلوك تشين"
      : "Full transparency - you can track your donation on the blockchain",
    locale === "ar"
      ? "فريقنا يراقب كل تبرع وارد في الوقت الفعلي"
      : "Our team monitors every incoming donation in real time",
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
        {/* Header Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Main Title */}
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 leading-tight">
                {locale === "ar" ? (
                  <>
                    كيفية التبرع
                    <br />
                    <span className="text-primary-dark">
                      باستخدام العملات المشفرة في
                    </span>
                    <br />
                    <span className="text-[#D99201] text-7xl md:text-8xl lg:text-9xl">
                      3
                    </span>
                    <br />
                    <span className="text-[#D99201]">خطوات بسيطة</span>
                  </>
                ) : (
                  <>
                    How to Donate
                    <br />
                    <span className="text-primary-dark">Using Crypto in</span>
                    <br />
                    <span className="text-[#D99201] text-7xl md:text-8xl lg:text-9xl">
                      3
                    </span>
                    <br />
                    <span className="text-[#D99201]">Simple Steps</span>
                  </>
                )}
              </h2>
            </div>

            {/* Right Side - Introduction */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-medium">
                  {locale === "ar"
                    ? "لا تقلق - الأمر أسهل مما تعتقد!"
                    : "No worries - it's easier than you think!"}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {locale === "ar" ? (
                    <>
                      في آبار الرحمة، نريد أن يكون العطاء سهلاً وآمناً ومتاحاً
                      عالمياً. لهذا نستخدم العملات المشفرة - تقنية موثوقة تسمح
                      لتبرعاتك بالوصول إلينا فوراً، أينما كنت.
                    </>
                  ) : (
                    <>
                      At Al-Rahmah Wells, we want giving to be easy, safe, and
                      globally accessible. That&apos;s why we use crypto - a
                      trusted technology that lets your donation reach us
                      instantly, no matter where you are.
                    </>
                  )}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {locale === "ar"
                    ? "إليك كيفية التبرع في 3 خطوات بسيطة فقط:"
                    : "Here's how to donate in just 3 simple steps:"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              className="bg-[#F4FAEE] rounded-2xl p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundImage: "url('/illustrations/noise.png')",
                backgroundSize: 1500,
              }}
            >
              {/* Step Number */}
              <div className="absolute bottom-0 right-0 text-[200px] text-gray-200 font-bold leading-none opacity-30 -mb-8 -mr-4">
                {step.number}
              </div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Recommendations */}
                {step.recommendations && (
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {step.recommendations.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Instructions or Tip */}
                {(step.instructions || step.tip) && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.instructions || step.tip}
                  </p>
                )}

                {/* Assurance for step 3 */}
                {step.assurance && (
                  <p className="text-sm text-green-600 font-medium mt-4">
                    {step.assurance}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Safety Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4 leading-tight">
                {locale === "ar" ? "لماذا هو آمن" : "Why it's safe"}
              </h3>
              <div className="w-16 h-1 bg-[#D99201] rounded-full"></div>
            </div>

            {/* Right Side - Safety Points */}
            <div data-aos="fade-up" data-aos-delay="700">
              <ul className="space-y-4">
                {safetyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#D99201] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
