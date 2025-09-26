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
  const [selectedCrypto, setSelectedCrypto] = useState("usdt");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cryptoOptions = [
    {
      value: "usdt",
      label: "USDT (Tether)",
      description: locale === "ar" ? "مستقر وآمن" : "Stable & Safe",
    },
    {
      value: "btc",
      label: "BTC (Bitcoin)",
      description: locale === "ar" ? "الأكثر شعبية" : "Most Popular",
    },
    {
      value: "eth",
      label: "ETH (Ethereum)",
      description: locale === "ar" ? "سريع وآمن" : "Fast & Secure",
    },
    {
      value: "sol",
      label: "SOL (Solana)",
      description: locale === "ar" ? "سريع جداً" : "Ultra Fast",
    },
    {
      value: "xrp",
      label: "XRP (Ripple)",
      description: locale === "ar" ? "منخفض التكلفة" : "Low Cost",
    },
  ];

  const handleDonation = async () => {
    if (!donationAmount || !donorEmail) {
      alert(
        locale === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill in all required fields"
      );
      return;
    }

    setIsLoading(true);

    try {
      // Create donation data
      const donationData = {
        amount: parseFloat(donationAmount),
        currency: selectedCrypto.toUpperCase(),
        donor_name: donorName,
        donor_email: donorEmail,
        description:
          locale === "ar"
            ? "تبرع لآبار الرحمة - مياه نظيفة للمجتمعات المنسية"
            : "Donation to Al-Rahmah Wells - Clean water for forgotten communities",
      };

      // Call your API endpoint to create payment
      const response = await fetch("/api/create-crypto-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();

      if (result.success && result.payment_url) {
        // Redirect to NOWPayments
        window.location.href = result.payment_url;
      } else {
        throw new Error(result.error || "Payment creation failed");
      }
    } catch (error) {
      console.error("Donation error:", error);
      alert(
        locale === "ar"
          ? "حدث خطأ في إنشاء التبرع. يرجى المحاولة مرة أخرى."
          : "Error creating donation. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
              min="1"
              step="0.01"
            />
          </div>

          {/* Cryptocurrency Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === "ar"
                ? "اختر العملة المشفرة"
                : "Select Cryptocurrency"}{" "}
              *
            </label>
            <div className="space-y-2">
              {cryptoOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedCrypto === option.value
                      ? "border-primary-dark bg-primary-dark/5"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="crypto"
                    value={option.value}
                    checked={selectedCrypto === option.value}
                    onChange={(e) => setSelectedCrypto(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {option.description}
                    </div>
                  </div>
                  {selectedCrypto === option.value && (
                    <svg
                      className="w-5 h-5 text-primary-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </label>
              ))}
            </div>
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
              disabled={isLoading || !donationAmount || !donorEmail}
              className="flex-1 px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {locale === "ar" ? "جاري المعالجة..." : "Processing..."}
                </div>
              ) : locale === "ar" ? (
                "تبرع الآن"
              ) : (
                "Donate Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
