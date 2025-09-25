"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/constants/assets";

interface DonationOptionsSectionProps {
  onDonateClick?: (amount: number | string) => void;
}

export default function DonationOptionsSection({
  onDonateClick,
}: DonationOptionsSectionProps) {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const donationAmounts = [
    { amount: "$25", value: 25 },
    { amount: "$50", value: 50 },
    { amount: "$100", value: 100 },
    { amount: "$200", value: 200 },
    { amount: "$500", value: 500 },
    { amount: "$1,000", value: 1000 },
    { amount: "$5,000", value: 5000 },
    { amount: "$10,000", value: 10000 },
    { amount: "$20,000", value: 20000 },
  ];

  const handleDonation = (amount: number | string) => {
    if (onDonateClick) {
      onDonateClick(amount);
    } else {
      // Fallback behavior - just log for now
      console.log("Donation amount:", amount);
    }
  };

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
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-light mb-8 max-w-4xl mx-auto leading-tight"
          >
            {locale === "ar"
              ? "تبرعك يفعل أكثر من مجرد إعطاء الماء"
              : "Your Donation Does More Than Give Water"}
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-1 text-lg md:text-xl text-[#0D2F2B] font-medium max-w-4xl mx-auto"
          >
            <p>
              {locale === "ar"
                ? "إنه يحيي الإيمان. يمنع الأمراض. يتيح الوضوء والصلاة والاتصال بالله."
                : "It revives faith. It prevents diseases. It enables wudu, salah, and connection to Allah."}
            </p>
            <p>
              {locale === "ar" ? (
                <>
                  هذا ليس مجرد ماء. هذا{" "}
                  <span className="font-bold text-primary-dark">رحمة</span>. هذا{" "}
                  <span className="font-bold text-primary-dark">
                    صدقة جارية
                  </span>
                  .
                </>
              ) : (
                <>
                  This is not just water. This is{" "}
                  <span className="font-bold text-primary-dark">Rahmah</span>{" "}
                  (mercy). This is{" "}
                  <span className="font-bold text-secondary-dark">
                    Sadaqah Jāriyah
                  </span>
                  .
                </>
              )}
            </p>
          </div>
        </div>

        {/* Donation Options Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16"
        >
          {/* Standard Donation Cards */}
          {donationAmounts.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
              className="relative bg-[#EDF4E5] rounded-xl p-4 border border-[#C0CFAD]"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: "url('/illustrations/numbers-bg.png')",
                  backgroundSize: 1000,
                }}
              />
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary-light mb-4">
                  {item.amount}
                </h3>
                <button
                  onClick={() => handleDonation(item.value)}
                  className="bg-secondary-light text-white py-1.5 px-4 rounded-[24px] font-semibold text-xs md:text-sm hover:opacity-80 transition-colors"
                >
                  {locale === "ar" ? "تبرع الآن" : "Donate Now"}
                </button>
              </div>
            </div>
          ))}

          {/* Custom Donation Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            className="bg-primary-light rounded-xl p-4"
          >
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                {locale === "ar" ? "تبرع مخصص" : "Custom Donation"}
              </h3>
              <button
                onClick={() => handleDonation("custom")}
                className="bg-white text-secondary-light py-1.5 px-4 rounded-[24px] font-semibold text-xs md:text-sm hover:opacity-80 transition-colors"
              >
                {locale === "ar" ? "تبرع الآن" : "Donate Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="1400"
          className="relative overflow-hidden"
        >
          <div className="overflow-hidden rounded-2xl max-w-6xl mx-auto max-h-110">
            <img
              src="/images/donate.jpg"
              alt={
                locale === "ar" ? "متطوعون حول بئر" : "Volunteers around a well"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
