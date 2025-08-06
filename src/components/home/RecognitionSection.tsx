"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function RecognitionSection() {
  
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const recognitions = [
    {
      title: locale === "ar" ? "اعتراف كسريف" : "KSRelief Acknowledgement",
      description:
        locale === "ar"
          ? "تم الاعتراف بنا من قبل مركز الملك سلمان للإغاثة والأعمال الإنسانية (2024) لالتزامنا المستمر بمبادرات المياه النظيفة"
          : "Acknowledged by King Salman Humanitarian Aid & Relief Center (2024) for our ongoing commitment to clean to clean water initiatives",
      year: "2024",
    },
    {
      title:
        locale === "ar"
          ? "اعتراف وزارة السعودية"
          : "Saudi Ministry Recognition",
      description:
        locale === "ar"
          ? "تم إدراجنا من قبل وزارة الموارد البشرية والتنمية الاجتماعية السعودية (2023) ككيان خيري متوافق مع المعايير الإنسانية الوطنية"
          : "Listed by the Saudi Ministry of Human Resources and Social Development (2023) as a compliant charitable entity under national humanitarian standards.",
      year: "2023",
    },
    {
      title:
        locale === "ar" ? "اعتراف تأثير الزكاة" : "Zakat Impact Recognition",
      description:
        locale === "ar"
          ? "تم الاعتراف بنا للتميز في التأثير القائم على الزكاة من قبل جوائز التميز الخيري السعودية (2024)"
          : "Recognized for excellence in Zakat-Driven impact by Saudi Charitable Excellence Awards (2024)",
      year: "2024",
    },
    {
      title: locale === "ar" ? "الشبكة العالمية" : "Global Networ",
      description:
        locale === "ar"
          ? "تم تسميتنا كقادة في مجال المياه النظيفة من قبل الشبكة العالمية للمنظمات الإنسانية"
          : "Named c clean wo Leaders",
      year: "2024",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f5f0] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Islamic Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-4xl text-primary-light">
          🕌
        </div>
        <div className="absolute top-20 right-20 text-2xl text-primary-light">
          ☪
        </div>
        <div className="absolute top-32 right-32 text-3xl text-primary-light">
          🕌
        </div>
        <div className="absolute bottom-10 right-10 text-2xl text-primary-light">
          ☪
        </div>
        <div className="absolute bottom-20 right-20 text-3xl text-primary-light">
          🕌
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Content Area */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Title */}
          <div>
            <div data-aos="fade-right">
              <div className="w-16 h-1 bg-secondary-light mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                {locale === "ar" ? "اعترافنا" : "OUR RECOGNITION"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary-light">
                {locale === "ar" ? "والشراكات" : "AND PARTNERSHIPS"}
              </h3>
            </div>
          </div>

          {/* Right Column - Descriptive Text */}
          <div className="flex items-center">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              {locale === "ar"
                ? "بقلب متجذر في الرحمة والخدمة، نحن متواضعون لكوننا معترف بنا من قبل منظمات إنسانية وإسلامية موثوقة عالمياً لتفانينا في الوصول إلى المياه النظيفة والتأثير الدائم."
                : "With a heart rooted in mercy and service, we are humbled to be acknowledged by trusted global humanitarian and islamic organisations for our dedication to clean water access and lasting impact"}
            </p>
          </div>
        </div>

        {/* Recognition Timeline */}
        <div data-aos="fade-up" data-aos-delay="400" className="relative">
          {/* Dashed Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary-light"></div>

          {/* Recognition Entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {recognitions.map((recognition, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-light rounded-full z-10"></div>

                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-secondary-light flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🏆</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-8">
                  <h4 className="text-lg font-bold text-primary-dark mb-2">
                    {recognition.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {recognition.description}
                  </p>
                  <div className="mt-2 text-xs text-secondary-light font-semibold">
                    {recognition.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
