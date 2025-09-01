"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { impactStories } from "@/data/impactStories";

export default function ProjectsSection({ isStory }: { isStory?: boolean }) {
  const locale = useLocale() as "en" | "ar";
  const isRTL = rtlLocales.includes(locale as Locale);
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % impactStories.length);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + impactStories.length) % impactStories.length
    );
  };

  const currentStoryData = impactStories[currentStory];

  return (
    <section
      className="pb-20 md:pt-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Headings and Description */}
        {isStory ? (
          <div className="mb-16">
            <div data-aos="fade-right">
              <div className="w-34 h-1 bg-secondary-light mb-8" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-primary-light max-w-3xl leading-tight">
                {locale === "ar"
                  ? "قصص ألهمت المشاريع الحديثة"
                  : "More stories that inspired our recent projects"}
              </h3>
            </div>
          </div>
        ) : (
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
                <span className="text-gray-700">
                  {locale === "ar"
                    ? "قصص حقيقية من الميدان"
                    : "Real stories from the field -"}
                </span>{" "}
                <span className="text-secondary-dark">
                  {locale === "ar"
                    ? "حيث غيرت رحمتك الأرواح"
                    : "Where Your Mercy Changed lives"}
                </span>
              </h4>
              <p className="text-gray-700 leading-[40px] text-lg md:text-xl font-semibold">
                {locale === "ar"
                  ? "كل بئر نثبته هو أكثر من مصدر ماء - إنه إحياء للأمل والإيمان والكرامة. هذه قصص حقيقية من المجتمعات التي وصلت إليها سخاؤك. كل مشروع يمثل شهادة حية لما يمكن أن تفعله الرحمة المستوحاة من الله."
                  : "Every Well we install is more than a water source - it is a revival of hope, faith, and dignity. These are real stories from the communities your generosity reached. Each project stands as a living testimony to what mercy, inspired by Allah, can do."}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Section - Story Card and Image */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 relative bg-[#E4EFD7] rounded-2xl p-4 md:p-0 md:bg-transparent">
          {/* Left Side - Story Card */}
          <div data-aos="fade-up" data-aos-delay="200" className="md:w-3/5">
            <div className="bg-[#E4EFD7] rounded-2xl md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {currentStoryData.title[locale]}
              </h4>
              <p className="text-lg text-gray-600 mb-4">
                {currentStoryData.subtitle[locale]}
              </p>
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {currentStoryData.sections[0].content[locale]}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {currentStoryData.sections[1].content[locale]}
                </p>
              </div>

              {/* Call-to-Action and Navigation */}
              <div className="flex items-center justify-between">
                <a
                  href={
                    locale === "ar"
                      ? `/ar/our-impact/${currentStoryData.slug}`
                      : `/our-impact/${currentStoryData.slug}`
                  }
                  className="px-10 py-3 bg-primary-light text-white rounded-full font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                </a>

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
                src={currentStoryData.image}
                alt={currentStoryData.imageAlt[locale]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
