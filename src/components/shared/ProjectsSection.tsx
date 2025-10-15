"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { impactStories } from "@/data/impactStories";

export default function ProjectsSection({
  isStory,
  excludeSlug,
}: {
  isStory?: boolean;
  excludeSlug?: string;
}) {
  const locale = useLocale() as "en" | "ar";
  const isRTL = rtlLocales.includes(locale as Locale);
  const [currentStory, setCurrentStory] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Filter out the excluded story if provided
  const filteredStories = excludeSlug
    ? impactStories.filter((story) => story.slug !== excludeSlug)
    : impactStories;

  // Reset currentStory if it's out of bounds after filtering
  useEffect(() => {
    if (currentStory >= filteredStories.length && filteredStories.length > 0) {
      setCurrentStory(filteredStories.length - 1);
    }
  }, [filteredStories.length, currentStory]);

  // Don't render if no stories available (edge case)
  if (filteredStories.length === 0) {
    return null;
  }

  const nextStory = () => {
    setCurrentStory((prev) => {
      if (prev < filteredStories.length - 1) {
        return prev + 1;
      }
      return prev; // Don't go beyond the end
    });
  };

  const prevStory = () => {
    setCurrentStory((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev; // Don't go before the beginning
    });
  };

  const handleSwipeStart = (clientX: number) => {
    touchStartX.current = clientX;
    touchEndX.current = clientX;
    setIsDragging(true);
  };

  const handleSwipeMove = (clientX: number) => {
    if (!isDragging) return;
    touchEndX.current = clientX;
  };

  const handleSwipeEnd = () => {
    if (!isDragging || !touchStartX.current || !touchEndX.current) {
      setIsDragging(false);
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isRTL) {
      if (isLeftSwipe && currentStory > 0) {
        prevStory();
      } else if (isRightSwipe && currentStory < filteredStories.length - 1) {
        nextStory();
      }
    } else {
      if (isLeftSwipe && currentStory < filteredStories.length - 1) {
        nextStory();
      } else if (isRightSwipe && currentStory > 0) {
        prevStory();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
    setIsDragging(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleSwipeStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSwipeMove(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleSwipeEnd();
  };

  // Mouse event handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSwipeStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleSwipeMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleSwipeEnd();
  };

  const handleMouseLeave = () => {
    handleSwipeEnd();
  };

  return (
    <section
      className="pt-10 pb-20 md:pt-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6E5] relative overflow-hidden"
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

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentStory * 100}%)`,
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {filteredStories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {/* Story Content */}
                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 bg-[#E4EFD7] rounded-2xl p-4 md:p-0 md:bg-transparent">
                  {/* Left Side - Story Card */}
                  <div className="md:w-3/5">
                    <div className="bg-[#E4EFD7] rounded-2xl md:p-8">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        {story.title[locale]}
                      </h4>
                      <p className="text-lg text-gray-600 mb-4">
                        {story.subtitle[locale]}
                      </p>
                      <div className="space-y-4 mb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {story.sections[0].content[locale]}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {story.sections[1].content[locale]}
                        </p>
                      </div>

                      {/* Call-to-Action */}
                      <div className="mb-6">
                        <a
                          href={
                            locale === "ar"
                              ? `/ar/our-impact/${story.slug}`
                              : `/our-impact/${story.slug}`
                          }
                          className="px-10 py-3 bg-primary-light text-white rounded-full font-semibold hover:bg-primary-dark transition-colors cursor-pointer inline-block"
                        >
                          {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="md:w-2/5 h-50 md:h-90">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                      <img
                        src={story.image}
                        alt={story.imageAlt[locale]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={prevStory}
                disabled={currentStory === 0}
                className={`w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentStory === 0
                    ? "border-gray-300 cursor-not-allowed"
                    : "border-secondary-dark cursor-pointer hover:scale-110"
                }`}
                aria-label={locale === "ar" ? "السابق" : "Previous"}
              >
                <FaChevronLeft
                  className={
                    currentStory === 0 ? "text-gray-300" : "text-secondary-dark"
                  }
                />
              </button>
              <button
                onClick={nextStory}
                disabled={currentStory === filteredStories.length - 1}
                className={`w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentStory === filteredStories.length - 1
                    ? "border-gray-300 cursor-not-allowed"
                    : "border-secondary-dark cursor-pointer hover:scale-110"
                }`}
                aria-label={locale === "ar" ? "التالي" : "Next"}
              >
                <FaChevronRight
                  className={
                    currentStory === filteredStories.length - 1
                      ? "text-gray-300"
                      : "text-secondary-dark"
                  }
                />
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center mt-4 gap-2">
            {filteredStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStory
                    ? "bg-secondary-dark w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`${locale === "ar" ? "انتقل إلى" : "Go to"} ${
                  index + 1
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
