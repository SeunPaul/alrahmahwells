"use client";

import { useState } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

export default function DonateFAQSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const [openIndex, setOpenIndex] = useState(0);

  const faqItems: FAQItem[] = [
    {
      question:
        locale === "ar"
          ? "لم أستخدم العملات المشفرة من قبل. هل يمكنني التبرع؟"
          : "I've never used crypto before. Can I still donate?",
      answer:
        locale === "ar"
          ? "بالطبع! لقد جعلنا العملية بسيطة قدر الإمكان. إذا لم تستخدم العملات المشفرة من قبل، سنرشدك خطوة بخطوة - الأمر أسهل مما تعتقد. وفريقنا سعيد لمساعدتك إذا كان لديك أي أسئلة."
          : "Absolutely! We've made the process as simple as possible. If you've never used crypto before, we'll guide you step-by-step - it's easier than you think. And our team is happy to help if you have any questions.",
    },
    {
      question:
        locale === "ar"
          ? "هل التبرع بالعملات المشفرة آمن حقاً؟"
          : "Is donating with crypto really safe?",
      answer:
        locale === "ar"
          ? "نعم، آمن تماماً. نستخدم NOWPayments، وهو معالج تبرعات موثوق عالمياً. كل معاملة مسجلة على البلوك تشين، مما يعني أنها شفافة وقابلة للتتبع. لا توجد وسطاء أو بنوك يمكن أن تؤخر أو تمنع تبرعك."
          : "Yes, completely safe. We use NOWPayments, a world-trusted donation processor. Every transaction is recorded on the blockchain, meaning it's transparent and traceable. No middlemen or banks can delay or block your donation.",
    },
    {
      question:
        locale === "ar"
          ? "لماذا لا تقبلون المدفوعات العادية أيضاً (تحويلات بنكية، بطاقات)؟"
          : "Why not accept regular payments too (bank transfers, cards)?",
      answer:
        locale === "ar"
          ? "الأنظمة المصرفية التقليدية تأتي مع رسوم عالية، تأخير، وأحياناً فساد. العملات المشفرة تسمح لنا بالوصول إلى المجتمعات المنسية في جميع أنحاء العالم، والتحرك بسرعة في حالات الطوارئ، والبقاء شفافين تماماً."
          : "Traditional banking systems come with high fees, delays, and sometimes corruption. Crypto allows us to reach forgotten communities worldwide, move fast in emergencies, and stay completely transparent.",
    },
    {
      question:
        locale === "ar"
          ? "هل سأحصل على تأكيد لتبرعي؟"
          : "Will I receive a confirmation of my donation?",
      answer:
        locale === "ar"
          ? "نعم، ستحصل على تأكيد فوري عبر البريد الإلكتروني مع تفاصيل المعاملة. يمكنك أيضاً تتبع تبرعك على البلوك تشين باستخدام معرف المعاملة الفريد."
          : "Yes, you'll receive an instant email confirmation with transaction details. You can also track your donation on the blockchain using the unique transaction ID.",
    },
    {
      question:
        locale === "ar"
          ? "كيف ستُستخدم تبرعاتي بالعملات المشفرة؟"
          : "How will my crypto donation be used?",
      answer:
        locale === "ar"
          ? "تبرعاتك تذهب مباشرة إلى حفر الآبار الشمسية، الرعاية الطبية، وتوزيع القرآن في المجتمعات المنسية. كل معاملة شفافة ويمكن تتبعها على البلوك تشين. لا توجد رسوم مخفية أو وسطاء."
          : "Your donations go directly to drilling solar wells, medical care, and Quran distribution in forgotten communities. Every transaction is transparent and trackable on the blockchain. No hidden fees or middlemen.",
    },
    {
      question:
        locale === "ar"
          ? "هل التبرع بالعملات المشفرة جائز (حلال)؟"
          : "Is crypto donation permissible (halal)?",
      answer:
        locale === "ar"
          ? "نعم، التبرع بالعملات المشفرة جائز تماماً. العملات المشفرة هي مجرد وسيلة للتبادل، مثل النقود الرقمية. نحن نستخدمها لغرض خيري بحت - إيصال الماء النظيف والرعاية الطبية للمحتاجين."
          : "Yes, crypto donation is completely permissible. Cryptocurrency is just a medium of exchange, like digital money. We use it for purely charitable purposes - delivering clean water and medical care to those in need.",
    },
    {
      question:
        locale === "ar"
          ? "ما هي العملات المشفرة التي تقبلونها؟"
          : "What crypto coins do you accept?",
      answer:
        locale === "ar"
          ? "نقبل USDT (Tether)، BTC (Bitcoin)، و ETH (Ethereum). نوصي بـ USDT للمبتدئين لأنه مستقر - $1 من USDT = $1 من التبرع."
          : "We accept USDT (Tether), BTC (Bitcoin), and ETH (Ethereum). We recommend USDT for beginners because it's stable - $1 of USDT = $1 of donation.",
    },
    {
      question:
        locale === "ar"
          ? "ماذا لو كنت لا أزال غير متأكد؟"
          : "What if I still feel unsure?",
      answer:
        locale === "ar"
          ? "لا تقلق! فريقنا هنا لمساعدتك. يمكنك التواصل معنا وسنرشدك خلال العملية خطوة بخطوة. نحن نؤمن بأن العطاء يجب أن يكون سهلاً وآمناً للجميع."
          : "Don't worry! Our team is here to help. You can contact us and we'll walk you through the process step-by-step. We believe giving should be easy and safe for everyone.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight"
          >
            {locale === "ar" ? (
              <>
                الأسئلة الشائعة
                <br />
                <span className="text-primary-dark">
                  حول تبرعاتنا بالعملات المشفرة فقط
                </span>
              </>
            ) : (
              <>
                FAQ
                <br />
                <span className="text-primary-dark">
                  About Our Crypto-Only Donations
                </span>
              </>
            )}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              className="bg-[#F4FAEE] rounded-2xl border border-[#D6E0CB] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F0F6E5] transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-primary-dark pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#F4FAEE] rounded-full flex items-center justify-center border border-[#D6E0CB]">
                    {openIndex === index ? (
                      <svg
                        className="w-4 h-4 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
