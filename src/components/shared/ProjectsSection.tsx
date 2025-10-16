"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
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

  // Filter out the excluded story if provided
  const filteredStories = excludeSlug
    ? impactStories.filter((story) => story.slug !== excludeSlug)
    : impactStories;

  // Don't render if no stories available (edge case)
  if (filteredStories.length === 0) {
    return null;
  }

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

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            id="stories-scroll"
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 md:px-12"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {filteredStories.map((story, index) => (
              <div
                key={index}
                className="flex-none w-full"
                style={{ scrollSnapAlign: "start" }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + index * 100}
              >
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
                      <div className="mb-6 flex items-center justify-between">
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

                        <div className="flex items-center gap-2">
                          {/* Navigation Arrows */}
                          <button
                            className={
                              "rounded-full p-2 border border-secondary-dark transition-all duration-200 cursor-pointer"
                            }
                            onClick={() => {
                              const container =
                                document.getElementById("stories-scroll");
                              if (container) {
                                container.scrollBy({
                                  left: isRTL ? 800 : -800,
                                  behavior: "smooth",
                                });
                              }
                            }}
                            aria-label={locale === "ar" ? "السابق" : "Previous"}
                          >
                            <svg
                              className={`w-5 h-5 text-secondary-dark ${
                                isRTL ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            className={
                              "rounded-full p-2 border border-secondary-dark transition-all duration-200 cursor-pointer"
                            }
                            onClick={() => {
                              const container =
                                document.getElementById("stories-scroll");
                              if (container) {
                                container.scrollBy({
                                  left: isRTL ? -800 : 800,
                                  behavior: "smooth",
                                });
                              }
                            }}
                            aria-label={locale === "ar" ? "التالي" : "Next"}
                          >
                            <svg
                              className={`w-5 h-5 text-secondary-dark ${
                                isRTL ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
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
        </div>
      </div>
    </section>
  );
}
