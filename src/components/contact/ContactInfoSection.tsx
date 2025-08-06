"use client";

import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { HiHandRaised, HiBookOpen } from "react-icons/hi2";

export default function ContactInfoSection() {
  const pathname = usePathname();
  
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f5f0]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Info Container */}
        <div
          data-aos="fade-up"
          className="bg-[#f5f5dc] rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Our Global Office */}
            <div>
              <div className="flex items-center mb-6">
                <HiLocationMarker className="w-6 h-6 text-secondary-light mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                  {locale === "ar" ? "مكتبنا العالمي" : "Our Global Office"}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Organization Name */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {locale === "ar" ? "مؤسسة الرحمة" : "Al-Rahmah Foundation"}
                  </h3>
                </div>

                {/* Locations */}
                <div className="text-gray-700 text-lg">
                  {locale === "ar"
                    ? "الرياض، المملكة العربية السعودية | لاغوس، نيجيريا"
                    : "Riyadh, Saudi Arabia | Lagos, Nigeria"}
                </div>

                {/* Phone Numbers */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <HiPhone className="w-5 h-5 text-primary-dark mr-3" />
                    <span className="text-gray-700">+966 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center">
                    <HiPhone className="w-5 h-5 text-primary-dark mr-3" />
                    <span className="text-gray-700">+234 XXX XXX XXXX</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <HiMail className="w-5 h-5 text-primary-dark mr-3" />
                  <a
                    href="mailto:info@manywatersfoundation.org"
                    className="text-primary-dark hover:text-primary-light transition-colors underline"
                  >
                    info@manywatersfoundation.org
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Partner With Us */}
            <div>
              <div className="flex items-center mb-6">
                <HiHandRaised className="w-6 h-6 text-secondary-light mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                  {locale === "ar" ? "تعاون معنا" : "Partner With Us"}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Partnership Description */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {locale === "ar" ? (
                    <>
                      هل تريد رعاية بئر، أو دعم حملة، أو إحضار آبار الرحمة إلى
                      منطقتك؟ تواصل معنا — نرد بسرعة.
                    </>
                  ) : (
                    <>
                      Want to sponsor a borehole, support a campaign, or bring
                      Al-Rahmah Wells to your region? Reach out – we respond
                      swiftly.
                    </>
                  )}
                </p>

                {/* Certification */}
                <div className="flex items-start">
                  <HiBookOpen className="w-5 h-5 text-primary-dark mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    {locale === "ar"
                      ? "نحن معتمدون حلال ونعمل بالكامل وفقاً لأخلاقيات العمل الإنساني الإسلامي."
                      : "We are Halal Certified and operate fully in line with Islamic humanitarian ethics."}
                  </p>
                </div>

                {/* Partnership Email */}
                <div>
                  <p className="text-gray-700 text-lg mb-2">
                    {locale === "ar"
                      ? "راسل فريق الشراكة:"
                      : "Email our partnerships team:"}
                  </p>
                  <div className="flex items-center">
                    <HiMail className="w-5 h-5 text-primary-dark mr-3" />
                    <a
                      href="mailto:partnerships@manywatersfoundation.org"
                      className="text-primary-dark hover:text-primary-light transition-colors underline"
                    >
                      partnerships@manywatersfoundation.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
