"use client";

import { useState } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function ContactFormSection() {
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="pt-30 sm:pt-50 md:pt-90 py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute -top-30 inset-x-5">
        <div className="overflow-hidden rounded-2xl max-w-6xl mx-auto max-h-96">
          <img
            src="/images/contact.jpg"
            alt={
              locale === "ar" ? "متطوعون حول بئر" : "Volunteers around a well"
            }
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-primary-light mb-4"
          >
            {locale === "ar" ? "أرسل لنا رسالة" : "Send Us A Message"}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-[#0D2F2B] font-semibold"
          >
            {locale === "ar"
              ? "سيرد عليك شخص من فريقنا خلال ٢٤-٤٨ ساعة، إن شاء الله."
              : "A human from our team will reply within 24-48 hours, inshaAllah."}
          </p>
        </div>

        {/* Contact Form Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white border border-[#EEF1E9] max-w-2xl mx-auto rounded-3xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {locale === "ar" ? "الاسم الكامل" : "Full Name"}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={
                  locale === "ar" ? "أدخل الاسم الكامل" : "Enter full name"
                }
                className="w-full px-4 py-3 border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none rounded-md transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {locale === "ar" ? "عنوان البريد الإلكتروني" : "Email address"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@alrahmah.com"
                className="w-full px-4 py-3 border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none rounded-md transition-colors"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {locale === "ar" ? "الموضوع" : "Subject"}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={locale === "ar" ? "اكتب هنا" : "Write here"}
                className="w-full px-4 py-3 border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none rounded-md transition-colors"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {locale === "ar" ? "رسالتك" : "Your Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder={locale === "ar" ? "اكتب هنا" : "Write here"}
                className="w-full px-4 py-3 border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none rounded-md transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-primary-dark hover:opacity-80 text-white font-semibold px-20 py-3 rounded-full transition-opacity cursor-pointer"
              >
                {locale === "ar" ? "إرسال" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
