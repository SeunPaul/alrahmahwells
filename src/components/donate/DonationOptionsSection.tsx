"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/constants/assets";

export default function DonationOptionsSection() {
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
    // Handle donation logic here
    console.log("Donation amount:", amount);
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f5f0] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Subtle Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute top-20 left-20 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-light rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-8"
          >
            {locale === "ar"
              ? "تبرعك يفعل أكثر من مجرد إعطاء الماء"
              : "Your Donation Does More Than Give Water"}
          </h2>

          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="space-y-4 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
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
                  <span className="font-bold text-primary-dark">
                    Rahmah (mercy)
                  </span>
                  . This is{" "}
                  <span className="font-bold text-primary-dark">
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
              className="bg-[#f5f5dc] rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  {item.amount}
                </h3>
                <button
                  onClick={() => handleDonation(item.value)}
                  className="w-full bg-secondary-light text-white py-2 px-4 rounded-lg font-semibold text-sm md:text-base hover:bg-secondary-dark transition-colors"
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
            className="bg-primary-dark rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-xl transition-shadow"
          >
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                {locale === "ar" ? "تبرع مخصص" : "Custom Donation"}
              </h3>
              <button
                onClick={() => handleDonation("custom")}
                className="w-full bg-white text-primary-dark py-2 px-4 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors"
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
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="aspect-[16/9]">
            <img
              src={ASSETS.IMAGES.HOME.HOME_4}
              alt={
                locale === "ar"
                  ? "أطفال يجمعون الماء من الصنبور"
                  : "Children collecting water from tap"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
