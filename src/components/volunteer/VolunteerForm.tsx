"use client";

import React, { useState } from "react";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function VolunteerForm() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);
  const [data, setData] = useState({
    lastName: "",
    otherNames: "",
    country: "",
    city: "",
    email: "",
    phone: "",
    skills: "",
    type: "",
    note: "",
  });

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API/Email service
    console.log("Volunteer form:", data);
  };

  return (
    <section
      className="py-16 md:py-20 bg-white relative isolate"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-x-5 -top-50 overflow-hidden pb-1">
          {/* Marquee Image Grid */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div
              className="flex gap-2 items-center max-w-none animate-marquee"
              style={{
                animation: "marquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {/* Repeat images twice for seamless marquee */}
              {[...Array(2)].map((_, idx) => (
                <React.Fragment key={idx}>
                  {/* Image 1 - Child with container on head */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-1.png"
                      alt={
                        locale === "ar"
                          ? "طفل يحمل حاوية على رأسه"
                          : "Child carrying container on head"
                      }
                      className="h-80 sm:h-100"
                    />
                  </div>
                  {/* Image 2 - Child in water */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-2.png"
                      alt={locale === "ar" ? "طفل في الماء" : "Child in water"}
                      className="h-90 sm:h-120"
                    />
                  </div>
                  {/* Image 3 - Two children with basins */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-3.png"
                      alt={
                        locale === "ar"
                          ? "طفلان يحملان أحواض"
                          : "Two children carrying basins"
                      }
                      className="h-90 sm:h-120"
                    />
                  </div>
                  {/* Image 4 - Child with metal pot */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-4.png"
                      alt={
                        locale === "ar"
                          ? "طفل يحمل وعاء معدني"
                          : "Child carrying metal pot"
                      }
                      className="h-80 sm:h-100"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
            {/* Marquee animation keyframes */}
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-60 sm:pt-90">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-primary-light mb-3">
          {locale === "ar" ? "سجّل للتطوع" : "Sign Up to Volunteer"}
        </h2>
        <p className="text-center text-[#0D2F2B] mb-2 font-semibold">
          {locale === "ar"
            ? "خُطوة واحدة تصنع فرقاً يدوم العمر."
            : "It takes just one step to make a lifetime of difference."}
        </p>
        <p className="text-center text-[#0D2F2B] mb-10 font-medium">
          {locale === "ar"
            ? "يرجى إكمال النموزج أدناه. سنراسلك قريباً بمعلومات البدء."
            : "Please fill the form below. We'll reach out with onboarding information shortly."}
        </p>
        <form
          onSubmit={submit}
          className="bg-white border border-[#EEF1E9] rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "الاسم الأخير" : "Last Name"}
              </label>
              <input
                name="lastName"
                placeholder={
                  locale === "ar" ? "الاسم الأخير" : "Enter last name"
                }
                value={data.lastName}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "أسماء أخرى" : "Other Names"}
              </label>
              <input
                name="otherNames"
                placeholder={
                  locale === "ar" ? "أسماء أخرى" : "Enter other names"
                }
                value={data.otherNames}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "الدولة" : "Country"}
              </label>
              <select
                name="country"
                value={data.country}
                onChange={handle}
                className="w-full px-4 py-2.5 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              >
                <option value="">
                  {locale === "ar" ? "اختر الدولة" : "--select country--"}
                </option>
                <option value="SA">Saudi Arabia</option>
                <option value="NG">Nigeria</option>
                <option value="GH">Ghana</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "المدينة" : "City"}
              </label>
              <input
                name="city"
                placeholder={locale === "ar" ? "المدينة" : "Enter city"}
                value={data.city}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "البريد الإلكتروني" : "Email address"}
              </label>
              <input
                type="email"
                name="email"
                placeholder={
                  locale === "ar" ? "البريد الإلكتروني" : "Enter email"
                }
                value={data.email}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar"
                  ? "واتساب / جوال (اختياري)"
                  : "WhatsApp / Mobile (optional)"}
              </label>
              <input
                name="phone"
                placeholder={
                  locale === "ar"
                    ? "واتساب / جوال (اختياري)"
                    : "WhatsApp / Mobile (optional)"
                }
                value={data.phone}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar"
                  ? "المهارات / مجالات الاهتمام"
                  : "Skill(s) or Area of Interest"}
              </label>
              <input
                name="skills"
                placeholder={
                  locale === "ar"
                    ? "المهارات / مجالات الاهتمام"
                    : "Enter skills or areas of interest"
                }
                value={data.skills}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "نوع المتطوع" : "Volunteer Type"}
              </label>
              <input
                name="type"
                placeholder={
                  locale === "ar" ? "نوع المتطوع" : "Enter volunteer type"
                }
                value={data.type}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
              {locale === "ar" ? "ملاحظة قصيرة" : "Short Note"}
            </label>
            <textarea
              name="note"
              placeholder={
                locale === "ar" ? "ملاحظة قصيرة" : "Enter short note"
              }
              value={data.note}
              onChange={handle}
              rows={5}
              className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
            />
          </div>

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
    </section>
  );
}
