import { impactStories } from "@/data/impactStories";
import { notFound } from "next/navigation";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default async function ImpactStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = "en" as const;
  const isRTL = false;

  const { slug } = await params;
  const story = impactStories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section with Title */}
      <section>
        <div className="bg-primary-dark pt-36 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-5xl mx-auto">
            {/* Title Block */}
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-[#C8F4D1] mb-16 md:mb-32 text-center"
            >
              {story.title[locale]}
            </h1>

            {/* Main Image */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="absolute -bottom-80 md:-bottom-100 lg:-bottom-120 z-20 aspect-[16/9] sm:aspect-[16/6] overflow-hidden rounded-2xl shadow-lg mb-12"
            >
              <img
                src={story.image}
                alt={story.imageAlt[locale]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative bg-[#F0F6E5] pb-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/illustrations/noise.png')",
              backgroundSize: "cover",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              style={{ backgroundImage: "url('/illustrations/mecca.png')" }}
              className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-bottom"
            />
            <div className="relative max-w-4xl mx-auto pt-48 lg:pt-80">
              {/* Subtitle */}
              <div data-aos="fade-up" data-aos-delay="300" className="mb-8">
                <p className="text-lg text-gray-600 font-semibold sm:text-xl">
                  {story.subtitle[locale]}
                </p>
              </div>

              {/* Story Content */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="prose prose-lg max-w-none"
              >
                <div className="text-gray-700 leading-relaxed space-y-6 sm:text-xl">
                  {story.sections.map((section, index) => (
                    <div key={index}>
                      {section.type === "quote" ? (
                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-light">
                          <p className="text-gray-700 leading-relaxed italic">
                            {section.content[locale]}
                          </p>
                        </div>
                      ) : section.type === "highlight" ? (
                        <div className="bg-primary-light/10 p-6 rounded-xl border border-primary-light/20">
                          <p className="text-gray-700 leading-relaxed font-semibold">
                            {section.content[locale]}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          {section.content[locale]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection isStory={true} excludeSlug={story.slug} />
    </div>
  );
}
