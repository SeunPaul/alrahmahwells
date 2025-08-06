"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "@/i18n/utils";
import { rtlLocales } from "@/i18n/config";

export default function ProjectsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as any);
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern - Subtle Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute top-20 left-20 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-primary-light rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-light rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Block */}
          <div>
            {/* Section Title */}
            <div data-aos="fade-right" className="mb-8">
              <div className="w-16 h-1 bg-secondary-light mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-2">
                {locale === "ar" ? "مشاريعنا؛" : "OUR PROJECTS;"}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary-dark">
                {locale === "ar"
                  ? "قصص ألهمت مشاريعنا الحديثة"
                  : "Stories that inspired our recent projects"}
              </h3>
            </div>

            {/* Story Preview Box */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-[#f5f5dc] rounded-2xl p-8 shadow-lg"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
                {stories[currentStory].headline}
              </h4>
              <p className="text-lg text-gray-600 mb-4 italic">
                {stories[currentStory].subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {stories[currentStory].text}
              </p>

              {/* Call-to-Action and Navigation */}
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 bg-primary-dark text-white rounded-full font-semibold hover:bg-primary-light transition-colors">
                  {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                </button>

                {/* Navigation Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 border-2 border-[#f5f5dc] rounded-full flex items-center justify-center hover:bg-[#f5f5dc] transition-colors"
                  >
                    <span className="text-[#f5f5dc] hover:text-primary-dark">
                      ‹
                    </span>
                  </button>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 border-2 border-[#f5f5dc] rounded-full flex items-center justify-center hover:bg-[#f5f5dc] transition-colors"
                  >
                    <span className="text-[#f5f5dc] hover:text-primary-dark">
                      ›
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Block */}
          <div data-aos="fade-left" data-aos-delay="400">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[4/3]">
                <img
                  src="/images/home-6.jpg"
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
      </div>
    </section>
  );
}
