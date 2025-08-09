"use client";

import { useState } from "react";
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
    <section className="py-16 md:py-20 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-secondary-dark mb-3">
          {locale === "ar" ? "سجّل للتطوع" : "Sign Up to Volunteer"}
        </h2>
        <p className="text-center text-gray-600 mb-10">
          {locale === "ar"
            ? "خُطوة واحدة تصنع فرقاً يدوم العمر. سنراسلك قريباً بمعلومات البدء."
            : "It takes just one step to make a lifetime of difference. We'll reach out with onboarding information shortly."}
        </p>

        <form
          onSubmit={submit}
          className="bg-[#f7f9f2] border border-[#e4ecd4] rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar" ? "الاسم الأخير" : "Last Name"}
              </label>
              <input
                name="lastName"
                value={data.lastName}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar" ? "أسماء أخرى" : "Other Names"}
              </label>
              <input
                name="otherNames"
                value={data.otherNames}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar" ? "الدولة" : "Country"}
              </label>
              <select
                name="country"
                value={data.country}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar" ? "المدينة" : "City"}
              </label>
              <input
                name="city"
                value={data.city}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar" ? "البريد الإلكتروني" : "Email address"}
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar"
                  ? "واتساب / جوال (اختياري)"
                  : "WhatsApp / Mobile (optional)"}
              </label>
              <input
                name="phone"
                value={data.phone}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar"
                  ? "المهارات / مجالات الاهتمام"
                  : "Skill(s) or Area of Interest"}
              </label>
              <input
                name="skills"
                value={data.skills}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === "ar" ? "نوع المتطوع" : "Volunteer Type"}
              </label>
              <input
                name="type"
                value={data.type}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === "ar" ? "ملاحظة قصيرة" : "Short Note"}
            </label>
            <textarea
              name="note"
              value={data.note}
              onChange={handle}
              rows={5}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-dark"
            />
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-primary-dark hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {locale === "ar" ? "إرسال" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
