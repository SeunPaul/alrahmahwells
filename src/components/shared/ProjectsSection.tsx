"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectsSection() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      headline:
        locale === "ar"
          ? "شاهدت طفلاً عمره 7 سنوات يشرب من مستنقع بلا حول ولا قوة"
          : "I Watched a 7-Year-Old Helplessly Drink from a Swamp",
      subtitle:
        locale === "ar"
          ? "(اللحظة التي غيرتني إلى الأبد)"
          : "(The Moment That Changed Me Forever)",
      text:
        locale === "ar"
          ? "لم يعدني شيء لهذه الحياة التي أضطررت للعيش فيها الآن. كنت مجرد سائح - فضولي، عيناي واسعتان، ومتحمس لاستكشاف الزوايا الهادئة لأفريقيا. قادني طريقي إلى عمق قرية منسية في غرب أفريقيا. لا طرق معبدة."
          : "Nothing ever prepared me for this life I have now been compelled to live. I was just a tourist - curious, wide-eyed, and excited to explore Africa's quiet corners. My path led me deep into a forgotten village in West Africa. No paved roads.",
    },
    {
      headline:
        locale === "ar"
          ? "الماء القذر يقتل أكثر من الحرب"
          : "Dirty Water Kills More Than War",
      subtitle: locale === "ar" ? "(حقيقة صادمة)" : "(A Shocking Reality)",
      text:
        locale === "ar"
          ? "في كل عام، يموت أكثر من 3.4 مليون شخص بسبب الأمراض المرتبطة بالمياه القذرة. هذا أكثر من عدد ضحايا جميع الحروب مجتمعة. هذه الحقيقة هي التي دفعتنى للعمل."
          : "Every year, more than 3.4 million people die from water-related diseases. That's more than all war casualties combined. This reality is what drove me to act.",
    },
    {
      headline: locale === "ar" ? "من البئر إلى الأمل" : "From Well to Hope",
      subtitle:
        locale === "ar" ? "(قصة التحول)" : "(A Story of Transformation)",
      text:
        locale === "ar"
          ? "عندما رأيت الأطفال يشربون من بئر جديد لأول مرة، عرفت أن كل قطرة من الماء النظيف هي قطرة من الأمل. هذا هو السبب في أننا نبني آباراً تعمل بالطاقة الشمسية."
          : "When I saw children drinking from a new well for the first time, I knew that every drop of clean water is a drop of hope. This is why we build solar-powered wells.",
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section
      className="pb-20 md:pt-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Headings and Description */}
        <div className="grid md:grid-cols-[5fr_6fr] md:gap-18 items-start mb-16">
          {/* Left Side - Main Headings */}
          <div className="mb-8">
            <div data-aos="fade-right">
              <div className="w-34 h-1 bg-secondary-light mb-8" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-secondary-dark mb-2">
                {locale === "ar" ? "مشاريعنا؛" : "OUR PROJECTS;"}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-primary-light">
                {locale === "ar"
                  ? "قصص ألهمت مشاريعنا الحديثة"
                  : "Stories that inspired our recent projects"}
              </h3>
            </div>
          </div>
          {/* Right Side - Description */}
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <h4 className="text-lg md:text-xl font-semibold text-secondary-dark mb-2 md:mb-8">
              <span className="text-secondary-dark">
                {locale === "ar"
                  ? "قصص حقيقية من الميدان"
                  : "Real stories from the field"}
              </span>{" "}
              <span className="text-secondary-dark">
                {locale === "ar"
                  ? "حيث غيرت رحمتك الأرواح"
                  : "- Where Your Mercy Changed lives"}
              </span>
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-semibold">
              {locale === "ar"
                ? "كل بئر نثبته هو أكثر من مصدر ماء - إنه إحياء للأمل والإيمان والكرامة. هذه قصص حقيقية من المجتمعات التي وصلت إليها سخاؤك. كل مشروع يمثل شهادة حية لما يمكن أن تفعله الرحمة المستوحاة من الله."
                : "Every Well we install is more than a water source - it is a revival of hope, faith, and dignity. These are real stories from the communities your generosity reached. Each project stands as a living testimony to what mercy, inspired by Allah, can do."}
            </p>
          </div>
        </div>

        {/* Bottom Section - Story Card and Image */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 relative">
          {/* Left Side - Story Card */}
          <div data-aos="fade-up" data-aos-delay="200" className="md:w-3/5">
            <div className="bg-[#E4EFD7] rounded-2xl p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {stories[currentStory].headline}
              </h4>
              <p className="text-lg text-gray-600 mb-4">
                {stories[currentStory].subtitle}
              </p>
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {stories[currentStory].text.split(". ")[0]}.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {stories[currentStory].text.split(". ").slice(1).join(". ")}.
                </p>
              </div>

              {/* Call-to-Action and Navigation */}
              <div className="flex items-center justify-between">
                <button className="px-10 py-3 bg-primary-light text-white rounded-full font-semibold hover:bg-primary-light transition-colors cursor-pointer">
                  {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                </button>

                {/* Navigation Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 cursor-pointer border-2 border-secondary-dark rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaChevronLeft className="text-secondary-dark" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 cursor-pointer border-2 border-secondary-dark rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaChevronRight className="text-secondary-dark" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="md:w-2/5 h-50 md:h-90"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
              <img
                src="/images/survival-1.png"
                alt={
                  locale === "ar"
                    ? "أطفال يشربون من بركة موحلة"
                    : "Children drinking from muddy puddle"
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
