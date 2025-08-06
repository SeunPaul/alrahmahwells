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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf9f6] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Subtle Speckles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-20 left-20 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-32 left-32 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-16 left-40 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-24 left-60 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-40 left-80 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-60 left-20 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-80 left-40 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-100 left-60 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-30 right-30 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-50 right-50 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-60 right-60 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-70 right-70 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-80 right-80 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-90 right-90 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-100 right-100 w-1 h-1 bg-primary-light rounded-full"></div>

        {/* Large decorative pattern in bottom right */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-primary-light rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-primary-light rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-8 h-8 border-2 border-primary-light rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"
          >
            {locale === "ar" ? "أرسل لنا رسالة" : "Send Us A Message"}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-lg text-gray-700"
          >
            {locale === "ar"
              ? "سيرد عليك شخص من فريقنا خلال ٢٤-٤٨ ساعة، إن شاء الله."
              : "A human from our team will reply within 24–48 hours, inshaAllah."}
          </p>
        </div>

        {/* Contact Form Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
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
                className="w-full px-4 py-3 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none transition-colors"
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
                className="w-full px-4 py-3 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none transition-colors"
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
                className="w-full px-4 py-3 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none transition-colors"
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
                className="w-full px-4 py-3 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-dark text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors focus:ring-2 focus:ring-primary-light focus:ring-offset-2 outline-none"
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
