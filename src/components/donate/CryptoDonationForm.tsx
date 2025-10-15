"use client";

import { useState } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

interface CryptoDonationFormProps {
  onClose: () => void;
  initialAmount?: number;
}

export default function CryptoDonationForm({
  onClose,
  initialAmount,
}: CryptoDonationFormProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const [donationAmount, setDonationAmount] = useState(
    initialAmount?.toString() || ""
  );
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const handleDonation = () => {
    if (!donationAmount || !donorEmail) {
      alert(
        locale === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill in all required fields"
      );
      return;
    }

    // Get the donation link from environment variable
    const donationLink =
      "https://nowpayments.io/donation?api_key=d1cbfbbd-9d68-44c5-b0bb-145d524accbf";

    if (!donationLink) {
      alert(
        locale === "ar"
          ? "رابط التبرع غير متوفر حالياً. يرجى المحاولة لاحقاً."
          : "Donation link is not available at the moment. Please try again later."
      );
      return;
    }

    // Redirect directly to the donation link
    window.location.href = donationLink;
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary-dark">
              {locale === "ar" ? "تبرع بالعملات المشفرة" : "Crypto Donation"}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Donation Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === "ar" ? "مبلغ التبرع (USD)" : "Donation Amount (USD)"}{" "}
              *
            </label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder={locale === "ar" ? "أدخل المبلغ" : "Enter amount"}
              className="text-black dark:text-black placeholder:text-gray-500 dark:placeholder:text-gray-500 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-dark focus:border-transparent"
              min="1"
              step="0.01"
            />
          </div>

          {/* Donor Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === "ar"
                ? "اسم المتبرع (اختياري)"
                : "Donor Name (Optional)"}
            </label>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your name"}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === "ar" ? "البريد الإلكتروني" : "Email Address"} *
            </label>
            <input
              type="email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              placeholder={
                locale === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
              required
            />
          </div>

          {/* Security Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm text-green-800">
                <p className="font-medium mb-1">
                  {locale === "ar" ? "آمن ومضمون" : "Secure & Protected"}
                </p>
                <p>
                  {locale === "ar"
                    ? "نستخدم NOWPayments لمعالجة تبرعاتك بأمان. كل معاملة مسجلة على البلوك تشين."
                    : "We use NOWPayments to securely process your donations. Every transaction is recorded on the blockchain."}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {locale === "ar" ? "إلغاء" : "Cancel"}
            </button>
            <button
              onClick={handleDonation}
              disabled={!donationAmount || !donorEmail}
              className="flex-1 px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {locale === "ar" ? "تبرع الآن" : "Donate Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
