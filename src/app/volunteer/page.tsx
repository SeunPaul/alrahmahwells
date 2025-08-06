"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function Volunteer() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === "ar" ? "تطوع معنا" : "Volunteer With Us"}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {locale === "ar"
              ? "انضم إلينا في مهمتنا لتوفير المياه النظيفة للمجتمعات المحتاجة"
              : "Join us in our mission to provide clean water to communities in need"}
          </p>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              {locale === "ar" ? "فرص التطوع" : "Volunteer Opportunities"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === "ar"
                ? "نحتاج إلى متطوعين متحمسين لمساعدتنا في تحقيق مهمتنا"
                : "We need passionate volunteers to help us achieve our mission"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">
                {locale === "ar" ? "التوعية والتعليم" : "Awareness & Education"}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {locale === "ar"
                  ? "ساعد في تثقيف المجتمعات حول أهمية المياه النظيفة والصرف الصحي"
                  : "Help educate communities about the importance of clean water and sanitation"}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  • {locale === "ar" ? "عقد ورش عمل" : "Conduct workshops"}
                </li>
                <li>
                  •{" "}
                  {locale === "ar"
                    ? "إنشاء مواد تعليمية"
                    : "Create educational materials"}
                </li>
                <li>
                  •{" "}
                  {locale === "ar"
                    ? "التواصل مع المدارس"
                    : "Engage with schools"}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">
                {locale === "ar" ? "إدارة المشاريع" : "Project Management"}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {locale === "ar"
                  ? "ساعد في تنسيق وإدارة مشاريع بناء الآبار"
                  : "Help coordinate and manage well construction projects"}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  • {locale === "ar" ? "تنسيق الموارد" : "Coordinate resources"}
                </li>
                <li>
                  • {locale === "ar" ? "متابعة التقدم" : "Track progress"}
                </li>
                <li>
                  •{" "}
                  {locale === "ar"
                    ? "التواصل مع الشركاء"
                    : "Communicate with partners"}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">
                {locale === "ar" ? "التواصل المجتمعي" : "Community Outreach"}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {locale === "ar"
                  ? "ساعد في بناء علاقات مع المجتمعات المحلية"
                  : "Help build relationships with local communities"}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• {locale === "ar" ? "زيارات ميدانية" : "Field visits"}</li>
                <li>• {locale === "ar" ? "استطلاعات الرأي" : "Surveys"}</li>
                <li>
                  •{" "}
                  {locale === "ar"
                    ? "التواصل مع القادة المحليين"
                    : "Engage with local leaders"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              {locale === "ar" ? "تطبيق التطوع" : "Volunteer Application"}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === "ar"
                ? "املأ النموذج أدناه للتطوع معنا"
                : "Fill out the form below to volunteer with us"}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {locale === "ar" ? "الاسم الكامل" : "Full Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {locale === "ar" ? "رقم الهاتف" : "Phone Number"}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {locale === "ar" ? "مجال الاهتمام" : "Area of Interest"}
                </label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                >
                  <option value="">
                    {locale === "ar"
                      ? "اختر مجال الاهتمام"
                      : "Select area of interest"}
                  </option>
                  <option value="awareness">
                    {locale === "ar"
                      ? "التوعية والتعليم"
                      : "Awareness & Education"}
                  </option>
                  <option value="projects">
                    {locale === "ar" ? "إدارة المشاريع" : "Project Management"}
                  </option>
                  <option value="outreach">
                    {locale === "ar"
                      ? "التواصل المجتمعي"
                      : "Community Outreach"}
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {locale === "ar" ? "رسالة" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                placeholder={
                  locale === "ar"
                    ? "أخبرنا عن دوافعك للتطوع وخبراتك..."
                    : "Tell us about your motivation to volunteer and your experience..."
                }
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-secondary-light hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {locale === "ar" ? "إرسال الطلب" : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
