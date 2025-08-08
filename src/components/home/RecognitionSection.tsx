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
    },
    {
      title:
        locale === "ar" ? "اعتراف تأثير الزكاة" : "Zakat Impact Recognition",
      description:
        locale === "ar"
          ? "تم الاعتراف بنا للتميز في التأثير القائم على الزكاة من قبل جوائز التميز الخيري السعودية (2024)"
          : "Recognized for excellence in Zakat-Driven impact by Saudi Charitable Excellence Awards (2024)",
    },
    {
      title:
        locale === "ar"
          ? "شبكة القادة الإنسانيين العالمية"
          : "Global Humanitarian Leaders Network",
      description:
        locale === "ar"
          ? "تم تسميتنا كمنظمة ناشئة ذات تأثير في الوصول إلى المياه النظيفة من قبل الشبكة العالمية لقادة العمل الإنساني"
          : "Named an Emerging impact organization in clean water access by the Global Humanitarian Leaders Network",
    },
    {
      title:
        locale === "ar"
          ? "شبكة القادة الإنسانيين العالمية"
          : "UN SDG Contribution",
      description:
        locale === "ar"
          ? "تم تسميتنا كمنظمة ناشئة ذات تأثير في الوصول إلى المياه النظيفة من قبل الشبكة العالمية لقادة العمل الإنساني"
          : "Named an Emerging impact organization in clean water access by the Global Humanitarian Leaders Network",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        style={{ backgroundImage: "url('/illustrations/mecca.png')" }}
        className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-center"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Content Area */}
        <div className="grid md:grid-cols-[4fr_4fr] md:gap-28 items-start mb-16">
          {/* Left Column - Title */}
          <div className="mb-8">
            <div data-aos="fade-right">
              <div className="w-34 h-1 bg-secondary-light mb-8" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-primary-light mb-2">
                {locale === "ar" ? "اعترافنا" : "OUR RECOGNITION"}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-secondary-light">
                {locale === "ar" ? "والشراكات" : "AND PARTNERSHIPS"}
              </h3>
            </div>
          </div>

          {/* Right Column - Descriptive Text */}
          <div className="flex items-center">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed"
            >
              {locale === "ar"
                ? "بقلب متجذر في الرحمة والخدمة، نحن متواضعون لكوننا معترف بنا من قبل منظمات إنسانية وإسلامية موثوقة عالمياً لتفانينا في الوصول إلى المياه النظيفة والتأثير الدائم."
                : "With a heart rooted in mercy and service, we are humbled to be acknowledged by trusted global humanitarian and islamic organisations for our dedication to clean water access and lasting impact"}
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* Recognition Timeline */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative overflow-x-scroll scrollbar-hide"
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {/* Dashed Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary-light hidden md:block md:w-500" />

          {/* Recognition Entries */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative md:w-500 border-l-2 border-dashed border-primary-light ml-4 pl-4 md:ml-0 md:pl-0 md:border-none">
            {recognitions.map((recognition, index) => (
              <div key={index} className="relative md:w-80">
                {/* Timeline Node */}
                <div className="absolute top-2 -left-7 md:top-6 md:left-2 w-5 h-5 p-0.5 border bg-[#F0F6E5] border-primary-light rounded-full">
                  <div className="bg-primary-light w-full h-full rounded-full z-10" />
                </div>

                {/* Content */}
                <div className="md:mt-15">
                  <img src={"/logos/logo.svg"} className="w-15 mb-5" />
                  <h4 className="text-lg font-bold text-primary-dark mb-2">
                    {recognition.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {recognition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
